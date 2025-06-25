import Image from "next/image";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

export default function Introduction() {
  return (
    <section
      className="max-w-[1440px] m-auto flex lg:flex-row flex-col items-center justify-center text-center lg:text-left pb-3 lg:pb-8 px-2"
      id="introduction"
    >
      <div className="max-w-2xl p-2 lg:p8">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Hi, I'm Jayalekshmi 👋
        </h1>

        <div className="mt-2 lg:mt-4 max-w-xl text-xl lg:text-2xl  ">
          I develop interactive web-apps at
          <p className="text-2xl lg:text-3xl font-bold text-blue-600">
            Accenture Song
          </p>
        </div>

        <p className="mt-4 text-sm lg:text-xl max-w-xl">
          A passionate Frontend Developer building modern web experiences with
          React, Angular, and performance-first principles.
        </p>
        <div className="flex flex-row gap-4 my-2 lg:my-4   items-center justify-center lg:justify-start">
          <FiGithub />
          <FiTwitter />
          <RiTwitterXFill />
        </div>
      </div>
      <div className="max-w-2xl max-w-md rounded-l-lg">
        <Image
          src="/Jayalekshmi.jpg"
          alt="Jayalekshmi picture"
          width={500}
          height={300}
          className="rounded-l-lg shadow-lg"
        />
      </div>
    </section>
  );
}
