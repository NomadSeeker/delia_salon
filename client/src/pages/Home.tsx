
import hairWork from '../assets/hair_work.jpg';
import hairStyle from '../assets/hair_style.jpg';

import hair_dryer from '../assets/hair_dryer.jpg';

import  './home.css';
import Image from '../UI/components/Image';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import blonde from '../assets/color_haired.jpg';
import Carousel from '../UI/components/Carousel';
import Service, { ServiceProps } from '../components/Service';
import ServiceList from '../components/ServiceList';
import Schedule from '../components/Schedule';
import Contact from '../components/Contact';
import Location from '../components/Location';
import HeroCarousel from '../UI/components/HeroCarousel';





const services:ServiceProps[] = [
    {
        title: 'Highlights',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Itaque, error molestiae, dignissimos atque voluptas perferendis blanditiis dolore, distinctio ratione facilis ut maiores minus aspernatur. 
        Accusamus est labore voluptatum impedit minus!`,
        imgUrl: blonde
    },
    {
        title: 'Servicio',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Itaque, error molestiae, dignissimos atque voluptas perferendis blanditiis dolore, distinctio ratione facilis ut maiores minus aspernatur. 
        Accusamus est labore voluptatum impedit minus!`,
        imgUrl: hair_dryer
    },
];

const Home = () => {


    

    return (
        <>
            <section>
                <div className="hero">
                    <div className='hero_text'>
                        <div className='hero_title'>
                            <h1>Delia's Salon</h1>
                        </div>
                        <div className='hero_icon'>
                            
                        </div>
                        <div className='hero_caption'>
                            <p>Especialista en color</p>
                        </div>
                    </div>
                </div>  
            </section>
            <section className='bio_container'>
                <article className='bio_info'>
                    <div className='bio_text'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Sunt deleniti, necessitatibus facere ex minima aspernatur debitis nisi cumque doloribus voluptatum quaerat voluptas totam perferendis reprehenderit possimus. 
                            Laborum libero recusandae consequuntur.
                        </p>
                    </div>
                    {/* <div className='bio_img'>
                        <img src={hairWork} alt="hair work" className='bio_picture'/>
                    </div> */}
                    {/* <Carousel /> */}
                    <HeroCarousel />
                </article>
                <article>
                    
                    <div className='bio_text'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem voluptatem ullam fugiat dicta excepturi quasi soluta reiciendis in perferendis.
                        </p>
                    </div>
                    
                    <div className='bio_img'>
                      
                            <img src={hairStyle} alt="hair style" className='bio_picture' />
                       
                    </div>
                    
                </article>
            </section>
            <section className='services_container'>
                <div className='services_title'>
                    <h3>servicios</h3>
                </div>
                <ServiceList services={services}/>
                <Link to='/services'>
                    <button className='services_btn'>Más servicios <span className='btn_icon'><MdKeyboardDoubleArrowRight /></span></button>
                </Link>
            </section>
            <Schedule />
            <Contact />
            <Location />
        </>
    );
}

export default Home;