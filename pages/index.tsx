/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { fadeInUp, routerAnimarion, stagger } from "../animation";
import ServiceCard from "../component/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <motion.div
    variants={routerAnimarion}
    initial="initial"
    animate="animate"
    exit="exit"
    className="flex flex-col flex-grow px-6 pt-1"
    
    >
      <h5 className="my-3 font-medium">
      <p>
      Dynamic and creative frontend developer with over 5 years of experience in design and devlopmet of web application, I am a hard working and dedicated professional front-end developer interface designer with a keen eye for detail and a determination to deliver the very highest quality within budget and on time. 
      </p>
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-200"
        style={{
          marginLeft: "-2.5rem",
          marginRight: "-2.5rem",
          marginBottom: "-1rem",
        }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">What I offer</h4>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const BASE_URL = process.env.VERCEL_URL;
  // const res = await fetch(`${BASE_URL}api/services`);
  // const data = await res.json();
  return { props: { BASE_URL: BASE_URL } };
};