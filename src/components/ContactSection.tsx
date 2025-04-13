
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-engineer-darkgray text-center">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in discussing opportunities? I'm open to Mechanical Technician, Junior Mechanical Engineer, and Mechanical Drafter roles.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-engineer-darkgray">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-engineer-red/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-engineer-red" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Email</p>
                    <p className="text-gray-600">youremail@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-engineer-red/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-engineer-red" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Phone</p>
                    <p className="text-gray-600">+62 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-engineer-red/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-engineer-red" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">Padang, Indonesia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-700 mb-3">Connect with me</h4>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-engineer-red hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-engineer-red hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-engineer-red text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Ready to collaborate?</h3>
              <p className="mb-6">Download my complete CV to learn more about my qualifications and experience.</p>
              <Button variant="secondary" className="w-full">Download Full CV</Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-engineer-darkgray">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <Input id="name" placeholder="Enter your name" className="border-gray-200" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                  <Input id="email" type="email" placeholder="Enter your email" className="border-gray-200" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" placeholder="What is this regarding?" className="border-gray-200" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="min-h-[120px] border-gray-200" 
                />
              </div>
              
              <Button className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
