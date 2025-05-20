// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";

// Icons
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety, MdLocalPharmacy } from "react-icons/md";
import { FaHeartbeat, FaSyringe, FaPills } from "react-icons/fa";

const Services = () => {
  // Icons for each service
  const icon1 = <RiMicroscopeLine size={35} className="text-blue-500" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-blue-500" />;
  const icon3 = <FaHeartbeat size={35} className="text-blue-500" />;
  const icon4 = <MdLocalPharmacy size={35} className="text-blue-500" />;
  const icon5 = <FaSyringe size={35} className="text-blue-500" />;
  const icon6 = <FaPills size={35} className="text-blue-500" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            We offer a wide range of healthcare services tailored to meet your needs and ensure your well-being.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>

      {/* First Row of Services */}
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Lab Test"
          description="Accurate and fast diagnostic testing to support your health decisions."
        />
        <ServicesCard
          icon={icon2}
          title="Health Check"
          description="Routine health checks to monitor and maintain your overall wellness."
        />
        <ServicesCard
          icon={icon3}
          title="Heart Health"
          description="Support and screenings for maintaining a healthy heart."
        />
      </div>

      {/* Second Row of Services */}
      <div className="flex flex-col lg:flex-row gap-5 pt-14 mb-5">
        <ServicesCard
          icon={icon4}
          title="Prescription Refill"
          description="Quick and easy refills for your ongoing prescriptions."
        />
        <ServicesCard
          icon={icon5}
          title="Vaccination Services"
          description="Stay protected with essential vaccines for all ages."
        />
        <ServicesCard
          icon={icon6}
          title="Monthly Medicine Supply"
          description="A convenient program delivering your medicines every month on time."
        />
      </div>
    </div>
  );
};

export default Services;
