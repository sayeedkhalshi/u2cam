import { Fragment } from "react";

const CustomTypeTextField = ({
  customTypesArray,
  initFocus,
  placeholder,
  maxChar,
  minChar,
  isRequired,
  fieldName,
  register,
  errors,
  setError,
  clearErrors,
  getValues,
}) => {
  return (
    <Fragment>
      <div className="form-group">
        <input
          ref={register({
            required: isRequired ? `${fieldName} is required` : false,
            maxLength: {
              value: maxChar,
              message: `Max ${maxChar} character`,
            },
            minLength: {
              value: minChar,
              message: `Min ${minChar} character`,
            },
            validate: (value) =>
              customTypesArray.includes(value) || customTypesArray.join(" or "),
          })}
          id={fieldName}
          autoFocus={initFocus}
          name={fieldName}
          type="text"
          placeholder={customTypesArray.join(", ")}
          autoComplete="new-password"
          onChange={() => {
            if (!customTypesArray.includes(getValues(fieldName))) {
              setError(fieldName, {
                type: "manual",
                message: `Only ${customTypesArray.join(", ")} allowed `,
              });
            } else {
              clearErrors(fieldName);
            }
          }}
        />
        <label htmlFor={fieldName}>{placeholder}</label>
        <span className={`${errors[fieldName] ? "error" : ""}`}>
          {errors[fieldName] && errors[fieldName].message}
        </span>
      </div>
      {/* <div className="form-group">
        <input
          ref={register({
            required: "User type is required",
            maxLength: {
              value: 32,
              message: "Max 32 character",
            },
            minLength: {
              value: 2,
              message: "Min 2 character",
            },
            validate: (value) =>
              ["admin", "user", "moderator"].includes(value) ||
              "admin or moderator or user",
          })}
          id="role"
          autoFocus={true}
          name="role"
          type="text"
          placeholder="admin, moderator or user"
          autoComplete="new-password"
          onChange={() => {
            if (!["admin", "user", "moderator"].includes(getValues("role"))) {
              setError("role", {
                type: "manual",
                message: "Only 'user', 'moderator' and 'admin' ",
              });
            } else {
              clearErrors("role");
            }
          }}
        />
        <label htmlFor="role">User Type</label>
        <span className={`${errors.role ? "error" : ""}`}>
          {errors.role?.message}
        </span>
      </div> */}
    </Fragment>
  );
};

export default CustomTypeTextField;
