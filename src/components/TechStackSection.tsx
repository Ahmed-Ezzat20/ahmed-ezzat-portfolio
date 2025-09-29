import React from 'react';
import { Card } from '@/components/ui/card';

const TechStackSection = () => {
  const techStack = [
    // Programming Languages
    { name: 'Python', category: 'Programming', color: 'bg-blue-500' },
    { name: 'SQL', category: 'Database', color: 'bg-orange-500' },
    { name: 'JavaScript', category: 'Programming', color: 'bg-yellow-500' },
    { name: 'TypeScript', category: 'Programming', color: 'bg-blue-600' },
    
    // AI/ML Frameworks
    { name: 'PyTorch', category: 'AI/ML', color: 'bg-red-500' },
    { name: 'TensorFlow', category: 'AI/ML', color: 'bg-orange-600' },
    { name: 'Keras', category: 'AI/ML', color: 'bg-red-600' },
    { name: 'Hugging Face', category: 'AI/ML', color: 'bg-yellow-600' },
    { name: 'Scikit-learn', category: 'AI/ML', color: 'bg-blue-400' },
    { name: 'OpenCV', category: 'Computer Vision', color: 'bg-green-600' },
    
    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud', color: 'bg-orange-500' },
    { name: 'Azure', category: 'Cloud', color: 'bg-blue-500' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-600' },
    { name: 'Kubernetes', category: 'DevOps', color: 'bg-blue-700' },
    
    // Databases
    { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-600' },
    { name: 'MySQL', category: 'Database', color: 'bg-blue-500' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-500' },
    { name: 'SQLite', category: 'Database', color: 'bg-gray-500' },
    
    // Data Visualization
    { name: 'Power BI', category: 'Visualization', color: 'bg-yellow-500' },
    { name: 'Tableau', category: 'Visualization', color: 'bg-blue-500' },
    { name: 'Matplotlib', category: 'Visualization', color: 'bg-blue-400' },
    { name: 'Seaborn', category: 'Visualization', color: 'bg-blue-600' },
    { name: 'Plotly', category: 'Visualization', color: 'bg-purple-500' },
    
    // Web Frameworks
    { name: 'Flask', category: 'Web', color: 'bg-gray-600' },
    { name: 'FastAPI', category: 'Web', color: 'bg-green-600' },
    { name: 'React', category: 'Web', color: 'bg-blue-400' },
    { name: 'Node.js', category: 'Web', color: 'bg-green-500' },
    
    // Tools
    { name: 'Git', category: 'Tools', color: 'bg-orange-600' },
    { name: 'GitHub', category: 'Tools', color: 'bg-gray-700' },
    { name: 'VS Code', category: 'Tools', color: 'bg-blue-500' },
    { name: 'Jupyter', category: 'Tools', color: 'bg-orange-500' },
    { name: 'Postman', category: 'Tools', color: 'bg-orange-500' },
    { name: 'Figma', category: 'Design', color: 'bg-purple-500' },
  ];

  const categories = [
    'Programming',
    'AI/ML', 
    'Computer Vision',
    'Cloud',
    'DevOps',
    'Database',
    'Visualization',
    'Web',
    'Tools',
    'Design'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            My Full <span className="text-accent-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to build 
            cutting-edge AI solutions and production-ready applications.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12">
          {techStack.map((tech, index) => (
            <Card 
              key={index}
              className="p-4 text-center shadow-card hover:shadow-elegant transition-smooth animate-scale-hover group cursor-pointer"
            >
              <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-sm">
                  {tech.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <h4 className="text-sm font-semibold mb-1">{tech.name}</h4>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </Card>
          ))}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="px-4 py-2 bg-gradient-subtle rounded-full border border-border text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>

        {/* What I Do Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">
            What I <span className="text-accent-gradient">Do?</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-accent-foreground font-bold">+</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">AI & ML Engineering</h4>
              <p className="text-muted-foreground">
                Building production-ready AI systems with focus on Computer Vision, 
                Generative AI, and Voice AI solutions. Expertise in model optimization, 
                deployment, and scaling for real-world applications.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">DevOps & MLOps</h4>
              <p className="text-muted-foreground">
                Implementing robust MLOps pipelines for model deployment, monitoring, 
                and continuous integration. Experience with containerization, 
                cloud platforms, and edge computing optimization.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="text-secondary-foreground font-bold">📊</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Data Science & Analysis</h4>
              <p className="text-muted-foreground">
                Extracting insights from complex datasets using advanced analytics, 
                statistical modeling, and visualization techniques. Building data-driven 
                solutions that inform strategic decisions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
