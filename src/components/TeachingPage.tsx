import { motion, type MotionProps } from 'framer-motion'
import { BackgroundElements } from './BackgroundElements'
import { Users, TrendingUp, BookOpen, Code2, Target } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useEffect, useState, useMemo } from 'react'

export function TeachingPage() {
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const statsData = useMemo(
    () => [
      { value: 'Inclusão', icon: Users },
      { value: 'Educação', icon: BookOpen },
      { value: 'Transformação', icon: TrendingUp },
    ],
    []
  )

  const programsData = useMemo(
    () => [
      {
        icon: Users,
        title: 'Manas Digitais',
        description:
          'O projeto Manas Digitais é uma iniciativa de empoderamento feminino na área de Tecnologia da Informação, atuando em escolas públicas da região metropolitana de Belém, Pará. Através de oficinas de programação, rodas de conversa e mentorias, buscamos fomentar o interesse de meninas e mulheres pela tecnologia e promover a equidade de gênero nesse setor.',
        topics: [
          'Oficinas de programação para meninas do ensino fundamental e médio',
          'Mentorias com mulheres líderes da área de TI',
          'Rodas de conversa sobre carreira e mercado de trabalho em tecnologia',
          'Criação de materiais didáticos digitais para ensino remoto',
        ],
        stats: [
          { label: 'Mulheres impactadas', value: '200+' },
          { label: 'Mentoras envolvidas', value: '15+' },
          { label: 'Escolas participantes', value: '5' },
        ],
        slogan: 'Empoderando mulheres na tecnologia desde 2016',
        gradient: 'from-purple-600 to-pink-600',
      },
      {
        icon: Code2,
        title: 'MangaLab',
        description:
          'Nosso laboratório educacional tem como missão democratizar o ensino de programação e oferecer experiências práticas de mercado para iniciantes. Cada projeto é uma oportunidade de aprendizado guiado por desenvolvedores seniores, garantindo qualidade e desenvolvimento de habilidades reais.',
        topics: [
          'Cursos práticos de programação para iniciantes',
          'Mentoria e acompanhamento de projetos reais',
          'Desenvolvimento de aplicativos e jogos educativos',
          'Aprendizado de boas práticas de mercado e metodologias ágeis',
        ],
        stats: [
          { label: 'Estudantes impactados', value: '50+' },
          { label: 'Projetos guiados', value: '30' },
          { label: 'Escolas parceiras', value: '5' },
        ],
        slogan: 'Educação + Experiência = Transformação',
        gradient: 'from-green-600 to-teal-600',
      },
    ],
    []
  )

  const methodologyData = useMemo(
    () => [
      {
        icon: Target,
        title: 'Foco Prático',
        description:
          'Aprendizado baseado em projetos reais do mercado, não apenas teoria.',
        gradient: 'from-blue-600 to-cyan-600',
      },
      {
        icon: Users,
        title: 'Mentoria 1:1',
        description:
          'Acompanhamento personalizado adaptado ao ritmo e objetivos de cada aluno.',
        gradient: 'from-purple-600 to-pink-600',
      },
      {
        icon: Code2,
        title: 'Code Reviews',
        description:
          'Revisão detalhada de código com feedback construtivo e boas práticas.',
        gradient: 'from-orange-600 to-red-600',
      },
      {
        icon: TrendingUp,
        title: 'Evolução Contínua',
        description:
          'Acompanhamento de progresso com metas claras e desafios crescentes.',
        gradient: 'from-green-600 to-teal-600',
      },
    ],
    []
  )

const getAnimationProps = (baseProps: MotionProps): MotionProps =>
  isReducedMotion ? { ...baseProps, transition: { duration: 0 } } : baseProps

  return (
    <div
      className='pt-16 md:pt-20'
      role='main'
      aria-label='Página de ensino e impacto social'>
      <section
        className='relative flex items-center overflow-hidden'
        aria-labelledby='teaching-hero-title'>
        <BackgroundElements variant='hero' />
        <div className='container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-8 md:gap-16 items-center'>
            <motion.div
              className='text-white space-y-6 md:space-y-8'
              {...getAnimationProps({
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
              })}>
              <motion.div
                className='inline-block glass px-4 py-2 rounded-full'
                {...getAnimationProps({
                  animate: { scale: [1, 1.05, 1] },
                  transition: { duration: 2, repeat: Infinity },
                })}
                aria-label='Ensino & Impacto Social'>
                <span className='text-purple-300 font-semibold text-sm md:text-base'>
                  Ensino & Impacto Social
                </span>
              </motion.div>

              <h1
                id='teaching-hero-title'
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                Transformando <span className='text-gradient-gold'>Vidas</span>{' '}
                Através da Tecnologia
              </h1>

              <p className='text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed'>
                Transformo tecnologia em oportunidades reais, criando soluções
                que inspiram, conectam e tornam o digital mais humano e
                inclusivo.
              </p>

              <div
                className='grid grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6'
                role='list'
                aria-label='Valores principais'>
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    className='glass-dark rounded-xl p-3 md:p-4 text-center'
                    {...getAnimationProps({
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.6 + index * 0.1 },
                    })}
                    whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
                    role='listitem'
                    tabIndex={0}>
                    <stat.icon
                      className='w-5 h-5 md:w-6 md:h-6 text-gradient-gold mx-auto mb-2'
                      aria-hidden='true'
                    />
                    <div className='text-xs md:text-sm text-gray-400'>
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className='relative'
              {...getAnimationProps({
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
              })}>
              <motion.div
                className='absolute -inset-2 md:-inset-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur-3xl opacity-30'
                {...getAnimationProps({
                  animate: { scale: [1, 1.1, 1] },
                  transition: { duration: 4, repeat: Infinity },
                })}
                aria-hidden='true'
              />
              <motion.div
                className='relative rounded-2xl overflow-hidden hover-glow focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-50'
                whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
                transition={{ type: 'spring' }}
                tabIndex={0}>
                <ImageWithFallback
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'
                  alt='Mentoria e Ensino - Grupo diversificado de pessoas aprendendo e colaborando em tecnologia'
                  className='w-full h-auto'
                  loading='eager'
                  decoding='async'
                />
                <div
                  className='absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent'
                  aria-hidden='true'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className='relative py-20 md:py-32 overflow-hidden'
        aria-labelledby='philosophy-title'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-12 md:mb-16'
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-50px' },
              transition: { duration: 0.8 },
            })}>
            <h2
              id='philosophy-title'
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
              Minha Filosofia
            </h2>
            <div className='space-y-4 md:space-y-6 text-left max-w-4xl mx-auto'>
              <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                Para mim, a tecnologia vai muito além de códigos e ferramentas,
                ela é uma ponte capaz de transformar vidas e abrir caminhos que
                antes pareciam impossíveis. Cada linha de código que escrevo
                carrega o potencial de impactar pessoas, derrubar barreiras e
                criar oportunidades. Por isso, busco sempre construir soluções
                que sejam acessíveis, inclusivas e que façam sentido de verdade
                para quem vai utilizá-las.
              </p>
              <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                Minha forma de trabalhar combina técnica, empatia e estética. Ao
                desenvolver uma interface ou uma aplicação, penso não só em
                performance e escalabilidade, mas também em como diferentes
                pessoas, com realidades e desafios distintos, irão interagir com
                ela. Cada projeto é, para mim, uma chance de aplicar
                conhecimento de forma humana, trazendo beleza, clareza e
                funcionalidade que realmente ajudam.
              </p>
              <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                Além disso, acredito no poder de ensinar e compartilhar. Ver
                alguém descobrir algo novo ou se sentir confiante ao usar uma
                ferramenta que eu ajudei a criar é uma das maiores recompensas.
                A tecnologia pode e deve ser um espaço de inclusão, aprendizado
                e transformação. Meu compromisso é usar meus conhecimentos não
                apenas para construir bons produtos, mas para abrir portas,
                inspirar confiança e empoderar pessoas a encontrarem o seu lugar
                no mundo digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className='relative py-20 md:py-32 overflow-hidden'
        aria-labelledby='programs-title'>
        <BackgroundElements variant='blue' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-12 md:mb-16'
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-50px' },
              transition: { duration: 0.8 },
            })}>
            <h2
              id='programs-title'
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
              Programas e Projetos
            </h2>
            <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
              Iniciativas de ensino e empoderamento social que transformam
              vidas.
            </p>
          </motion.div>

          <div
            className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'
            role='list'
            aria-label='Programas e projetos'>
            {programsData.map((program, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-50'
                {...getAnimationProps({
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-50px' },
                  transition: { duration: 0.6, delay: index * 0.1 },
                })}
                whileHover={!isReducedMotion ? { y: -10 } : {}}
                role='listitem'
                tabIndex={0}>
                <div
                  className={`h-2 bg-gradient-to-r ${program.gradient}`}
                  aria-hidden='true'
                />

                <div className='p-6 md:p-8'>
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6`}
                    {...getAnimationProps({
                      transition: { duration: 0.6 },
                    })}
                    aria-hidden='true'>
                    <program.icon className='w-8 h-8 md:w-10 md:h-10 text-white' />
                  </motion.div>

                  <h3 className='text-xl md:text-2xl font-bold text-white mb-3 text-center'>
                    {program.title}
                  </h3>
                  <p className='text-gray-300 mb-4 md:mb-6 leading-relaxed text-center'>
                    {program.description}
                  </p>

                  <div
                    className='space-y-2 mb-4 md:mb-6'
                    role='list'
                    aria-label={`Atividades do ${program.title}`}>
                    {program.topics.map((topic, i) => (
                      <div
                        key={i}
                        className='flex items-start space-x-3'
                        role='listitem'>
                        <div
                          className='w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5'
                          aria-hidden='true'>
                          ✓
                        </div>
                        <span className='text-gray-300 text-sm md:text-base'>
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className='bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 mb-4 grid grid-cols-3 text-center gap-2'
                    role='list'
                    aria-label={`Estatísticas do ${program.title}`}>
                    {program.stats.map((stat, i) => (
                      <div key={i} role='listitem'>
                        <div
                          className='text-lg md:text-2xl font-bold text-white'
                          aria-label={stat.value}>
                          {stat.value}
                        </div>
                        <div className='text-xs md:text-sm text-gray-300'>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='text-center text-white font-semibold text-sm md:text-base'>
                    {program.slogan}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className='relative py-20 md:py-32 overflow-hidden'
        aria-labelledby='methodology-title'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-12 md:mb-16'
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-50px' },
              transition: { duration: 0.8 },
            })}>
            <h2
              id='methodology-title'
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
              Metodologia de <span className='text-gradient-gold'>Ensino</span>
            </h2>
            <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
              Abordagem prática e personalizada que acelera o aprendizado e
              prepara para o mercado
            </p>
          </motion.div>

          <div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'
            role='list'
            aria-label='Métodos de ensino'>
            {methodologyData.map((item, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-50'
                {...getAnimationProps({
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-50px' },
                  transition: { duration: 0.6, delay: index * 0.1 },
                })}
                whileHover={!isReducedMotion ? { y: -10 } : {}}
                role='listitem'
                tabIndex={0}>
                <motion.div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6`}
                  {...getAnimationProps({
                    transition: { duration: 0.6 },
                  })}
                  aria-hidden='true'>
                  <item.icon className='w-6 h-6 md:w-8 md:h-8 text-white' />
                </motion.div>

                <h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-400 leading-relaxed text-sm md:text-base'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
