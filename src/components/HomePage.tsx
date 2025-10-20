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
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const button = formRef.current.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement
    const originalText = button.textContent

    button.textContent = 'Enviando...'
    button.disabled = true

    emailjs
      .sendForm(
        'service_8kw009o',
        'template_10m4k9g',
        formRef.current,
        'WeCHW_Xmi-yTh2oZZ'
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
        }
      )
  }

  return (
    <div className='pt-20'>
      <section
        ref={heroRef}
        className='relative flex items-center overflow-hidden'>
        <BackgroundElements variant='hero' />

        <div className='container mx-auto px-6 lg:px-12 py-20 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              className='text-white space-y-8'
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
                }}>
                <Sparkles className='w-4 h-4 text-yellow-400' />
                <span className='text-sm font-semibold'>
                  Desenvolvendo o Futuro Digital
                </span>
              </motion.div>

              <motion.h1
                className='text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Criando
                <span className='block text-gradient-gold'>Experiências</span>
                <span className='block'>Extraordinárias</span>
              </motion.h1>

              <motion.p
                className='text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Desenvolvedora Full Stack especializada em construir aplicações
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
                  className='group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover-glow transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-gradient cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Ver Projetos
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform' />
                </motion.button>
                <motion.button
                  onClick={() => {
                    const contactSection =
                      document.getElementById('contact-section')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className='group px-8 py-4 glass text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Contratar Agora
                  <Mail className='ml-2 w-5 h-5' />
                </motion.button>
              </motion.div>

              <motion.div
                className='grid grid-cols-3 gap-6 pt-8 border-t border-white/20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}>
                {[
                  { value: '5+', label: 'Anos de Experiência' },
                  { value: '150+', label: 'Projetos Entregues' },
                  { value: '98%', label: 'Satisfação' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}>
                    <div className='text-4xl font-bold text-gradient-gold'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-400 mt-1'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <motion.div
                className='relative rounded-2xl overflow-hidden shadow-2xl hover-glow'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}>
                <ImageWithFallback
                  src='/homeHeroImg.png'
                  alt='Thicianny Marques - Full Stack Developer'
                  className='w-full h-auto'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent' />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
            <motion.div
              className='w-1 h-3 bg-white/50 rounded-full mt-2'
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='blue' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              className='inline-block glass px-4 py-2 rounded-full mb-6'
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <span className='text-purple-300 font-semibold'>Sobre Mim</span>
            </motion.div>

            <motion.h2
              className='text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              Sobre <span className='text-gradient-gold'>mim</span>
            </motion.h2>

            <motion.p
              className='text-xl text-gray-300 mb-6 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}>
              Eu sou a{' '}
              <span className='font-semibold text-white'>
                Thicianny Marques
              </span>
              , desenvolvedora que acredita que tecnologia vai além do código: é
              sobre criar soluções que gerem impacto real, com empatia e
              acessibilidade no centro do processo. Minha trajetória une
              técnica, sensibilidade e propósito para entregar experiências
              digitais que sejam funcionais, inclusivas e acolhedoras.
            </motion.p>

            <motion.p
              className='text-xl text-gray-300 mb-10 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              Fora das telas, compartilho meus dias com meus cinco pets (que
              provavelmente acham que são meus chefes), sou apaixonada por
              leitura, viagens e jogos. Quero ser lembrada não apenas pelas
              soluções que construo, mas por tornar a tecnologia mais humana e
              próxima de todas as pessoas.
            </motion.p>

            <div className='flex justify-center flex-wrap gap-8 mb-10'>
              {[
                { icon: PawPrint, label: 'Pets' },
                { icon: BookOpen, label: 'Leitura' },
                { icon: Plane, label: 'Viagens' },
                { icon: Gamepad2, label: 'Jogos' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className='text-center flex flex-col items-center transform hover:scale-110 transition-transform'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className='w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-3'>
                    <item.icon className='w-7 h-7 text-white' />
                  </div>
                  <p className='font-semibold text-gray-200'>{item.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => onPageChange('about')}
              className='px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover-glow transition-all duration-300 flex items-center justify-center mx-auto animate-gradient cursor-pointer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>Conheça minha história</span>
              <ArrowRight className='w-5 h-5 ml-2' />
            </motion.button>
          </div>
        </div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='gradient' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <div className='flex justify-between items-end mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h2 className='text-5xl lg:text-6xl font-bold text-white mb-4'>
                Projetos em <span className='text-gradient-gold'>Destaque</span>
              </h2>
              <p className='text-xl text-gray-300'>
                Trabalhos que combinam inovação técnica com design excepcional
              </p>
            </motion.div>
            <motion.button
              onClick={() => onPageChange('projects')}
              className='hidden md:flex items-center space-x-2 text-purple-300 font-semibold hover:text-white group transition-colors cursor-pointer'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <span>Ver todos</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform' />
            </motion.button>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                className='group glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover-glow'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <div className='relative h-64 overflow-hidden'>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}
                  />
                </div>

                <div className='p-6'>
                  <div className='text-purple-300 text-sm font-semibold mb-2'>
                    {project.category}
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 mb-4'>{project.description}</p>

                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Impacto & <span className='text-gradient-gold'>Ensino</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Projetos e iniciativas que unem tecnologia, inclusão e aprendizado
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-12'>
            {[
              {
                icon: Users,
                title: 'Manas Digitais',
                description:
                  'Iniciativa que leva tecnologia e oportunidades para mulheres em situação de vulnerabilidade. Participei ministrando workshops e mentorias, ajudando a abrir portas no mundo da tech com inclusão e empoderamento.',
                gradient: 'from-purple-600 to-pink-600',
                highlight: 'Inspirando e empoderando mulheres na tech',
              },
              {
                icon: Lightbulb,
                title: 'MangaLab',
                description:
                  'Projeto educativo para jovens, conectando criatividade, tecnologia e inovação. Ali pude ensinar, aprender e ver a transformação social que a tecnologia pode trazer.',
                gradient: 'from-blue-600 to-teal-600',
                highlight: 'Criatividade + Tecnologia',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group rounded-2xl p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 relative overflow-hidden glass-dark`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-500`}>
                  <item.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-2xl font-bold mb-4 text-white'>
                  {item.title}
                </h3>
                <p className='text-gray-300 mb-6'>{item.description}</p>

                <div className='text-white font-semibold flex items-center space-x-2'>
                  <Sparkles className='w-5 h-5 text-yellow-400' />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <motion.button
              onClick={() => onPageChange('teaching')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer'>
              Saiba mais sobre meu trabalho social
            </motion.button>
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
              Tecnologias <span className='text-gradient-gold'>Dominadas</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Stack completo para desenvolvimento de aplicações modernas e
              escaláveis
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {[
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
                technologies: [
                  'Git',
                  'Docker',
                  'CI/CD',
                  'AWS',
                  'Vercel',
                  'Linux',
                ],
                gradient: 'from-orange-600 to-red-600',
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-2xl p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <skill.icon className='w-8 h-8 text-white' />
                </motion.div>

                <h3 className='text-2xl font-bold text-white mb-4'>
                  {skill.category}
                </h3>

                <div className='flex flex-wrap gap-2'>
                  {skill.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className='px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300'
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
              className='px-8 py-4 glass text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 mx-auto cursor-pointer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>Ver Stack Completo</span>
              <ArrowRight className='w-5 h-5' />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section id='contact-section' className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='gold' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Vamos construir algo bonito e útil juntos?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Acredito que tecnologia deve ser inclusiva, escalável e humana. Se
              você busca alguém que una técnica, empatia e visão estética, vamos
              conversar!
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <motion.div
              className='glass-dark rounded-2xl p-8 border border-white/20'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Envie uma mensagem
              </h3>
              <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
                <div>
                  <label className='block text-white font-semibold mb-2'>
                    Nome
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors'
                    placeholder='Seu nome'
                  />
                </div>
                <div>
                  <label className='block text-white font-semibold mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors'
                    placeholder='seu@email.com'
                  />
                </div>
                <div>
                  <label className='block text-white font-semibold mb-2'>
                    Assunto
                  </label>
                  <select
                    name='subject'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-gray-400 focus:outline-none focus:border-purple-400 transition-colors appearance-none'>
                    <option className='bg-black/80'>Desenvolvimento</option>
                    <option className='bg-black/80'>Mentoria/Ensino</option>
                    <option className='bg-black/80'>Colaboração</option>
                    <option className='bg-black/80'>Outro</option>
                  </select>
                </div>
                <div>
                  <label className='block text-white font-semibold mb-2'>
                    Mensagem
                  </label>
                  <textarea
                    name='message'
                    rows={5}
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none transition-colors'
                    placeholder='Conte-me sobre seu projeto...'
                  />
                </div>
                <motion.button
                  type='submit'
                  className='w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover-glow transition-all duration-300 flex items-center justify-center space-x-2 animate-gradient cursor-pointer'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <span>Enviar Mensagem</span>
                  <Send className='w-5 h-5' />
                </motion.button>
              </form>
            </motion.div>

            <div className='space-y-8'>
              <motion.div
                className='glass-dark rounded-2xl p-8 border border-white/20'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}>
                <h4 className='text-xl font-bold text-white mb-6'>
                  Conecte-se comigo
                </h4>
                <div className='space-y-4'>
                  {[
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
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:scale-105 cursor-pointer'
                      whileHover={{ x: 5 }}>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white`}>
                        <social.icon className='w-6 h-6' />
                      </div>
                      <div>
                        <div className='font-semibold text-white'>
                          {social.name}
                        </div>
                        <div className='text-sm text-gray-400'>
                          {social.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className='glass-dark rounded-2xl p-8 border border-white/20'
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <h4 className='text-xl font-bold text-white mb-6'>
                  Onde estou
                </h4>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <div className='font-semibold text-white'>
                      São Luís, Maranhão
                    </div>
                    <div className='text-sm text-gray-400'>
                      Disponível para projetos remotos
                    </div>
                    <div className='text-xs text-gray-500 mt-1'>
                      Colaboro com equipes do mundo todo
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className='glass-dark text-white rounded-2xl p-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                <h4 className='text-xl font-bold mb-4'>Status Atual</h4>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse' />
                  <span className='font-semibold'>
                    Disponível para novos projetos
                  </span>
                </div>
                <p className='text-sm opacity-90 mb-6'>
                  Estou aceitando projetos. Vamos conversar sobre sua ideia!
                </p>
                <div className='text-sm opacity-80 space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Clock className='w-4 h-4' />
                    <span>Respondo em até 24h</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Users className='w-4 h-4' />
                    <span>Primeira consulta gratuita</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Rocket className='w-4 h-4' />
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
