import React from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { Search } from '../Search/Search';

const Hero = () => {
  return (
    <section className="px-8 bg-[url('/images/banners/hero-background2.jpeg')] bg-cover bg-center">
      {/* Container Grid Hero */}
      <div className="grid grid-cols-12 md:grid md:grid-col-2 md:gap-12 justify-center py-6 md:py-10 sm:px-14 md:px-4">
        {/* Image Banner Hero */}
        <div className="col-span-12 md:col-span-6 border-sky-400 rounded-xl overflow-hidde h-[300px] sm:h-[580px]">
          <Image src="/images/banners/hero-images.jpeg" width={80} height={40} alt="..." className="w-full h-full rounded-xl  "></Image>
        </div>
        {/* Text Hero */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4 sm:gap-9 mt-7 sm:mt-18 md:mt-0 md:py-8">
          <p className="text-white text-xs sm:text-xl sm:font-semibold sm:tracking-[3px] md:tracking-[1px]">LET'S EXPLORE WITH US!</p>
          <h2 className="text-xl sm:text-4xl font-bold sm:font-bold text-green-yellow-300 leading-6 sm:leading-10">
            Liburan Sat Set Anti Ribet <br className="hidden sm:block" />
            Bareng Arena Wisata
          </h2>
          <p className="text-white text-xs sm:text-xl tracking-[1px]">
            Jadikan Liburan spesialmu makin berkesan! <br />
            <span className=" text-green-yellow-300 text-xs sm:text-xl tracking-[1px]">Great Tour A Great Memories</span>{' '}
          </p>
          <Button href="/" className=" mt-3 sm:mt-[-9px]">
            Paket Wisata
          </Button>
          <Search className="mt-8 md:mt-6">FIND NOW</Search>
        </div>
      </div>
    </section>
  );
};

export default Hero;
