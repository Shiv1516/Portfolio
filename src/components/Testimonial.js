// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ImArrowLeft2 } from "react-icons/im";
// import { ImArrowRight2 } from "react-icons/im";

// function Testimonial() {
//   return (
//     <div className="testimonial-section wrapper ptb80 tac brd-b1">
//       <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
//         What Clients Say
//       </h4>
//       <h2 className="section-heading fw7 fs60 mb32 fc2">Testimonial</h2>
//       <div className="testimonial-card-box ptb32 mt24 df aie fww w85 mlra pr">
//         <div className="testimonial-person-detail flx33 zi3">
//           <div className="person-details mr24 br12 p32 bg-bs-01 tal ">
//             <div className="person-card-img mb40 ofh df br12">
//               <img
//                 src="/images/testimonial.jpg"
//                 alt="portfolio"
//                 className="port-img w100 transit2"
//               />
//             </div>
//             <h4 className="person-card-dep fc3 fw5 ls1 fs12 ttu mb16">
//               Bound - Trolola
//             </h4>
//             <h2 className="person-card-heading fs24 lh30 aic fw7 mb16 fw5">
//               Jone Duone Joe
//             </h2>
//             <h3 className="person-card-dep fs14 mb16">Operating Officer</h3>
//           </div>
//         </div>
//         <div className="testimonial-des flx1 tal zi2 pr aft">
//           <div className="arrows df pa r0">
//             <Link
//               to="/"
//               className="left-icon p16 br8 fc3 fc-h2 transit2 bg-bs-01 mlr12"
//             >
//               <ImArrowLeft2 className="left-arrow fs20" />
//             </Link>
//             <Link
//               to="/"
//               className="right-icon p16 br8 fc3 fc-h2 transit2 bg-bs-01 mlr12"
//             >
//               <ImArrowRight2 className="right-arrow fs20" />
//             </Link>
//           </div>
//           <div className="testimonial-des-card ml12 bef pr bg-bs-01 br12 ptb40 plr40">
//             <div className="test-des-contend df jcsb fww aic brd-b1 pb32">
//               <div className="test-des-card">
//                 <h3 className="test-des-heading fs24 fw6 mb20">
//                   Web App Development
//                 </h3>
//                 <p className="test-des-subheading fw5">
//                   Upwork - Mar 4, 2016 - Aug 30, 2021
//                 </p>
//               </div>
//               <div className="stars df bg-bs-01 p16 br12">
//                 <FaStar className="mlr2 fc5" />
//                 <FaStar className="mlr2 fc5" />
//                 <FaStar className="mlr2 fc5" />
//                 <FaStar className="mlr2 fc5" />
//                 <FaStar className="mlr2 fc5" />
//               </div>
//             </div>
//             <p className="test-description pt24 lh30 fw4 fs18">
//               Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor
//               aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
//               lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam
//               sodales phasellus smauris .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Testimonial;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ImArrowLeft2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jone Duone Joe",
      position: "Operating Officer",
      company: "Bound - Trolola",
      imgSrc: "/images/testimonial-01.jpg",
      description:
        "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante.",
      date: "Upwork - Mar 4, 2016 - Aug 30, 2021",
    },
    {
      name: "Jane Smith",
      position: "CEO",
      company: "TechX - Solutions",
      imgSrc: "/images/testimonial.jpg",
      description:
        "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante.",
      date: "Freelance - Jan 10, 2020 - Dec 15, 2023",
    },
    {
      name: "John Doe",
      position: "Lead Developer",
      company: "DevCorp Technologies",
      imgSrc: "/images/testimonial-02.jpg",
      description:
        "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante.",
      date: "Delhi - Apr 1, 2022 - Aug 31, 2022",
    },
    {
      name: "Emily Johnson",
      position: "Project Manager",
      company: "Creative Minds",
      imgSrc: "/images/testimonial-01.jpg",
      description:
        "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante.",
      date: "Noida - Feb 20, 2022 - Jun 10, 2022",
    },
    {
      name: "Emily Johnson",
      position: "Project Manager",
      company: "Creative Minds",
      imgSrc: "/images/testimonial.jpg",
      description:
        "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante. laoreet sem in, lobortis mauris hendrerit ante.",
      date: "Freelance - Feb 20, 2023 - Jun 10, 2023",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-section wrapper ptb80 tac brd-b1">
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        What Clients Say
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">Testimonial</h2>
      <div className="testimonial-slider">
        <div className="testimonial-card-box ptb32 mt24 df aie fww w85 mlra pr">
          <div className="testimonial-person-detail flx33 zi3">
            <div className="person-details mr24 br12 p32 bg-bs-01 tal">
              <div className="person-card-img mb40 ofh df br12">
                <img
                  src={testimonials[currentIndex].imgSrc}
                  alt="portfolio"
                  className="port-img w100 transit2"
                />
              </div>
              <h4 className="person-card-dep fc3 fw5 ls1 fs12 ttu mb16">
                {testimonials[currentIndex].company}
              </h4>
              <h2 className="person-card-heading fs24 lh30 aic fw7 mb8 fw5">
                {testimonials[currentIndex].name}
              </h2>
              <h3 className="person-card-dep fs12 ml8 mb16">
                {testimonials[currentIndex].position}
              </h3>
            </div>
          </div>
          <div className="testimonial-des flx1 tal zi2 pr aft">
            <div className="arrows df pa r0">
              <button
                onClick={prevTestimonial}
                className="left-icon p16 br8 fc3 fc-h2 transit2 bg-bs-01 mlr12"
              >
                <ImArrowLeft2 className="left-arrow fs20" />
              </button>
              <button
                onClick={nextTestimonial}
                className="right-icon p16 br8 fc3 fc-h2 transit2 bg-bs-01 mlr12"
              >
                <ImArrowRight2 className="right-arrow fs20" />
              </button>
            </div>
            <div className="testimonial-des-card ml12 bef pr bg-bs-01 br12 ptb40 plr40">
              <div className="test-des-contend df jcsb fww aic brd-b1 pb32">
                <div className="test-des-card">
                  <h3 className="test-des-heading fs24 fw6 mb20">
                    Web App Development
                  </h3>
                  <p className="test-des-subheading fw5">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
                <div className="stars df bg-bs-01 p16 br12">
                  <FaStar className="mlr2 fc5" />
                  <FaStar className="mlr2 fc5" />
                  <FaStar className="mlr2 fc5" />
                  <FaStar className="mlr2 fc5" />
                  <FaStar className="mlr2 fc5" />
                </div>
              </div>
              <p className="test-description pt24 lh30 fw4 fs18">
                {testimonials[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
