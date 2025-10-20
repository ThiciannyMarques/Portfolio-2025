import { motion } from 'framer-motion'
import { BackgroundElements } from './BackgroundElements'
import { Users, TrendingUp, BookOpen, Code2, Target } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function TeachingPage() {
  return (
    <div className='pt-20'>
      <section className='relative flex items-center overflow-hidden'>
        <BackgroundElements variant='hero' />
        <div className='container mx-auto px-6 lg:px-12 py-20 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              className='text-white space-y-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <motion.div
                className='inline-block glass px-4 py-2 rounded-full'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>
                <span className='text-purple-300 font-semibold'>
                  Ensino & Impacto Social
                </span>
              </motion.div>

              <h1 className='text-6xl lg:text-7xl font-bold leading-tight'>
                Transformando <span className='text-gradient-gold'>Vidas</span>{' '}
                Através da Tecnologia
              </h1>

              <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed'>
                Transformo tecnologia em oportunidades reais, criando soluções
                que inspiram, conectam e tornam o digital mais humano e
                inclusivo.
              </p>

              <div className='grid grid-cols-4 gap-6 mt-6'>
                {[
                  { value: 'Inclusão', icon: Users },
                  { value: 'Educação', icon: BookOpen },
                  { value: 'Transformação', icon: TrendingUp },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className='glass-dark rounded-xl p-4 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}>
                    <stat.icon className='w-6 h-6 text-gradient-gold mx-auto mb-2' />
                    <div className='text-sm text-gray-400'>{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <motion.div
                className='absolute -inset-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur-3xl opacity-30'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className='relative rounded-2xl overflow-hidden hover-glow'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring' }}>
                <ImageWithFallback
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'
                  alt='Mentoria e Ensino'
                  className='w-full h-auto'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent' />
              </motion.div>
            </motion.div>
          </div>
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
              Minha Filosofia
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Para mim, a tecnologia vai muito além de códigos e ferramentas,
              ela é uma ponte capaz de transformar vidas e abrir caminhos que
              antes pareciam impossíveis. Cada linha de código que escrevo
              carrega o potencial de impactar pessoas, derrubar barreiras e
              criar oportunidades. Por isso, busco sempre construir soluções que
              sejam acessíveis, inclusivas e que façam sentido de verdade para
              quem vai utilizá-las.
            </p>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4'>
              Minha forma de trabalhar combina técnica, empatia e estética. Ao
              desenvolver uma interface ou uma aplicação, penso não só em
              performance e escalabilidade, mas também em como diferentes
              pessoas, com realidades e desafios distintos, irão interagir com
              ela. Cada projeto é, para mim, uma chance de aplicar conhecimento
              de forma humana, trazendo beleza, clareza e funcionalidade que
              realmente ajudam.
            </p>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4'>
              Além disso, acredito no poder de ensinar e compartilhar. Ver
              alguém descobrir algo novo ou se sentir confiante ao usar uma
              ferramenta que eu ajudei a criar é uma das maiores recompensas. A
              tecnologia pode e deve ser um espaço de inclusão, aprendizado e
              transformação. Meu compromisso é usar meus conhecimentos não
              apenas para construir bons produtos, mas para abrir portas,
              inspirar confiança e empoderar pessoas a encontrarem o seu lugar
              no mundo digital.
            </p>
          </motion.div>
        </div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='blue' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Programas e Projetos
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Iniciativas de ensino e empoderamento social que transformam
              vidas.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            {[
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
            ].map((program, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />

                <div className='p-8'>
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6`}
                    transition={{ duration: 0.6 }}>
                    <program.icon className='w-10 h-10 text-white' />
                  </motion.div>

                  <h3 className='text-2xl font-bold text-white mb-3 text-center'>
                    {program.title}
                  </h3>
                  <p className='text-gray-300 mb-6 leading-relaxed text-center'>
                    {program.description}
                  </p>

                  <div className='space-y-2 mb-6'>
                    {program.topics.map((topic, i) => (
                      <div key={i} className='flex items-center space-x-3'>
                        <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs'>
                          ✓
                        </div>
                        <span className='text-gray-300 text-sm'>{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 grid grid-cols-3 text-center'>
                    {program.stats.map((stat, i) => (
                      <div key={i}>
                        <div className='text-2xl font-bold text-white'>
                          {stat.value}
                        </div>
                        <div className='text-sm text-gray-300'>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='text-center text-white font-semibold'>
                    {program.slogan}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Metodologia de <span className='text-gradient-gold'>Ensino</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Abordagem prática e personalizada que acelera o aprendizado e
              prepara para o mercado
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
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
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6`}
                  transition={{ duration: 0.6 }}>
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
    </div>
  )
}
