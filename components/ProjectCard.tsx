
import Image from "next/image";

type Props = {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard({title, description, image, link}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border rounded-lg hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mt-2 w-full rounded"
      />
    </a>
  );
}
