import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/models/user";

export default function Projects() {
  

  return (
    <section className="max-w-[1440px] mx-auto my-4 lg:my-8 flex flex-col items-center justify-center text-left p-2 lg:p-8">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
