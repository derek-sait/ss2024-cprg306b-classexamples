

export default function ContactCard({contactObj}){
    let {fname, lname, email, phone, type} = contactObj;
    return(
        <div className="rounded p-5 bg-blue-500">
            <h3 className="text-lg">{fname} {lname}</h3>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Contact Type:</b> {type}</p>
        </div>
    );
}