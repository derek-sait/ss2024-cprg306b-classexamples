"use client"

import { useState } from "react";

export default function ContactPage(){

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle the form data
        const formData = {
            userFullName: fullName,
            userPhone: phone,
            userEmail: email,
            userMessage: message,
        }

        alert(`Name: ${formData.userFullName} | message: ${formData.userMessage}`);

        setFullName("");
        setPhone("");
    }

    const handleNameChange = (event) => {
        // console.dir(event);
        setFullName(event.target.value);
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    return(
        <main>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="">
                    <label className="block" for="full_name">Full Name:</label>
                    <input onChange={handleNameChange} value={fullName} name="full_name" id="full_name" type="text"/>
                </div>
                <div className="">
                    <label className="block" for="phone">Phone Number:</label>
                    <input onChange={handlePhoneChange} value={phone} name="phone" id="phone" type="tel"/>
                </div>
                <div className="">
                    <label className="block" for="user_mail">Email:</label>
                    <input onChange={handleEmailChange} value={email} id="user_mail" type="email" name="user_mail" />
                </div>
                <div className="">
                    <label className="block" for="message">Message:</label>
                    <textarea onChange={handleMessageChange} id="message" name="message">{message}</textarea>
                </div>
                <div className="mt-5">
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Contact Me!" />
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Me!</button> */}
                </div>
            </form>
        </main>
    );
}