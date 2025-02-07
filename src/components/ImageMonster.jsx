import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

function ImageMonster({ imageUrl }) {
    const [loading, setLoading] = useState(true);
    const fullImageUrl = imageUrl ? "https://www.dnd5eapi.co" + imageUrl : "";

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <>
            {loading && <Spinner animation="border" />}
            {fullImageUrl ? (
                <Image
                    src={fullImageUrl}
                    alt="Monster"
                    fluid
                    onLoad={handleImageLoad}
                />
            ) : (
                <h1>Image non disponible</h1>
            )}
        </>
    );
}

export default ImageMonster;
