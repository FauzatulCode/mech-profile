import React from 'react';
import { Wrench, Gauge, Lightbulb, Hammer } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-engineer-navy">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-engineer-red"></span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Mechanical Engineering graduate with practical experience from PT PLN (Persero) PLTA Batang Agam and nearly 4 years as a Freelance Technical Associate. My expertise spans technical drawing, mechanical maintenance, and workshop operations—bringing real-world engineering solutions into client projects.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Known for being a fast learner with strong problem-solving skills, I thrive in dynamic environments and excel at communicating effectively across teams. My independent project experience sharpened my time management, adaptability, and accountability.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {/* Technical Skills */}
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">AutoCAD</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Autodesk Inventor</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Technical Drawing</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">CNC & Lathe Machine Operation</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Mechanical Maintenance</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Microsoft Excel</Badge>

              {/* Soft Skills */}
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Project Management</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Communication</Badge>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-white">Key Achievements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Wrench className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Maintenance Exposure</h4>
                <p className="text-gray-600">
                  Assisted in mechanical inspection and maintenance at a hydroelectric power plant during my internship.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Gauge className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Technical Drafting</h4>
                <p className="text-gray-600">
                  Created detailed mechanical drawings and technical documents tailored to client needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Independent Projects</h4>
                <p className="text-gray-600">
                  Delivered end-to-end engineering solutions with minimal supervision while ensuring quality and efficiency.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Hammer className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Adaptive Learning</h4>
                <p className="text-gray-600">
                  Continuously upgraded my skill set through self-learning to tackle various technical challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;