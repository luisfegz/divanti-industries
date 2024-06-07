'use client'


import Forms from '@/components/Forms'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import BoxReveal from '@/components/magicui/box-reveal'
import Globe from '@/components/magicui/globe'
import RetroGrid from '@/components/magicui/retro-grid'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import WordRotate from '@/components/magicui/word-rotate'
import CustomButton from '@/components/ui/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import SwipeButton from '@/components/ui/SwipeButton';

export default function Home() {
  return (
    <>
     
      {/* value proposition section    */}
      <div>
          <div className='relative isolate'>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff679] to-[#ffd600] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                />
              </div>
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffed90] to-[#fff679] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                  />
              </div>
          </div>
      </div>
      {/* Title */}
      <MaxWidthWrapper className='mb-18 mt-28 sm:mt-28 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <CustomButton/>
          </BoxReveal>
          
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>D</span>
              EPARTAMENTO{' '}
              <br />
              <span className='text-yellow-400'>C</span>
              CINNOVA
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h2 className="mt-3 max-w-prose text-zinc-700 sm:text-sm">
              &quot;Centro de Desarrollo: Soluciones 
              <br /> 
              Tecnológicas Avanzadas para la Construcción&quot;
            </h2>
          </BoxReveal>
          <br />
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <SwipeButton/>
          </BoxReveal>
      </MaxWidthWrapper>
      {/* value proposition section */}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff679] to-[#ffd600] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffd600] to-[#fff950] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
      
      <div className='mt-24'>
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
              <Image
                src='/iot_inside_building.jpg'
                alt='product preview'
                width={1024}
                height={1024}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Slider 
      <MaxWidthWrapper className='mb-12 mt-12 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className=''>
            <Image 
                  src='/1.jpg' 
                  height={1500} 
                  width={1000}
                  alt='1'
            />   
        </div>
      </MaxWidthWrapper>
      
      {/* <MaxWidthWrapper className='mb-12 mt-12 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <h1 className='max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl'>
          <span className='text-yellow-400'>Bienvenidos</span>{' '}
          a{' '}
          Divanti{' '}
          <span className='text-yellow-400'>Industries </span>
          Construcción
        </h1>
      </MaxWidthWrapper> */}
      <MaxWidthWrapper className='mb-12 mt-12 sm:mt-40 flex flex-col items-center justify-center text-center'>
        
        <WordRotate 
            className="text-4xl sm:text-6xl font-bold text-yellow-400 dark:text-white"
            words={[
              "Bienvenido a ...",
              "Divanti Industries",
              "Construcción",
            ]}
          />
          
      </MaxWidthWrapper>
        
      {/* Feature section */}
      <div className='mx-auto mb-32 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <p className=' text-lg text-justify text-gray-600'>
              Innovación es el pilar de nuestro equipo. Nuestra misión es liderar la
              revolución tecnológica que está enfrentando el mundo en la actualidad,
              aplicada para la industria de la construcción. En este caso, nuestra
              invitación es para Colombia y Latinoamérica, mediante la implementación
              en las constructoras de soluciones brindadas gracias al desarrollo 
              tecnológico de nuestro departamento a su disposición. No te pierdas la
              oportunidad de contar en tu equipo de trabajo con un profundo 
              conocimiento de las necesidades y desafíos de este sector en particular
              y cómo los métodos no convencionales se convierten en tu aliado y no en
              tu enemigo. Nos enorgullece presentar tu nuevo aliado, el departamento
              CCINNOVA, con las soluciones tecnológicas en construcción que impulsan
              el éxito.
            </p>
          </div>
        </div>
        {/* value proposition section    */}
        <div>
            <div className='relative isolate'>
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff679] to-[#ffd600] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                  />
                </div>
                  <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                    <div
                      style={{
                        clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                      className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffed90] to-[#fff679] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                    />
                </div>
            </div>
        </div>
        {/* Tech 1 */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='sm:left-2 flex flex-col space-y-2  border-zinc-300 py-2 pl-3 pr-3 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <div className='rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-0' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                <Image
                  src='/1.jpeg'
                  alt='product preview'
                  width={1024}
                  height={1024}
                  quality={100}
                  className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
              <span className='text-sm font-medium text-yellow-500'>
                Tecnología 1
              </span>
              <span className='text-xl font-semibold'>
                UAV en construcción
              </span>
              <span className='mt-2 text-zinc-700'>
                Aplicaciones:
                <br />
                <ul className='space-y-2'>
                  <li>• Cartografía y topografía.</li>
                  <li>• Inspecciones estructurales en alturas o en grandes distancias.</li>
                  <li>• Monitoreo Geoespacial Remoto en obra desde la distancia.</li>
                  <li>• INMO HUB.</li>
                </ul>
                {' '}
                <Link
                  href='/pricing'
                  className='text-yellow-500 underline underline-offset-2'>
                  Leer más
                </Link>
                .
              </span>
            </div>
          </li>

          {/* Tech 2 */}
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-3 pr-3 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                <Image
                  src='/2.jpeg'
                  alt='product preview'
                  width={1024}
                  height={1024}
                  quality={100}
                  className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
              <span className='text-sm font-medium text-yellow-500'>
                Tecnología 2
              </span>
              <span className='text-xl font-semibold'>
                IOT( internet de las cosas) para la construcción
              </span>
              <span className='mt-2 text-zinc-700'>
                Aplicaciones:
                <ul className='space-y-2'>
                  <li>• Seguimiento del rendimiento y la ubicación de la maquinaria.</li>
                  <li>• Supervisión Integral avanzada de Seguridad y Salud en Obra.</li>
                  <li>• Optimización Energética en edificios y sitios de construccion.</li>
                </ul>
                <Link
                  href='/pricing'
                  className='text-yellow-500 underline underline-offset-2'>
                  Leer más
                </Link>
                .
              </span>
            </div>
          </li>
          {/* Tech 3 */}
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-3 pr-3 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
            <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                <Image
                  src='/3.jpeg'
                  alt='product preview'
                  width={1024}
                  height={1024}
                  quality={100}
                  className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
              <span className='text-sm font-medium text-yellow-500'>
                Tecnología 3
              </span>
              <span className='text-xl font-semibold'>
                INMO HUB (Marketing organico y digital para proyectos inmobiliarios)
              </span>
              <span className='mt-2 text-zinc-700'>
                Aplicaciones:
                <ul className='space-y-2'>
                  <li>• Experiencias Del Cliente Actualizadas : Innovación en Marketing Digital y Organico con Realidad Aumentada y Realidad Virtual.</li>
                  <li>• Identificacion de clientes potenciales segun (Ciudad, Sector , Capacidad Economica, Intereses, etc)</li>
                  <li>• Contenido Visual Editado.</li>
                  <li>• Calidad Sin Restricciones en Impresiones.</li>
                </ul>
                <Link
                  href='/pricing'
                  className='text-yellow-500 underline underline-offset-2'>
                  Leer más
                </Link>
                .
              </span>
            </div>
          </li>
         {/* Tech 4 */}
         <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-3 pr-3 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4' style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                <Image
                  src='/4.jpeg'
                  alt='product preview'
                  width={1024}
                  height={1024}
                  quality={100}
                  className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
              <span className='text-sm font-medium text-yellow-500'>
                Tecnología 4
              </span>
              <span className='text-xl font-semibold'>
                Realidad virtual y aumentada para construcción
              </span>
              <span className='mt-2 text-zinc-700'>
                Aplicaciones:
                <ul className='space-y-2'>
                  <li>• PlanAR: Superposición inmersiva de Planos en la Realidad + herramientas.</li>
                  <li>• Eficiencia y precision en procesos de inspeccion y direccion de obra.</li>
                  <li>• Instalaciones tecnicas asistidas (Mecánica,Electricidad y Fontanería).</li>
                  <li>• Experiencia personalizada para el cliente.</li>
                  <li>• Mayor engagement en un alcance global.</li>
                  <li>• INMO HUB.</li>
                </ul>
                <Link
                  href='/pricing'
                  className='text-yellow-500 underline underline-offset-2'>
                  Leer más
                </Link>
                .
              </span>
              
            </div>
         </li>
        </ol>
        
        {/* value proposition section    */}
        <div>
          <div className='relative isolate'>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff679] to-[#ffd600] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                />
              </div>
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffed90] to-[#fff679] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
                  />
              </div>
          </div>
        </div>
      </div>

      {/* <VelocityScroll
        text="¿Cómo trabajamos?"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-yellow-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      /> */}
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>C</span>
              ómo trabajamos?{' '}
            </h1>
          </BoxReveal>
      </MaxWidthWrapper>
      {/* Feature section */}
      <div className='mx-auto mb-32 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <p className='text-lg text-justify text-gray-600'>
              En el departamento CCINNOVA, no solo nos esforzamos por entregar un producto final de calidad, 
              sino que también valoramos profundamente el proceso, es por eso que Además de ofrecer productos
              de alta calidad, como departamento de tu grupo constructor nos comprometemos a brindar capacitación
              integral, asistencia y sporte técnico acompañado de actualizaciones para cada una de nuestras 
              tecnologías y nuevas soluciones por innovar.
            </p>
            <br/>
            <p className='text-lg text-justify text-gray-600'>
              Optamos por llevar a cabo este proceso en pasos o etapas bien definidas ; para garantizar que cada 
              detalle sea cuidadosamente considerado y ejecutado con la máxima calidad. Desde la concepción inicial 
              hasta la entrega final, nos dedicamos a proporcionar una experiencia excepcional a nuestros clientes. 
            </p>
            <br/>
            <p className='text-lg text-justify text-gray-600'>
              Desde el primer contacto hasta la entrega,  nuestro equipo experto se compromete a guiarlo a través 
              de cada etapa del proceso, asegurándonos de que sus necesidades y expectativas sean superadas en cada
              momento.
            </p>
          </div>
          
        </div>
      </div>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>C</span>
              REW{' '}
              <br />
              <span className='text-yellow-400'>I</span>
              NVERSIONISTAS{' '}
            </h1>
          </BoxReveal>
      </MaxWidthWrapper>
      {/* Feature section */}
      <div className='mx-auto mb-32 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <p className='text-lg text-justify text-gray-600'>
              En CCINNOVA, estamos en búsqueda de socios estratégicos que 
              deseen participar en emocionantes proyectos destinados a 
              revolucionar el sector de la construcción en Colombia y 
              latino america ; Nuestra visión es clara: liderar el
              camino hacia el futuro de la construcción mediante el
              desarrollo y la implementación de tecnologías a la vanguardia
              que impulsen la eficiencia, la sostenibilidad y la calidad en
              cada proyecto. Desde soluciones de construcción inteligentes 
              hasta sistemas avanzados de gestión de obras, estamos 
              comprometidos con la creación de un ecosistema innovador que
              transforme la manera en que se construye en Colombia Y LATINOAMERICA.
            </p>
          </div>
          
        </div>
      </div>
      <section id='SWIPE'>
        <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <Forms />
        </MaxWidthWrapper>
        <RetroGrid />
      </section>
      <Globe className="bottom-18" />

    </>
  )
}
