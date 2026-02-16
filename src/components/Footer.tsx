import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Chettim Chetty Hemasri 
            </h3>
            <p className="text-slate-400 text-sm">
              Building the future with AI and innovation
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 mx-auto md:mx-0"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-slate-700"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            
            {/* Portfolio Link */}
            <div className="mt-4 text-center md:text-right">
              <p className="text-slate-300 text-sm mb-2">Product Designer Portfolio</p>
              <motion.a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="inline-flex p-3 bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-slate-700"
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 pt-8 mt-8 text-center"
        >
          <p className="text-slate-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};