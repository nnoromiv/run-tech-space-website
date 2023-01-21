import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <section className='bg-lightGrey py-20' id='partners'>
      <div className='container'>
        <h2 className='heading2'>Ours Partners</h2>

        <div className='mx-auto mt-12 flex max-w-md justify-around gap-5'>
          <Image src='/images/runsa.png' alt='runsa' height={"200px"} width={"300px"}/>
          <Image src='/images/hoshistech.png' alt='hoshistech' height={"200px"} width={"300px"}/>
          <Image src='/images/microsoft-logo.png' alt='microsoft' height={"127px"} width={"300px"}/>
        </div>
      </div>
    </section>
  );
}

export default Partners;
