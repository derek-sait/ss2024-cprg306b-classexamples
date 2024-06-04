

export default function ObjectPage(){

    let studentOne = {
        studentName: 'Joe',
        studentAge: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG303", "CPRG306"],
        address: {
            line1: "123 Main St.",
            city: "Calgary",
            province: "AB",
        },
    };

    let {studentName, studentAge, address:{city, province}, schedule:[,,,class4] } = studentOne;

    return (
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>{studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>
            <h2>Destructured Variables</h2>
            <p>Name: {studentName}</p>
            <p>Age: {studentAge}</p>
            <p>City: {city}</p>
            <p>Province: {province}</p>
            <p>{class4}</p>
        </main>
    );
}