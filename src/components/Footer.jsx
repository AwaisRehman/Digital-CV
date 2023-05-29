import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { linkedin } from "../assets";
import { socials } from "../constants";


const SocialProfile = ({
    social_profile_link,
  }) => (
<div>
      

       <div className='absolute inset-x-0 bottom-20 h-20 flex justify-start m-9 card-img_hover'>
            <div
              onClick={() => window.open(social_profile_link, "_blank")}
              className='black-gradient w-24 h-24 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
         
          

   </div>
   </div>
  );
  
  const LinkedInProfile = () => {
    return (
      <>
      <div className="absolute inset-x-11 bottom-60 h-10 ...">
      <h3 className={styles.sectionHeadText}>Connect with me!</h3>
      <div className="absolute inset-20 px-10 py-6 bottom-30 h-10 flex justify-start">
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>LinkedIn Profile</p>
      </div>
      
      </div >
        <div className='mt-20 flex flex-wrap gap-7'>
          {socials.map((social, index) => (
            <SocialProfile key={`social-${index}`} index={index} {...social} />
          ))}
        </div>
      </>
    );
  };
  
  export default SectionWrapper(LinkedInProfile, "");
  