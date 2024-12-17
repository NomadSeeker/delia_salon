

import Image from "../UI/components/Image"


export type ServiceProps = {
    title: string;
    description: string;
    imgUrl: string;
}   


const Service = ({title, description, imgUrl}: ServiceProps) => {

    return (
        <>
            <div className='services_text'>
                <h4>{title}</h4>
                <p>{description}</p>

                <Image imgSrc={imgUrl} altDescription={title} />
            </div>
        </>
    );
}

export default Service;