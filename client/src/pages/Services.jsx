import React from 'react';


import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";


const Services = () => {
  return (
    <div>
          {/* Services section */}
            <section>
              <div className="container">
                <div className="lg:w-[470px] mx-auto">
                  <h2 className="heading text-center">
                    Providing the best medical services
                  </h2>
                  <p className="text__para text-center">
                    World-class care for everyone. Our health system offers unmatched,
                    expert healthcare.
                  </p>
                </div>
      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                  {/* Service Card 1 */}
                  <div className="py-[30px] px-5 bg-white rounded-lg shadow-md">
                    <div className="flex items-center justify-center">
                      <img src={icon01} alt="Find a doctor icon" />
                    </div>
      
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                        Find a Doctor
                      </h2>
                      <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                        Connect with our expert physicians who are dedicated to
                        providing personalized care tailored to your needs.
                      </p>
                      <Link
                        to="/doctors"
                        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                      >
                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                      </Link>
                    </div>
                  </div>
      
                  {/* Service Card 2 */}
                  <div className="py-[30px] px-5 bg-white rounded-lg shadow-md">
                    <div className="flex items-center justify-center">
                      <img src={icon02} alt="Find location icon" />
                    </div>
      
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                        Find a Location
                      </h2>
                      <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                        With multiple facilities across the region, quality healthcare
                        is always within your reach.
                      </p>
                      <Link
                        to="/locations"
                        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                      >
                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                      </Link>
                    </div>
                  </div>
      
                  {/* Service Card 3 */}
                  <div className="py-[30px] px-5 bg-white rounded-lg shadow-md">
                    <div className="flex items-center justify-center">
                      <img src={icon03} alt="Book appointment icon" />
                    </div>
      
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                        Book Appointment
                      </h2>
                      <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                        Schedule your visit online and skip the waiting room. Our
                        streamlined booking process puts you in control.
                      </p>
                      <Link
                        to="/doctors"
                        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                      >
                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            <About />
      
            {/* services section */}
            <section>
              <div className="container">
                <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center">Our medical services</h2>
                  <p className="text__para text-center">
                    World-class care for everyone. Our health System offers unmatched,
                    expert health care.
                  </p>
                </div>
      
                <ServiceList />
              </div>
            </section>
      
            {/* services section ended */}
      
    </div>
  )
}

export default Services
