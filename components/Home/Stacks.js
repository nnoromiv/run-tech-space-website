import Image from "next/image";
import React from "react";
import Button from "../Button";

function Stacks() {
  const data = [
    {
      title: "Front End development",
      text: "Front End Development has become the most demanding stack to learn. with increased rate of websites, software's, and applications required by the world Front End Development is just the skill needed. Application could be built, just like Twitter and Facebook. So if you're just getting stated with the Front End Development or you're completely new, welcome to the stack, were we'll cover the basics of the Front End Development to make you a Front End Developer.",
      btn: "Join Frontend Development",
      image: "/images/fd.webp",
      href: "/stack/frontend-development",
    },
    {
      title: "Back End development",
      text: "Back End Development works hand in hand with Front End development. We are adding this new stack to properly groom the tech community and produce full working seamless websites, applications and more. Back End Development is crucial to help properly sustain the development of other stack ends. So if you're just getting started or already an intermediate level developer, welcome to the stack, were we'll cover the basics of the Back End Development to make you a Professional",
      btn: "Join Backend Development",
      image: "/images/bd.jpeg",
      href: "/stack/backend-development",
    },
    {
      title: "UI & UX Design",
      text: "So you want to build a career in user interface design (UI), but there's only one problem: you have no idea where to begin, or you have very good research skills to help users navigate around an interface without difficulty, leading you to a user experience (UX) career. No worries, this is the place for you. The UI/UX stack is available at Run Tech Space community to help you get started in your career.",
      btn: "Join UI & UX Design",
      image: "/images/ui-ux.png",
      href: "/stack/ui-ux-design",
    },
    {
      title: "Artificial Intelligence & Data Science",
      text: "Every day, businesses utilize data and analytics to improve efficiencies, gain deeper operational insights, and ultimately earn more money. However, data science's significance extends far beyond the commercial world and is assisting in the resolution of some of humanity's most serious problems. Data science is being used for the better welfare of society, from helping health practitioners address problems more intelligently to fighting poverty, mitigating climate change, solving transportation issues, and lots more.  Artificial Intelligence impacts our lives and the world around us.",
      btn: "Join AI & Data Science",
      image: "/images/ai.jpg",
      href: "/stack/artificial-intelligence-&-data-science",
    },
    {
      title: "Cybersecurity",
      text: "Newly introduced stack, to teach the community on how to secure the processes of other stacks. Cybersecurity has always been a crucial skill since the onset of the internet, this stack is greatly required to protect and guide the internet from abuse and attack, welcome to the most recent stack and the tech space community would guide you into becoming a professional at it.",
      btn: "Join Cybersecurity",
      image: "/images/cc.jpg",
      href: "/stack/cybersecurity",
    },
  ];
  return (
    <section className='container py-20' id='stacks'>
      <h2 className='heading2'>Community Stacks</h2>

      <div className='mt-20 flex flex-col  space-y-20 md:grid-cols-2'>
        {data.map((item, index) => (
          <div key={index} className='stacks grid gap-12 md:grid-cols-2 '>
            <Image
              src={item.image}
              alt=''
              lazy='true'
              height={"100px"} width={"100px"}
              className='w-full self-end justify-self-end md:order-2'
            />

            <div key={index} className='item-center self-center '>
              <h3 className='mb-3 text-xl font-semibold md:text-3xl'>
                {item.title}
              </h3>
              <p className='font-normal md:text-lg'>{item.text}</p>

              <Button
                type='link'
                href={item.href}
                className='mt-5 text-sm md:text-base'
              >
                {item.btn}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stacks;
