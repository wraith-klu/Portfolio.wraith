import { motion } from 'framer-motion';
import { Users, Award } from 'lucide-react';
import { mentorships } from '../data/portfolio';

export const Mentorships = () => {
  return (
    <section id="mentorships" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mentorship Programs
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Continuous learning through prestigious mentorship programs and professional development initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentorships.map((mentorship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {mentorship.role === 'mentee' ? <Users className="w-6 h-6 text-white" /> : <Award className="w-6 h-6 text-white" />}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {mentorship.program}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-400 font-medium">{mentorship.organization}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-400">{mentorship.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mentorship.role === 'mentee' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {mentorship.role.charAt(0).toUpperCase() + mentorship.role.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-3 leading-relaxed">
                    {mentorship.description}
                  </p>
                  
                  {mentorship.selectionProcess && (
                    <div className="bg-slate-600 rounded-lg p-3">
                      <p className="text-sm text-slate-300">
                        <span className="font-medium text-white">Selection: </span>
                        {mentorship.selectionProcess}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
