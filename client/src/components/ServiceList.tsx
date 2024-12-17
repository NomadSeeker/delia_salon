import Service, { ServiceProps } from "./Service";



type ServiceListProps = {

    services: ServiceProps[];

}

const ServiceList = ({services}: ServiceListProps) => {

    return(
        <>
            {
                services.map((service) =>  (<Service title={service.title} description={service.description} imgUrl={service.imgUrl} />))
            }
        </>
    )
}

export default ServiceList;
