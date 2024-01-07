"use client"

import Image from 'next/image'
import Header from './components/Header/page'
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })
import { useEffect, useState } from 'react';


const types = 'Grafik Ajansı';


export default function Home() {
  const [type, setType] = useState('');

  useEffect(() => {
    const nextType = types.slice(0, type.length + 1)

    if (nextType === type) return;
    const timeout = setTimeout(() => {
      setType(types.slice(0, type.length + 1));

    }, 50);

    return () => clearTimeout(timeout);

  }, [type])

  useEffect(() => {
    const handleScroll = (event) => {
      console.log('Page scrolled:', window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='w-screen h-screen bg-transparent' style={{ backgroundImage: `url('https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/07/home7-bg.jpg')` }}>
      <section className=''>
        <Image src={'https://dgtlface.com/wp-content/uploads/2020/07/home7_element.png'} width={265} height={710} alt='Background-1' className='absolute top-0 left-0 z-0' />
      </section>
      <section className='relative flex flex-row gap-6 items-center justify-center px-20 z-10 ml-60'>
        <div className="flex flex-col items-start">
          <h1 className={nunito.className + " font-extrabold text-5xl text-center text-[#3b3663] text-nowrap"}>Antalya Dijital</h1>
          <h1 className={nunito.className + " font-extrabold text-5xl text-center text-primary text-nowrap mb-16"}>{type}</h1>
          <p className="text-secondary mb-8">
            DGTLFACE dijital danışmanlık ajansı her işletmeye özel olarak, yüksek kaliteli ve uygun maliyetli dijital pazarlama çözümleri sunmaktadır.</p>
          <button className='px-10 py-5 text-white text-lg font-medium rounded-lg uppercase 
          transition-all duration-500 bg-gradient-to-r from-[#f2a312] via-[#fd7a23] to-[#f2a312] bg-size-200 bg-pos-0 hover:bg-pos-100'>Haydi Başlayalım</button>
        </div>
        <Image src={'https://dgtlface.com/wp-content/uploads/2022/08/antalya-dijital-pazarlama-ajansi.png'} width={915} height={590} alt='Laptop Image' />
      </section>
    </main>
  )
}
