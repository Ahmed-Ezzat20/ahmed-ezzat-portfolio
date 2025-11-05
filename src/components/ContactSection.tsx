import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { socialLinks, xLink } from '@/constants/socialLinks';
import { toast } from '@/components/ui/sonner';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success('Message sent successfully!', {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'ahmedezzat0247@gmail.com',
      href: 'mailto:ahmedezzat0247@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+20 109 163 8280',
      href: 'tel:+201091638280',
    },
    {
      icon: faLocationDot,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#',
    },
  ];

  // Use centralized social links and include X for this contact section
  const contactSocialLinks = [...socialLinks, xLink];



  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Let's <span className="text-accent-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in AI solutions or collaboration opportunities? I'd love to discuss 
            how we can leverage artificial intelligence to solve your challenges.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid lg:grid-cols-2 gap-12 animate-slide-up">
            
            {/* Left Column - Contact Info */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have a question or a project in mind? Feel free to reach out.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={contact.icon} className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <a 
                        href={contact.href}
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Location:</strong> Cairo, Egypt
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {contactSocialLinks.map((social, index) => {
                  const linkProps = social.type === 'external'
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:shadow-glow w-12 h-12"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label} {...linkProps}>
                        <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6 order-1 lg:order-2">
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-smooth text-foreground placeholder:text-muted-foreground"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-smooth text-foreground placeholder:text-muted-foreground"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-smooth text-foreground placeholder:text-muted-foreground resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-3 bg-gradient-accent hover:shadow-glow text-accent-foreground font-semibold rounded-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Card>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 lg:p-12 bg-gradient-primary text-primary-foreground shadow-elegant">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Ready to Start Your AI Project?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Every innovative AI solution starts with understanding your challenges. Let's discuss your vision 
              and explore how we can leverage AI to create transformative solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Schedule a Consultation
              </Button>
              <Button variant="elegant" size="lg">
                View AI Services
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;