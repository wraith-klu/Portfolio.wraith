// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { BookOpen, FileText, ExternalLink } from 'lucide-react';
// import { publications } from '../data/portfolio';

// export const Publications = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.3,
//     triggerOnce: true
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 }
//     }
//   };

//   return (
//     <section id="publications" className="py-20 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           <motion.div variants={cardVariants} className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//               Research <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Publications</span>
//             </h2>
//             <p className="text-lg text-slate-300 max-w-2xl mx-auto">
//               Contributing to the advancement of AI and technology through research
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {publications.map((pub, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{ 
//                   scale: 1.03,
//                   rotateX: 5,
//                   boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
//                 }}
//                 className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 group"
//               >
//                 <div className="flex items-start gap-4">
//                   <motion.div
//                     whileHover={{ rotate: 12, scale: 1.1 }}
//                     className={`p-3 rounded-lg ${
//                       pub.type === 'conference' 
//                         ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
//                         : 'bg-gradient-to-r from-purple-400 to-pink-400'
//                     }`}
//                   >
//                     {pub.type === 'conference' ? (
//                       <BookOpen className="text-white" size={24} />
//                     ) : (
//                       <FileText className="text-white" size={24} />
//                     )}
//                   </motion.div>
                  
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
//                       {pub.title}
//                     </h3>
                    
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
//                       <p className="text-blue-400 font-semibold">{pub.venue}</p>
//                       <span className="hidden sm:inline text-slate-500">•</span>
//                       <span className="text-slate-400">{pub.year}</span>
//                       <span className="hidden sm:inline text-slate-500">•</span>
//                       <span className={`text-xs px-2 py-1 rounded-full ${
//                         pub.type === 'conference' 
//                           ? 'bg-blue-400/20 text-blue-400' 
//                           : 'bg-purple-400/20 text-purple-400'
//                       }`}>
//                         {pub.type === 'conference' ? 'Conference' : 'Journal'}
//                       </span>
//                     </div>
                    
//                     {pub.url && (
//                       <motion.a
//                         href={pub.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05, x: 5 }}
//                         className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
//                       >
//                         <ExternalLink size={16} />
//                         View Publication
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };