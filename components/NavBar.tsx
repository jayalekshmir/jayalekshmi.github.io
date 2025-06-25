
export default function NavBar() {
  return (
    <div className="flex w-full justify-between text-center p-4 bg-white-800 text-black-800">
      <div className="">JAYALEKSHMI R</div>
      <div className="hidden md:flex gap-4 " >
        <span>Work</span>
        <span>Journey</span>
        <span>Testimonials</span>
        <span>Contact</span>
      </div>
      <div>Beyond Bio</div>
    </div>
  );
}
