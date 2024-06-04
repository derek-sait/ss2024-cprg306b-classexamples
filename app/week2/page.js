import Link from "next/link";
import MyTestComponent from "../_components/my-test-component";


export default function Page(){
    return(
        <main>
            <h1>About</h1>
            <p>This app contains all the class examples for CPRG306!</p>
            <MyTestComponent />
            <Link href="../">Back</Link>
        </main>
    );
}