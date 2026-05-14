
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const webProjects = [
  {
    id: 1,
    title: "Marwar Carpets International",
    description: "Helped in re-designing their product website and designing catalogues for their various collections.",
    image: "/marwar-carpets.png",
    tags: ["React", "PHP"],
    demoLink: "https://marwarcarpets.com/",
  },
   {
    id: 2,
    title: "JR Binjhol",
    description: "Designed the entire website centered around their product-showcase and export-activity.",
    image: "/jr-binjhol.png",
    tags: ["React", "TypeScript"],
    demoLink: "https://jr-binjhol.vercel.app/",
    githubLink: "https://github.com/namandhounchak/JR-Binjhol",
  },
  {
    id: 3,
    title: "Cha-Ching",
    description: "Developed a full-stack personal finance tracker that allows users to manage transactions, set budgets and savings goals, and visualize financial insights — with secure authentication and real-time data handling.",
    image: "/Cha-Ching 2.png",
    tags: ["Spring Boot", "PostgreSQL", "Render"],
    demoLink: "https://cha-ching-90f7d.web.app/",
    githubLink: "https://github.com/sumaiya2028/Cha-Ching",
  },
  {
    id: 4,
    title: "Fake or Safe",
    description: "Developed an interactive web game that challenges users to test their ability to detect AI-generated images.",
    image: "/fakeorsafe.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoLink: "https://fake-or-safe.web.app/",
    githubLink: "https://github.com/sumaiyakhn1/Catch-the-fake",
  },
  {
    id: 5,
    title: "NoteShala",
    description: "Crafting an innovative digital library that empowers teachers to upload valuable study materials, while giving students instant access to download and enrich their academic journey.",
    image: "/noteshala.jpg",
    tags: ["Project-ongoing", "TailwindCSS", "Node.js", "PostgreSQL", "Next JS"],
    demoLink: "https://noteshala.vercel.app/",
    githubLink: "https://github.com/rajputsundram/noteshala",
  },

  {
    id: 6,
    title: "Carpet Portfolio",
    description: " Currently developing a visually rich portfolio website for DreamKnot Carpet Company to showcase handcrafted rugs, weaves, and thread artistry with a focus on aesthetics and user engagement.",
    image: "/carpet.jpg",
    tags: ["Freelance-ongoing", "React", "Chart.js", "Node.js", "PostgreSQL"],
    demoLink: "https://racportfolio.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/carpetopia-showcase",
  },

];

const graphicProjects = [
  {
    id: 101,
    title: "Invitation Poster",
    description: "A warm and scenic event invite design for Clinzerv’s Team Meeting & Award Night, blending professionalism with a serene Kashmiri backdrop.",
    image: "/invitation-poster.png",
  },
  {
    id: 102,
    title: "Certificate",
    description: "A sophisticated certificate design for Kumaon Cancer Conclave, featuring a refined beige-brown aesthetic that conveys warmth, elegance, and formal recognition.",
    image: "/certificate.png",
  },
  {
    id: 103,
    title: "Event Poster",
    description: "A visually inviting event poster for Clinzerv’s Team Meeting & Award Night, combining elegance with the tranquil charm of Srinagar.",
    image: "/event-poster.png",
  },
  {
    id: 104,
    title: "Agenda Poster",
    description: "A visually organized and elegant agenda design for ONCOSHALA–3, featuring a calming blue theme that enhances readability while aligning with the event’s professional and medical tone.",
    image: "/oncoshala-3.png",
  },
  {
    id: 105,
    title: "Agenda Poster",
    description: "An eye-catching poster for the Indus-Cancer Conclave event",
    image: "/indusagenda.png",
  },
  {
    id: 106,
    title: "Logo",
    description: "A bold and symbolic logo for Kumaon Cancer Conclave, featuring a tiger to represent strength, courage, and the fierce fight against cancer.",
    image: "/logo.jpg",
  },
  {
    id: 107,
    title: "Branding",
    description: "A clean and professional event identity for ONCOSHALA – 3, featuring cohesive colors, bold typography, and clear layout to highlight key oncology summit details.",
    image: "/branding.png",
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'web' | 'graphic'>('web');
  const [selectedGraphicProject, setSelectedGraphicProject] = useState<any | null>(null);

  const currentProjects = activeTab === 'web' ? webProjects : graphicProjects;

  return (
    <section id="projects" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold mb-3">
          <button
            onClick={() => setActiveTab('web')}
            className={`transition-all duration-300 ${activeTab === 'web' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
          >
            My <span className={activeTab === 'web' ? 'neon-text-purple' : ''}>Projects</span>
          </button>
          <span className="text-white/20 font-light text-4xl">/</span>
          <button
            onClick={() => setActiveTab('graphic')}
            className={`transition-all duration-300 ${activeTab === 'graphic' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
          >
            Graphic<span className={activeTab === 'graphic' ? 'neon-text-purple' : ''}>-Designs</span>
          </button>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-neonpurple to-neonpink rounded-full mx-auto"></div>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Explore my recent projects that showcase my skills and expertise in web development & graphic-designing.
          Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {currentProjects.map((project) => (
          <Card
            key={project.id}
            className={`glass-card overflow-hidden group transition-all duration-300 hover:transform hover:translate-y-[-5px] flex flex-col ${activeTab === 'graphic' ? 'cursor-pointer' : ''}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => activeTab === 'graphic' && setSelectedGraphicProject(project)}
          >
            <div className={`relative overflow-hidden shrink-0 ${activeTab === 'graphic' ? 'h-80 sm:h-96' : 'h-60'}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-darkbg/90 opacity-100`}></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-white/70 mb-4">
                {project.description}
              </p>

              {activeTab === 'web' && (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project as any).tags.map((tag: string, index: number) => (
                      <Badge key={index} className="bg-white/10 hover:bg-white/20 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4 mt-auto">
                    <a
                      href={(project as any).demoLink}
                      className="flex items-center text-neonblue hover:text-neonpurple transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    {(project as any).githubLink && (
                      <a
                        href={(project as any).githubLink}
                        className="flex items-center text-white/70 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-1" /> Source Code
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Modal for Graphic Design Projects */}
      {selectedGraphicProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedGraphicProject(null)}>
          <div
            className="glass-card relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGraphicProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-neonpurple transition-all border border-white/10 hover:border-neonpurple/50"
            >
              <X size={20} />
            </button>

            <div className="w-full relative flex items-center justify-center bg-black/40 p-4 md:p-8 min-h-[300px]">
              <img
                src={selectedGraphicProject.image}
                alt={selectedGraphicProject.title}
                className="max-w-full h-auto object-contain max-h-[60vh] rounded-xl shadow-2xl"
              />
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-b from-transparent to-black/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white flex items-center gap-3">
                {selectedGraphicProject.title}
                <div className="h-1 w-12 bg-gradient-to-r from-neonpurple to-neonpink rounded-full"></div>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                {selectedGraphicProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
