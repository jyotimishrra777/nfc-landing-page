// import React from "react";

// const ContactButton = ({ textData }) => {
//   return (
//     <>
//       <div>
//         <button className="common-btn contact-btn  px-4 py-1 ">
//           {textData}
//         </button>
//       </div>
//     </>
//   );
// };

// export default ContactButton;

import React from "react";
import { useLocation } from "react-router-dom";

const ContactButton = ({ textData }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToContact = () => {
    if (isHome) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <div>
      <button
        className="common-btn contact-btn px-4 py-1"
        onClick={scrollToContact}
      >
        {textData}
      </button>
    </div>
  );
};

export default ContactButton;
