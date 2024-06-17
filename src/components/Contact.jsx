// import { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { SectionWrapper } from '../hoc';
// import { slideIn } from '../utils/motion';
// import { send, sendHover } from '../assets';

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('https://formspree.io/f/mvoeydwr', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         setLoading(false);
//         setSubmitStatus('success');
//         alert('Thank you. I will get back to you as soon as possible.');

//         setForm({
//           name: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         throw new Error('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       setLoading(false);
//       setSubmitStatus('error');
//       console.log(error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className="flex-[0.75] bg-jet p-8 rounded-2xl">
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-10 flex flex-col gap-6 font-poppins"
//           action="https://formspree.io/f/mvoeydwr" // Formspree endpoint
//           method="POST"> {/* Added method attribute */}
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">
//               Your Message
//             </span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What's your message?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium resize-none"
//             />
//           </label>

//           <button
//             type="submit"
//             className="live-demo flex justify-center sm:gap-4 
//             gap-3 sm:text-[20px] text-[16px] text-timberWolf 
//             font-bold font-beckman items-center py-5
//             whitespace-nowrap sm:w-[130px] sm:h-[50px] 
//             w-[100px] h-[45px] rounded-[10px] bg-night 
//             hover:bg-battleGray hover:text-eerieBlack 
//             transition duration-[0.2s] ease-in-out"
//             onMouseOver={() => {
//               document
//                 .querySelector('.contact-btn')
//                 .setAttribute('src', sendHover);
//             }}
//             onMouseOut={() => {
//               document.querySelector('.contact-btn').setAttribute('src', send);
//             }}>
//             {loading ? 'Sending' : 'Send'}
//             <img
//               src={send}
//               alt="send"
//               className="contact-btn sm:w-[26px] sm:h-[26px] 
//               w-[23px] h-[23px] object-contain"
//             />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, 'contact');






import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import handBackground from '../assets/personal/hand.png'; // Import the hand PNG
import { send, sendHover } from '../assets'; // Ensure this import is correct

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mvoeydwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setLoading(false);
        setSubmitStatus('success');
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setSubmitStatus('error');
      console.log(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Hand image */}
      {/* <img
        className="absolute bottom-0 ml-[40vw] lg:ml-[45vw] md:ml-[40vw] xmd:ml-[40vw] 2xl:ml-[50vw] sm:h-[90vh] md:h-[70vh] xl:h-[80vh] w-auto h-auto"
        src={handBackground}
        alt="Hand"
      /> */}
      
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="relative z-10 flex-[0.75] bg-jet p-8 rounded-2xl">
         <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
          action="https://formspree.io/f/mvoeydwr"
          method="POST"> 
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document.querySelector('.contact-btn').setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

