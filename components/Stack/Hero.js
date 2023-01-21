import Image from "next/image";
import React from "react";
import Button from "../Button";

function Hero({ link, heading, description, img, ai }) {
  return (
    <header className='container grid gap-3 py-10 pb-20 md:grid-cols-2 md:py-20'>
      <div className='order-2 space-y-3 self-center md:order-1'>
        <h1 className='heading2 text-left'>{heading}</h1>
        <p className='md:text-lg'>
          {description ? (
            description
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum et, cursus tincidunt eu maecenas. Montes, metus
              sagittis nibh venenatis in massa nec massa lorem. Blandit morbi
              nec eget lectus eget tristique. Aenean molestie tortor praesent
              id. Eu curabitur eget aenean venenatis nisl suscipit odio pharetra
              at. Nibh nibh integer diam duis. Ligula vitae, pretium fringilla
              dui massa et. Sem vel sodales eu vehicula. Dui sed viverra augue
              curabitur suspendisse sed porttitor gravida. Vulputate cursus sit
              neque pharetra volutpat placerat.
            </p>
          )}
        </p>
        <Button type='link' href={link}>
          Join {ai ? "AI and Date Science" : heading} Stack
        </Button>
      </div>

      <Image
        src={img}
        alt='banner'
        width={"80px"} height={"80px"}
        className='order-1 w-full max-w-[500px] justify-self-center md:order-2 md:justify-self-end'
      />
    </header>
  );
}

export default Hero;
