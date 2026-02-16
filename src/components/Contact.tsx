import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chettimchettyhemasri@gmail.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Try EmailJS first (requires setup at emailjs.com)
      try {
        // These would need to be replaced with actual EmailJS credentials
        // For now, we'll skip this and go to mailto fallback
        throw new Error('EmailJS not configured');
        
        /* Uncomment and configure when EmailJS is set up:
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'chettimchettyhemasri@gmail.com'
          },
          'YOUR_PUBLIC_KEY'
        );
        */
      } catch (emailJsError) {
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
        const body = encodeURIComponent(
          `Hi Chettim,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
        );
        const mailtoUrl = `mailto:chettimchettyhemasri@gmail.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.open(mailtoUrl, '_self');
      }
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (err) {
      console.error('Email Error:', err);
      setIsSubmitting(false);
      setError('Unable to send email automatically. Please copy the email address below and send manually.');
      setTimeout(() => setError(''), 8000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, and innovative projects. 
                  Feel free to reach out if you'd like to work together or just chat about technology!
                </p>
              </div>
              
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Github, label: 'GitHub', value: 'View Projects', href: personalInfo.github },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: personalInfo.linkedin }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    <contact.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{contact.label}</p>
                    <p className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.form
                onSubmit={handleSubmit}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 space-y-6"
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.2)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      required
                    />
                    <label className="absolute left-4 -top-2.5 text-sm text-slate-400 bg-slate-800 px-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 transition-all duration-300">
                      Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      required
                    />
                    <label className="absolute left-4 -top-2.5 text-sm text-slate-400 bg-slate-800 px-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 transition-all duration-300">
                      Email
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-slate-400 bg-slate-800 px-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 transition-all duration-300">
                    Subject
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    rows={5}
                    className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-slate-400 bg-slate-800 px-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 transition-all duration-300">
                    Message
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={!isSubmitting && !submitted ? { scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' } : {}}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send size={20} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                    <motion.button
                      onClick={copyEmail}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 text-sm"
                    >
                      <Copy size={16} />
                      {copySuccess ? 'Email Copied!' : 'Copy Email Address'}
                    </motion.button>
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};