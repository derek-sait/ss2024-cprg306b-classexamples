import Link from "next/link";


export default function MyTestComponent() {

    let a = 3;
    let b = 4;

    return(
        <div>
            <h2>Custom Component!</h2>
            <Link href="https://www.sait.ca">SAIT Website</Link>
            <p>Math!</p>
            <p>{a} + {b} = {a+b}</p>
        </div>
    );
}