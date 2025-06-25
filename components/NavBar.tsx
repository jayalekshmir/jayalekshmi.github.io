import Link from "next/link";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Journey", href: "/journey" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Beyond Bio", href: "/beyond-bio" },
];
const NavBar = () => {
  return (
    <nav className="flex w-full justify-between text-sm lg:text-lg text-center px-2 py-4 lg:p-8 bg-white-800 text-black-800 max-w-[1440px] m-auto">
      <Link href={`/`}>JAYALEKSHMI R</Link>
      <div className="hidden md:flex gap-4 ">
        <Link href={`#work`}>Work</Link>
        <Link href={`#journewy`}>Journey</Link>
        <span>Testimonials</span>
        <Link href={`/contact`}>Contact</Link>
        <Link href={`/blogs`}>Blog</Link>
      </div>
      <Link href={`https://www.linkedin.com/in/jayalekshmir/`} target="_blank">Beyond Bio</Link>
    </nav>
  );
};

export default NavBar;
