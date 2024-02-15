import styles from "./RegisterationFormFields.module.scss";

const RegistrationFormFields = ({ formData, handleChange }) => {
  return (
    <div className={styles.registerationForm}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={(e) => handleChange("username", e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        required
      />
    </div>
  );
};

export default RegistrationFormFields;
