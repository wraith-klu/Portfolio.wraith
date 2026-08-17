import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle, Copy, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);
  const [copyPhoneSuccess, setCopyPhoneSuccess] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyEmailSuccess(true);
      setTimeout(() => setCopyEmailSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopyPhoneSuccess(true);
      setTimeout(() => setCopyPhoneSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Hi Saurabh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_self');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setIsSubmitting(false);
      setError('Unable to open mail client. Please copy the email address below.');
      setTimeout(() => setError(''), 6000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section id="contact" className="section-wrapper relative">
      <div className="section-blob-violet top-0 left-1/4" />
      <div className="section-blob-rose bottom-0 right-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              Get In <span className="gradient-text-violet">Touch</span>
            </h2>
            <div className="section-divider mx-auto mt-4 mb-4" />
            <p className="section-subtitle mx-auto text-center">
              Ready to collaborate on exciting projects, internships, or technical opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            {/* Left: Info */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-5">
              <div className="glass-card rounded-3xl p-7 border border-white/60 shadow-glass">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Let's Connect</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Open to discussing new opportunities, collaborations, and scalable system architectures. Drop a message or connect through my professional channels!
                </p>
              </div>

              {/* Email copy card */}
              <div className="flex items-center justify-between glass-card p-4.5 rounded-2xl border border-white/60 shadow-glass group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent-violet/10 text-accent-violet rounded-xl border border-accent-violet/20">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-900 font-bold text-sm hover:text-accent-violet transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button onClick={copyEmail} className="p-2 text-slate-400 hover:text-accent-violet rounded-xl hover:bg-accent-violet/10 transition-all duration-300">
                  {copyEmailSuccess ? <CheckCircle size={15} className="text-green-500" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone copy card */}
              <div className="flex items-center justify-between glass-card p-4.5 rounded-2xl border border-white/60 shadow-glass">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent-cyan/10 text-accent-cyan rounded-xl border border-accent-cyan/20">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-slate-900 font-bold text-sm hover:text-accent-cyan transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button onClick={copyPhone} className="p-2 text-slate-400 hover:text-accent-cyan rounded-xl hover:bg-accent-cyan/10 transition-all duration-300">
                  {copyPhoneSuccess ? <CheckCircle size={15} className="text-green-500" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Social row */}
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' }
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 glass-card p-3.5 rounded-2xl border border-white/60 shadow-glass text-slate-600 hover:text-accent-violet hover:border-accent-violet/30 text-sm font-bold transition-all duration-300"
                  >
                    <s.icon size={15} /> {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 border border-white/60 shadow-glass space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-500 uppercase font-black tracking-wider">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                      placeholder="Enter name" required className="glass-input" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-500 uppercase font-black tracking-wider">Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                      placeholder="Enter email" required className="glass-input" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-500 uppercase font-black tracking-wider">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                    placeholder="Subject title" required className="glass-input" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-500 uppercase font-black tracking-wider">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange}
                    placeholder="Write your message..." rows={5} required
                    className="glass-input resize-none" />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={!isSubmitting && !submitted ? { scale: 1.01 } : {}}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-gradient-to-r from-accent-violet via-accent-indigo to-accent-cyan text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm shadow-violet-glow hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] transition-all duration-300 disabled:opacity-60"
                >
                  {submitted ? (
                    <><CheckCircle size={16} /> Sent Successfully!</>
                  ) : isSubmitting ? (
                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-rose-600 text-xs bg-rose-50 border border-rose-200 rounded-2xl p-4"
                  >
                    <AlertCircle size={14} />{error}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};