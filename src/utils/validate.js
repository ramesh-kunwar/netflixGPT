export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid = /.{2,}/.test(password);

  if (!isEmailValid) return "Email id is not valid";

  if (!isPasswordValid) return "password is not valid";

  return null;
};
