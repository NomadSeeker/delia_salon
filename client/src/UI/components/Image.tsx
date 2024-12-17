
import './image.css';

type ImageProps = {
    imgSrc: string;
    altDescription: string;
}

const Image = ({imgSrc, altDescription}: ImageProps) => {

    return (
        <>
            <div className="img_container">
                <img src={imgSrc} alt={altDescription} className='picture'/>
            </div>
        </>
    );
}

export default Image;