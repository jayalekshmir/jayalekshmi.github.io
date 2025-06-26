import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="flex p-4 mt-6 bg-sky-950 text-white  m-auto flex-col items-center gap-2 text-center h-full lg:h-[500px]">
      <div className="mt-4 lg:mt-8 p-8 text-xl">Worked with these companies</div>
      <div className="text-lg lg:text-4xl my-5 w-1/2 flex flex-wrap justify-center gap-8 h-full lg:h-[300px] italic text-3xl">
        <span>Accenture</span>
        <span>Mindcurv</span>
        <span>Qburst</span>
        <span>Perfomatix</span>
      </div>

      <div className="text-4xl my-5 w-full lg:w-[600px] h-full lg:h-[350px] italic">
        {`Let's Transform ideas into elegant, maintainable code !`}
      </div>
      <div className="flex w-full flex-col lg:flex-row items-center justify-between text-center max-w-[1440px] gap-3 lg:gap-0">
        <div className="flex justify-center align-center text-xs">
          Copyright {new Date().getFullYear()}
        </div>
        <div className="italic text-xs lg:text-sm">
          Built with spells, scrolls, and React components — no invisibility
          cloak needed. 🧙‍♀️
        </div>
        <SocialLinks></SocialLinks>
      </div>
    </footer>
  );
}
