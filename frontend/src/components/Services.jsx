// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";

// Icons
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety, MdLocalPharmacy } from "react-icons/md";
import { FaHeartbeat, FaSyringe, FaPills } from "react-icons/fa";

const datas = [
  {
    Icon: RiMicroscopeLine,
    title: "Lab Test",
    description:
      "Accurate and fast diagnostic testing to support your health decisions.",
  },
  {
    Icon: MdHealthAndSafety,
    title: "Health Check",
    description:
      "Routine health checks to monitor and maintain your overall wellness.",
  },
  {
    Icon: FaHeartbeat,
    title: "Heart Health",
    description: "Support and screenings for maintaining a healthy heart.",
  },
  {
    Icon: MdLocalPharmacy,
    title: "Prescription Refill",
    description: "Quick and easy refills for your ongoing prescriptions.",
  },
  {
    Icon: FaSyringe,
    title: "Vaccination Services",
    description: "Stay protected with essential vaccines for all ages.",
  },
  {
    Icon: FaPills,
    title: "Monthly Medicine Supply",
    description:
      "A convenient program delivering your medicines every month on time.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            We offer a wide range of healthcare services tailored to meet your
            needs and ensure your well-being.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 pt-14">
        {datas.map(({ Icon, title, description },index) => (
          <ServicesCard
            key={index}
            icon={<Icon size={35} className="text-blue-500" />}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
