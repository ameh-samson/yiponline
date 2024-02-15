import { useState } from "react";
import LoginFormFields from "./LoginFormField/LoginFormFields";
import RegistrationFormFields from "./RegisterationFormField/RegisterationFormFields";
import styles from "./SignupForm.module.scss";

const LoginForm = ({ formData, handleChange }) => {
  return <LoginFormFields formData={formData} handleChange={handleChange} />;
};

const RegistrationForm = ({ formData, handleChange }) => {
  return (
    <RegistrationFormFields formData={formData} handleChange={handleChange} />
  );
};

const SignupForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const toggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isRegistration ? "Register:" : "Login:", formData);

    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        {isRegistration ? (
          <RegistrationForm formData={formData} handleChange={handleChange} />
        ) : (
          <LoginForm formData={formData} handleChange={handleChange} />
        )}

        <button type="submit">{isRegistration ? "Register" : "Login"}</button>

        <p>
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account yet?"}
          <span className={styles.toggleLink} onClick={toggleForm}>
            {isRegistration ? "Login here" : "Register here"}
          </span>
        </p>
      </form>
    </section>
  );
};

export default SignupForm;
