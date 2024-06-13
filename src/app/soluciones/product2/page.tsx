import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BoxReveal from '../../../components/magicui/box-reveal';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
     <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-3xl font-bold md:text-xl lg:text-2xl'>
              <span className='text-yellow-400'>I</span>
              nsta360 Sphere Invisible Drone 360 Camera{' '}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h2 className="mt-3 max-w-prose text-xl text-zinc-700 sm:text-2xl">
             Control Remoto en Obra desde la Distancia
            </h2>
          </BoxReveal> 
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>

        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className=''>
                <div className=''>
                  <Image
                    src='/product2.jpg'
                    alt='product preview'
                    width={1024}
                    height={1024}
                    quality={100}
                    className=''
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
                    <li>• Instalaciones tecnicas asistidas (Mecánica, Electricidad y Fontanería)</li>
                    <li>
Nuestra solución de instalaciones técnicas asistidas con realidad virtual para MEP se centra en cuatro aspectos clave:
.</li>
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
      </MaxWidthWrapper>
    </>
    
  )
}

export default Page
