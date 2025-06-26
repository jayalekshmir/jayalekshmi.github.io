
import Image from "next/image";

type Props = {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <section className="max-w-[1440px] mX-auto my-4px lg:my-8 flex flex-col lg:flex-row items-center justify-center text-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg hover:shadow-lg transition text-center"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
        <div className="flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={300}
            height={250}
            className="mt-2 rounded"
          />
        </div>
      </a>
    </section>
  );
}
