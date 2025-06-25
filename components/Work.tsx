import { projects } from "@/models/user";
import Image from "next/image";
export default function Work() {
  return (
    <section
      className="max-w-[1440px] m-auto flex flex-col items-center justify-center text-left p-2 lg:p-8"
      id="work"
    >
      <h3 className="text-2xl lg:text-4xl font-bold pb-8">Work</h3>
      <span className="mb-2 lg:mb-4">
        Check out some of my recent projects – awesome web apps I’ve contributed
        to using modern frameworks, clean design, and scalable code.
      </span>
      <div className="flex lg:flex-row flex-col overflow-auto overflow-x-auto w-full justify-center m-auto">
        {projects.map((project) => (
          <div className="p-2 lg:p-4 w-full lg:w-1/2" key={project.id}>
            <div className="max-h-100 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg shadow-lg flex justify-center m-auto"
              />
            </div>

            <h1 className="my-2 py-2 text-lg font-bold flex justify-center">
              {project.description}
            </h1>
            <p>{project.about}</p>
            <div className="flex flex-wrap mt-2 gap-2">
              {project.technologiesUsed.map((tech) => (
                <div
                  key={tech.name}
                  className="flex justify-center items-center rounded-full text-sm border border-gray-300 dark:border-gray-600 "
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="inline-block mx-2 max-h-3"
                  />

                  <p className="pr-2 text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
