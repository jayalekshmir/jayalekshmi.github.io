import React from 'react'

export default function Journey() {
  return (
    <section
      className=" mx-auto my-4 lg:my-8 flex flex-col items-center justify-center text-left p-4 lg:p-8"
      id="journey"
    >
      <h3 className="text-2xl lg:text-4xl font-bold pb-4 lg:pb-8">
        A bit about my Journey
      </h3>
      <div className="max-w-[1440px] m-auto lg:px-8 ">
        <p>
          I am currently working as a
          <span className="italic font-bold">
            {" "}
            Packaged App Development Specialist{" "}
          </span>{" "}
          with over
          <span className="italic font-bold"> 8+ years </span> of experience,
          specializing in frontend technologies. I am passionate about creating
          innovative, user-centric applications that address real-world
          challenges and elevate digital experiences. With a strong expertise in
          modern frameworks, a collaborative approach, and a dedication to
          writing clean, scalable code, I consistently aim to deliver
          high-quality solutions within Agile environments. I recently obtained my Open Work Visa holder with no restrictions and am now seeking a full-time opportunity where I can make meaningful contributions, continue my professional growth, and be part of a forward-thinking team.
        </p>
        <div></div>
      </div>
    </section>
  );
}
