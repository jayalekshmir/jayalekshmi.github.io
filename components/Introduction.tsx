import Image from "next/image";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

export default function Introduction() {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center text-left pb-3 lg:pb-8">
      <div className="max-w-2xl p-3 lg:p8">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Hi, I'm Jayalekshmi 👋
        </h1>

        <p className="mt-4 text-sm lg:text-xl max-w-xl">
          A passionate Frontend Developer building modern web experiences with
          React, Angular, and performance-first principles.
        </p>
        <div className="flex flex-row gap-4 mt-4  items-center text-left">
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
