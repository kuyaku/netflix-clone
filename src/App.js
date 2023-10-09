import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Authentication from "./components/Authentication";
import Browser from "./components/Browser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // here navigate would make problem, since we are using it before making router, so use in login page, where you login.
        // take the user to browse page, using useNavigate hook
      } else {
        // user is signed out
        dispatch(addUser());
      }
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
