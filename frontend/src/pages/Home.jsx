import React from "react";
import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroImg03 from "../assets/images/hero-img03.jpg";
import icon01 from "../assets/images/icon01.jpg";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero content */}

            <div>
              <div className="lg:w-[570px]">
                <h1 className="lg:w-[570px] leading-[460px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help students to ace their study
                </h1>

                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  doloribus eveniet repellendus! Velit deleniti totam
                  reiciendis, alias voluptates in culpa impedit libero commodi
                  quos officiis harum fugiat reprehenderit ab veritatis!
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Institute Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Student Satisfaction</p>
                </div>
              </div>
            </div>

            {/*  Hero content*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Educational services
            </h2>

            <p className="text__para text-center">
              World-class mentorship for everyone. Our Metor system offers
              unmatched, expert support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Mentor
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class mentorship for everyone. Our Metor system offers
                  unmatched, expert support
                </p>

                <Link
                  to="/mentors"
                  className="w-[44px] rounded-full border border-solid 
                  border-[#181A1E] mt-[30px] mx-auto flex items-center 
                  justify-center group-hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class mentorship for everyone. Our Metor system offers
                  unmatched, expert support
                </p>

                <Link
                  to="/mentors"
                  className="w-[44px] rounded-full border border-solid 
                  border-[#181A1E] mt-[30px] mx-auto flex items-center 
                  justify-center group-hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class mentorship for everyone. Our Metor system offers
                  unmatched, expert support
                </p>

                <Link
                  to="/mentors"
                  className="w-[44px] rounded-full border border-solid 
                  border-[#181A1E] mt-[30px] mx-auto flex items-center 
                  justify-center group-hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section start */}

      <About />

      {/* About section end */}

      {/* services section start */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Educational Services</h2>
            <p className="text__para text-center">
              World-Class Educational support for everyone. Our mentor system
              offers unmatched, expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* services section start */}
    </>
  );
};

export default Home;
