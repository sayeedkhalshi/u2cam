import React, {Fragment} from 'react';
import Head from 'next/head';
import Image from 'next/image'
import styles from './Home.module.css';

//layout
import WebLayout from './../layouts/WebLayout';

const Home = ()=>{
    return (
        <WebLayout>
            <Head>
                <title>HTML to WP theme</title>
            </Head>

        </WebLayout>

    )
}

export default Home;