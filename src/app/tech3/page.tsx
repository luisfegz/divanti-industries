import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BoxReveal from '../../components/magicui/box-reveal';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <>
     <MaxWidthWrapper className='mb-2 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>I</span>
              NMO HUB {' '}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h2 className="mt-3 max-w-prose text-xl text-zinc-700 sm:text-2xl">
            (Marketing orgánico y digital para proyecto inmobiliarios)
            </h2>
          </BoxReveal> 
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-0 mt-0 flex flex-col items-center justify-center text-center'>
        <ol className='my-8 space-y-4 pt-0 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className=' '>
                <div className='' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                </div>
                  <div className='mb-0 px-6 lg:px-8'>
                    <div className='mx-auto mt-0 max-w-2xl sm:text-center'>
                      <p className='text-lg text-justify text-gray-600'>
                       En InmoHub, aplicamos las últimas tecnologías de la revolución digital para potenciar las estrategias 
                       de venta de tu constructora de manera personalizada. Nuestro enfoque innovador garantiza una mayor 
                       retención del público, un posicionamiento destacado y una identidad como marca. Logramos esta meta 
                       a través de la aprobación de distintas propuestas orgánicas y digitales dirigidas a tu audiencia 
                       con la impresion de vivir una nueva experiencia  en tu constructora. 
                       <br /> <br />
                       Con InmoHub, tu constructora no solo se adapta a las tendencias actuales, sino que también se adelanta 
                       al mercado, asegurando un mayor impacto y éxito en cada una de tus ventas.
                      </p>
                    </div>
                  </div>
              </div>
          </li>
          </ol>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-0 mt-8 sm:mt-8 flex flex-col items-center justify-center text-center'>
        <BoxReveal boxColor={"#fff679"} duration={0.5}>
          <h1 className='max-w-4xl text-4xl font-bold md:text-4xl lg:text-7xl'>
            <span className='text-yellow-400'>S</span>
            TANDS DE CONSTRUCTORA CON REALIDAD VIRTUAL{' '}
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
                      En los stands de promoción ubicados fuera de las salas de venta, 
                      donde el espacio es limitado pero hay un gran flujo de clientes 
                      potenciales, se puede complementar la presentatión de la maqueta 
                      con una visita inmersiva al proyecto simulando la visita al modelo 
                      de forma inovadora. Esta visita se proyectaría en una pantalla 
                      exterior para captar la atención de nuevos posibles clientes.
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
            <span className='text-yellow-400'>T</span>
            ARJETAS, FOLDERS CON REALIDAD AUMENTADA{' '}
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
                        Podemos aprovecharos de la realidad aumentada para representar el modelo 3D
                        de forma llamativa en las tarjetas y folders de informacion que se llevan 
                        nuestros clientes visitantes. proporcionándoles un recuerdo que dejará una 
                        impresión duradera de su próxima compra en la Constructora.

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
            <span className='text-yellow-400'>V</span>
            ALLAS PUBLICITARIAS PROMOVIENDO LA LEY DE ATRACCION{' '}
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
                        En el análisis psicoanalítico de la experiencia del cliente con la realidad
                        virtual, descubrimos una amplia gama de sentimientos y emociones estimuladas
                        por la proyección. Este aspecto es importante y se puede jugar visualment
                        relacionandolo con el concepto de la Ley de Atracción en las vallas publicitarias
                        invitandolos a conocer los proyectos.
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
            <span className='text-yellow-400'>D</span>
              ISEÑA TU HABITACION{' '}
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
                        Aprovechando las herramientas de edición en vivo, surge la idea de Diseña tu habitación 
                        donde, mediante cambios predefinidos pero realistas, los clientes pueden diseñar su 
                        habitación en tiempo real y visualizarse dentro de ella. Al finalizar la actividad, los 
                        clientes recibirán fotos del resultado final y demas datos del proyecto de interes.


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
            <span className='text-yellow-400'>G</span>
            AFAS DE CARTÓN CONSTRUCTORA{' '}
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
                        Después de la visita del cliente, podriamos obsequiar gafas de realidad virtual 
                        de cartón con la marca publicitaria de Constructora a los alrededores. Esto no
                        solo promoveria el uso de esta tecnologia, sino que también le proporcionaría al 
                        cliente un recuerdo tangible de su experiencia con Constructora.
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
            <span className='text-yellow-400'>C</span>
              ONTENIDO VIRAL EN REDES SOCIALES{' '}
          </h1>
        </BoxReveal>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-0 mt-0 flex flex-col items-center justify-center text-center'>
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className=' '>
                <div className='' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                </div>
                  <div className='mb-10 px-6 lg:px-8'>
                    <div className='mx-auto mt-0 max-w-2xl sm:text-center'>
                      <p className='text-lg text-justify text-gray-600'>
                        Aprovechando la tendencia de las gafas en las redes sociales y el contenido tan 
                        llamativo que podemos crear apartir de la realidad virtual, podemos hacer videos 
                        virales informando proyectos para proximas familias.
                      </p>
                    </div>
                  </div>
              </div>
          </li>
          </ol>
      </MaxWidthWrapper>
    </>
  )
}

export default Page
