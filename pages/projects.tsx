import { motion } from "framer-motion";
import React, { useState } from "react";
import { fadeInUp, routerAnimarion, stagger } from "../animation";
import ProjectCard from "../component/ProjectCard";
import ProjectsNavbar from "../component/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setprojects] = useState(projectsData);
  const [active, setactive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setprojects(projectsData);
      setactive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setprojects(newArray);
    setactive(category);
  };

  return (
    <motion.div
      variants={routerAnimarion}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-2 py-2 overflow-y-scroll "
      style={{ height: "65vh" }}
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}
          >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
