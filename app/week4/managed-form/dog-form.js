"use client"

import { useState } from "react";

export default function DogForm(){

    const [dogName, setDogName] = useState("");
    const [imageUrl, setImageUrl ] = useState("");
    const [dogBio, setDogBio] = useState("");

    const handleSubmit = (event) => {
        // console.dir(event);
        event.preventDefault();

        let newDog = {
            name: dogName,
            url: imageUrl,
            bio: dogBio,
        };
        alert(`Welcome ${newDog.name}, this is their story: ${newDog.bio}`);
        setDogName("");
        setImageUrl("");
        setDogBio("");
    }
    
    const handleDogName = (event) => {
        // console.dir(event);
        setDogName(event.target.value);
    }
    const handleImageUrl = (event) => setImageUrl(event.target.value);
    const handleDogBio = (event) => setDogBio(event.target.value);

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dog Name:</label>
                <input type="text" value={dogName} onChange={handleDogName}/>
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" value={imageUrl} onChange={handleImageUrl} />
            </div>
            <div>
                <label>Dog Bio:</label>
                <textarea onChange={handleDogBio}>{dogBio}</textarea>
            </div>

            <div>
                <button>Add Dog</button>
            </div>
        </form>
    );
}