import React from 'react';
import {
  Brain,
  Users,
  Zap,
  Clock,
  FileSpreadsheet,
  PenTool
} from 'lucide-react';

const TechnicalSkills = () => {
  const skills = [
    { name: 'AutoCAD', progress: 70 },
    { name: 'Autodesk Inventor', progress: 65 },
    { name: 'CNC & Lathe Machine Operations', progress: 60 },
    { name: 'Welding', progress: 55 },
    { name: 'Microsoft Office', progress: 80 },
  ];

  return (
    <div className="space-y-5">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-engineer-red rounded-full skill-bar-progress"
              style={{ '--progress': `${skill.progress}%` } as React.CSSProperties}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SoftSkills = () => {
  const softSkills = [
    { name: 'Teamwork', icon: Users },
    { name: 'Communication', icon: Brain },
    { name: 'Adaptability', icon: Zap },
    { name: 'Project Management', icon: Clock },
    { name: 'Analytical Thinking', icon: FileSpreadsheet },
    { name: 'Technical Development', icon: PenTool },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {softSkills.map((skill, index) => (
        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
          <div className="bg-engineer-red/10 p-2 rounded-full">
            <skill.icon className="h-5 w-5 text-engineer-red" />
          </div>
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-engineer-darkgray text-center">Technical Proficiency</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A combination of technical expertise and soft skills that enable me to excel in mechanical engineering roles.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-engineer-darkgray border-b pb-3">Technical Skills</h3>
            <TechnicalSkills />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-engineer-darkgray border-b pb-3">Soft Skills</h3>
            <SoftSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
