"use client";
import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function Gallery() {

  const [artworkIds, setArtworkIds] = useState([]);
  const [galleryDisplay, setGalleryDisplay] = useState([]);

  async function getArtworkIds() {
    try {
      const response = await fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects"
      );
      const data = await response.json();
      // console.dir(data);
      let shuffled = [...data.objectIDs];
      shuffled = shuffled.sort(() => 0.5 - Math.random());
      const noOfResults = 10;
      shuffled = shuffled.slice(0, noOfResults);
      console.log(shuffled);
      setArtworkIds(shuffled);
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  }

  async function getArtworkById(artId) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
      );
      const data = await response.json();
    //   console.dir(data);
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    getArtworkIds();
  }, []);

  useEffect(() => {
    (async () => {
      if (artworkIds != null && artworkIds.length > 0) {
        let thisGallery = [];
        for (let i = 0; i < artworkIds.length; i++) {
          let thisArt = await getArtworkById(artworkIds[i]);
          thisGallery.push(thisArt);
        }
        console.log(thisGallery);
        setGalleryDisplay(thisGallery);
      }
    })();
  }, [artworkIds] );

  return (
    <div>
        {
            galleryDisplay.map( (art) => (
                <Artwork artworkObj={art} />
            ) )
        }
    </div>
  );
}
