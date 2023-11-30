import React from 'react'
import { Outlet } from 'react-router-dom'
import Section from './Section'
import Flex from './Flex'
import Sideber from './Sideber'

const RootLayouts = () => {
  return (
    <>
    <Section className='bg-[#F0F3FD]'>
      <Flex className='gap-x-10'>
        <div className='w-1/12'>
         <Sideber/>
        </div>
        <div className='w-10/12'>
        <Outlet/>
        </div>
      </Flex>
    </Section>
    
    </>
  )
}

export default RootLayouts