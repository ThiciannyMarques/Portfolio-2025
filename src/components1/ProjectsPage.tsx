export function ProjectsPage() {
  const projects = [
    {
      image: '/images/design-system.png',
      icon: '🎨',
      title: 'Design System',
      description:
        'Biblioteca completa de componentes reutilizáveis construída com Storybook e Tailwind CSS, garantindo consistência visual em todos os projetos.',
      tags: ['Vue.js', 'Storybook', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      image: '/images/app-realtime.png',
      icon: '🚀',
      title: 'App Real-time',
      description:
        'Aplicação web moderna com comunicação em tempo real usando GraphQL e WebSockets, oferecendo experiência fluida e responsiva.',
      tags: ['React', 'GraphQL', 'WebSocket'],
      gradient: 'from-blue-500 to-teal-500',
      details:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    },
    {
      image: '/images/plataforma-educativa.png',
      icon: '💚',
      title: 'Plataforma Educativa',
      description:
        'Sistema completo para gestão de cursos e conteúdo educativo, focado em acessibilidade e experiência do usuário.',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      gradient: 'from-green-500 to-teal-500',
      details:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.',
    },
    {
      image: '/images/pwa-mobile.png',
      icon: '📱',
      title: 'PWA Mobile',
      description:
        'Progressive Web App com funcionalidades nativas, offline-first e performance otimizada para dispositivos móveis.',
      tags: ['PWA', 'Service Worker', 'IndexedDB'],
      gradient: 'from-purple-500 to-indigo-500',
      details:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
    },
    {
      image: '/images/dashboard-analytics.png',
      icon: '📊',
      title: 'Dashboard Analytics',
      description:
        'Interface administrativa com visualizações de dados interativas, relatórios em tempo real e sistema de monitoramento.',
      tags: ['React', 'D3.js', 'Node.js'],
      gradient: 'from-orange-500 to-red-500',
      details:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro.',
    },
    {
      image: '/images/game-web.png',
      icon: '🎮',
      title: 'Game Web',
      description:
        'Jogo interativo desenvolvido com Canvas API e animações CSS, incluindo sistema de pontuação e níveis progressivos.',
      tags: ['Canvas', 'JavaScript', 'CSS Animations'],
      gradient: 'from-pink-500 to-purple-500',
      details:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
    },
  ]

  return (
    <div className='pt-20'>
      <section className='py-20 bg-gradient-to-br from-blue-50 to-purple-50  '>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Meus Projetos
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Uma coleção de experiências digitais que combinam criatividade,
              técnica e propósito
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {projects.map((project, index) => (
              <div key={index} className='card-flip perspective-1000'>
                <div className='card-flip-inner relative transform-style-preserve-3d transition-transform duration-600 hover:rotate-y-180'>
                  <div className='card-flip-front relative bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-6 h-96 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 backface-hidden'>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-40 object-cover rounded-lg mb-4'
                      />
                    )}
                    <div className='text-5xl mb-4'>{project.icon}</div>
                    <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                    <p className='text-gray-600 mb-4'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`card-flip-back bg-gradient-to-br ${project.gradient} rounded-xl p-6 h-96 absolute inset-0 text-white backface-hidden rotate-y-180 flex flex-col justify-between`}>
                    <div>
                      <h3 className='text-2xl font-bold mb-4'>
                        {project.title}
                      </h3>
                      <p className='mb-6'>{project.details}</p>
                    </div>
                    <div className='flex gap-4'>
                      <button className='bg-white text-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors'>
                        <i className='fab fa-github mr-2' />
                        GitHub
                      </button>
                      <button className='border border-white px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors'>
                        {project.title === 'Game Web'
                          ? 'Jogar Agora'
                          : 'Demo Live'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Mais que Código
            </h2>
            <div className='grid md:grid-cols-4 gap-8'>
              {[
                {
                  icon: '📊',
                  title: 'Monitoramento',
                  description:
                    'Implementação de analytics, métricas de performance e sistemas de logging para garantir qualidade e confiabilidade.',
                  color: 'bg-blue-500',
                },
                {
                  icon: '♿',
                  title: 'Acessibilidade',
                  description:
                    'Desenvolvimento inclusivo seguindo padrões WCAG, garantindo que todos possam usar as aplicações independente de suas limitações.',
                  color: 'bg-green-500',
                },
                {
                  icon: '🎨',
                  title: 'UX Design',
                  description:
                    'Foco na experiência do usuário, prototipagem, testes de usabilidade e design thinking aplicado ao desenvolvimento.',
                  color: 'bg-purple-500',
                },
                {
                  icon: '⚡',
                  title: 'Performance & Escalabilidade',
                  description:
                    'Construção de sistemas rápidos, robustos e preparados para crescer conforme a demanda.',
                  color: 'bg-pink-500',
                },
              ].map((feature, index) => (
                <div key={index} className='text-center'>
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 transform hover:scale-110 transition-transform cursor-pointer`}>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
