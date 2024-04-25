import Image from "next/image";

//components 

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
// import BackImage from '../public/hackxbg.png';


//framer motion

import {motion} from 'framer-motion'

//variants
import { fadeIn } from '../variants'


const Home = () => {
  return (
  <div className="bg-primary h-full "  style={{
    backgroundImage: 'url("/bghackx-daark.webp")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh', 
    width: '100vw', 
  }}>
    {/* Text */}
    <div className="w-full h-full absolute right-0 bottom-0">
      
      {/*<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
      </div>*/}
      {/* particles */}
      <ParticlesContainer />
      {/* <BackImage/> */}
      {/* Avatar */ }
      {/* <motion.div 
        variants={fadeIn('up', 0.4)} 
        initial="hidden" 
        animate="show"
        exit="hidden"
        transition={{duration: 1, ease: 'easeInOut'}}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </motion.div> */}
    </div>
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full
      container mx-auto"> 
        {/* Title */}
        <motion.h1 
        variants={fadeIn('down', 0.4)}
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="h1"> 
          MUJ's Premier <br /><span className="text-accent">Hackathon </span>
        </motion.h1>
        //         <div className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12 text-white">
        //         <motion.p variants={fadeIn('down', 0.3)}
        // initial="hidden" 
        // animate="show"
        // exit="hidden"class="text-sm text-white"><strong>Starts</strong>: September 5, 2024
        //         </motion.p>
        //         <motion.p variants={fadeIn('down', 0.3)}
        // initial="hidden" 
        // animate="show"
        // exit="hidden" class="text-sm text-white"><strong>Ends</strong>: September 6, 2024
        //         </motion.p>
        //         </div>
        {/* Subtitle */}
        <motion.p 
        variants={fadeIn('down', 0.3)}
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white">
          Join MUJHackX and let your world-changing ideas shine bright , compete at a global hackathon with a prize pool of 200,000 rupees.
        </motion.p>
        {/* Btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} 
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="hidden xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div> 
    </div>
    {/* Image */}
    
  </div>
  );
};

export default Home;
