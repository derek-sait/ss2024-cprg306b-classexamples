"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function ProtectedPage(){

const { user } = useUserAuth();

    return(
        <main>
            { user ? (
                <div>
                    <p>You are now in the protected area.</p>
                </div>
            ) : (
                <div>
                    <p>You must be logged in to view this page.</p>
                    <Link href="/week8/">Go here to sign in</Link>
                </div>
            ) }
        </main>
    );
}