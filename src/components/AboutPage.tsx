import { motion } from 'framer-motion'
import { BackgroundElements } from './BackgroundElements'
import {
  Code2,
  Award,
  Users,
  Heart,
  Target,
  TrendingUp,
  BookOpen,
  Zap,
  Globe,
  Star,
  GraduationCap,
  Building2,
  Users2,
  Book,
  Cat,
  Utensils,
  GamepadIcon,
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface AboutPageProps {
  onPageChange: (page: string) => void
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <div className='pt-20'>
      <section className='relative flex items-center overflow-hidden  '>
        <BackgroundElements variant='hero' />

        <div className='container mx-auto px-6 lg:px-12 py-12 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              className='text-white space-y-6'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <motion.div
                className='inline-block glass px-4 py-2 rounded-full'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>
                <span className='text-purple-300 font-semibold'>
                  Desenvolvedora Full Stack
                </span>
              </motion.div>

              <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
                Olá, Sou a <span className='text-gradient-gold'>Thicianny</span>
              </h1>

              <p className='text-lg lg:text-xl text-gray-300 leading-relaxed'>
                Sou a Thicianny Marques! Desenvolvedora Fullstack apaixonada por
                criar interfaces bonitas, intuitivas e que realmente façam
                sentido para quem as usa. Desde 2019, quando comecei minha
                jornada na Ciência da Computação, venho transformando ideias em
                experiências digitais que unem criatividade, técnica e impacto
                positivo. Adoro explorar novos desafios, aprender e usar a
                tecnologia para criar soluções que inspirem e facilitem o dia a
                dia.
              </p>

              <div className='flex flex-wrap gap-4'>
                <motion.div
                  className='glass px-6 py-3 rounded-full'
                  whileHover={{ scale: 1.05 }}>
                  <div className='flex items-center space-x-2'>
                    <Code2 className='w-5 h-5 text-purple-400' />
                    <span>50+ Projetos</span>
                  </div>
                </motion.div>
                <motion.div
                  className='glass px-6 py-3 rounded-full'
                  whileHover={{ scale: 1.05 }}>
                  <div className='flex items-center space-x-2'>
                    <Award className='w-5 h-5 text-yellow-400' />
                    <span>5+ Anos</span>
                  </div>
                </motion.div>
                <motion.div
                  className='glass px-6 py-3 rounded-full'
                  whileHover={{ scale: 1.05 }}>
                  <div className='flex items-center space-x-2'>
                    <Users className='w-5 h-5 text-green-400' />
                    <span>Mentoria</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className='relative flex justify-center'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <motion.div
                className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-30'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className='relative rounded-2xl overflow-hidden hover-glow 
                     sm:max-h-[300px] md:max-h-[400px] lg:max-h-[700px] w-full'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring' }}>
                <ImageWithFallback
                  src='/sobreHeroImg.png'
                  alt='Thicianny Marques'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent' />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='relative py-32 overflow-hidden'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-12 text-center'>
              Minha <span className='text-gradient-gold'>História</span>
            </h2>

            <div className='glass-dark rounded-2xl p-8 lg:p-12 border border-white/10'>
              <motion.div
                className='prose prose-lg prose-invert max-w-none'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <p className='text-xl text-gray-300 leading-relaxed mb-6'>
                  Eu sou a Thicianny Marques, desenvolvedora frontend apaixonada
                  por criar interfaces bonitas, acessíveis e que façam sentido
                  para as pessoas. Desde 2019, quando entrei na graduação em
                  Ciência da Computação, minha vida profissional se entrelaçou
                  com a ideia de que a tecnologia pode transformar realidades.
                </p>
                <p className='text-xl text-gray-300 leading-relaxed mb-6'>
                  Minha trajetória passou por startups de saúde, experiências no
                  setor público e grandes empresas, sempre unindo aprendizado
                  técnico com impacto humano. Também atuo em iniciativas sociais
                  como o{' '}
                  <strong className='text-purple-300'>Manas Digitais</strong>,
                  onde fui mentoranda e, anos depois, mentora, e o{' '}
                  <strong className='text-purple-300'>MangaLab</strong>, que me
                  conecta com jovens que sonham em entrar no universo da
                  tecnologia.
                </p>
                <p className='text-xl text-gray-300 leading-relaxed'>
                  Fora das telas, sou apaixonada por jogos, literatura, artes.
                  Amo viajar, experimentar novas comidas (embora meu coração
                  sempre volte para os sabores paraenses) e vivo cercada de amor
                  pelos meus cinco pets.
                </p>
              </motion.div>
            </div>
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
              Minha <span className='text-gradient-gold'>Jornada</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Uma trajetória de crescimento contínuo e impacto através da
              tecnologia
            </p>
          </motion.div>

          <div className='max-w-6xl mx-auto'>
            <div className='relative'>
              <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600' />

              {[
                {
                  year: '2019',
                  title: 'Início da Graduação',
                  description:
                    'Entrei no Bacharelado em Ciência da Computação e comecei minha jornada na tecnologia.',
                  icon: GraduationCap,
                  color: 'from-purple-600 to-pink-600',
                  side: 'left',
                },
                {
                  year: '2019 (Outubro)',
                  title: 'Viper Systems',
                  description:
                    'Minha primeira experiência na área de tecnologia, em uma startup voltada para saúde digital. Participei da criação do Tiabetz, um sistema que auxilia pessoas sem conhecimento técnico a calcular o nível de insulina no sangue, oferecendo mais autonomia e segurança no cuidado diário.',
                  icon: Building2,
                  color: 'from-pink-600 to-red-600',
                  side: 'right',
                },
                {
                  year: '2020 (Dezembro)',
                  title: 'Polícia Civil do Pará',
                  description:
                    'Estágio em desenvolvimento, atuando por 1 ano no desenvolvimento e modernização de sistemas. Atuei na criação do site oficial da Polícia Civil, implementação de sistemas internos, migração de projetos legados e melhorias da página de agendamento para emissão e renovação de RG.',
                  icon: Building2,
                  color: 'from-blue-600 to-cyan-600',
                  side: 'left',
                },
                {
                  year: '2020',
                  title: 'Manas Digitais',
                  description:
                    'Iniciei minha jornada no projeto como mentoranda, participando de programas de capacitação e desenvolvimento de habilidades técnicas. Após dois anos, retornei como mentora, contribuindo para a formação de mulheres na área de tecnologia, especialmente em contextos de vulnerabilidade social.',
                  icon: Users2,
                  color: 'from-green-600 to-teal-600',
                  side: 'right',
                },
                {
                  year: '2022 (Janeiro – 2025)',
                  title: 'Compass.uol',
                  description:
                    'Atuei como desenvolvedora frontend Vue 3 em projetos de e-commerce B2B e B2C de grandes empresas. Desenvolvi bibliotecas de componentes escaláveis, PWAs e integrações complexas, aplicando testes do início ao fim e arquitetura baseada em micro frontends e microservices.',
                  icon: Building2,
                  color: 'from-yellow-600 to-orange-600',
                  side: 'left',
                },
                {
                  year: '2024 – Atual',
                  title: 'MangaLab',
                  description:
                    'Mentora na MangaLab, um projeto social voltado para jovens, com foco em democratizar o acesso à tecnologia e incentivar a criatividade, programação e experiências de mercado para iniciantes.',
                  icon: Users2,
                  color: 'from-red-600 to-pink-600',
                  side: 'right',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-16 ${
                    item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className='w-1/2 px-8'>
                    <motion.div
                      className='glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300'
                      whileHover={{ y: -5 }}>
                      <div className='flex items-center space-x-3 mb-4'>
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className='w-6 h-6 text-white' />
                        </div>
                        <div>
                          <span className='text-purple-300 font-semibold'>
                            {item.year}
                          </span>
                          <h3 className='text-xl font-bold text-white'>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className='text-gray-400 leading-relaxed'>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className='relative z-10'>
                    <motion.div
                      className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-gray-900 shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>

                  <div className='w-1/2' />
                </motion.div>
              ))}
            </div>
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
              Meus <span className='text-gradient-gold'>Valores</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Princípios que guiam meu trabalho e minha vida
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Heart,
                title: 'Empatia',
                description:
                  'Desenvolvimento centrado em pessoas reais, com suas histórias e necessidades.',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                icon: Star,
                title: 'Estética + Técnica',
                description: 'Código limpo, bonito e acessível.',
                gradient: 'from-pink-600 to-red-600',
              },
              {
                icon: TrendingUp,
                title: 'Crescimento',
                description:
                  'Aprendizado contínuo e compartilhamento de conhecimento.',
                gradient: 'from-blue-600 to-cyan-600',
              },
              {
                icon: Globe,
                title: 'Impacto Social',
                description:
                  'Usar tecnologia para gerar mudanças positivas na vida das pessoas.',
                gradient: 'from-green-600 to-teal-600',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-2xl p-8 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}
                  transition={{ duration: 0.6 }}>
                  <value.icon className='w-8 h-8 text-white' />
                </motion.div>

                <h3 className='text-2xl font-bold text-white mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative min-h-[5vh] py-32 overflow-hidden'>
        <BackgroundElements variant='dark' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Além do <span className='text-gradient-gold'>Código</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              O que me inspira e move fora do mundo da programação
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: Cat,
                title: 'Pets',
                description: 'Meus companheiros de código',
                color: 'from-purple-600 to-pink-600',
              },
              {
                icon: Book,
                title: 'Literatura',
                description: 'Mundos e histórias que inspiram',
                color: 'from-blue-600 to-cyan-600',
              },
              {
                icon: GamepadIcon,
                title: 'Jogos',
                description: 'Diversão, estratégia e criatividade',
                color: 'from-green-600 to-teal-600',
              },
              {
                icon: Utensils,
                title: 'Gastronomia',
                description: 'Explorar sabores e culturas',
                color: 'from-orange-600 to-red-600',
              },
            ].map((interest, index) => (
              <motion.div
                key={index}
                className='glass-dark rounded-xl p-6 border border-white/10 hover:border-white/30 hover-glow transition-all duration-300 text-center'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  transition={{ duration: 0.6 }}>
                  <interest.icon className='w-8 h-8 text-white' />
                </motion.div>

                <h3 className='text-xl font-bold text-white mb-2'>
                  {interest.title}
                </h3>
                <p className='text-gray-400 text-sm'>{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative min-h-[5vh] py-32 overflow-hidden'>
        <BackgroundElements variant='purple' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              O Que Me <span className='text-gradient-gold'>Motiva</span>
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: BookOpen,
                title: 'Aprender',
                description:
                  'Sempre em busca de novas tecnologias e conhecimentos',
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                icon: Users,
                title: 'Conectar',
                description:
                  'Construir pontes entre pessoas através da tecnologia',
                gradient: 'from-blue-600 to-cyan-600',
              },
              {
                icon: Zap,
                title: 'Criar',
                description:
                  'Transformar ideias em experiências digitais incríveis',
                gradient: 'from-green-600 to-teal-600',
              },
              {
                icon: Target,
                title: 'Transformar',
                description:
                  'Usar tecnologia para gerar impacto social positivo',
                gradient: 'from-orange-600 to-red-600',
              },
            ].map((motivation, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${motivation.gradient} text-white rounded-2xl p-8 text-center transform hover-glow transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}>
                <motion.div
                  className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'
                  transition={{ duration: 0.6 }}>
                  <motivation.icon className='w-8 h-8 text-white' />
                </motion.div>

                <h3 className='text-2xl font-bold mb-4'>{motivation.title}</h3>
                <p className='text-white/90 text-sm leading-relaxed'>
                  {motivation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative min-h-[5vh] py-32 overflow-hidden'>
        <BackgroundElements variant='gold' />

        <div className='container mx-auto px-6 lg:px-12 relative z-10'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6'>
              Pronta para <span className='text-gradient-gold'>Colaborar</span>
            </h2>
            <p className='text-xl text-gray-300 mb-10'>
              Vamos transformar suas ideias em realidade digital? Entre em
              contato e vamos criar algo extraordinário juntos.
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
                <span>Ver Meu Trabalho</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
