import { ImageSlider } from './ImageSlider';
import Image from 'next/image'; // Import the next/image component
import product1 from './assets/product1.jpg'; 
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';
import product4 from './assets/product4.jpg';
import styled from 'styled-components';

const SliderCustomSize = styled.div`
    width: 100%;
    aspect-ratio: 10 / 4.2;
    margin: 0 auto;
    @media (max-width: 800px) {
        aspect-ratio: 10 / 7.5;
    }
    @media (max-width: 600px) {
        aspect-ratio: 4 / 3;
    }
`;

const Slider = () => {
    const IMAGES = [
        product1.src, 
        product2.src,
        product3.src,
        product4.src,
    ]; 
    const TextTitle = [
        "DJI Mavic 3 Enterprise Series",
        "Insta360 Sphere Invisible Drone 360 Camera",
        "Hololens 2",
        "DJI Phantom 4 RTK"
    ];
    const TextDescription = [
        "Con esta poderosa herramienta a su disposición, los equipos de construcción pueden tomar decisiones informadas de manera más rápida y precisa.",
        "Con PlanAR, los planos de construcción cobran vida a través de la realidad virtual, permitiendo una superposición inmersiva sobre el entorno real de la obra.",
        "Nuestra solución de instalaciones técnicas asistidas con realidad virtual para MEP. ",
        "Inspecciones estructurales en alturas y grandes distancias mediante drones es otra solucion que tendras a disposicion con nuestro departamento."
    ];
    const RedirectUrls = [
        "/soluciones/product1", 
        "/soluciones/product2",
        "/soluciones/product3",
        "/soluciones/product4"
    ];
    const handleImageClick = (index: number) => {
        const url = RedirectUrls[index];
        window.location.href = url;
    };    
    return (
        <SliderCustomSize>
            <ImageSlider
                imageUrls={IMAGES}
                title={TextTitle}
                description={TextDescription}
                onImageClick={handleImageClick}
            />
        </SliderCustomSize>
    );
}

export default Slider;
