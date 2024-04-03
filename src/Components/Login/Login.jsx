import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [saveUser, setSaveUser] = useState([])
    const auth = getAuth(app);
    // console.log(auth);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSaveUser(user)
            })
            .catch((error) => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login</button>
            {
                saveUser && <div>
                    <h2>User: {saveUser.displayName}</h2>
                    <img src={saveUser.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;