import { Amaranth } from 'next/font/google';
import Image from 'next/image';
import ContactButton from './utility/contact-button';

const amaranth = Amaranth({
  subsets: ['latin'],
  weight: "400"
})


export default function Header() {
  return (
    <section className='h-[85vh]'>
      <div className='h-[30vh] md:h-[25vh] bg-gradient-to-r from-mint-left to-mint text-white p-3 md:pr-20 md:pl-20 md:flex md:flex-col md:justify-center'>
        <h1 className='text-3xl font-bold md:text-5xl'>AMASS Cia. Ltda.</h1>
        <p className={`${amaranth.className} text-2xl md:text-3xl`}>Fabricantes directos de espumaflex y Panel EPS tipo sánduche.</p>
      </div>
      <div className='relative h-[55vh] md:h-[60vh] flex items-end p-3 md:pr-20 md:pl-20 md:pb-10'>
        <Image
          src="/Portada-WEB-AMASS-Recovered.png"
          fill
          priority
          alt="Header"
        />
        <ContactButton />
      </div>
    </section>
  )
}