import React from "react";
import { auth, db, firebaseConfig } from "./config/firebase.config";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authContext = React.createContext({ user: {} });

const { Provider } = authContext;

export function AuthProvider(props) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{props.children}</Provider>;
}

export const useAuth = () => {
  return React.useContext(authContext);
};

const useAuthProvider = () => {
  const [user, setUser] = React.useState(null);

  const createUser = async (user) => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      Terms_and_Condition,
    } = user;
    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword,
        Terms_and_Condition,
      });
      setUser(docRef);
      console.log(docRef);
      return docRef;
    } catch (error) {
      return error;
    }
  };

  const getUserDisplayName = async () => {
    const citiesRef = getDoc(collection(db, "users"));
    const snapshot = await citiesRef.where("email", "==", true).get();
    console.log(snapshot, "pp");
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    snapshot.forEach((doc) => {
      console.log(doc, "pp");
      console.log(doc.id, "=>", doc.data(), "pp");
    });
    // return db
    //   .collection("users")
    //   .doc(user.uid)
    //   .get()
    //   .then((userData) => {
    //     console.log(userData, "pp");
    //     if (userData.data()) {
    //       setUser(userData.data());
    //     }
    //   });
  };

  const signUp = async (user) => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      Terms_and_Condition,
    } = user;

    return await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        return [
          createUser({
            uid: response.user.uid,
            email,
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
            confirmPassword,
            Terms_and_Condition,
          }),
        ];
      })
      .catch((error) => {
        return { error };
      });
  };

  const signIn = async (user) => {
    const { email, password } = user;

    return await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        setUser(response.user);
        // getUserDisplayName();
        return response.user;
      })
      .catch((error) => {
        return { error };
      });
  };

  return { user, signUp, signIn };
};
