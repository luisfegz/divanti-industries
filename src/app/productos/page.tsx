import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import UpgradeButton from '@/components/UpgradeButton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Check,
  HelpCircle,
  Minus,
} from 'lucide-react'



const Page = () => {
    return (
      <>
              <MaxWidthWrapper className='mb-8 mt-24 text-center max-w-5xl'>
                <div className='mx-auto mb-10 sm:max-w-lg'>
                  <h1 className='text-6xl font-bold sm:text-7xl'>
                    Planes & Precios
                  </h1>
                  <p className='mt-5 text-gray-600 sm:text-lg'>
                    Whether you&apos;re just trying out our service
                    or need more, we&apos;ve got you covered.
                  </p>
                </div>

                <div className='pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2'>
                  <TooltipProvider>
          
                        
                          <div
                            
                            className={cn(
                              'relative rounded-2xl bg-white shadow-lg',
                              {
                                'border-2 border-blue-600 shadow-blue-200':
                                
                                'border border-gray-200',
                              }
                            )}>
                            {(
                              <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                                Upgrade now
                              </div>
                            )}

                            <div className='p-5'>
                              <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        
                              </h3>
                              <p className='text-gray-500'>
                                
                              </p>
                              <p className='my-5 font-display text-6xl font-semibold'>
                              
                              </p>
                              <p className='text-gray-500'>
                                DEPT. CCINNOVA
                              </p>
                            </div>

                            <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                              <div className='flex items-center space-x-1'>
                                
                                <Tooltip delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    How many PDFs you can upload per
                                    month.
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                            <UpgradeButton />

                            
                            <div className='border-t border-gray-200' />
                            
                          </div>
                          <div
                            
                            className={cn(
                              'relative rounded-2xl bg-white shadow-lg',
                              {
                                'border-2 border-gray-300 shadow-blue-200':
                                
                                'border border-gray-200',
                              }
                            )}>
                            {(
                              <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-gray-300 to-gray-600 px-3 py-2 text-sm font-medium text-white'>
                                Upgrade now
                              </div>
                            )}

                            <div className='p-5'>
                              <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        
                              </h3>
                              <p className='text-gray-500'>
                                
                              </p>
                              <p className='my-5 font-display text-6xl font-semibold'>
                              
                              </p>
                              <p className='text-gray-500'>
                                CREW INVERSIONISTAS
                              </p>
                            </div>

                            <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                              <div className='flex items-center space-x-1'>
                                
                                <Tooltip delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    How many PDFs you can upload per
                                    month.
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                            <UpgradeButton />

                            
                            <div className='border-t border-gray-200' />
                            
                          </div>
                  </TooltipProvider>
                </div>
            </MaxWidthWrapper>
      </>
    )
  }
export default Page