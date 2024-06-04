

export default function Page(){

    function helloWorld(username, dayOfWeek){
        // return "Hello, " + username + ". Today is " + dayOfWeek + ".";
        return `Hello ${username}, today is ${dayOfWeek}.`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello ${username}, today is ${dayOfWeek}.`;
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a, b) => a + b;

    const louder = (textFunc) => {
        // validation - check to make sure the incoming argument is a function
        const thisText = textFunc("Thomas");
        return `${thisText.toUpperCase()}!!!!`;
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyBySeven = multiplyBy(7);
    const multiplyByTen = multiplyBy(10);

    const originalFunc = (num3) => num3 + 2;
    const newFunc = originalFunc;

    return(
        <main>
            <h1>Functions</h1>
            <h2>Arrow Functions</h2>
            <p>{helloWorld("Alice", "Monday")}</p>
            <p>{helloWorld2("Bob", "Tuesday")}</p>
            <p>{helloWorld3("Joe")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld3)}</p>
            <p>{louder(helloWorld2)}</p>
            {/* <p>{louder("hello world")}</p> */}
            <p>{multiplyBySeven(3)}</p>
            <p>{multiplyByTen(5)}</p>
            <p>{newFunc.name}</p>
            

        </main>
    )
}