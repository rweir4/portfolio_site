import React, { useState, useEffect } from 'react';

// Types
interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  highlights: string[];
  color: string;
}

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools';
  level: number;
}

// Mock API data (in real app, this would come from Rails API)
const mockData = {
  experiences: [
    {
      id: 1,
      company: "Medidata Solutions",
      position: "Software Engineer",
      duration: "2024-2025",
      location: "NYC Based",
      color: "#FF6B9D",
      highlights: [
        "Tech led Clinical Trial Organizations project with PostgreSQL, Ruby on Rails, and React-Redux",
        "Created advanced filters and search across microservices",
        "Migrated platform from EC2 to ECS with autoscaling strategies",
        "Acted as team lead for 6 months, mentored two engineers"
      ]
    },
    {
      id: 2,
      company: "Vimeo",
      position: "Software Engineer II",
      duration: "2021-2022",
      location: "NYC Based",
      color: "#4ECDC4",
      highlights: [
        "Redesigned subscription system for 13M+ users using Ruby on Rails and PostgreSQL",
        "Engineered full-stack support for multi-tier subscriptions",
        "Migrated legacy Haml to React framework, achieving 100% code coverage",
        "Added Stripe integration for complex transaction flows"
      ]
    },
    {
      id: 3,
      company: "Medidata Solutions",
      position: "Software Engineer",
      duration: "2018-2021",
      location: "NYC Based",
      color: "#45B7D1",
      highlights: [
        "Tech led questionnaire template feature for eCOA App with TypeScript",
        "Developed eCOA Library App using Next.js, Ruby on Rails, PostgreSQL",
        "Architected custom rich text editor using Draft.js",
        "Built AWS Lambdas and Infrastructure as Code solutions"
      ]
    }
  ],
  skills: [
    { name: "React", category: "frontend" as const, level: 95 },
    { name: "TypeScript", category: "frontend" as const, level: 90 },
    { name: "JavaScript", category: "frontend" as const, level: 95 },
    { name: "Ruby on Rails", category: "backend" as const, level: 90 },
    { name: "PostgreSQL", category: "backend" as const, level: 85 },
    { name: "AWS", category: "cloud" as const, level: 80 },
    { name: "Docker", category: "tools" as const, level: 75 },
    { name: "Git", category: "tools" as const, level: 90 }
  ]
};

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
};

// Skill Bar Component
const SkillBar = ({ skill }: { skill: Skill }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(skill.level), 500);
    return () => clearTimeout(timer);
  }, [skill.level]);

  const categoryColors = {
    frontend: 'bg-pink-400',
    backend: 'bg-blue-400',
    cloud: 'bg-purple-400',
    tools: 'bg-green-400'
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${categoryColors[skill.category]}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4" 
         style={{ borderLeftColor: experience.color }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{experience.position}</h3>
          <p className="text-lg font-semibold" style={{ color: experience.color }}>{experience.company}</p>
        </div>
        <div className="text-right text-gray-600 mt-2 md:mt-0">
          <p className="font-medium">{experience.duration}</p>
          <p className="text-sm">{experience.location}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" 
                 style={{ backgroundColor: experience.color }}></div>
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
const RebeccaWeirWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Rebecca Weir
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === item 
                      ? 'text-pink-500' 
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              RW
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Rebecca
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full-Stack Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <span>📧 rebeccaweir12@gmail.com</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <span>📱 865-719-7773</span>
              </div>
              <a href="https://www.linkedin.com/in/rebeccalweir/" 
                 className="flex items-center bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
                <span>💼 LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I'm a passionate full-stack software engineer with expertise in Ruby on Rails, 
                  React, TypeScript, and cloud technologies. I love building scalable applications 
                  that make a real impact for millions of users.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                    <span>🎓 BS in Biochemistry & Molecular Biology - University of Tennessee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span>🏆 Encore Award recipient for exceptional contributions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span>📜 Pendo Partner Certified</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div>📊 13M+ users impacted at Vimeo</div>
                    <div>👥 6 months as team lead</div>
                    <div>💯 100% code coverage achieved</div>
                    <div>☁️ AWS & cloud architecture expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
          <div className="space-y-8">
            {mockData.experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h3>
              {mockData.skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Expertise Areas</h3>
              <div className="space-y-4">
                {[
                  { icon: '🚀', title: 'Full-Stack Development', desc: 'End-to-end application development' },
                  { icon: '☁️', title: 'Cloud Architecture', desc: 'AWS, ECS, Lambda, CloudWatch' },
                  { icon: '👥', title: 'Team Leadership', desc: 'Mentoring and technical guidance' },
                  { icon: '🔧', title: 'System Design', desc: 'Scalable architecture and microservices' }
                ].map((area, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">{area.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{area.title}</h4>
                      <p className="text-gray-600">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Let's Connect!</h2>
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <p className="text-xl text-gray-700 mb-8">
              Ready to build something amazing together? I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:rebeccaweir12@gmail.com" 
                 className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Send Email 📧
              </a>
              <a href="https://www.linkedin.com/in/rebeccalweir/" 
                 className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Connect on LinkedIn 💼
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 relative">
        <p>© 2024 Rebecca Weir. Built with React, TypeScript, and lots of ☕</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default RebeccaWeirWebsite;