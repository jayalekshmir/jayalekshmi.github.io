import { socialLinks } from "@/models/user";
import Image from "next/image";

import Link from "next/link";

export default function Introduction() {
  return (
    <section
      className="max-w-[1440px] mx-auto my-4 lg:my-8 flex lg:flex-row flex-col items-center justify-center text-center lg:text-left pb-3 lg:pb-8 px-2"
      id="introduction"
    >
      <div className="max-w-3xl p-2 lg:p8">
        <h1 className="text-2xl lg:text-5xl font-bold mb-2 lg:mb-5">
          {`Hi, I'm Jayalekshmi 👋`}
        </h1>

        <div className="mt-2 lg:mt-4 max-w-xl text-sm lg:text-xl flex flex-row mb-4 lg:mb-6 flex-wrap items-center justify-center lg:justify-start">
          I develop interactive web-apps at
          <p className="text-xl lg:text-2xl font-bold italic pl-2">
            Accenture Song
          </p>
        </div>

        <p className="mt-4 text-sm lg:text-xl max-w-xl mb-2 lg:mb-4 ">
          A passionate Frontend Developer building modern web experiences with
          React, Angular, and performance-first principles.
        </p>
        <div className="text-2xl lg:text-3xl italic text-red-300">
          Let’s build something great.
        </div>
        <div className="flex flex-row gap-4 my-4 lg:my-2 lg:my-4 align-center items-center justify-center lg:justify-start">
          {socialLinks.map((socialLink) => (
            <Link key={socialLink.name} href={socialLink.url}>
              {<socialLink.component size={20} />}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-2xl max-w-md rounded-l-lg">
        <Image
          src="/j.rajeswari.jpg"
          alt="Jayalekshmi picture"
          width={500}
          height={300}
          className="rounded-l-lg shadow-lg"
        />
      </div>
    </section>
  );
}
