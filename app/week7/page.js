import Gallery from "./gallery";
import SingleArt from "./single-art";

export default function Page(){

    return(
        <main>
            <header>
                <h1>Random Artwork</h1>
                <h2>from the Metropolitan Museum of Art</h2>
            </header>
            {/* <SingleArt /> */}
            <Gallery />
        </main>
    );
}