import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "./store/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("hello");
  // useEffect(() => {
  //   console.log("hello");
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, email, displayName } = user.uid;
  //       console.log(uid, email, displayName);
  //       dispatch(
  //         addUser({
  //           uid,
  //           email,
  //           displayName,
  //         })
  //       );
  //       navigate("/browse");

  //       // ...
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);
  return <div>App</div>;
};
export default App;
