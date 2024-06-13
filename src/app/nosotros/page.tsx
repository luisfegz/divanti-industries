"use client"; // Marca este archivo como un Client Component

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Forms from "@/components/Forms"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"


const Page = () => {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <h1 className='max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>N</span>
              OSOTROS{' '}
              <br />
              <span className='text-yellow-400'>C</span>
              CINNOVA
          </h1>

          <h2 className="mt-3 max-w-prose text-zinc-700 sm:text-sm">
              Cali, Colombia
          </h2>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-2 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <Forms />
      </MaxWidthWrapper>
          
      <MaxWidthWrapper className='mb-12 mt-2 sm:mt-4 flex flex-col items-center justify-center text-center'>
            <h1 className='max-w-4xl mb-6 mt-6 text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>V</span>
              ISIÓN{' '}
            </h1>
            {/* Visión */}
            <div className='mx-auto mb-2 max-w-5xl sm:mt-32'>
                <div className='mb-0 px-6 lg:px-8'>
                  <div className='mx-auto max-w-2xl sm:text-center'>
                    <p className='text-lg text-justify text-gray-600'>
                      Actualizar la construcción en Colombia y Latino America mediante el 
                      desarrollo y la implementación de tecnologías de vanguardia que impulsen 
                      la eficiencia, la sostenibilidad y la calidad en cada proyecto. 
                      Desde soluciones de construcción inteligentes hasta sistemas avanzados 
                      de gestión de obras, estamos comprometidos con la creación de un 
                      ecosistema innovador que transforme la manera en que se construye 
                      en Colombia.
                    </p>
                  </div>
                </div>
              </div>
              <h1 className='max-w-4xl mt-2 mb-6 text-5xl font-bold md:text-6xl lg:text-7xl'>
                <span className='text-yellow-400'>M</span>
                ISIÓN{' '}
              </h1>
              {/* Misión */}
              <div className='mx-auto mb-2 max-w-5xl sm:mt-2'>
                    <div className='mb-12 px-6 lg:px-8'>
                      <div className='mx-auto max-w-2xl sm:text-center'>
                        <p className='text-lg text-justify text-gray-600'>
                        Nuestra misión es liderar la revolución tecnológica que esta enfrentando
                        el mundo en la actualidad, aplicadas para la industria de la construcción. 
                        </p>
                      </div>
                  </div>
              </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mb-12 mt-2 sm:mt-4 flex flex-col items-center justify-center text-center'>
            <h1 className='max-w-4xl mt-2 text-5xl font-bold md:text-6xl lg:text-7xl'>
              <span className='text-yellow-400'>F</span>
              UTUROS{' '}
            </h1>
            <h2 className="font-bold text-3xl mt-6 mb-8 md:text-4xl lg:text-5xl">
              Aplicación Inmersiva
            </h2>
            {/* Futuro */}
            <div className='mx-auto mb-2 max-w-5xl sm:mt-32'>
                <div className='mb-0 px-6 lg:px-8'>
                  <div className='mx-auto max-w-2xl'>
                    <p className='text-lg text-justify text-gray-600'>
                      Desarrollar el sistema integral empresarial más avanzado 
                      dentro de la realidad virtual y móvil para constructoras: 
                    </p>
                    <br />
                    <p className='text-lg text-justify text-gray-600'>
                      • Una aplicación inmersiva con softwares ERP (Enterprise resource 
                        planning o Planificación de recursos empresariales) de última generación 
                        cargada de herramientas dedicadas a la administracion 
                        y planificacion  como grupo constructor; cuyo producto resultado, 
                        se dirija a una central como.
                    </p>
                    <br />  
                    <p className='text-lg text-justify text-gray-600'>
                      • Web con softwares CRM (Customer relationship management o Gestión de relaciones con el cliente)
                        el cual será una suite inmersiva para clientes; Objetivamente extranjeros, con las mejores
                        experiencias inmobiliarias en oferta de las constructoras revolucionarias, de Colombia y Latino América. 
                        Conviene especificar que de igual forma aquel producto también se dirigirá a la web original de la constructora.
                        Este sistema está diseñado para impulsar la evolución de las constructoras en el mercado y así mismo la
                        adaptación tecnológica actualizada a la industria de los bienes raíces; cabe resaltar que a medida del
                        tiempo se integrarán nuevas tecnologías y equipos con los que por supuesto vamos a contar en nuestra aplicación y web.
                    </p>
                    <br />  
                    <p className='text-lg text-justify text-gray-600'>
                      • En el ámbito del comercio inmobiliario, un sistema integral representa una plataforma que integra un 
                        conjunto de herramientas tecnológicas que conmueven y modernizan diversas etapas del proceso constructivo, 
                        sin descuidar su base tradicional. Desde la fase de planificación y diseño hasta la comercialización.
                    </p>
                  </div>
                </div>
              </div>
              <h1 className='max-w-4xl mt-8 text-3xl font-bold md:text-2xl lg:text-xl'>
                <span className='text-yellow-400'>I</span>
                NTELIGENCIA{' '}
              </h1>
              <h1 className='max-w-4xl mt-2 text-3xl font-bold md:text-2xl lg:text-xl'>
                <span className='text-yellow-400'>A</span>
                RTIFICIAL{' '}
              </h1>
              <h1 className='max-w-4xl mt-2 text-3xl font-bold md:text-2xl lg:text-xl'>
                <span className='text-yellow-400'>P</span>
                ARA LA{' '}
              </h1>
              <h1 className='max-w-4xl mt-2 text-3xl mb-6 font-bold md:text-2xl lg:text-xl'>
                <span className='text-yellow-400'>C</span>
                ONSTRUCCIÓN{' '}
              </h1>
              <div className='mx-auto mb-32 max-w-5xl sm:mt-2'>
                    <div className='mb-12 px-6 lg:px-8'>
                      <div className='mx-auto max-w-2xl sm:text-center'>
                        <p className='text-lg text-justify text-gray-600'>
                          Con la llegada de la inteligencia artificial (IA), se abre un horizonte
                          de posibilidades nunca antes vistas en la forma en que diseñamos, construimos
                          y gestionamos proyectos de construcción.
                        </p>
                        <br />
                        <p className='text-lg text-justify text-gray-600'>
                          En este contexto, nos complace presentar nuestro proyecto a futuro de inteligencia
                          artificial para la construcción. Con el objetivo de revolucionar la forma en que se
                          llevan a cabo los proyectos en el sector, nuestra iniciativa se enfoca en la implementación
                          de soluciones de IA que optimizan cada etapa del ciclo de vida de un proyecto, desde 
                          la planificación hasta la operación.
                        </p>
                        <br />
                        <p className='text-lg text-justify text-gray-600'>
                          Al integrar algoritmos avanzados, aprendizaje automático y análisis predictivo, nuestro
                          proyecto tiene como objetivo mejorar la eficiencia, la productividad y la seguridad en 
                          los sitios de construcción, al tiempo que reduce los costos y los plazos de entrega. 
                          Desde la optimización del diseño arquitectónico hasta la gestión de la cadena de suministro
                          y el monitoreo en tiempo real del progreso del proyecto, la IA está destinada a transformar
                          por completo la forma en que concebimos y ejecutamos proyectos de construcción en el futuro.
                        </p>
                      </div>
                  </div>
              </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Page
