export const useValidation = (m, p) => {
  const PasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const EmailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!PasswordRegexp.test(p)) {
    return "Password should not be less than 8 characters";
  }

  if (!EmailRegexp.test(m)) {
    return "Please enter a valid email address";
  }
};
