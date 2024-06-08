import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BoxReveal from '../../components/magicui/box-reveal';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <>
     <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <BoxReveal boxColor={"#fff679"} duration={0.5}>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>S</span>
              OLUCIONES{' '}
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
              <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='text-sm font-medium text-yellow-500'>
                  Cartografía y Topografía
                </span>
                <span className='text-xl font-semibold'>
                  UAV en construcción
                </span>
                <span className='mt-2 text-zinc-700'>
                  Aplicaciones:
                  <br />
                  <ul>
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
          </ol>
      </MaxWidthWrapper>
    </>
    
  )
}

export default Page
