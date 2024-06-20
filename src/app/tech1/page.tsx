import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BoxReveal from '../../components/magicui/box-reveal';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <>
     <MaxWidthWrapper className='mb-0 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>U</span>
              AV EN CONSTRUCCIÓN{' '}
            </h1>
          </BoxReveal>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-2 mt-0 flex flex-col items-center justify-center text-center'>
            <div className='mx-auto mb-2 max-w-5xl mt-12'>
                <div className='mb-0 px-6 lg:px-8'>
                  <div className='mx-auto max-w-2xl sm:text-center'>
                    <p className='text-3xl text-justify text-gray-600 mb-6'>
                      • Inspecciones estructurales en alturas o en grandes distancias.
                    </p>
                    <br />
                    <div className='rounded-xl mb-6 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                      <Image
                        src='/tech1.jpg'
                        alt='product preview'
                        width={1024}
                        height={1024}
                        quality={100}
                        className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                      />
                    </div>
                    <br />
                    <p className='text-lg mt-4 text-justify text-gray-600 mb-12'>
                      Inspecciones estructurales en alturas y grandes distancias mediante drones es otra solucion
                      que tendras a disposicion con nuestro departamento, el uso de drones representa una innovadora 
                      solución que aprovecha las tecnologías actuales para mejorar diversos aspectos clave de la 
                      gestión de infraestructuras.
                      <br /> <br />
                      En cuanto a los materiales, los drones se equipan con una variedad de sensores avanzados 
                      que permiten detectar anomalías en la estructura, como grietas, corrosión o deformaciones, 
                      proporcionando una evaluación precisa del estado de los materiales. Esto permite una 
                      identificación temprana de problemas potenciales, lo que a su vez facilita la planificación 
                      de mantenimiento preventivo y la prolongación de la vida útil de la infraestructura.
                      <br /> <br />
                      La costo-efectividad de esta solución radica en la reducción de los costos asociados con la 
                      mano de obra y el tiempo requerido para llevar a cabo inspecciones tradicionales. 
                      <br /> <br />
                      <div className='rounded-xl mb-6 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                        <Image
                            src='/tech1-2.jpg'
                            alt='product preview'
                            width={1024}
                            height={1024}
                            quality={100}
                            className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                          />
                      </div>
                      <br /> <br />
                      Al utilizar drones, se pueden inspeccionar grandes áreas en menos tiempo y con menos recursos
                      humanos, lo que resulta en una considerable reducción de los costos operativos a largo plazo.
                      En términos de eficiencia, los drones son capaces de cubrir grandes distancias y alturas en 
                      un tiempo considerablemente menor que los métodos convencionales. Esto permite una mayor 
                      frecuencia de inspecciones sin comprometer la calidad de los datos recopilados, lo que a su 
                      vez contribuye a una gestión más efectiva de la infraestructura y una respuesta más rápida 
                      ante posibles problemas.
                      <br /> <br />
                      La calidad de los datos obtenidos mediante el uso de drones es excepcionalmente alta, gracias 
                      a la capacidad de estos dispositivos para capturar imágenes de alta resolución, así como datos
                      térmicos y de lidar. Esta información detallada y precisa proporciona una visión completa del 
                      estado de la estructura, permitiendo tomar decisiones informadas sobre el mantenimiento y la 
                      reparación.
                      <br /> <br />
                      <div className='rounded-xl mb-6 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                        <Image
                            src='/tech1-3.jpg'
                            alt='product preview'
                            width={1024}
                            height={1024}
                            quality={100}
                            className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                          />
                      </div>
                    </p>
                    <p className='text-3xl text-justify text-gray-600 mb-6'>
                      • Cartografía y topografía. 
                    </p>
                    <div className='rounded-xl mb-6 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                      <Image
                          src='/tech1-4.jpeg'
                          alt='product preview'
                          width={1024}
                          height={1024}
                          quality={100}
                          className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                        />
                    </div>
                    <br /> <br />
                    <p className='text-lg mt-4 text-justify text-gray-600 mb-12'>
                      ¡Descubre cómo nuestro software integrado en los drones revoluciona la topografía y la
                      cartografía! Con capturas aéreas rápidas y precisas, optimizas costos y aumentas la 
                      eficiencia en tus proyectos. A continuación, te presen tamos algunos resultados que 
                      podemos evidenciar para ti:
                    <br /> <br />
                      •  Modelos digitales del terreno (MDT): Los drones pueden capturar datos altimétricos y 
                      planimétricos para generar modelos digitales del terreno, que representan la superficie 
                      de la tierra con precisión. Estos modelos son fundamentales para el diseño de infraestructuras,
                      la planificación urbana y la gestión de recursos naturales.

                    <br /> <br />
                      • Curvas de nivel: Utilizando la información recopilada por los drones, se pueden generar 
                      curvas de nivel que representan las elevaciones del terreno en intervalos regulares. 
                      Estas curvas son esenciales para comprender la topografía de un área y para la 
                      planificación de proyectos de construcción y desarrollo.
                    <br /> <br />
                      • Ortomosaicos: Los drones pueden tomar múltiples imágenes aéreas que se superponen y se
                      combinan para crear ortomosaicos de alta resolución. Estas imágenes ortorrectificadas
                      proporcionan una vista detallada y precisa del terreno, que se utiliza en la planificación
                      urbana, la gestión agrícola, el monitoreo ambiental y más.
                    <br /> <br />
                      • Nubes de puntos: Los drones pueden capturar una gran cantidad de datos de coordenadas 
                      tridimensionales, que se utilizan para crear nubes de puntos densas y precisas del terreno. 
                      Estas nubes de puntos son valiosas para el análisis topográfico, la detección de cambios en 
                      el paisaje y la generación de modelos 3D.
                    <br /> <br />
                      • Mapas topográficos y ortofotos: Con la información recopilada por los drones, se pueden
                      crear mapas topográficos detallados y ortofotos de alta resolución. Estos productos son 
                      fundamentales para la planificación de proyectos de construcción, la gestión de recursos 
                      naturales, la cartografía y otras aplicaciones.
                    </p>
                    <p className='text-3xl text-justify text-gray-600 mb-6'>
                      • Monitoreo Geoespacial Remoto en obra desde la distancia
                    </p>
                    <div className='rounded-xl mb-6 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                      <Image
                          src='/tech1-7.jpg'
                          alt='product preview'
                          width={1024}
                          height={1024}
                          quality={100}
                          className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                        />
                    </div>
                    <br /> <br />
                    <p className='text-lg mt-4 text-justify text-gray-600 mb-12'>
                      Para esta solucion nos aprovechamos de la combinación de tecnologías de drones, streaming en vivo
                      y realidad virtual que nos ofrece un enfoque innovador y eficiente para el control geoespacial 
                      remoto en obras de construcción. Mediante esta sinergia de herramientas avanzadas, se abre un 
                      panorama completamente nuevo en la supervisión y gestión de obras, permitiendo una visión detallada 
                      y en tiempo real del progreso de la construcción desde cualquier ubicación en el mundo .
                    <br /> <br />
                      Los drones, equipados con cámaras de alta resolución y capacidad para capturar imágenes desde 
                      diversos ángulos, sirven como los ojos en el cielo, proporcionando una cobertura completa del 
                      área de trabajo. 
                    <br /> <br />
                    <div className='rounded-xl mb-6 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                      <Image
                          src='/tech1-5.jpg'
                          alt='product preview'
                          width={1024}
                          height={1024}
                          quality={100}
                          className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                        />
                    </div>
                    <br /> <br />
                      Estas imágenes son transmitidas instantáneamente a través de streaming en vivo, permitiendo a
                      los equipos de supervisión y gestión acceder a una visión en tiempo real de la obra desde cualquier
                      dispositivo con conexión a internet.
                    <br /> <br />
                      Pero la verdadera innovación surge con la implementación de la realidad virtual. Las imágenes 
                      capturadas por los drones se procesan y se convierten en un entorno virtual inmersivo, donde 
                      los usuarios pueden sumergirse por completo en la obra. Esta tecnología permite a los equipos 
                      de supervisión explorar cada rincón del sitio de construcción, inspeccionar detalles específicos 
                      y evaluar el progreso con un nivel de detalle sin precedentes.
                    <br /> <br />
                      Esta solución representa un avance significativo en la supervisión remota de obras, al proporcionar 
                      una combinación única de visibilidad en tiempo real, accesibilidad desde cualquier ubicación y una 
                      experiencia inmersiva sin igual. Con esta poderosa herramienta a su disposición, los equipos de 
                      construcción pueden tomar decisiones informadas de manera más rápida y precisa, optimizando así el 
                      proceso de construcción y garantizando el éxito del proyecto.
                    </p>
                  </div>
                  <MaxWidthWrapper className='mb-0 mt-2 sm:mt-10 flex flex-col items-center justify-center text-center'>
                    <BoxReveal boxColor={"#fff679"} duration={0.5}>
                      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                        <span className='text-yellow-400'>P</span>
                        RODUCTOS{' '}
                      </h1>
                    </BoxReveal>
                </MaxWidthWrapper>
                  <div className='mt-0 px-6 lg:px-8'>
                    <div className='mx-auto mt-10 max-w-2xl sm:text-center'>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Software
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Hololens 2
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • DJI Phantom 4 RTK
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • DJI Mavic 3 Enterprise Series
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Insta360 Sphere Invisible Drone 360 Camera
                      </p>
                      <br />
                      <br />
                      <Link
                          href='/productos'
                          className='bg-yellow-400 hover:bg-yellow-600 text-white text-primary-foreground hover:bg-primary/90 py-1 px-2.5 rounded flex items-center w-full font-semibold'
                          >
                          Pecios
                          <ArrowRight className='ml-1 h-5 w-5' />
                      </Link>
                      <br />
                      <br />
                    </div>
                  </div>
                  
                </div>
              </div>
      </MaxWidthWrapper>
    </>
    
  )
}

export default Page
