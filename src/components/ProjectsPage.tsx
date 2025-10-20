import { motion } from 'framer-motion'
import { BackgroundElements } from './BackgroundElements'
import {
  ExternalLink,
  Award,
  Users,
  Code2,
  BarChart2,
  Accessibility,
  Layout,
  Zap,
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useState, useRef } from 'react'
import { projects } from '../data/projectData.ts'

interface ProjectsPageProps {
  onPageChange: (page: string) => void
}

export function ProjectsPage({ onPageChange }: ProjectsPageProps) {
  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const lastProjectRef = useRef<HTMLDivElement | null>(null)

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'internal', label: 'Sistemas Internos' },
    { id: 'management', label: 'Gerenciamento' },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const projectsToShow = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  const handleShowAllToggle = () => {
    setShowAll((prev) => {
      const newShowAll = !prev
      setTimeout(() => {
        const projectsToScroll = newShowAll
          ? filteredProjects
          : filteredProjects.slice(0, 6)
        const lastProjectElement = document.getElementById(
          `project-${projectsToScroll[projectsToScroll.length - 1].id}`
        )
        lastProjectElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 100)
      return newShowAll
    })
  }

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
                Portfólio de Projetos
              </span>
            </motion.div>

            <h1 className='text-6xl lg:text-7xl font-bold mb-6'>
              Transformando <span className='text-gradient-gold'>Ideias</span>{' '}
              em Realidade
            </h1>

            <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed'>
              Mais de 150 projetos desenvolvidos, cada um com sua história única
              de inovação, desafios superados e resultados excepcionais.
            </p>

            <div className='grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto'>
              {[
                { icon: Code2, value: '80+', label: 'Projetos' },
                { icon: Users, value: '50K+', label: 'Usuários' },
                { icon: Award, value: '95%', label: 'Satisfação' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className='glass-dark rounded-xl p-6'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}>
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

      <section className='relative py-12 overflow-hidden'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='flex flex-wrap justify-center gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id)
                  setShowAll(false)
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover-glow'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20'>
            {projectsToShow.map((project, index) => {
              const isLast = index === projectsToShow.length - 1
              return (
                <motion.div
                  key={project.id}
                  id={`project-${project.id}`}
                  ref={isLast ? lastProjectRef : null}
                  className='group glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  layout>
                  <div className='relative h-64 overflow-hidden'>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover, delay: index * 0.1 :opacity-60 transition-opacity`}
                    />

                    <motion.div
                      className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}>
                      <motion.a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 glass rounded-full flex items-center justify-center hover-glow'
                        transition={{ duration: 0.4 }}>
                        <ExternalLink className='w-5 h-5 text-white' />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className='p-6'>
                    <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-gradient-gold transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-gray-400 mb-4 line-clamp-3'>
                      {project.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className='px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300'
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          }}>
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className='grid grid-cols-3 gap-4 pt-4 border-t border-white/10'>
                      <div className='text-center'>
                        <div className='text-lg font-bold text-white'>
                          {project.metrics.users}
                        </div>
                        <div className='text-xs text-gray-400'>Usuários</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-lg font-bold text-white'>
                          {project.metrics.performance}
                        </div>
                        <div className='text-xs text-gray-400'>Performance</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-lg font-bold text-white'>
                          {project.metrics.satisfaction}
                        </div>
                        <div className='text-xs text-gray-400'>Satisfação</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filteredProjects.length > 6 && (
            <div className='flex justify-center mt-8'>
              <motion.button
                onClick={handleShowAllToggle}
                className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover-glow transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {showAll ? 'Ver Menos' : 'Ver Mais'}
              </motion.button>
            </div>
          )}
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
              Mais que <span className='text-gradient-gold'>Código</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Implementação completa de práticas que garantem qualidade,
              performance, acessibilidade e experiência do usuário.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: BarChart2,
                title: 'Monitoramento',
                description:
                  'Implementação de analytics, métricas de performance e sistemas de logging para garantir qualidade e confiabilidade.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Accessibility,
                title: 'Acessibilidade',
                description:
                  'Desenvolvimento inclusivo seguindo padrões WCAG, garantindo que todos possam usar as aplicações independente de suas limitações.',
                gradient: 'from-green-500 to-green-600',
              },
              {
                icon: Layout,
                title: 'UX Design',
                description:
                  'Foco na experiência do usuário, prototipagem, testes de usabilidade e design thinking aplicado ao desenvolvimento.',
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                icon: Zap,
                title: 'Performance & Escalabilidade',
                description:
                  'Construção de sistemas rápidos, robustos e preparados para crescer conforme a demanda.',
                gradient: 'from-pink-500 to-pink-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-2xl p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon className='w-8 h-8 text-white' />
                </motion.div>

                <h3 className='text-2xl font-bold text-white mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative min-h-[5vh]  py-32 overflow-hidden'>
        <BackgroundElements variant='gold' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Seu Projeto Pode Ser o{' '}
              <span className='text-gradient-gold'>Próximo</span>
            </h2>
            <p className='text-xl text-gray-300 mb-10'>
              Vamos discutir como posso ajudar a transformar sua visão em uma
              experiência digital excepcional.
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
                onClick={() => onPageChange('about')}
                className='px-8 py-4 glass text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <span>Me conhecer Mais</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
