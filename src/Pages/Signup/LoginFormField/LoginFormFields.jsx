import styles from "./LoginFormFields.module.scss";

const LoginFormFields = ({ formData, handleChange }) => {
  return (
    <div className={styles.loginForm}>
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
    </div>
  );
};

export default LoginFormFields;
