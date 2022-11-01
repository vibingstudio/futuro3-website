import React from 'react'
import Image from 'next/image'

import techMonterreyLogo from '../../assets/images/tecmtyemp.png'
import vibingLogo from '../../assets/images/vibingLogo.png'
import btcLogo from '../../assets/images/btcLogo.png'
import hackerLogo from '../../assets/images/hackerLogo.png'
import kindynos from '../../assets/images/kindynos.png'

const logos = [techMonterreyLogo , vibingLogo , btcLogo , hackerLogo , kindynos]

export default function Footer() {
  return (
    <footer className='py-10 max-w-7xl m-auto flex items-center justify-center flex-wrap gap-x-[4rem] gap-y-[1.5rem]'>
        {
            logos.map((logo, index) => (
                <div key={index} className='w-48 flex justify-center'>
                    <Image src={logo} alt='logo' />
                </div>
            ))
        }
    </footer>
  )
}
