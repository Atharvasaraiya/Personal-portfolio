import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';
import { Type } from "./Type";
// import {useTypewriter, Cursor} from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          // src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-arial uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-arial
                font-extrabold uppercase">
                Atharva
              </span>
            </h1>
            <Type/>
            {/* <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
            Fusing Technology and Design for Impactful Solutions <br className="sm:block hidden" />
          
            </p> */}
            
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[40vw] 
            lg:ml-[45vw] md:ml-[40vw] xmd:ml-[40vw] 2xl:ml-[50vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh] w-auto h-auto"

            src={shaq}
            // alt="shaquille"
          />
        </div>
      </section>
    </>
  );
};



// function App() {
//   const {text}  = useTypewriter({

//     words: ['Developer', 'Designer', 'Artist'],
//     loop:{},
//   });
//   return (
//     <h1 style={{margin: '50px'}}>
//     Heyyy 
//     <span style={{fontWeight: 'bold', color: 'green'}}>
//     {text}
//     </span>
//     <Cursor/>
//     </h1>
  
//   );
// }







export default Hero;
