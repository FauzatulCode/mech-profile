import React from 'react';
import { GraduationCap, BookOpen, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-engineer-darkgray text-center">Education & Qualifications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Academic background and practical coursework that shaped my foundation in mechanical engineering and technical support.
        </p>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-sm overflow-hidden border-0">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Left side with university info */}
                <div className="w-full md:w-1/3 bg-engineer-navy text-white p-4 md:p-6 flex flex-col">
                  <GraduationCap className="h-8 w-8 md:h-12 md:w-12 mb-4 text-engineer-navy" />
                  <h3 className="text-lg md:text-xl font-bold mb-1 break-words">Universitas Negeri Padang</h3>
                  <p className="text-white/80 mb-4 text-sm md:text-base">Associate's Degree in Mechanical Engineering</p>
                  <div className="mt-auto flex items-center gap-1 text-sm md:text-base">
                    <Star className="h-4 w-4 md:h-5 md:w-5 fill-white text-white" />
                    <span className="font-semibold">GPA: 3.56</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm mt-2">Jul 2018 – Nov 2021</p>
                </div>

                {/* Right side with coursework */}
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-engineer-navy" />
                    <h4 className="text-lg font-semibold text-engineer-darkgray">Relevant Coursework</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-medium text-gray-700 break-words">Welding & Fabrication</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-medium text-gray-700 break-words">Technical Drawing</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-medium text-gray-700 break-words">CNC & Lathe Machine Operations</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-medium text-gray-700 break-words">Mechanical Systems & Maintenance</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-engineer-darkgray mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                        <span className="font-medium text-gray-700">Indonesia</span>
                        <span className="text-xs ml-2 text-gray-500">(Native)</span>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                        <span className="font-medium text-gray-700">English</span>
                        <span className="text-xs ml-2 text-gray-500">(Conversational)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;