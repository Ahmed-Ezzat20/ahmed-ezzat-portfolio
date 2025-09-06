import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import projectWebDev from '@/assets/project-web-dev.webp';
import projectMobileApp from '@/assets/project-mobile-app.webp';
import projectBranding from '@/assets/project-branding.webp';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Alzheimer MRI Classifier',
      description: 'Deep learning architecture for Alzheimer\'s Disease classification using MRI scans. Conducted comprehensive data preprocessing, feature engineering, and hyperparameter tuning.',
      image: projectWebDev,
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'Deep Learning', 'MRI Analysis', 'Computer Vision'],
      liveUrl: '#',
      githubUrl: '#',
      results: {
        accuracy: '92% accuracy achieved',
        impact: 'Medical diagnosis support',
        tech: 'CNN architecture'
      }
    },
    {
      id: 2,
      title: 'Plant Leaf Classification Research',
      description: 'Published IEEE research on lightweight plant leaf classification using transfer learning. Designed pipeline for real-time classification on edge devices with improved accuracy.',
      image: projectBranding,
      category: 'ai',
      technologies: ['Transfer Learning', 'Edge Computing', 'IEEE Publication', 'Computer Vision', 'Research'],
      liveUrl: '#',
      githubUrl: '#',
      results: {
        publication: 'IEEE JAC-ECC 2024',
        innovation: 'Transfer learning pipeline',
        impact: 'Real-time edge deployment'
      }
    },
    {
      id: 3,
      title: 'YOLOv8 Prohibited Object Detection',
      description: 'Graduation project implementing YOLOv8 for detecting prohibited objects in online exams, combined with eye-gaze tracking and Siamese network for face recognition.',
      image: projectMobileApp,
      category: 'cv',
      technologies: ['YOLOv8', 'Computer Vision', 'Siamese Networks', 'Eye Tracking', 'PyTorch'],
      liveUrl: '#',
      githubUrl: '#',
      results: {
        performance: '86 mAP detection',
        reduction: '89% cheating reduction',
        innovation: 'Multi-modal approach'
      }
    },
    {
      id: 4,
      title: 'Cars Plate Detection and OCR',
      description: 'License plate detection and OCR system for a car service management platform in KSA. Focused on data validation, preprocessing, and model optimization.',
      image: projectBranding,
      category: 'cv',
      technologies: ['OpenCV', 'OCR', 'Image Processing', 'Python', 'Data Validation'],
      liveUrl: '#',
      githubUrl: '#',
      results: {
        accuracy: '99% error reduction',
        deployment: 'Production system',
        impact: 'Automated registration'
      }
    },
    {
      id: 5,
      title: 'Background Removal Model',
      description: 'Delivered background removal model with quantization optimization, reducing model size by 75% for deployment on edge devices like mobile phones.',
      image: projectWebDev,
      category: 'ai',
      technologies: ['Model Quantization', 'Edge Computing', 'Mobile Deployment', 'Optimization'],
      liveUrl: '#',
      githubUrl: '#',
      results: {
        optimization: '75% size reduction',
        deployment: 'Mobile-ready',
        performance: 'Edge computing'
      }
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'cv', label: 'Computer Vision' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Featured <span className="text-accent-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my AI and machine learning projects, demonstrating expertise in computer vision, 
            deep learning, and production-ready AI solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'accent' : 'minimal'}
                onClick={() => setFilter(category.id)}
                className="transition-spring"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth" />
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col h-full">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-4 bg-gradient-accent text-accent-foreground">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted rounded-lg">
                          <div className="font-semibold text-accent">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <Button variant="accent" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="minimal" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together on your next project?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;