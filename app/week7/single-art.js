"use client"

import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function SingleArt() {
    const [singleArt, setSingleArt] = useState( null );
    async function getArtworkById(){
        try {
            const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/45734`);
            const data = await response.json();
            // console.dir(data);
            setSingleArt(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {  getArtworkById();  }, [] );

    return(
        <div>
            { singleArt && (
                <Artwork artworkObj={singleArt} />
            ) }
        </div>
    );
}