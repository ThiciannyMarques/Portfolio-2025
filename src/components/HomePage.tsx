import {
  ArrowRight,
  Code2,
  Palette,
  Rocket,
  Users,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Send,
  Lightbulb,
  BookOpen,
  Plane,
  Gamepad2,
  PawPrint,
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BackgroundElements } from './BackgroundElements'
import { projects } from '../data/projectData'
import { useRef, useState, useCallback, lazy, Suspense } from 'react'
import emailjs from 'emailjs-com'

const LazyBackgroundElements = lazy(() =>
  Promise.resolve({ default: BackgroundElements })
)

interface HomePageProps {
  onPageChange: (page: string) => void
}

export function HomePage({ onPageChange }: HomePageProps) {
  const [, setFormData] = useState({ name: '', email: '', message: '' })

  const heroRef = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const sendEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const button = formRef.current.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement
    const originalText = button.textContent

    button.textContent = 'Enviando...'
    button.disabled = true
    button.setAttribute('aria-disabled', 'true')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          button.textContent = 'Mensagem Enviada! ✓'
          button.className = button.className.replace(
            'from-purple-600 to-pink-600',
            'from-green-500 to-green-600'
          )

          setTimeout(() => {
            button.textContent = originalText
            button.disabled = false
            button.removeAttribute('aria-disabled')
            button.className = button.className.replace(
              'from-green-500 to-green-600',
              'from-purple-600 to-pink-600'
            )
            formRef.current?.reset()
            setFormData({ name: '', email: '', message: '' })
          }, 3000)
        },
        () => {
          button.textContent = 'Erro ao enviar'
          button.disabled = false
          button.removeAttribute('aria-disabled')
        }
      )
  }, [])

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact-section')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const stats = [
    { value: '5+', label: 'Anos de Experiência' },
    { value: '150+', label: 'Projetos Entregues' },
    { value: '98%', label: 'Satisfação' },
  ]

  const hobbies = [
    { icon: PawPrint, label: 'Pets' },
    { icon: BookOpen, label: 'Leitura' },
    { icon: Plane, label: 'Viagens' },
    { icon: Gamepad2, label: 'Jogos' },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/thicianny-marques',
      description: 'Vamos nos conectar profissionalmente',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/ThiciannyMarques',
      description: 'Confira meus projetos e contribuições',
      color: 'from-gray-700 to-gray-800',
    },
  ]

  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      technologies: [
        'Vue.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Next.js',
        'Nuxt.js',
      ],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      category: 'Backend',
      icon: Code2,
      technologies: [
        'Laravel',
        'Node.js',
        'PHP',
        'GraphQL',
        'REST APIs',
        'PostgreSQL',
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      category: 'DevOps & Tools',
      icon: Rocket,
      technologies: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Linux'],
      gradient: 'from-orange-600 to-red-600',
    },
  ]

  return (
    <div className='pt-20'>
      <section
        ref={heroRef}
        className='relative flex items-center overflow-hidden'
        aria-labelledby='hero-heading'>
        <Suspense fallback={<div className='absolute inset-0 bg-gray-900' />}>
          <LazyBackgroundElements variant='hero' />
        </Suspense>

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <motion.div
              className='text-white space-y-6 lg:space-y-8'
              style={{ y, opacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <motion.div
                className='inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/20'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                role='status'
                aria-label='Status: Desenvolvendo o Futuro Digital'>
                <Sparkles
                  className='w-4 h-4 text-yellow-400'
                  aria-hidden='true'
                />
                <span className='text-sm font-semibold'>
                  Desenvolvendo o Futuro Digital
                </span>
              </motion.div>

              <h1 id='hero-heading' className='sr-only'>
                Thicianny Marques
              </h1>

              <motion.div
                className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                role='heading'
                aria-level={1}>
                <div>Criando</div>
                <div className='text-gradient-gold'>Experiências</div>
                <div>Extraordinárias</div>
              </motion.div>

              <motion.p
                className='text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Desenvolvedora especializada em construir aplicações
                web sofisticadas, elegantes e de alto impacto. Combinando{' '}
                <span className='text-purple-400 font-semibold'>Vue.js</span>,
                <span className='text-blue-400 font-semibold'> React</span> e
                <span className='text-red-400 font-semibold'> Laravel</span>{' '}
                para criar soluções que impressionam.
              </motion.p>

              <motion.div
                className='flex flex-col sm:flex-row gap-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}>
                <motion.button
                  onClick={() => onPageChange('projects')}
                  className='group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover-glow transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-gradient cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label='Ver projetos realizados'>
                  Ver Projetos
                  <ArrowRight
                    className='ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform'
                    aria-hidden='true'
                  />
                </motion.button>
                <motion.button
                  onClick={scrollToContact}
                  className='group px-6 sm:px-8 py-3 sm:py-4 glass text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label='Entrar em contato'>
                  Contratar Agora
                  <Mail className='ml-2 w-5 h-5' aria-hidden='true' />
                </motion.button>
              </motion.div>

              <motion.div
                className='grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                role='region'
                aria-label='Estatísticas'>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='text-center'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-gold'>
                      {stat.value}
                    </div>
                    <div className='text-xs sm:text-sm text-gray-400 mt-1'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className='relative mt-8 lg:mt-0'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <motion.div
                className='relative rounded-2xl overflow-hidden shadow-2xl hover-glow'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}>
                <ImageWithFallback
                  src='/homeHeroImg.png'
                  alt='Thicianny Marques - mulher jovem, pele morena, cabelo longo da cor preta, roupa social.'
                  className='w-full h-auto'
                  loading='eager'
                  width={600}
                  height={600}
                />
                <div
                  className='absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent'
                  aria-hidden='true'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          role='presentation'>
          <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
            <motion.div
              className='w-1 h-3 bg-white/50 rounded-full mt-2'
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden='true'
            />
          </div>
        </motion.div>
      </section>

      <section
        className='relative py-20 lg:py-32 overflow-hidden'
        aria-labelledby='about-heading'>
        <BackgroundElements variant='blue' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              className='inline-block glass px-4 py-2 rounded-full mb-6'
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <span className='text-purple-300 font-semibold'>Sobre Mim</span>
            </motion.div>

            <motion.h2
              id='about-heading'
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              Sobre <span className='text-gradient-gold'>mim</span>
            </motion.h2>

            <motion.p
              className='text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}>
              Eu sou a{' '}
              <span className='font-semibold text-white'>
                Thicianny Marques
              </span>
              , desenvolvedora que acredita que tecnologia vai além do código: é
              sobre criar soluções que gerem impacto real, com empatia e
              acessibilidade no centro do processo.
            </motion.p>

            <motion.p
              className='text-lg sm:text-xl text-gray-300 mb-8 lg:mb-10 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              Fora das telas, compartilho meus dias com meus cinco pets, sou
              apaixonada por leitura, viagens e jogos. Quero ser lembrada não
              apenas pelas soluções que construo, mas por tornar a tecnologia
              mais humana e próxima de todas as pessoas.
            </motion.p>

            <div className='flex justify-center flex-wrap gap-6 sm:gap-8 mb-8 lg:mb-10'>
              {hobbies.map((item, index) => (
                <motion.div
                  key={item.label}
                  className='text-center flex flex-col items-center transform hover:scale-110 transition-transform'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-2 sm:mb-3'>
                    <item.icon
                      className='w-6 h-6 sm:w-7 sm:h-7 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='font-semibold text-gray-200 text-sm sm:text-base'>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => onPageChange('about')}
              className='px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover-glow transition-all duration-300 flex items-center justify-center mx-auto animate-gradient cursor-pointer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Conhecer mais sobre minha história'>
              <span>Conheça minha história</span>
              <ArrowRight className='w-5 h-5 ml-2' aria-hidden='true' />
            </motion.button>
          </div>
        </div>
      </section>

      <section
        className='relative py-20 lg:py-32 overflow-hidden'
        aria-labelledby='projects-heading'>
        <BackgroundElements variant='gradient' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 lg:mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h2
                id='projects-heading'
                className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4'>
                Projetos em <span className='text-gradient-gold'>Destaque</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-300'>
                Trabalhos que combinam inovação técnica com design excepcional
              </p>
            </motion.div>
            <motion.button
              onClick={() => onPageChange('projects')}
              className='flex items-center space-x-2 text-purple-300 font-semibold hover:text-white group transition-colors cursor-pointer self-start sm:self-auto'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              aria-label='Ver todos os projetos'>
              <span>Ver todos</span>
              <ArrowRight
                className='w-5 h-5 group-hover:translate-x-2 transition-transform'
                aria-hidden='true'
              />
            </motion.button>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {projects.slice(0, 3).map((project, index) => (
              <motion.article
                key={project.id}
                className='group glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover-glow'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <div className='relative h-48 sm:h-56 lg:h-64 overflow-hidden'>
                  <ImageWithFallback
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                    loading='lazy'
                    width={400}
                    height={256}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}
                    aria-hidden='true'
                  />
                </div>

                <div className='p-4 sm:p-6'>
                  <div className='text-purple-300 text-sm font-semibold mb-2'>
                    {project.category}
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 text-sm sm:text-base mb-4'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-1 sm:gap-2'>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className='relative py-20 lg:py-32 overflow-hidden'
        aria-labelledby='impact-heading'>
        <BackgroundElements variant='gradient' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-12 lg:mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2
              id='impact-heading'
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6'>
              Impacto & <span className='text-gradient-gold'>Ensino</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto'>
              Projetos e iniciativas que unem tecnologia, inclusão e aprendizado
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            {[
              {
                icon: Users,
                title: 'Manas Digitais',
                description:
                  'Iniciativa que leva tecnologia e oportunidades para mulheres em situação de vulnerabilidade.',
                gradient: 'from-purple-600 to-pink-600',
                highlight: 'Inspirando e empoderando mulheres na tech',
              },
              {
                icon: Lightbulb,
                title: 'MangaLab',
                description:
                  'Projeto educativo para jovens, conectando criatividade, tecnologia e inovação.',
                gradient: 'from-blue-600 to-teal-600',
                highlight: 'Criatividade + Tecnologia',
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                className={`group rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 relative overflow-hidden glass-dark`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}>
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform transition-transform duration-500`}>
                  <item.icon
                    className='w-7 h-7 sm:w-8 sm:h-8 text-white'
                    aria-hidden='true'
                  />
                </div>

                <h3 className='text-xl sm:text-2xl font-bold mb-4 text-white'>
                  {item.title}
                </h3>
                <p className='text-gray-300 text-sm sm:text-base mb-6'>
                  {item.description}
                </p>

                <div className='text-white font-semibold flex items-center space-x-2 text-sm sm:text-base'>
                  <Sparkles
                    className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <span>{item.highlight}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className='text-center mt-8 sm:mt-12'>
            <motion.button
              onClick={() => onPageChange('teaching')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base'
              aria-label='Saber mais sobre meu trabalho social'>
              Saiba mais sobre meu trabalho social
            </motion.button>
          </div>
        </div>
      </section>

      <section
        className='relative py-20 lg:py-32 overflow-hidden'
        aria-labelledby='skills-heading'>
        <BackgroundElements variant='dark' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-12 lg:mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2
              id='skills-heading'
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6'>
              Tecnologias <span className='text-gradient-gold'>Dominadas</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto'>
              Stack completo para desenvolvimento de aplicações modernas e
              escaláveis
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <motion.div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <skill.icon
                    className='w-7 h-7 sm:w-8 sm:h-8 text-white'
                    aria-hidden='true'
                  />
                </motion.div>

                <h3 className='text-xl sm:text-2xl font-bold text-white mb-4'>
                  {skill.category}
                </h3>

                <div className='flex flex-wrap gap-1 sm:gap-2'>
                  {skill.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className='px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300'
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <motion.button
              onClick={() => onPageChange('skills')}
              className='px-6 sm:px-8 py-3 sm:py-4 glass text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 mx-auto cursor-pointer text-sm sm:text-base'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Ver todas as habilidades técnicas'>
              <span>Ver Stack Completo</span>
              <ArrowRight className='w-5 h-5' aria-hidden='true' />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section
        id='contact-section'
        className='relative py-20 lg:py-32 overflow-hidden'
        aria-labelledby='contact-heading'>
        <BackgroundElements variant='gold' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-12 lg:mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2
              id='contact-heading'
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6'>
              Vamos construir algo bonito e útil juntos?
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto'>
              Acredito que tecnologia deve ser inclusiva, escalável e humana.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto'>
            <motion.div
              className='glass-dark rounded-2xl p-6 sm:p-8 border border-white/20'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h3 className='text-xl sm:text-2xl font-bold text-white mb-6'>
                Envie uma mensagem
              </h3>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className='space-y-4 sm:space-y-6'
                noValidate>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                    Nome
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base'
                    placeholder='Seu nome'
                    aria-required='true'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base'
                    placeholder='seu@email.com'
                    aria-required='true'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                    Assunto
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-gray-400 focus:outline-none focus:border-purple-400 transition-colors appearance-none text-sm sm:text-base'
                    aria-label='Selecione o assunto da mensagem'>
                    <option value='' className='bg-black/80'>
                      Selecione um assunto
                    </option>
                    <option value='Desenvolvimento' className='bg-black/80'>
                      Desenvolvimento
                    </option>
                    <option value='Mentoria/Ensino' className='bg-black/80'>
                      Mentoria/Ensino
                    </option>
                    <option value='Colaboração' className='bg-black/80'>
                      Colaboração
                    </option>
                    <option value='Outro' className='bg-black/80'>
                      Outro
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                    Mensagem
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none transition-colors text-sm sm:text-base'
                    placeholder='Conte-me sobre seu projeto...'
                    aria-required='true'
                  />
                </div>
                <motion.button
                  type='submit'
                  className='w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover-glow transition-all duration-300 flex items-center justify-center space-x-2 animate-gradient cursor-pointer text-sm sm:text-base'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label='Enviar mensagem'>
                  <span>Enviar Mensagem</span>
                  <Send className='w-4 h-4 sm:w-5 sm:h-5' aria-hidden='true' />
                </motion.button>
              </form>
            </motion.div>

            <div className='space-y-6 sm:space-y-8'>
              <motion.div
                className='glass-dark rounded-2xl p-6 sm:p-8 border border-white/20'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}>
                <h4 className='text-lg sm:text-xl font-bold text-white mb-6'>
                  Conecte-se comigo
                </h4>
                <div className='space-y-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:scale-105 cursor-pointer'
                      whileHover={{ x: 5 }}
                      aria-label={`Visitar ${social.name}`}>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                        <social.icon
                          className='w-5 h-5 sm:w-6 sm:h-6'
                          aria-hidden='true'
                        />
                      </div>
                      <div>
                        <div className='font-semibold text-white text-sm sm:text-base'>
                          {social.name}
                        </div>
                        <div className='text-xs sm:text-sm text-gray-400'>
                          {social.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className='glass-dark rounded-2xl p-6 sm:p-8 border border-white/20'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <h4 className='text-lg sm:text-xl font-bold text-white mb-6'>
                  Onde estou
                </h4>
                <div className='flex items-center space-x-3 sm:space-x-4'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0'>
                    <MapPin
                      className='w-5 h-5 sm:w-6 sm:h-6'
                      aria-hidden='true'
                    />
                  </div>
                  <div>
                    <div className='font-semibold text-white text-sm sm:text-base'>
                      São Luís, Maranhão
                    </div>
                    <div className='text-xs sm:text-sm text-gray-400'>
                      Disponível para projetos remotos
                    </div>
                    <div className='text-xs text-gray-500 mt-1'>
                      Colaboro com equipes do mundo todo
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className='glass-dark text-white rounded-2xl p-6 sm:p-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                <h4 className='text-lg sm:text-xl font-bold mb-4'>
                  Status Atual
                </h4>
                <div className='flex items-center space-x-3 mb-4'>
                  <div
                    className='w-3 h-3 bg-green-400 rounded-full animate-pulse'
                    aria-hidden='true'
                  />
                  <span className='font-semibold text-sm sm:text-base'>
                    Disponível para novos projetos
                  </span>
                </div>
                <p className='text-xs sm:text-sm opacity-90 mb-6'>
                  Estou aceitando projetos. Vamos conversar sobre sua ideia!
                </p>
                <div className='text-xs sm:text-sm opacity-80 space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Clock className='w-4 h-4' aria-hidden='true' />
                    <span>Respondo em até 24h</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Users className='w-4 h-4' aria-hidden='true' />
                    <span>Primeira consulta gratuita</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Rocket className='w-4 h-4' aria-hidden='true' />
                    <span>Projetos a partir de 2 semanas</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
