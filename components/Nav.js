import React from 'react'
import Link from "next/Link";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';
// import { auth } from 'firebase/app';

import { useRouter } from "next/router";


export default function Nav() {
    // const [user, loading] = useAuthState(auth);
    const [user, loading] = useAuthState(auth);

    const route = useRouter();
    if (loading) return <h1>Loading...</h1>; //can add spinner 
    if (!user) route.push("/auth/login");
    if (user)
    return(
      <div>
        <div class="upgradedNav">
          <h1>Welcome {user.displayName}</h1>
          <button onClick={() => auth.signOut()}>Sign out</button>
          </div>
      </div>)

    return (
        <nav className="flex justify-between items-center py-10">
      <Link href="/">Logo</Link>
      <ul className="flex items-center gap-10">
        <a className="text-lg font-medium" href="#">
          Courses
        </a>
        {!user && (
          <Link href="/auth/login">
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
              Join now
            </a>
          </Link>
        )}
        {user && (
          <div>
            <h2>{user.displayName}</h2>
            <Link href="/">
              <img
                referrerPolicy="no-referrer"
                className="w-12 rounded-full"
                src={user.photoURL}
                alt="avatar"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}