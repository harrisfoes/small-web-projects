import { projects } from "../project_data/project_data.tsx";

type ProjectData = {
  name: string,
  image: string,
  isFeatured: boolean,
  tech: string[],
  desc: string,
  link: string,
  code: string,
  index:number 
} 

const TechStackCard = ({ name } : {name : string}) => {
  let thisColor = "text-black";
  if (name === "React") thisColor = "text-blue-400";
  if (name === "TailwindCSS") thisColor = "text-slate-500";
  if (name === "Typescript") thisColor = "text-sky-500";
  return <div className={`font-bold uppercase ${thisColor}`}>{name}</div>;
};


const ProjectCard = ({
  name,
  image,
  isFeatured,
  tech,
  desc,
  link,
  code,
  index,
} : ProjectData) => {
  return (
    <div
      className={`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} project-card animate-fade-in mb-8 w-[360px] rounded-lg border px-4 py-6 shadow-xl md:mb-12 md:flex md:w-full md:gap-6 lg:mb-24 lg:border-0 lg:shadow-none xl:max-w-[1000px]`}
    >
      <div className="relative overflow-hidden shadow-lg md:w-1/2">
        {isFeatured && (
          <div className="absolute right-0 top-0 z-50 m-4 flex h-10 w-fit items-center rounded-full bg-amber-400 px-4 py-2 text-sm font-bold uppercase text-white">
            Featured
          </div>
        )}
        <img
          src={image}
          className="transform-all cursor-pointer duration-300 hover:scale-110"
        />
      </div>
      <div className="project-card-text flex flex-col items-center justify-center  px-5 text-left md:w-1/2 md:justify-evenly lg:px-12">
        <h3 className="mx-auto w-full pt-4 text-xl font-bold md:text-xl lg:text-3xl">
          {name}
        </h3>
        <div className="flex w-full items-start justify-start gap-2 py-2 text-sm lg:text-base">
          {tech.map((items) => {
            //console.log(items);
            return <TechStackCard name={items} key={items} />;
          })}
        </div>
        <div className="description text-md opacity-75 lg:text-xl">{desc}</div>
        <div className="project-link flex w-full gap-6 py-3">
          <a href={link} target="_blank">
            <button className="rounded-full bg-slate-600 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-110 hover:opacity-75">
              View Site
            </button>
          </a>
          <a href={code} target="_blank">
            <button className="rounded-full bg-blue-900 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-110 hover:opacity-75">
              View Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <>
      <section className="md:my-6 lg:my-12">
        <h1 className="mx-auto py-6 text-center text-xl font-bold text-neutral-700 md:pb-12 lg:text-4xl">
          <span className="border-b-4 border-b-amber-500">Projects</span>
        </h1>

        <div className="project-container flex flex-col items-center rounded-lg pb-6 md:py-8 lg:mb-12 lg:py-12">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                image={project.image}
                isFeatured={project.isFeatured}
                desc={project.desc}
                tech={project.tech}
                link={project.link}
                code={project.code}
                index={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
