import { motion } from 'framer-motion'
import { BackgroundElements } from './BackgroundElements'
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Zap,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
} from 'lucide-react'

import { useEffect, useState } from 'react'

interface SkillsPageProps {
  onPageChange: (page: string) => void
}

export function SkillsPage({ onPageChange }: SkillsPageProps) {
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 300)
    return () => clearTimeout(timer)
  }, [])
  const techIcons = [
    { icon: 'fab fa-vuejs', name: 'Vue.js', color: 'bg-green-500' },
    { icon: 'fab fa-react', name: 'React', color: 'bg-blue-500' },
    { icon: 'fab fa-laravel', name: 'Laravel', color: 'bg-red-500' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: 'bg-green-600' },
    { icon: 'fab fa-js-square', name: 'JavaScript', color: 'bg-blue-600' },
  ]
  return (
    <div className='pt-20'>
      <section className='relative flex items-center overflow-hidden'>
        <BackgroundElements variant='hero' />

        <div className='container mx-auto px-6 lg:px-12 py-20 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.div
              className='inline-block glass px-4 py-2 rounded-full mb-6'
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <span className='text-purple-300 font-semibold'>
                Stack Tecnológico
              </span>
            </motion.div>

            <h1 className='text-6xl lg:text-7xl font-bold mb-6'>
              Stack <span className='text-gradient-gold'>Completo</span> e
              Moderno
            </h1>

            <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12'>
              Um mapa das tecnologias que domino e das ferramentas que uso para
              criar experiências incríveis
            </p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                { icon: Code2, value: '20+', label: 'Tecnologias' },
                { icon: Award, value: '5+', label: 'Anos' },
                { icon: TrendingUp, value: '95%', label: 'Proficiência' },
                { icon: Star, value: '150+', label: 'Projetos' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className='glass-dark rounded-xl p-6'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}>
                  <stat.icon className='w-8 h-8 text-purple-400 mx-auto mb-2' />
                  <div className='text-3xl font-bold text-white'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-400'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Competências <span className='text-gradient-gold'>Técnicas</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Arsenal completo para desenvolvimento de aplicações robustas e
              escaláveis
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                category: 'Linguagens',
                icon: Palette,
                gradient: 'from-red-600 to-red-500',
                skills: [
                  {
                    name: 'Javascript',
                    level: 95,
                    color: 'from-yellow-500 to-orange-500',
                  },
                  {
                    name: 'TypeScript',
                    level: 75,
                    color: 'from-blue-500 to-indigo-500',
                  },
                  { name: 'PHP', level: 67, color: 'from-red-500 to-pink-500' },
                  {
                    name: 'Java',
                    level: 56,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'Python',
                    level: 62,
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    name: 'Go',
                    level: 65,
                    color: 'from-purple-500 to-pink-500',
                  },
                ],
              },
              {
                category: 'Frontend',
                icon: Palette,
                gradient: 'from-blue-600 to-blue-500',
                skills: [
                  {
                    name: 'Javascript',
                    level: 95,
                    color: 'from-yellow-500 to-orange-500',
                  },
                  {
                    name: 'Vue.js',
                    level: 93,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'React',
                    level: 86,
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    name: 'Tailwind CSS',
                    level: 82,
                    color: 'from-cyan-500 to-blue-500',
                  },
                  {
                    name: 'Bootstrap',
                    level: 82,
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    name: 'Next.js',
                    level: 88,
                    color: 'from-blue-500 to-indigo-500',
                  },
                ],
              },
              {
                category: 'Backend',
                icon: Database,
                gradient: 'from-green-600 to-green-500',
                skills: [
                  {
                    name: 'Node.js',
                    level: 88,
                    color: 'from-green-600 to-lime-600',
                  },
                  {
                    name: 'Laravel',
                    level: 82,
                    color: 'from-red-500 to-orange-500',
                  },
                  {
                    name: 'GraphQL',
                    level: 65,
                    color: 'from-pink-500 to-purple-500',
                  },
                  {
                    name: 'REST APIs',
                    level: 90,
                    color: 'from-blue-500 to-purple-500',
                  },
                  {
                    name: 'AEM',
                    level: 70,
                    color: 'from-gray-500 to-gray-700',
                  },
                  {
                    name: 'Express.js',
                    level: 80,
                    color: 'from-green-500 to-teal-500',
                  },
                ],
              },
              {
                category: 'Database',
                icon: Database,
                gradient: 'from-purple-600 to-purple-500',
                skills: [
                  {
                    name: 'MySQL',
                    level: 85,
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    name: 'PostgreSQL',
                    level: 80,
                    color: 'from-blue-600 to-indigo-600',
                  },
                  {
                    name: 'MongoDB',
                    level: 70,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'Redis',
                    level: 65,
                    color: 'from-red-500 to-pink-500',
                  },
                  {
                    name: 'SQLite',
                    level: 60,
                    color: 'from-gray-500 to-gray-700',
                  },
                  {
                    name: 'Firebase',
                    level: 75,
                    color: 'from-yellow-500 to-orange-500',
                  },
                ],
              },
              {
                category: 'UI/UX',
                icon: Palette,
                gradient: 'from-pink-600 to-pink-500',
                skills: [
                  {
                    name: 'Figma',
                    level: 90,
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    name: 'Design Systems',
                    level: 88,
                    color: 'from-indigo-500 to-purple-500',
                  },
                  {
                    name: 'Prototipagem',
                    level: 85,
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    name: 'User Research',
                    level: 75,
                    color: 'from-green-500 to-emerald-500',
                  },
                  {
                    name: 'Adobe XD',
                    level: 70,
                    color: 'from-pink-500 to-rose-500',
                  },
                  {
                    name: 'Sketch',
                    level: 65,
                    color: 'from-yellow-500 to-orange-500',
                  },
                ],
              },
              {
                category: 'DevOps',
                icon: Cloud,
                gradient: 'from-orange-600 to-orange-500',
                skills: [
                  {
                    name: 'Git/GitHub',
                    level: 95,
                    color: 'from-gray-700 to-gray-900',
                  },
                  {
                    name: 'Docker',
                    level: 70,
                    color: 'from-blue-500 to-blue-700',
                  },
                  {
                    name: 'CI/CD',
                    level: 65,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'AWS',
                    level: 60,
                    color: 'from-orange-500 to-yellow-500',
                  },
                  {
                    name: 'Kubernetes',
                    level: 55,
                    color: 'from-purple-500 to-indigo-500',
                  },
                  {
                    name: 'Terraform',
                    level: 50,
                    color: 'from-red-500 to-orange-500',
                  },
                ],
              },
              {
                category: 'Testing',
                icon: Zap,
                gradient: 'from-teal-600 to-teal-500',
                skills: [
                  {
                    name: 'Jest',
                    level: 80,
                    color: 'from-blue-500 to-indigo-500',
                  },
                  {
                    name: 'Cypress',
                    level: 75,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'Testing Library',
                    level: 85,
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    name: 'PHPUnit',
                    level: 70,
                    color: 'from-red-500 to-orange-500',
                  },
                  {
                    name: 'Cucumber',
                    level: 58,
                    color: 'from-yellow-500 to-orange-500',
                  },
                  {
                    name: 'Playwright',
                    level: 65,
                    color: 'from-pink-500 to-rose-500',
                  },
                ],
              },
              {
                category: 'Frameworks & CMS',
                icon: Palette,
                gradient: 'from-gray-600 to-gray-500',
                skills: [
                  {
                    name: 'Nuxt.js',
                    level: 85,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'Next.js',
                    level: 88,
                    color: 'from-blue-500 to-indigo-500',
                  },
                  {
                    name: 'AEM',
                    level: 70,
                    color: 'from-gray-500 to-gray-700',
                  },
                  {
                    name: 'WordPress',
                    level: 80,
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    name: 'Drupal',
                    level: 65,
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    name: 'Gatsby',
                    level: 60,
                    color: 'from-indigo-500 to-purple-500',
                  },
                ],
              },
              {
                category: 'Outras Skills',
                icon: Zap,
                gradient: 'from-indigo-600 to-indigo-500',
                skills: [
                  {
                    name: 'Webpack',
                    level: 80,
                    color: 'from-gray-500 to-gray-700',
                  },
                  {
                    name: 'Babel',
                    level: 75,
                    color: 'from-yellow-500 to-orange-500',
                  },
                  {
                    name: 'ESLint',
                    level: 85,
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    name: 'Prettier',
                    level: 80,
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    name: 'Storybook',
                    level: 70,
                    color: 'from-pink-500 to-rose-500',
                  },
                  {
                    name: 'Figma Plugins',
                    level: 65,
                    color: 'from-indigo-500 to-purple-500',
                  },
                ],
              },
            ].map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className='glass-dark rounded-2xl p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}>
                <div className='flex items-center space-x-3 mb-8'>
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}
                    transition={{ duration: 0.6 }}>
                    <category.icon className='w-7 h-7 text-white' />
                  </motion.div>
                  <h3 className='text-2xl font-bold text-white'>
                    {category.category}
                  </h3>
                </div>

                <div className='space-y-6'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}>
                      <div className='flex justify-between mb-2'>
                        <span className='text-white font-semibold text-sm'>
                          {skill.name}
                        </span>
                        <span className='text-purple-300 font-bold'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='h-2 bg-white/10 rounded-full overflow-hidden'>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative min-h-[5vh] py-12 overflow-hidden'>
        <BackgroundElements variant='blue' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Tecnologias <span className='text-gradient-gold'>Principais</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              As ferramentas que uso diariamente para criar experiências
              excepcionais
            </p>
          </motion.div>

          <section className='relative min-h-[5vh] py-16 overflow-hidden'>
            <div className='container mx-auto px-6 lg:px-12 relative z-10'>
              <div className='grid grid-cols-4 md:grid-cols-5 gap-8 border rounded-full'>
                {techIcons.map((tech, index) => (
                  <div
                    key={index}
                    className={`text-center transform transition-all duration-500 ${
                      animateCards
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}>
                    <div
                      className={`w-16 h-16 mx-auto mb-3 ${tech.color} rounded-full flex items-center justify-center text-white text-2xl transform hover:scale-125 hover:rotate-12 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl tech-icon-glow relative overflow-hidden group`}>
                      <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full'></div>
                      {tech.icon.startsWith('fab') ? (
                        <i className={`${tech.icon} relative z-10`} />
                      ) : (
                        <span className='font-bold relative z-10'>TS</span>
                      )}
                    </div>
                    <p className='text-sm font-semibold hover:text-purple-600 transition-colors text-white'>
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='gradient' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Aprendizado <span className='text-gradient-gold'>Contínuo</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Sempre estudando e me atualizando com as últimas tecnologias e
              tendências
            </p>
          </motion.div>

          <div className='max-w-4xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  title: 'Certificações',
                  icon: Award,
                  items: [
                    'Vue.js Advanced Certification',
                    'React Developer Professional',
                    'Laravel Certified Developer',
                    'AWS Cloud Practitioner',
                    'Google UX Design Certificate',
                  ],
                  gradient: 'from-yellow-500 to-orange-500',
                },
                {
                  title: 'Aprendendo Atualmente',
                  icon: TrendingUp,
                  items: [
                    'AI & Machine Learning Integration',
                    'Web3 & Blockchain Development',
                    'Advanced System Architecture',
                    'Kubernetes & Microservices',
                    'Performance Optimization',
                  ],
                  gradient: 'from-purple-500 to-pink-500',
                },
              ].map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className='glass-dark rounded-2xl p-8 border border-white/10'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}>
                  <div className='flex items-center space-x-3 mb-6'>
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-lg flex items-center justify-center`}
                      transition={{ duration: 0.6 }}>
                      <section.icon className='w-6 h-6 text-white' />
                    </motion.div>
                    <h3 className='text-2xl font-bold text-white'>
                      {section.title}
                    </h3>
                  </div>

                  <div className='space-y-3'>
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className='flex items-center space-x-3 p-3 bg-white/5 rounded-lg'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        whileHover={{
                          x: 10,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}>
                        <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                        <span className='text-gray-300'>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='dark' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Atividade de{' '}
              <span className='text-gradient-gold'>Desenvolvimento</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Contribuições e projetos ativos demonstrando consistência e
              dedicação
            </p>
          </motion.div>

          <div className='max-w-5xl mx-auto'>
            <div className='glass-dark rounded-2xl p-8 lg:p-12 border border-white/10'>
              <div className=' rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-500'>
                <h2 className='text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                  Atividade de Desenvolvimento
                </h2>
                <div className='bg-gradient-to-r from-indigo-50/25 to-purple-50/25 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105'>
                  <h3 className='text-base font-semibold mb-3 text-gray-800 text-center'>
                    Gráfico de Atividades
                  </h3>
                  <img
                    src='https://github-readme-activity-graph.vercel.app/graph?username=ThiciannyMarques&theme=minimal&hide_border=true&bg_color=000000&color=6366f1&line=8b5cf6&point=f59e0b&area=true&area_color=e0e7ff'
                    alt='GitHub Activity Graph'
                    className='rounded-lg shadow-sm w-full'
                    loading='lazy'
                  />
                </div>

                <div className='text-center text-xs text-gray-500 mt-4 flex items-center justify-center space-x-2'>
                  <span>Dados atualizados em tempo real do GitHub</span>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative min-h-[5vh] py-12 overflow-hidden'>
        <BackgroundElements variant='gold' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Pronto para <span className='text-gradient-gold'>Colaborar</span>?
            </h2>
            <p className='text-xl text-gray-300 mb-10'>
              Trago todo esse conhecimento e experiência para o seu projeto.
              Vamos criar algo incrível juntos?
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                onClick={() => {
                  onPageChange('home')
                  setTimeout(() => {
                    const contactSection =
                      document.getElementById('contact-section')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover-glow transition-all duration-300 flex items-center justify-center space-x-2 animate-gradient cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <span>Iniciar um Projeto</span>
              </motion.button>

              <motion.button
                onClick={() => onPageChange('projects')}
                className='px-8 py-4 glass text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <span>Ver Meus Projetos</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
