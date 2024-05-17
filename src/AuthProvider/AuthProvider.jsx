import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Spinner from "../components/Spinner/Spinner";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (fullname, imageURL) => {
        return updateProfile(auth.currentUser, {
            displayName: fullname,
            photoURL: imageURL
        });
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // sign out user
    const logout = () => {
        setUser(null);
        signOut(auth);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            clearTimeout(timer);
            setLoading(false);
        })
        return () => {
            clearTimeout(timer);
            unsubscribe();
        };
    }, [])


    const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={allValues}>
            {loading ? <Spinner /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
