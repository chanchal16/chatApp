import React from 'react'
import firebase from 'firebase'
import 'firebase/auth'


const auth = firebase.auth();

 function Login() {
    

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    return (
        <div>
             <div className="card">
                <div className="container">
                    <h3><b>One Time Sign In</b></h3>
                    <p>Sign in with your google account to get started.</p>
                    <button className='signin-btn' onClick={signInWithGoogle}>Sign in with Google</button>
                </div>
            </div>
        </div>
    )
}

export {auth,Login};
