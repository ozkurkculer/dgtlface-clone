import Image from 'next/image'
import Header from './components/Header/page'
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='w-screen h-screen '>
      <section className=''>
        <Image src={'https://dgtlface.com/wp-content/uploads/2020/07/home7_element.png'} width={265} height={710} alt='Background-1' className='absolute top-0 left-0 z-0' />
      </section>
      <section className='relative flex flex-row gap-6 items-center justify-center px-20 z-10 ml-60'>
        <div className="flex flex-col items-start">
          <h1 className={nunito.className + " font-extrabold text-5xl text-center text-[#3b3663] text-nowrap"}>Antalya Dijital</h1>
          <h1 className={nunito.className + " font-extrabold text-5xl text-center text-primary text-nowrap mb-16"}>TEXTING ANIMATION</h1>
          <p className="text-secondary mb-8">
            DGTLFACE dijital danışmanlık ajansı her işletmeye özel olarak, yüksek kaliteli ve uygun maliyetli dijital pazarlama çözümleri sunmaktadır.</p>
          <button className='bg-gradient-to-r from-[#f2a312] to-[#fd7a23] px-10 py-5 text-white text-lg font-medium rounded-lg uppercase'>Haydi Başlayalım</button>
        </div>
        <Image src={'https://dgtlface.com/wp-content/uploads/2022/08/antalya-dijital-pazarlama-ajansi.png'} width={915} height={590} alt='Laptop Image' />
      </section>
    </main>
  )
}
