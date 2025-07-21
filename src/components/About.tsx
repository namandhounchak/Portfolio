
import { Code, Terminal, Server, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-neonblue" size={24} />,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", ]
    },
    {
      title: "Backend",
      icon: <Server className="text-neonpurple" size={24} />,
      skills: ["Node.js", "Spring Boot", "MongoDB", "PostgreSQL", ]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="text-neonpink" size={24} />,
      skills: ["Git", "Firebase", "Render", "CI/CD", "Framer Motion"]
    },
    {
      title: "Design",
      icon: <Palette className="text-neonblue" size={24} />,
      skills: ["Figma", "Responsive Design", "UI/UX", "Prototyping"]
    }
  ];

  return (
    <section id="about" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          About <span className="neon-text-blue">Me</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonblue to-neonpink rounded-full mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Hi, I'm <span className="neon-text-purple">Naman Dhounchak</span>
            </h3>
            <p className="text-white/80">
            I’m a full-stack developer with practical experience building responsive and user-focused web applications. I enjoy writing clean, efficient code and developing solutions that are both robust and intuitive — always aiming to balance functionality with a smooth user experience.

            </p>
            <p className="text-white/80">
            My journey into web development began with a curiosity about how the internet works under the hood. Since then, I’ve built a strong foundation in backend technologies like Spring Boot and PostgreSQL, while also gaining hands-on experience with React on the frontend. Projects like Cha-Ching and Fake or Safe have helped me apply these skills to real-world use cases and refine my development process. I’m constantly exploring new tools and frameworks to stay sharp and keep growing as a developer.

            </p>
            <p className="text-white/80">
            Beyond coding, I enjoy breezing through novels, immersing myself in movies, and canvasing through engaging games that spark curiosity or challenge my thinking, and brainstorming UI and system design — hence always on the lookout for creative ways to improve and innovate.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border">
            <img 
              src="/test.png" 
              alt="Developer Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-10">
          Technical <span className="neon-text-pink">Skills</span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover:border-neonblue/50 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-xl font-medium">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neonblue"></span>
                      <span className="text-white/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
