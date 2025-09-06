import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Smartphone, Database, Globe, Users, Briefcase } from 'lucide-react';


const AboutSection = () => {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: Database,
      skills: [
        { name: 'Computer Vision', experience: 'Expert', years: '3+ years' },
        { name: 'Deep Learning', experience: 'Expert', years: '3+ years' },
        { name: 'Generative AI', experience: 'Advanced', years: '2+ years' },
        { name: 'RAG Systems', experience: 'Advanced', years: '2+ years' },
      ]
    },
    {
      category: 'Voice AI & NLP',
      icon: Smartphone,
      skills: [
        { name: 'Text-to-Speech', experience: 'Expert', years: '2+ years' },
        { name: 'Speech Processing', experience: 'Advanced', years: '2+ years' },
        { name: 'Natural Language Processing', experience: 'Advanced', years: '2+ years' },
      ]
    },
    {
      category: 'Development & Deployment',
      icon: Code2,
      skills: [
        { name: 'Python/PyTorch', experience: 'Expert', years: '4+ years' },
        { name: 'Model Deployment', experience: 'Advanced', years: '2+ years' },
        { name: 'Edge Computing', experience: 'Advanced', years: '1+ years' },
        { name: 'API Development', experience: 'Advanced', years: '2+ years' },
      ]
    },
    {
      category: 'Research & Leadership',
      icon: Briefcase,
      skills: [
        { name: 'Research & Development', experience: 'Expert', years: '3+ years' },
        { name: 'IEEE Publications', experience: 'Advanced', years: '1+ years' },
        { name: 'Team Leadership', experience: 'Advanced', years: '2+ years' },
        { name: 'Community Building', experience: 'Expert', years: '2+ years' },
      ]
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'AI Engineer',
      company: 'GenArabia (Full-time)',
      description: 'Building Voice AI Solutions as part of the Gen AI Solutions Company. Focus on scalable AI implementations.',
    },
    {
      year: '2025',
      title: 'AI Engineer',
      company: 'Andalusi (Part-time)',
      description: 'Delivered background removal model with 75% size reduction through quantization for mobile deployment.',
    },
    {
      year: '2024',
      title: 'AI Engineer',
      company: 'E Connect Africa',
      description: 'Developed course generation pipeline with RAG systems, TTS models, and 2D character animation.',
    },
    {
      year: '2024',
      title: 'Site Supervisor',
      company: 'almentor',
      description: 'Part-time management role overseeing site operations and team coordination.',
    },
    {
      year: '2024',
      title: 'BS Computer Science',
      company: 'Helwan University',
      description: 'Graduated with Very Good GPA (3.27). Published IEEE research on plant leaf classification.',
    },
    {
      year: '2023',
      title: 'ML Intern',
      company: 'TensorGraph',
      description: 'Utilized BERT for entity recognition and GPT for synthetic data generation.',
    },
    {
      year: '2022-2024',
      title: 'Instructor',
      company: 'Developer Career',
      description: 'Part-time teaching role focusing on team management and technical instruction.',
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Skills section is visible - no animation needed for new design
        }
      });
    }, observerOptions);

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          setTimelineHeight(scrollPercent * 100);
          
          // Show timeline items progressively
          const newVisibleItems = timeline.map((_, index) => {
            return scrollPercent > (index + 1) / (timeline.length + 1);
          });
          setVisibleItems(newVisibleItems);
        }
      });
    }, { threshold: 0 });

    if (skillsRef.current) skillsObserver.observe(skillsRef.current);
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          setTimelineHeight(scrollPercent * 100);
          
          const newVisibleItems = timeline.map((_, index) => {
            return scrollPercent > (index + 1) / (timeline.length + 1);
          });
          setVisibleItems(newVisibleItems);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      skillsObserver.disconnect();
      timelineObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const values = [
    {
      icon: Code2,
      title: 'Research-Driven',
      description: 'Translating cutting-edge research into practical, production-ready solutions.',
    },
    {
      icon: Users,
      title: 'Impact-Focused',
      description: 'Building AI systems that solve real-world problems and create meaningful value.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with AI and machine learning.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            About <span className="text-accent-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate AI Engineer specializing in Computer Vision and Generative AI. 
            I translate cutting-edge research into production-level solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-serif font-semibold mb-6">My Journey</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                My journey into AI began during my Computer Science studies at Helwan University, 
                where I discovered the fascinating world of machine learning and computer vision. 
                What started as academic curiosity quickly evolved into a passion for solving real-world problems with AI.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on diverse AI projects, 
                from developing background removal models for mobile applications to creating 
                comprehensive course generation pipelines with RAG systems and TTS models. 
                Each project has deepened my understanding of how AI can transform industries.
              </p>
              <p>
                As a <strong>Manus Fellow</strong>, I'm actively involved in the AI community, hosting events and 
                hackathons in Cairo to share knowledge and inspire the next generation of AI engineers. 
                I also served as <strong>ComSoc Chapter Chairman</strong> at IEEE Helwan Student Branch, where I led 
                a team of nearly 50 volunteers across various tech tracks.
              </p>
              <p>
                With over <strong>13,000 LinkedIn followers</strong>, I'm passionate about building AI communities and 
                translating cutting-edge research into production-level solutions that create real impact. 
                My recent focus has been on <strong>Voice AI Solutions</strong> and advancing the field through 
                both practical applications and research publications.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <Card key={categoryIndex} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold">{category.category}</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between p-3 bg-gradient-subtle rounded-lg">
                          <div>
                            <span className="font-medium text-sm">{skill.name}</span>
                            <div className="text-xs text-muted-foreground">{skill.years}</div>
                          </div>
                          <Badge 
                            variant={skill.experience === 'Expert' ? 'default' : 'secondary'}
                            className={skill.experience === 'Expert' ? 'bg-gradient-accent text-accent-foreground' : ''}
                          >
                            {skill.experience}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>



        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth animate-scale-hover"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;