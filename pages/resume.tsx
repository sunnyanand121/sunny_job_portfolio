import Bar from "../component/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routerAnimarion } from "../animation";

const resume = () => {
  return (
    <motion.div
      variants={routerAnimarion}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Information Technology Engineering
            </h5>
            <p className="font-medium">Shri Ram Murti Smarak College of Engg. & technology, Bareilly</p>
            <p className="my-3">
              Recieved B.tech degree in 2016 from Dr.Abdul Kalam technical University Uttar Pradesh. 
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Senior Software Engg.</h5>
            <p className="my-3 font-semibold">
            <ul><li> Accenture(2020-till date)</li> <li>TCS(2016-2019)</li> </ul> 
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-xl font-bold">Languages & Framework</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
