import Student from "@/app/week3/props/student-component";


export default function Page(){
    let emptyArray = [];
    let array1 = [1,2,3,4,5];
    array1.push(6);
    array1.splice(2,2);
    let array2 = ["CPRG303", "CPRG306", "CPRG123"];
    array2.pop();

    let numbers = [5, 3, 9, 1, 4];
    let doubled = numbers.map( (num) => num * 2 );
    let lessThanFive = numbers.filter( (num) => num < 5 );
    let moreNumbers = [6,7,8];
    let allNumbers = numbers.concat(moreNumbers);
    let sortedNumbers = numbers.sort( (a,b) => b - a);
    // let sortednumbers = numbers.toSorted();
    let additionFunction = 
        (accumulator, currentValue) => accumulator + currentValue
    let sum = numbers.reduce( additionFunction, 18 );

    let newNumbers = [...numbers, 12, 16, 32, ...moreNumbers];

    let studentObj = {
        name: 'Alice',
        age: '25',
        email: 'alice@sait.ca',
    }
    let newStudent = {
        ...studentObj,
        phone: '1234567890'
    }
    // let studentCopy = studentObj;
    let studentCopy = {...studentObj};

    studentCopy.name ="bob";

    return(
        <main>
            <h1>Arrays</h1>
            <p>{numbers.join(" | ")}</p>
            <p>{doubled.join(",")}</p>
            <p>{lessThanFive.join(",")}</p>
            <p>{allNumbers.join(",")}</p>
            <p>{sortedNumbers.join(",")}</p>
            <p>{sum}</p>
            <p>{newNumbers.join(",")}</p>
            <p>{JSON.stringify(studentObj)}</p>
            <p>{JSON.stringify(studentCopy)}</p>
        </main>
    );
}