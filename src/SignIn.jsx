import { useState } from "react";
import { auth, googleProvider } from "./firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import SignedIn from "./SignedIn";
import "./signin.css";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false); 

    console.log(auth?.currentUser?.email);

    const signInWithEmail = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true); 
        } catch (error) {
            console.error();
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setIsAuthenticated(true); 
        } catch (error) {
            console.error();
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false);
        } catch (error) {
            console.error();
        }
    };

    return (
        <div className="signin">
            {isAuthenticated ? (
                <SignedIn logout={logout} />
            ) : (
                <div>
                    <h2>Sign In</h2>
                    <div className="login-page">
                        <div className="form">
                            <form className="login-form">
                                <input
                                    type="text"
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <button
                                    className="btn1"
                                    onClick={signInWithEmail}
                                >
                                    Sign In
                                </button>
                            </form>
                            <p>OR</p>
                            <button
                                className="btn2"
                                onClick={signInWithGoogle}
                            >
                                Sign In With Google
                            </button>
                            <button
                                className="btn3"
                                onClick={logout}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignIn;
