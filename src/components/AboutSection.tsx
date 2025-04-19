import React from 'react';
import { Wrench, Gauge, Lightbulb, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-engineer-navy">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-engineer-red"></span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Mechanical Engineering graduate with hands-on internship experience at PT PLN (Persero) PLTA Batang Agam and nearly 4 years as a Freelance Technical Associate. My work spans across technical drawing, maintenance support, and workshop-related tasks, applying practical engineering principles in real-world contexts.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              I’m a quick learner with strong problem-solving ability, effective communication, and proven adaptability. My independent project experience has strengthened my time management, accountability, and cross-functional collaboration skills.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">AutoCAD</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Autodesk Inventor</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">CNC Simulator</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Welding</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Mechanical Maintenance</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Microsoft Excel</Badge>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-white">Key Achievements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Wrench className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Maintenance Exposure</h4>
                <p className="text-gray-600">Assisted mechanical inspection and maintenance activities at a hydroelectric power plant during internship.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Gauge className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Technical Drafting</h4>
                <p className="text-gray-600">Produced detailed mechanical drawings and technical documents for various client-based freelance projects.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Independent Projects</h4>
                <p className="text-gray-600">Managed projects from concept to delivery with minimal supervision, ensuring quality and client satisfaction.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Adaptive Learning</h4>
                <p className="text-gray-600">Enhanced skills through self-learning and adapting to various technical challenges in freelance roles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutSection;
