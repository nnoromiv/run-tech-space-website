import Image from "next/image";
import React from "react";
import Button from "../Button";

function Hero() {
  return (
    <header className='container grid gap-3 py-20 md:grid-cols-2'>
      <div className='order-2 space-y-3 self-center md:order-1'>
        <h1 className='text-3xl font-semibold leading-[46px] md:text-4xl md:leading-[46px] lg:max-w-[627px] lg:text-6xl lg:leading-[76px]'>
          Learn{" "}
          <span
            className={`heroLine bg-no-repeat pb-2 [background-position:_0_33px] lg:bg-bottom lg:pb-0`}
          >
            the ultimate skill
          </span>{" "}
          to groom your career
        </h1>
        <p className=' lg:text-2xl'>
          Being a member of the community gives you the chance to create a technological
          career with the help of our community a dream becomes reality.
        </p>
        <Button type='link' href='/join_us'>
          Build your career
        </Button>
      </div>

      <Image
        src='/images/heroBg.png'
        alt='banner'
        height={"100%"} width={"100%"}
        className='order-1 justify-self-center md:order-2 md:justify-self-end'
      />
    </header>
  );
}

export default Hero;
