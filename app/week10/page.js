"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllPosts } from "./_services/blog-service";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [blogPostList, setBlogPostList] = useState([]);

  useEffect(() => {
    if(user){
      dbGetAllPosts(user.uid, setBlogPostList);
    }
  }, [user] );

  return (
    <main>
      <header>
        <h1 className="text-3xl">Login Page</h1>
      </header>
      <section>
        {user ? (
          // User logged in
          <div>
            <p>Welcome {user.displayName}</p>
            <p>Your user ID is: {user.uid}</p>
            <img className="w-8 h-8" src={user.photoURL} />
            <Link href="/week10/add-blog-post/">Create a new blog post</Link><br />
            <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
            <section>
              <h2>My Blog Posts</h2>
              {
                blogPostList.map( (post) => {
                  let postUrl = `/week10/${post.id}`;
                  return <Link href={postUrl}>{post.title}</Link>
                })
              }
            </section>
          </div>
        ) : (
          // User not logged in
          <div>
            <button onClick={handleSignIn} className="text-lg m-2 hover:underline" >Sign In</button>
          </div>
        )}
      </section>
    </main>
  );
}
