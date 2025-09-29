import { useState, useEffect } from 'react'

export function SkillsPage() {
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 300)
    return () => clearTimeout(timer)
  }, [])
  const skillCategories = [
    {
      title: 'Linguagens',
      icon: '📝',
      color: 'text-red-600',
      bgColor: 'bg-red-500',
      skills: [
        { name: 'Javascript', level: 95 },
        { name: 'TypeScript', level: 75 },
        { name: 'PHP', level: 67 },
        { name: 'Java', level: 56 },
        { name: 'Python', level: 62 },
        { name: 'Go', level: 65 },
      ],
    },
    {
      title: 'Frontend',
      icon: '💻',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      skills: [
        { name: 'Javascript', level: 95 },
        { name: 'Vue.js', level: 93 },
        { name: 'React', level: 86 },
        { name: 'Tailwind CSS', level: 82 },
        { name: 'Bootstrap', level: 82 },
        { name: 'Next.js', level: 88 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'text-green-600',
      bgColor: 'bg-green-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Laravel', level: 82 },
        { name: 'GraphQL', level: 65 },
        { name: 'REST APIs', level: 90 },
        { name: 'AEM', level: 70 },
        { name: 'Express.js', level: 80 },
      ],
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: 'text-purple-600',
      bgColor: 'bg-purple-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'SQLite', level: 60 },
        { name: 'Firebase', level: 75 },
      ],
    },
    {
      title: 'UI/UX',
      icon: '🎨',
      color: 'text-pink-600',
      bgColor: 'bg-pink-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Design Systems', level: 88 },
        { name: 'Prototipagem', level: 85 },
        { name: 'User Research', level: 75 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Sketch', level: 65 },
      ],
    },
    {
      title: 'DevOps',
      icon: '🚀',
      color: 'text-orange-600',
      bgColor: 'bg-orange-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Kubernetes', level: 55 },
        { name: 'Terraform', level: 50 },
      ],
    },
    {
      title: 'Testing',
      icon: '🧪',
      color: 'text-teal-600',
      bgColor: 'bg-teal-500',
      skills: [
        { name: 'Jest', level: 80 },
        { name: 'Cypress', level: 75 },
        { name: 'Testing Library', level: 85 },
        { name: 'PHPUnit', level: 70 },
        { name: 'Cucumber', level: 58 },
        { name: 'Playwright', level: 65 },
      ],
    },
    {
      title: 'Frameworks & CMS',
      icon: '🖥️',
      color: 'text-gray-600',
      bgColor: 'bg-gray-400',
      skills: [
        { name: 'Nuxt.js', level: 85 },
        { name: 'Next.js', level: 88 },
        { name: 'AEM', level: 70 },
        { name: 'WordPress', level: 80 },
        { name: 'Drupal', level: 65 },
        { name: 'Gatsby', level: 60 },
      ],
    },
    {
      title: 'Outras Skills',
      icon: '🔧',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-400',
      skills: [
        { name: 'Webpack', level: 80 },
        { name: 'Babel', level: 75 },
        { name: 'ESLint', level: 85 },
        { name: 'Prettier', level: 80 },
        { name: 'Storybook', level: 70 },
        { name: 'Figma Plugins', level: 65 },
      ],
    },
  ]

  const techIcons = [
    { icon: 'fab fa-vuejs', name: 'Vue.js', color: 'bg-green-500' },
    { icon: 'fab fa-react', name: 'React', color: 'bg-blue-500' },
    { icon: 'fab fa-laravel', name: 'Laravel', color: 'bg-red-500' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: 'bg-green-600' },
    { icon: 'fab fa-js-square', name: 'JavaScript', color: 'bg-blue-600' },
  ]

  return (
    <div className='pt-20'>
      <section className='py-20 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fadeInUp'>
              Minhas Skills
            </h1>
            <p
              className='text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp'
              style={{ animationDelay: '200ms' }}>
              Um mapa das tecnologias que domino e das ferramentas que uso para
              criar experiências incríveis
            </p>

            <div
              className='absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce'
              style={{ animationDelay: '1s' }}></div>
            <div
              className='absolute top-32 right-16 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-bounce'
              style={{ animationDelay: '2s' }}></div>
            <div
              className='absolute bottom-20 left-20 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce'
              style={{ animationDelay: '3s' }}></div>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 group ${
                  animateCards
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <div className='flex items-center mb-4'>
                  <div
                    className={`w-10 h-10 ${category.bgColor} rounded-full flex items-center justify-center text-white text-lg mr-3 transform hover:rotate-12 hover:scale-110 transition-all duration-300 group-hover:animate-pulse-slow`}>
                    {category.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold ${category.color} group-hover:text-purple-600 transition-colors duration-300`}>
                    {category.title}
                  </h3>
                </div>
                <div className='space-y-3'>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className='skill-item'>
                      <div className='flex justify-between mb-1'>
                        <span className='font-semibold text-sm'>
                          {skill.name}
                        </span>
                        <span className='text-xs text-gray-500'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-1.5 overflow-hidden group-hover:h-2 transition-all duration-300'>
                        <div
                          className={`h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:from-purple-400 group-hover:to-pink-400 ${
                            animateCards ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${
                              index * 150 + skillIndex * 100
                            }ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500'>
            <h2 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Tecnologias Favoritas
            </h2>
            <div className='grid grid-cols-4 md:grid-cols-5 gap-8'>
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
                  <p className='text-sm font-semibold hover:text-purple-600 transition-colors'>
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-lg mt-8 hover:shadow-xl transition-shadow duration-500'>
            <h2 className='text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Atividade de Desenvolvimento
            </h2>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105'>
              <h3 className='text-base font-semibold mb-3 text-gray-800 text-center'>
                Gráfico de Atividades
              </h3>
              <img
                src='https://github-readme-activity-graph.vercel.app/graph?username=ThiciannyMarques&theme=minimal&hide_border=true&bg_color=ffffff&color=6366f1&line=8b5cf6&point=f59e0b&area=true&area_color=e0e7ff'
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
      </section>
    </div>
  )
}
