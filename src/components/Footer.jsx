


import React from 'react';
// import { ReactComponent as PinterestImg } from '../assets/footer/pinterest.svg';
// import { ReactComponent as HubImg } from '../assets/footer/hubclone.svg';


const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 text-center relative rounded-md">
      <div className="flex justify-center items-center bg-white text-black p-3 w-1/2 rounded-md absolute inset-0 m-auto">
        {/* <div className="relative h-20 w-20">
          <PinterestImg className="absolute top-0 right-10 h-full w-full object-cover" />
        </div> */}

        <p className="mx-4 font-poppins text-xl font-light">
          &copy; Copyright 2024 - Developed by Atharva Saraiya. All rights reserved.
        </p>

        {/* <div className="relative h-20 w-20">
          <HubImg className="absolute top-0 left-10 h-full w-full object-cover" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
