import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { socialLinks, xLink } from '@/constants/socialLinks';

const ContactSection = () => {


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
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-background border-2 border-red-500 rounded-lg focus:border-red-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-background border-2 border-green-500 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-background border-2 border-blue-500 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold rounded-lg transition-all"
                  >
                    Submit
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