import Link from "next/link";


export default function Home() {

 const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main className="h-screen">
      <h1 className="text-xl">My Cool React Page</h1>
      <p>Hello World!</p>

      <h2>Project Links</h2>
      <ul>
        <li><Link className={linkStyles} href="./week2/">Components</Link></li>
        <li><Link className={linkStyles} href="./week3/">Components & Props</Link></li>
        <li><Link className={linkStyles} href="./week4/functions">Arrow Functions & Higher Order Functions</Link></li>
        <li><Link className={linkStyles} href="./week4/counter">useState Counter</Link></li>
        <li><Link className={linkStyles} href="./week4/managed-form">Managed Form</Link></li>
        <li><Link className={linkStyles} href="./week5/arrays">Array Functions</Link></li>
        <li><Link className={linkStyles} href="./week5/contact">JSON and Handling Lists</Link></li>
        <li><Link className={linkStyles} href="./week6/">Managing and Lifting State</Link></li>

      </ul>
    </main>
  );
}
