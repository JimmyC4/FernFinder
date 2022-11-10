import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
import {GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile} from 'firebase/auth';
import {auth} from '../../utils/firebase';
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import React from 'react';

export default function Login(){

    //Sign in with Google
    const [user, loading] = useAuthState(auth);
    const googleProvider = new GoogleAuthProvider();
    const route = useRouter();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user);
            route.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    //Sign in with Facebook
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider);
            const credential = await FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            let photoUrl = result.user.photoURL + '?height=500&access_token=' + token;
            await updateProfile(auth.currentUser, {photoURL: photoUrl});

            console.log(result);
            route.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(user) {
            route.push('/');
        } else {
            console.log('login');
        }
    }, [user]);


    return (
        <div>
            <section className='login_page'>
            <h1>Sign in with our provider:</h1>
            <div>
                <button class="signin_button" onClick={GoogleLogin}><FcGoogle />Sign in with Google</button>
                {/* <button onClick={FacebookLogin}><AiFillFacebook />Sign in with Facebook</button> */}
            </div>
            <h2>Don't have an account?<a class="underline"  href="https://accounts.google.com/signup" target="_blank">Sign Up Here</a></h2>
            </section>
        </div>
    );
}