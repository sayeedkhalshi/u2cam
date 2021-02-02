import Head from 'next/head';
import {useForm} from 'react-hook-form';
import styles from './Register.module.css';
import AuthLayout from '../../../../layouts/AuthLayout';
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ApiCallComponent from '../../../../api/apiCallComponent';

const Registration = ()=>{
    const [success, setSuccess] = useState(false);
    const [apiCallComponent, setApiCallComponent] = useState(false);
    const [apiData, setApiData] = useState({});
    const [operationalError, setOperationalError ] = useState('');
    const router = useRouter();
    const {register, errors, clearErrors, getValues, setError, handleSubmit, trigger} = useForm();
    const onSubmit = async (data) => {
        setApiData(data)
        setApiCallComponent(true);
        
       
    };

    useEffect(()=>{
        if(success){
            return router.push('/user/auth/login' )
        }
    },[success])

    return (
        <AuthLayout>
            <Head><title>Register</title></Head>
                {apiCallComponent?<ApiCallComponent setSuccess={setSuccess} setApiCallComponent={setApiCallComponent} setError={setError} setOperationalError={setOperationalError} reqType='POST' url='users/signup' reason='registration' formInput={apiData}  /> 
            
                :
                <Fragment></Fragment>
            }
            
            
            <div className="content">
            <div id={styles.register}>
                <h1 className="heading">Register</h1>

                <div className="content" id={styles.registerContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="error">{operationalError}</p>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Name is required",
                                maxLength: {
                                    value: 32,
                                    message: "Max 32 character",
                                },
                                minLength: {
                                    value: 2,
                                    message: "Min 2 character",
                                }
                            })} id="name" autoFocus={true} name="name" type="text" placeholder="Name" autoComplete="new-password" />
                            <label htmlFor="name">Name</label>
                            <span className={`${errors.name ? 'error': ''}`}>{errors.name?.message}</span>
                        </div>
                            
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address format',
                                },
                            })} id="email" name="email" type="text" placeholder="Email" autoComplete="new-password" />
                            <label htmlFor="email">Email</label>
                             <span className={`${errors.email ? 'error': ''}`}>{errors.email?.message}</span>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Password is required",
                                maxLength: {
                                    value: 100,
                                    message: "Max 100 character",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Min 8 character",
                                }
                            })} id="password" name="password" type="password" placeholder="Password" autoComplete="new-password" onChange={() => {
                                if(getValues('password') !== getValues('passwordConfirm') ){
                                    setError("passwordConfirm", {
                                        type: "manual",
                                        message: "Password should match "
                                    });
                                }else{
                                    clearErrors('passwordConfirm')
                                }
                                
                            }}/>
                            <label htmlFor="password">Password</label>
                            <span className={`${errors.password ? 'error': ''}`}>{errors.password?.message}</span>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({
                                required: "Password again is required"
                            })} id="confirm-password" name="passwordConfirm" type="password" placeholder="Password Confirm" autoComplete="new-password" onChange={() => {
                                if(getValues('password') !== getValues('passwordConfirm') ){
                                    setError("passwordConfirm", {
                                        type: "manual",
                                        message: "Password should match "
                                    });
                                }else{
                                    clearErrors('passwordConfirm')
                                }
                                
                            }} />
                            <label htmlFor="confirm-password">Password Again</label>
                           
                            <span className={`${errors.passwordConfirm ? 'error': ''}`}>{errors.passwordConfirm?.message}</span>
                        </div>
                       
                            
                            <input id="hidden" name="hidden" type="hidden" placeholder="hidden" autoComplete="on" />
                            
                        
                        <div className="form-group">
                            
                            <input id="submit" type="submit" value="Signup" />
                            <div className={styles.forgotBtn} >

                                <Link href="/user/auth/login">Already have account? Login here </Link>
                            </div>
                            
                        </div>

                    </form>

                </div>

            </div>
             
            </div>
        

        </AuthLayout>
    )
}

export default Registration;