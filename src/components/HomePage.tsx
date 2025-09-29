import { useRef } from 'react'
import emailjs from 'emailjs-com'

interface HomePageProps {
  onPageChange: (page: string) => void
}

export function HomePage({ onPageChange }: HomePageProps) {
  const formRef = useRef<HTMLFormElement>(null)

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
            'from-purple-500 to-pink-500',
            'from-green-500 to-green-600'
          )

          setTimeout(() => {
            button.textContent = originalText
            button.disabled = false
            button.className = button.className.replace(
              'from-green-500 to-green-600',
              'from-purple-500 to-pink-500'
            )
            formRef.current?.reset()
          }, 3000)
        },
        () => {
          button.textContent = 'Erro ao enviar ❌'
          button.disabled = false
        }
      )
  }

  return (
    <div className='pt-20'>
      <section className='hero-bg min-h-screen flex items-center justify-center relative overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <div className='floating absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-full animate-bounce' />
          <div
            className='floating absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-full animate-bounce'
            style={{ animationDelay: '2s' }}
          />
          <div
            className='floating absolute bottom-40 left-1/4 w-12 h-12 bg-white/25 rounded-full animate-bounce'
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className='container mx-auto px-6 text-center relative z-10'>
          <div className='mb-8'>
            <div className='w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 p-1 pulse-glow'>
              <div className='w-full h-full rounded-full bg-white flex items-center justify-center text-6xl'>
                👩‍💻
              </div>
            </div>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse'>
            Thicianny Marques
          </h1>

          <p className='text-xl md:text-2xl text-white/90 mb-6 font-light'>
            Criando soluções digitais modernas, inclusivas e memoráveis.
          </p>

          <p className='text-2xl md:text-3xl text-white font-semibold mb-12 italic'>
            Tecnologia que conecta pessoas e transforma experiências
          </p>
          <div className='flex flex-col md:flex-row gap-6 justify-center'>
            <button
              onClick={() => onPageChange('projects')}
              className='ripple bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer'>
              Conheça meus projetos
            </button>
            <button
              onClick={() => {
                const contactSection =
                  document.getElementById('contact-section')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className='ripple bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 cursor-pointer'>
              Entre em contato
            </button>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            Principais Tecnologias
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { icon: 'fab fa-vuejs', name: 'Vue.js', color: 'bg-green-500' },
              { icon: 'fab fa-react', name: 'React', color: 'bg-blue-500' },
              { icon: 'fab fa-laravel', name: 'Laravel', color: 'bg-red-500' },
              {
                icon: 'fab fa-node-js',
                name: 'Node.js',
                color: 'bg-green-600',
              },
            ].map((tech) => (
              <div key={tech.name} className='text-center'>
                <div
                  className={`skill-icon w-20 h-20 mx-auto mb-4 ${tech.color} rounded-full flex items-center justify-center text-white text-3xl hover:rotate-180 transition-transform duration-600 cursor-pointer`}>
                  <i className={tech.icon} />
                </div>
                <h3 className='font-bold text-lg'>{tech.name}</h3>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <button
              onClick={() => onPageChange('skills')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
              Ver todas as skills
            </button>
          </div>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            Projetos em Destaque
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: '🎨',
                title: 'Design System',
                description:
                  'Biblioteca de componentes escalável com Storybook + Tailwind, criada para dar consistência visual e velocidade ao time.',
                tags: ['Vue', 'Storybook', 'Tailwind'],
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: '🚀',
                title: 'App Real-time',
                description:
                  'Aplicação com GraphQL e WebSockets para dados em tempo real, unindo performance e boa experiência do usuário.',
                tags: ['React', 'GraphQL', 'WebSocket'],
                gradient: 'from-blue-500 to-teal-500',
              },
              {
                icon: '💚',
                title: 'Projeto Social',
                description:
                  'Plataforma educativa desenvolvida com foco em impacto social, levando tecnologia a quem mais precisa.',
                tags: ['Vue', 'Laravel', 'MySQL'],
                gradient: 'from-green-500 to-teal-500',
              },
            ].map((project, index) => (
              <div key={index} className='card-flip perspective-1000'>
                <div className='card-flip-inner relative transform-style-preserve-3d transition-transform duration-600 hover:rotate-y-180 border border-gray rounded-xl '>
                  <div className='card-flip-front relative bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-6 h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 backface-hidden'>
                    <div>
                      <div className='w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl shadow-md mb-4'>
                        {project.icon}
                      </div>
                      <h3 className='text-2xl font-extrabold mb-2 text-gray-900'>
                        {project.title}
                      </h3>
                      <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>
                        {project.description}
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 shadow-sm'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`card-flip-back bg-gradient-to-br ${project.gradient} rounded-xl p-6 h-80 absolute inset-0 text-white backface-hidden rotate-y-180`}>
                    <h3 className='text-xl font-bold mb-4'>{project.title}</h3>
                    <p className='mb-6'>
                      Esse projeto reflete meu cuidado em unir estética,
                      acessibilidade e código limpo para gerar impacto real.
                    </p>
                    <div className='flex gap-4'>
                      <button className='bg-white text-purple-600 px-4 py-2 rounded font-bold hover:bg-gray-100'>
                        <i className='fab fa-github mr-2' />
                        GitHub
                      </button>
                      <button className='border border-white px-4 py-2 rounded font-bold hover:bg-white hover:text-purple-600'>
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <button
              onClick={() => onPageChange('projects')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
              Ver todos os projetos
            </button>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gradient-to-r from-pink-50 to-purple-50'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Um pouco sobre mim
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed mx-auto max-w-2xl'>
              Eu sou a Thicianny Marques, desenvolvedora que acredita que
              tecnologia vai além do código: é sobre criar soluções que gerem
              impacto real, com empatia e acessibilidade no centro do processo.
              Minha trajetória une técnica, sensibilidade e propósito para
              entregar experiências digitais que sejam funcionais, inclusivas e
              acolhedoras.
            </p>
            <p className='text-lg text-gray-700 mb-10 leading-relaxed mx-auto max-w-2xl'>
              Fora do trabalho, sou apaixonada por leitura, viagens, jogos e
              pelos meus 5 pets. Quero ser lembrada não apenas pelas soluções
              que construo, mas por tornar a tecnologia mais humana e próxima de
              todas as pessoas.
            </p>
            <div className='flex justify-center flex-wrap gap-8 mb-10'>
              {[
                { icon: '📚', label: 'Leitura' },
                { icon: '✈️', label: 'Viagens' },
                { icon: '🎮', label: 'Jogos' },
                { icon: '🐾', label: 'Pets' },
              ].map((item) => (
                <div
                  key={item.label}
                  className='text-center transform hover:scale-110 transition-transform'>
                  <div className='text-4xl mb-2'>{item.icon}</div>
                  <p className='font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => onPageChange('about')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer'>
              Conheça minha história
            </button>
          </div>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            Impacto & Ensino
          </h2>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 transform hover:scale-105 transition-transform'>
              <div className='text-5xl mb-4'>👩‍🏫</div>
              <h3 className='text-2xl font-bold mb-4 text-purple-800'>
                Manas Digitais
              </h3>
              <p className='text-gray-700 mb-6'>
                Iniciativa que leva tecnologia e oportunidades para mulheres em
                situação de vulnerabilidade. Participei ministrando workshops e
                mentorias, ajudando a abrir portas no mundo da tech com inclusão
                e empoderamento.
              </p>
              <div className='flex items-center text-purple-600 font-semibold'>
                <i className='fas fa-heart mr-2' />
                Inspirando e empoderando mulheres na tech
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-8 transform hover:scale-105 transition-transform'>
              <div className='text-5xl mb-4'>🎨</div>
              <h3 className='text-2xl font-bold mb-4 text-blue-800'>
                MangaLab
              </h3>
              <p className='text-gray-700 mb-6'>
                Projeto educativo para jovens, conectando criatividade,
                tecnologia e inovação. Ali pude ensinar, aprender e ver a
                transformação social que a tecnologia pode trazer.
              </p>
              <div className='flex items-center text-blue-600 font-semibold'>
                <i className='fas fa-lightbulb mr-2' />
                Criatividade + Tecnologia
              </div>
            </div>
          </div>
          <div className='text-center mt-12'>
            <button
              onClick={() => onPageChange('teaching')}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer'>
              Saiba mais sobre meu trabalho social
            </button>
          </div>
        </div>
      </section>

      <section
        id='contact-section'
        className='py-20 bg-gradient-to-r from-purple-600 to-pink-600'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Vamos construir algo bonito e útil juntos?
          </h2>
          <p className='text-xl mb-8 opacity-90 text-white'>
            Acredito que tecnologia deve ser inclusiva, escalável e humana. Se
            você busca alguém que una técnica, empatia e visão estética, vamos
            conversar!
          </p>
          <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Envie uma mensagem
              </h3>
              <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Nome
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Assunto
                  </label>
                  <select
                    name='subject'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'>
                    <option>Desenvolvimento</option>
                    <option>Mentoria/Ensino</option>
                    <option>Colaboração</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Mensagem
                  </label>
                  <textarea
                    name='message'
                    rows={5}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className='space-y-8'>
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <h4 className='text-xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                  Conecte-se comigo
                </h4>
                <div className='space-y-4'>
                  {[
                    {
                      icon: 'fab fa-linkedin',
                      name: 'LinkedIn',
                      link: 'https://www.linkedin.com/in/thicianny-marques',
                      description: 'Vamos nos conectar profissionalmente',
                      color: 'bg-blue-600',
                    },
                    {
                      icon: 'fab fa-github',
                      name: 'GitHub',
                      link: 'https://github.com/ThiciannyMarques',
                      description: 'Confira meus projetos e contribuições',
                      color: 'bg-gray-800',
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className='flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors transform hover:scale-105 cursor-pointer'>
                      <div
                        className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white text-xl`}>
                        <i className={social.icon} />
                      </div>
                      <div>
                        <div className='font-semibold'>{social.name}</div>
                        <div className='text-sm text-gray-600'>
                          {social.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <h4 className='text-xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                  Onde estou
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl'>
                      📍
                    </div>
                    <div>
                      <div className='font-semibold'>São Luís, Maranhão</div>
                      <div className='text-sm text-gray-600'>
                        <p>Disponível para projetos remotos. </p>
                        <span className='text-gray-600/75'>
                          Colaboro com equipes do mundo todo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl p-8'>
                <h4 className='text-xl font-bold mb-4'>Status Atual</h4>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse' />
                  <span className='font-semibold'>
                    Disponível para novos projetos
                  </span>
                </div>
                <p className='text-sm opacity-90 mb-6'>
                  Estou aceitando projetos. Vamos
                  conversar sobre sua ideia!
                </p>
                <div className='text-sm opacity-80 space-y-1'>
                  <p>⏰ Respondo em até 24h</p>
                  <p>💬 Primeira consulta gratuita</p>
                  <p>🚀 Projetos a partir de 2 semanas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
