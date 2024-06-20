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
              <span className='text-yellow-400'>R</span>
              EALIDAD VIRTUAL Y AUMENTADA PARA LA CONSTRUCCIÓN{' '}
            </h1>
          </BoxReveal>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-2 mt-0 flex flex-col items-center justify-center text-center'>
            <div className='mx-auto mb-2 max-w-5xl sm:mt-32'>
                <div className='mb-0 px-6 lg:px-8'>
                  <div className='mx-auto max-w-2xl sm:text-center'>
                    <p className='text-lg text-justify text-gray-600'>
                      • PlanAR: Superposición inmersiva de Planos en la Realidad + herramientas.
                    </p>
                    <br />
                    <p className='text-lg text-justify text-gray-600 mb-6'>
                      • Eficiencia y precision en procesos de inspeccion y direccion de obra.
                    </p>
                    <br />
                    <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                      <Image
                        src='/tech4.jpg'
                        alt='product preview'
                        width={1024}
                        height={1024}
                        quality={100}
                        className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                      />
                    </div>
                    <br />
                    <p className='text-lg mt-4 text-justify text-gray-600'>
                      Con PlanAR, los planos de construcción cobran vida a través de la realidad virtual, 
                      permitiendo una superposición inmersiva sobre el entorno real de la obra. 
                      Esta innovadora tecnología no solo mejora la eficiencia, sino que también 
                      eleva la precisión en cada etapa del proceso.
                    </p>
                  </div>
                  
                </div>
              </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-12 mt-4 flex flex-col items-center justify-center text-center'>

        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className='flex flex-col space-y-2  py-2 pl-3 pr-3 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                  <Image
                    src='/tech4-2.jpeg'
                    alt='product preview'
                    width={1024}
                    height={1024}
                    quality={100}
                    className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
                  <div className='mb-0 px-6 lg:px-8'>
                    <div className='mx-auto mt-10 max-w-2xl sm:text-center'>
                      <p className='text-lg text-justify text-gray-600'>
                       Gracias a la superposición inmersiva de planos en la realidad, 
                       los equipos de construcción pueden visualizar y comprender mejor 
                       el diseño antes de la construcción; con un conjunto de herramientas 
                       que reduce errores y optimiza la planificacion. algunas de esas 
                       herramientas son : 
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Medición Precisa: Con la capacidad de medir distancias, 
                        ángulos y dimensiones directamente en la realidad virtual, 
                        los inspectores pueden garantizar que cada elemento de la 
                        construcción cumpla con las especificaciones exactas del 
                        diseño.
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Detección de Conflictos: PlanAR identifica automáticamente
                         posibles conflictos entre los elementos de la construcción 
                         y el diseño original. Esto permite a los inspectores abordar 
                         los problemas de manera proactiva antes de que se conviertan 
                         en obstáculos importantes durante la ejecución del proyecto.
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Comparación de Versiones: Los inspectores pueden comparar 
                        fácilmente diferentes versiones de planos o modelos en tiempo 
                        real, lo que facilita la identificación de cambios y 
                        actualizaciones en el diseño.
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Visualización de Datos: PlanAR permite la visualización de
                        datos adicionales sobre los elementos de construcción, como
                        datos de rendimiento, materiales utilizados y fechas de 
                        instalación. Esto proporciona una comprensión más completa 
                        del estado de la obra y facilita la toma de decisiones informadas.
                      </p>
                      <br />
                      <p className='text-lg text-justify text-gray-600'>
                        • Registro de Progreso: Los inspectores pueden registrar 
                        el progreso de la construcción directamente en la realidad
                        virtual, marcando hitos importantes, registrando problemas 
                        encontrados y asignando tareas de corrección. Esto garantiza 
                        una documentación exhaustiva del proceso de construcción y 
                        ayuda a mantener el proyecto en el camino correcto.

                      </p>

                      
                    </div>
                  </div>
              </div>
          </li>
          </ol>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-0 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <BoxReveal boxColor={"#fff679"} duration={0.5}>
          <h1 className='max-w-4xl text-4xl font-bold md:text-4xl lg:text-7xl'>
            <span className='text-yellow-400'>I</span>
            nstalaciones tecnicas asistidas (Mecánica, Electricidad y Fontanería)
            {' '}
          </h1>
        </BoxReveal>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-0 mt-0 flex flex-col items-center justify-center text-center'>
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className=' '>
                <div className='' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                </div>
                  <div className='mb-0 px-6 lg:px-8'>
                    <div className='mx-auto mt-0 max-w-2xl sm:text-center'>
                      <p className='text-lg text-justify text-gray-600'>
                        Nuestra solución de instalaciones técnicas asistidas con realidad virtual para MEP se centra en cuatro aspectos clave:
                        <br /><br />
                        <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                          <Image
                            src='/tech4-3.jpg'
                            alt='product preview'
                            width={1024}
                            height={1024}
                            quality={100}
                            className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                          />
                        </div>
                        <br /><br />
                        • Coordinación de Equipo Remota: Con la realidad virtual, los equipos pueden coordinarse de manera efectiva y colaborar 
                        en el diseño y la resolución de problemas sin importar la distancia física. Esto agiliza el proceso de toma de decisiones 
                        y garantiza una comunicación clara entre todos los miembros del equipo.
                        <br /><br />
                        <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                          <Image
                            src='/tech4-5.jpg'
                            alt='product preview'
                            width={1024}
                            height={1024}
                            quality={100}
                            className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                          />
                        </div>
                        <br /><br />
                        • Eficiencia en Tiempos y Precisión: La RV permite un diseño MEP más rápido y preciso al detectar y corregir conflictos 
                        antes de la construcción física. Esto reduce los retrasos y los costos asociados con los cambios durante la construcción, 
                        al tiempo que garantiza una ejecución más precisa del proyecto.
                        <br /><br />
                        <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                          <Image
                            src='/tech4-6.jpg'
                            alt='product preview'
                            width={1024}
                            height={1024}
                            quality={100}
                            className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                          />
                        </div>
                        <br /><br />
                        • Diseño de MEP Inmersivo: Nuestra plataforma ofrece una experiencia inmersiva donde los diseñadores pueden visualizar y 
                        manipular los sistemas MEP en un entorno tridimensional. Esto facilita la comprensión del diseño y permite realizar ajustes 
                        en tiempo real para optimizar el rendimiento y la eficiencia de los sistemas.
                        <br /><br />
                        <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                          <Image
                            src='/tech4-4.jpg'
                            alt='product preview'
                            width={1024}
                            height={1024}
                            quality={100}
                            className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                          />
                        </div>
                        <br /><br />
                        • Simulaciones Avanzadas: Utilizamos la realidad virtual para crear simulaciones detalladas de los sistemas MEP en funcionamiento. 
                        Esto permite a los equipos probar diferentes escenarios y evaluar el rendimiento de los sistemas antes de la construcción, lo que 
                        ayuda a minimizar riesgos y optimizar el diseño final.
                      </p>
                    </div>
                  </div>
              </div>
          </li>
          </ol>
      </MaxWidthWrapper>
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
          <p className='text-lg text-justify text-gray-600'>
            • Microsoft Hololens 2
          </p>
          <br />
          <p className='text-lg text-justify text-gray-600'>
            • Software incluido en el soporte tecnico
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
    </>
  )
}

export default Page
