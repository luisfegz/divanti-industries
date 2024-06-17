import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BoxReveal from '../../components/magicui/box-reveal';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
                    <p className='text-lg text-justify text-gray-600 mb-6'>
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
                  </div>
                  
                </div>
              </div>
      </MaxWidthWrapper>
    </>
    
  )
}

export default Page
