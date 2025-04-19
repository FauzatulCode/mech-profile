import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const TimelineItem = ({
  position,
  company,
  period,
  location,
  description
}: {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}) => {
  return (
    <div className="relative pl-8 pb-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
      <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-engineer-navy bg-white"></div>

      <div className="space-y-3">
        <h4 className="text-xl font-semibold text-engineer-darkgray">{position}</h4>
        <div className="text-lg font-medium text-engineer-navy">{company}</div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <ul className="space-y-2 text-gray-700">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-engineer-navy">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-engineer-darkgray text-center">Professional Experience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Practical experience in mechanical and technical support through independent projects and internships.
        </p>

        <div className="max-w-3xl mx-auto">
          <TimelineItem
            position="Independent Technical Associate"
            company="Fauzatul Technical Services · Freelance"
            period="Jun 2021 – Present"
            location="Hybrid · Payakumbuh, West Sumatra"
            description={[
              "Provided versatile technical assistance on various client projects, applying engineering principles where relevant.",
              "Managed independent project work from initiation to completion, focusing on client needs and satisfaction.",
              "Communicated directly with clients to interpret requirements and deliver tailored solutions.",
              "Adapted to diverse project environments and solved technical problems using analytical thinking."
            ]}
          />

          <TimelineItem
            position="Mechanical Maintenance Intern"
            company="PT PLN (Persero) PLTA Batang Agam"
            period="Jul 2020 – Aug 2020"
            location="Agam, Indonesia"
            description={[
              "Performed inspections and preventive maintenance on Intake Weir systems to support plant operations.",
              "Maintained Air Cooler and Oil Cooler units to ensure temperature control efficiency.",
              "Assisted in valve chamber maintenance to support uninterrupted power generation processes."
            ]}
          />
        </div>
      </div>
    </section>

  );
};

export default ExperienceSection;
