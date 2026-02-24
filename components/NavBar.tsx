import Link from "next/link";


const NavBar = () => {
  return (
    <nav className="text-sm lg:text-lg text-center px-2 py-4 lg:p-8 bg-sky-950 text-white w-full">
      <div className="max-w-[1440px] flex w-full justify-between m-auto px-2 ">
        <Link href={`/`}>JAYALEKSHMI R</Link>
        <div className="hidden md:flex gap-4 ">
          <Link href={`/`}>Home</Link>
          <Link href={`/#work`}>Work</Link>
          <Link href={`/#journey`}>Journey</Link>
          <span>Testimonials</span>
          <Link href={`/contact`}>Contact</Link>
          <span>Blog</span>
        </div>
        <Link
          href={`https://www.linkedin.com/in/jayalekshmir/`}
          target="_blank"
        >
          Beyond Bio
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
