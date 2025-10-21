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
import { useState, useRef, useCallback, memo } from 'react'
import { projects } from '../data/projectData.ts'

interface ProjectsPageProps {
  onPageChange: (page: string) => void
}

export const ProjectsPage = memo(function ProjectsPage({
  onPageChange,
}: ProjectsPageProps) {
  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const lastProjectRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'internal', label: 'Sistemas Internos' },
    { id: 'management', label: 'Gerenciamento' },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  const projectsToShow = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  const handleShowAllToggle = useCallback(() => {
    const newShowAll = !showAll
    setShowAll(newShowAll)

    setTimeout(() => {
      const projectsToScroll = newShowAll
        ? filteredProjects
        : filteredProjects.slice(0, 6)
      if (projectsToScroll.length > 0) {
        const lastProjectElement = document.getElementById(
          `project-${projectsToScroll[projectsToScroll.length - 1].id}`
        )
        lastProjectElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      }
    }, 150)
  }, [showAll, filteredProjects])

  const handleFilterChange = useCallback((categoryId: string) => {
    setFilter(categoryId)
    setShowAll(false)
  }, [])

  const handleContactClick = useCallback(() => {
    onPageChange('home')
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section')
      contactSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }, [onPageChange])

  const handleAboutClick = useCallback(() => {
    onPageChange('about')
  }, [onPageChange])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className='pt-16 sm:pt-20' role='main' aria-label='Página de projetos'>
      <section
        className='relative flex items-center overflow-hidden min-h-[80vh] sm:min-h-screen'
        aria-labelledby='projects-hero-title'>
        <BackgroundElements variant='hero' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.div
              className='inline-block glass px-4 py-2 rounded-full mb-4 sm:mb-6'
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              role='status'
              aria-label='Portfólio de projetos'>
              <span className='text-purple-300 font-semibold text-sm sm:text-base'>
                Portfólio de Projetos
              </span>
            </motion.div>

            <h1
              id='projects-hero-title'
              className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
              Transformando <span className='text-gradient-gold'>Ideias</span>{' '}
              em Realidade
            </h1>

            <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12 px-4'>
              Mais de 150 projetos desenvolvidos, cada um com sua história única
              de inovação, desafios superados e resultados excepcionais.
            </p>

            <motion.div
              className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto'
              variants={containerVariants}
              initial='hidden'
              animate='visible'>
              {[
                {
                  icon: Code2,
                  value: '80+',
                  label: 'Projetos',
                  ariaLabel: 'Mais de 80 projetos desenvolvidos',
                },
                {
                  icon: Users,
                  value: '50K+',
                  label: 'Usuários',
                  ariaLabel: 'Mais de 50 mil usuários atendidos',
                },
                {
                  icon: Award,
                  value: '95%',
                  label: 'Satisfação',
                  ariaLabel: '95 porcento de satisfação do cliente',
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className='glass-dark rounded-xl p-4 sm:p-6'
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role='article'
                  aria-label={stat.ariaLabel}>
                  <stat.icon
                    className='w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2'
                    aria-hidden='true'
                  />
                  <div className='text-2xl sm:text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-xs sm:text-sm text-gray-400'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className='relative py-12 sm:py-20 overflow-hidden'
        aria-labelledby='projects-grid-title'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h2 id='projects-grid-title' className='sr-only'>
            Grid de Projetos
          </h2>

          <motion.div
            className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            role='tablist'
            aria-label='Filtrar projetos por categoria'>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover-glow'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role='tab'
                aria-selected={filter === category.id}
                aria-controls='projects-grid'>
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            role='grid'
            aria-label='Lista de projetos'
            id='projects-grid'>
            {projectsToShow.map((project, index) => {
              const isLast = index === projectsToShow.length - 1
              return (
                <motion.article
                  key={project.id}
                  id={`project-${project.id}`}
                  ref={isLast ? lastProjectRef : null}
                  className='group glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-900'
                  variants={itemVariants}
                  layout
                  role='gridcell'
                  tabIndex={0}>
                  <div className='relative h-48 sm:h-56 lg:h-64 overflow-hidden'>
                    <ImageWithFallback
                      src={project.image}
                      alt={`Imagem do projeto ${project.title}`}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                      aria-hidden='true'
                    />

                    <div className='absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <motion.a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover-glow focus:outline-none focus:ring-2 focus:ring-white'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Visitar projeto ${project.title} (abre em nova aba)`}>
                        <ExternalLink
                          className='w-4 h-4 sm:w-5 sm:h-5 text-white'
                          aria-hidden='true'
                        />
                      </motion.a>
                    </div>
                  </div>

                  <div className='p-4 sm:p-6'>
                    <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gradient-gold transition-colors duration-300'>
                      {project.title}
                    </h3>
                    <p className='text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3 leading-relaxed'>
                      {project.description}
                    </p>

                    <div
                      className='flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4'
                      role='list'
                      aria-label='Tecnologias utilizadas'>
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className='px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300'
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          }}
                          role='listitem'>
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div
                      className='grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10'
                      role='group'
                      aria-label='Métricas do projeto'>
                      <div className='text-center'>
                        <div className='text-base sm:text-lg font-bold text-white'>
                          {project.metrics.users}
                        </div>
                        <div className='text-xs text-gray-400'>Usuários</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-base sm:text-lg font-bold text-white'>
                          {project.metrics.performance}
                        </div>
                        <div className='text-xs text-gray-400'>Performance</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-base sm:text-lg font-bold text-white'>
                          {project.metrics.satisfaction}
                        </div>
                        <div className='text-xs text-gray-400'>Satisfação</div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          {filteredProjects.length > 6 && (
            <motion.div
              className='flex justify-center mt-8 sm:mt-12'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <button
                onClick={handleShowAllToggle}
                className='px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base'
                aria-expanded={showAll}
                aria-controls='projects-grid'>
                {showAll
                  ? 'Ver Menos Projetos'
                  : `Ver Mais ${filteredProjects.length - 6} Projetos`}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <section
        className='relative py-16 sm:py-24 lg:py-32 overflow-hidden'
        aria-labelledby='features-title'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            className='text-center mb-12 sm:mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2
              id='features-title'
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6'>
              Mais que <span className='text-gradient-gold'>Código</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4'>
              Implementação completa de práticas que garantem qualidade,
              performance, acessibilidade e experiência do usuário.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            {[
              {
                icon: BarChart2,
                title: 'Monitoramento',
                description:
                  'Implementação de analytics, métricas de performance e sistemas de logging para garantir qualidade e confiabilidade.',
                gradient: 'from-blue-500 to-blue-600',
                ariaLabel: 'Monitoramento e métricas de performance',
              },
              {
                icon: Accessibility,
                title: 'Acessibilidade',
                description:
                  'Desenvolvimento inclusivo seguindo padrões WCAG, garantindo que todos possam usar as aplicações independente de suas limitações.',
                gradient: 'from-green-500 to-green-600',
                ariaLabel: 'Acessibilidade e desenvolvimento inclusivo',
              },
              {
                icon: Layout,
                title: 'UX Design',
                description:
                  'Foco na experiência do usuário, prototipagem, testes de usabilidade e design thinking aplicado ao desenvolvimento.',
                gradient: 'from-purple-500 to-purple-600',
                ariaLabel: 'UX Design e experiência do usuário',
              },
              {
                icon: Zap,
                title: 'Performance & Escalabilidade',
                description:
                  'Construção de sistemas rápidos, robustos e preparados para crescer conforme a demanda.',
                gradient: 'from-pink-500 to-pink-600',
                ariaLabel: 'Performance e escalabilidade',
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                className='glass-dark rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-900'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                role='article'
                aria-label={item.ariaLabel}
                tabIndex={0}>
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
                  whileHover={{ scale: 1.1 }}>
                  <item.icon
                    className='w-6 h-6 sm:w-8 sm:h-8 text-white'
                    aria-hidden='true'
                  />
                </motion.div>

                <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-400 text-sm sm:text-base leading-relaxed'>
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className='relative min-h-[50vh] py-16 sm:py-24 lg:py-32 overflow-hidden'
        aria-labelledby='cta-title'>
        <BackgroundElements variant='gold' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2
              id='cta-title'
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6'>
              Seu Projeto Pode Ser o{' '}
              <span className='text-gradient-gold'>Próximo</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 px-4'>
              Vamos discutir como posso ajudar a transformar sua visão em uma
              experiência digital excepcional.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <motion.button
                onClick={handleContactClick}
                className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover-glow transition-all duration-300 flex items-center justify-center space-x-2 animate-gradient focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base w-full sm:w-auto'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label='Iniciar um projeto entrando em contato'>
                <span>Iniciar um Projeto</span>
              </motion.button>

              <motion.button
                onClick={handleAboutClick}
                className='px-6 py-3 sm:px-8 sm:py-4 glass text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base w-full sm:w-auto'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label='Conhecer mais sobre mim'>
                <span>Me conhecer Mais</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
})
