import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';

// Inisialisasi EmailJS dengan public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const badgeRef = useRef(null); // Tambahkan baris ini


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Mohon isi semua field');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Mohon masukkan alamat email yang valid');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_RECEIVER_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      );

      toast.success('Pesan berhasil dikirim!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Gagal mengirim pesan. Silakan coba lagi nanti.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-engineer-darkgray text-center">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto break-words">
          Interested in discussing opportunities? I'm open to Mechanical Drafter, CNC Machine Technician / Workshop Support, and Maintenance Technician / Mechanical Maintenance Support roles.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-engineer-darkgray">
                Let's Connect
              </h3>

              {/* Lokasi */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-engineer-red/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-engineer-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">Indonesia</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Badge */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-2">Connect with me</h4>
                <div className="flex gap-3">
                  <div ref={badgeRef}>
                    <div
                      className="badge-base LI-profile-badge"
                      data-locale="en_US"
                      data-size="large"
                      data-theme="light"
                      data-type="HORIZONTAL"
                      data-vanity="fauzatul-ilham"
                      data-version="v1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-engineer-darkgray">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border-gray-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border-gray-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full border-gray-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full min-h-[120px] border-gray-200"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2 bg-engineer-navy text-white"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
