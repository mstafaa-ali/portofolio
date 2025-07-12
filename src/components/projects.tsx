import Image from "next/image";

const projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/download.jpeg",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/download.jpeg",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/download.jpeg",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/download.jpeg",
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/download.jpeg",
    },
  ];

  return (
    <section className="flex flex-col justify-center h-screen px-6">
      <div id="project-list" className="flex flex-col  gap-12">
        {projectData.map((project) => (
          <div
            key={project.id}
            id="project-item"
            className="flex justify-between border-b-2 border-black"
          >
            <div className="font-primary text-black">
              <h5 className="text-4xl">{project.title}</h5>
              <p>{project.description}</p>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              width={350}
              height={350}
              className="object-cover h-24 w-1/10"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-12">
        <h4 className="font-primary text-black text-4xl border-b-2">See All</h4>
      </div>
    </section>
  );
};
export default projects;
