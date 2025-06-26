
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  
  {
    id: 1,
    title: "Cha-Ching",
    description: "Developed a full-stack personal finance tracker that allows users to manage transactions, set budgets and savings goals, and visualize financial insights — with secure authentication and real-time data handling.",
    image: "/Cha-Ching 2.png",
    tags: ["Spring Boot", "PostgreSQL", "Render"],
    demoLink: "https://cha-ching-90f7d.web.app/",
    githubLink: "https://github.com/sumaiya2028/Cha-Ching",
  },
  {
    id: 2,
    title: "Fake or Safe",
    description: "Developed an interactive web game that challenges users to test their ability to detect AI-generated images.",
    image: "/fakeorsafe.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoLink: "https://fake-or-safe.web.app/",
    githubLink: "https://github.com/sumaiyakhn1/Catch-the-fake",
  },
  {
    id: 3,
    title: "NoteShala",
    description: "Crafting an innovative digital library that empowers teachers to upload valuable study materials, while giving students instant access to download and enrich their academic journey.",
    image: "/noteshala.jpg",
    tags: ["Project-ongoing","TailwindCSS", "Node.js", "PostgreSQL", "Next JS"],
    demoLink: "https://noteshala.vercel.app/",
    githubLink: "https://github.com/rajputsundram/noteshala",
  },
  
  {
    id: 4,
    title: "Carpet Portfolio",
    description: " Currently developing a visually rich portfolio website for DreamKnot Carpet Company to showcase handcrafted rugs, weaves, and thread artistry with a focus on aesthetics and user engagement.",
    image: "/carpet.jpg",
    tags: ["Freelance-ongoing","React", "Chart.js", "Node.js", "PostgreSQL"],
    demoLink: "https://racportfolio.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/carpetopia-showcase",
  },
  
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          My <span className="neon-text-purple">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonpurple to-neonpink rounded-full mx-auto"></div>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Explore my recent projects that showcase my skills and expertise in web development.
          Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="glass-card overflow-hidden group transition-all duration-300 hover:transform hover:translate-y-[-5px]"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-darkbg/90 opacity-100`}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>
              
              <p className="text-white/70">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} className="bg-white/10 hover:bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between pt-4">
                <a 
                  href={project.demoLink} 
                  className="flex items-center text-neonblue hover:text-neonpurple transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  className="flex items-center text-white/70 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="mr-1" /> Source Code
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
