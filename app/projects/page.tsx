import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/models/user";

export default function Projects() {
  

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
