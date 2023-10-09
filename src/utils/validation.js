// uservalidation

const emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const passwordReg =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
const nameReg = /^[a-zA-Z ]{2,30}$/;

export const checkValidUserData = (email, password, name = null) => {
  const isEmailValid = emailReg.test(email);
  const isPassValid = passwordReg.test(password);
  if (name != null || name === "") {
    const isNameValid = nameReg.test(name);
    if (!isNameValid) {
      return "Please enter valid name";
    }
  }
  if (!isEmailValid) {
    return "Email is not valid";
  } else if (!isPassValid) {
    return "Password is not valid";
  }
  return null;
};
