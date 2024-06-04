


export default function Student({studentObj}){

    let {studentName, studentAge, address:{city, province}} = studentObj;

    return(
        <div className="text-red-400 bg-neutral-600 border border-yellow-400 m-10 p-5">
            <h3 className="text-lg">{studentName}</h3>
            <p className="text-base">Age: {studentAge}</p>
            <p className="text-base">{city}, {province}</p>
        </div>
    );
}