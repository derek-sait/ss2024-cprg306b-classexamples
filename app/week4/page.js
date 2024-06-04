

export default function Page(){


    function helloWorld(username){
        return "Hello " + username;
    }
    const helloWorld2 = (username) => {
    //    console.log(`Hello ${username}, this message has been logged.`);
       return;
    }
    const helloWorld3 = (username) => `Hello, ${username}!`;
    const helloMath = (a, b) => a + b;

    const louder = (displayTextFunction) => {
        const displayText = displayTextFunction("Alice");
        return `${displayText.toUpperCase()}!!!!`
    }

    const multiplyBy = (num1) => {

        return (num2) => {
            return num1 * num2;
        }
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    return (
        <main>
            <p>{helloWorld("Joe")}</p>
            <p>{helloWorld2("Bob")}</p>
            <p>{helloWorld3("Alice")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld3)}</p>
            <p>{louder(helloWorld)}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(7)}</p>
        </main>
    );


}