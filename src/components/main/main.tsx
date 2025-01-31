import Hero from "./hero";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fade } from "../../app/helpers/transition";
import { BentoGrid } from "../ui/bento-grid";
import Project from "./projectjs";
import Footer from "../footer";

const Main = (): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div variants={fade}>
        <Hero />
        <Project />
        <Footer />
      </motion.div>
    </>
  );
};

export default Main;
