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
              A dedicated Mechanical Engineering graduate with practical internship experience at PT PLN (Persero) PLTA Batang Agam and nearly 4 years of diverse freelance work. I possess strong technical capabilities in mechanical maintenance, technical drawing, and machinery operation.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Self-motivated, collaborative, and eager to contribute to engineering teams and grow professionally in the mechanical field. I consistently strengthen my skills through self-directed learning and real-world applications.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">AutoCAD</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Autodesk Inventor</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">CNC Simulator</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Welding</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Microsoft Office</Badge>
              <Badge variant="outline" className="bg-engineer-lightgray text-engineer-darkgray border-gray-200">Mechanical Maintenance</Badge>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-white">Key Achievements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Wrench className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Mechanical Maintenance</h4>
                <p className="text-gray-600">Applied expertise in maintaining complex mechanical systems during internship at a hydropower facility.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Gauge className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Technical Drawing</h4>
                <p className="text-gray-600">Refined detailed technical drawing skills through extensive practice and client project delivery.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-600">Demonstrated analytical thinking and innovative solutions across diverse freelance projects.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-engineer-navy/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-engineer-navy" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Self-Directed Learning</h4>
                <p className="text-gray-600">Continuously expanded skills through self-study and hands-on application in real-world projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
