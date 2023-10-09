import { useState, useRef } from "react";
import { checkValidUserData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (isSignIn) {
      const validationMessage = checkValidUserData(
        email.current.value,
        password.current.value
      );
      console.log(validationMessage);
      setErrorMessage(validationMessage);
      if (validationMessage) return;
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("signed in...", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.Code;
          const errorMessage = error.errorMessage;
          setErrorMessage(errorCode);
        });
    } else {
      const validationMessage = checkValidUserData(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setErrorMessage(validationMessage);
      console.log(validationMessage);
      if (validationMessage) return;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // navigate to browse and dispatch than action to update the store with updated user profile
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              setErrorMessage(errorCode);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.errorMessage;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div className="w-full md:w-[500px] bg-black bg-opacity-70 rounded-sm left-0 right-0 mx-auto mb-12">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col gap-5 p-6 md:p-10"
      >
        <h1 className="text-3xl text-white font-bold mb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="text-sm rounded w-full text-white p-4 bg-white bg-opacity-20 border-b-2 border-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="text-sm rounded w-full text-white p-4 bg-white bg-opacity-20 border-b-2 border-transparent focus:border-orange-500 focus:outline-none"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="text-sm rounded w-full text-white p-4 bg-white bg-opacity-20 border-b-2 border-transparent focus:border-orange-500 focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          className="text-white font-bold bg-red-600 rounded-md p-4 mt-1"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between">
          <label className="text-gray-600 text-sm ">
            <input className="bg-gray-600 mr-1" type="checkbox" />
            Remember me
          </label>
          <p className="text-sm text-gray-500">Need help?</p>
        </div>
        <div className="">
          <p
            onClick={() => setSignIn(!isSignIn)}
            className="text-gray-600 cursor-pointer"
          >
            {isSignIn ? "New to Netflix?" : "Already a member?"}{" "}
            <span className="text-white">
              {isSignIn ? "Sign Up now" : "Sign In now"}
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
