import Image from "next/image";
import React from "react";

function Events() {
  const onGoingEvents = [
    {
      tag: "Every Wednesday",
      title: "Tech Truths $ Bants",
      desc: "Come listen to several speakers on different topics, ranging from tech related topics to our daily routine gists.",
    },
    {
      tag: "20th Nov. - 25th Nov. 2022",
      title: "Microsoft Bootcamp",
      desc: "Learn the use of Microsoft Power App to build Applications, Create Database's and Data analysis",
    },
    // {
    //   tag: "Every Wednesday",
    //   title: "Reactathon",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    // },
  ];
  const techFestEvents = [
    {
      date: "June 3rd, 2022",
      title: "TechFest 1.0: A Journey Into Tech",
      image: "/images/tech.jpg",
      desc: "A festival of sessions, pitch decks, showcases, networking and much more. With several universities, tech communities, speakers from across Nigeria.",
      button: "Read More"
    },
    {
      date: "June 3rd, 2023",
      title: "TechFest 2.0: ??",
      image: "/images/tech.jpg",
      desc: "The festival continues",
      button: "Comming soon..."
    },
  ];

  return (
    <section className='bg-lightGrey py-20' id='events'>
      <div className='container'>
        <h2 className='heading2'>Events</h2>

        <div className='mt-12 gap-8 md:mt-20 md:flex md:justify-center md:text-center'>
          {onGoingEvents.map((item, index) => (
            <div key={index} className='space-y-2 even:my-10 md:even:my-0'>
              <p>
                <span className='my-auto mr-2 inline-block h-2 w-2 rounded-full bg-[#D73B3B] '></span>
                {item.tag}
              </p>
              <h3 className='text-xl font-semibold md:text-3xl'>
                {item.title}
              </h3>
              <p className='max-w-sm'>{item.desc}</p>
            </div>
          ))}
        </div>     
          {
            techFestEvents.map((techfestevents, index) => (
              <div className='mt-12 grid gap-5 md:grid-cols-3 md:flex-row md:gap-10' key={index}>     
            <Image src={techfestevents.image} alt='hackathon' className='order-1 col-span-2 h-[200px]  w-full rounded-[20px] object-cover md:order-2 md:col-span-1 md:rounded-[50px]'
            height={"127px"} width={"300px"}
          />
            <div className='order-1 col-span-2 space-y-2'>
            <p className='flex justify-between' key={index}>
              {techfestevents.date}
            </p>
            <h3 className='text-xl font-semibold md:text-3xl'>
              {techfestevents.title}
            </h3>
            <p className='md:text-lg'>
              {techfestevents.desc}
            </p>
            <button className='font-semibold text-[#1253A6]'>
            {techfestevents.button} &gt;&gt;</button>
            </div>
            </div>
            ))
          }
        </div>
    </section>
  );
}

export default Events;
