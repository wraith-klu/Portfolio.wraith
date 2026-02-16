import { motion } from 'framer-motion';
import { Heart, Users, Calendar, TrendingUp } from 'lucide-react';
import { volunteering } from '../data/portfolio';

export const Volunteering = () => {
  return (
    <section id="volunteering" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Volunteering & Leadership
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contributing to community growth through active participation in clubs, events, and technical initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((volunteer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group border border-slate-700 hover:border-blue-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {volunteer.role}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-medium">{volunteer.organization}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400">{volunteer.duration}</span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {volunteer.description}
                  </p>
                  
                  {volunteer.impact && (
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="font-medium text-green-400">Impact</span>
                      </div>
                      <p className="text-sm text-slate-300">
                        {volunteer.impact}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate About Community Impact
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I believe in giving back to the community through active participation in technical events, 
              mentoring fellow students, and contributing to open-source projects that benefit everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
