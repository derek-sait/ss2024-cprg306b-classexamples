import Student from "./student-component";


export default function PropsPage(){

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

    let studentTwo = {
        studentName: 'Alice',
        studentAge: 23,
        address: {
            city: 'Edmonton',
            province: 'AB',
        }
    };

    return(
        <main>
            <h1 className="text-2xl">Components & Props</h1>
            <Student studentObj={studentOne} />
            <Student studentObj={studentTwo} />
        </main>
    );

}