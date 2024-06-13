import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BoxReveal from '../../components/magicui/box-reveal';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
     <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>U</span>
              AV EN CONSTRUCCIÓN{' '}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h2 className="mt-3 max-w-prose text-xl text-zinc-700 sm:text-2xl">
              UAV en construcción
            </h2>
          </BoxReveal> 
      </MaxWidthWrapper>
      
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>

        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className='flex flex-col space-y-2  py-2 pl-3 pr-3 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
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
      </MaxWidthWrapper>
    </>
    
  )
}

export default Page
