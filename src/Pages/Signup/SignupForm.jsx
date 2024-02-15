import { useState } from "react";
import LoginFormFields from "./LoginFormField/LoginFormFields";
import RegistrationFormFields from "./RegisterationFormField/RegisterationFormFields";
import styles from "./SignupForm.module.scss";

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
    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        {isRegistration ? (
          <RegistrationFormFields
            formData={formData}
            handleChange={handleChange}
          />
        ) : (
          <div>
            <LoginFormFields formData={formData} handleChange={handleChange} />
          </div>
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
