export function AboutPage() {
  return (
    <div className='pt-20'>
      <section className='py-20 bg-gradient-to-br from-purple-50 to-pink-50  '>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Sobre Mim
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Uma jornada que une técnica, estética e impacto social através da
              tecnologia
            </p>
          </div>

          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Minha História
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                Eu sou a Thicianny Marques, desenvolvedora frontend apaixonada
                por criar interfaces bonitas, acessíveis e que façam sentido
                para as pessoas. Desde 2019, quando entrei na graduação em
                Ciência da Computação, minha vida profissional se entrelaçou com
                a ideia de que a tecnologia pode transformar realidades.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                Minha trajetória passou por startups de saúde, experiências no
                setor público e grandes empresas, sempre unindo aprendizado
                técnico com impacto humano. Também atuo em iniciativas sociais
                como o <strong>Manas Digitais</strong>, onde fui mentoranda e,
                anos depois, mentora, e o <strong>MangaLab</strong>, que me
                conecta com jovens que sonham em entrar no universo da
                tecnologia.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Fora das telas, sou apaixonada por jogos, literatura, artes. Amo
                viajar, experimentar novas comidas (embora meu coração sempre
                volte para os sabores paraenses) e vivo cercada de amor pelos
                meus cinco pets.
              </p>
            </div>
          </div>

          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Minha Jornada
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='relative'>
                <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500' />

                {[
                  {
                    year: '2019',
                    title: 'Início da Graduação',
                    description:
                      'Entrei no Bacharelado em Ciência da Computação e comecei minha jornada na tecnologia.',
                    color: 'bg-purple-500',
                    side: 'left',
                  },
                  {
                    year: '2019 (Outubro)',
                    title: 'Viper Systems - Startup de Saúde',
                    description:
                      'Minha primeira experiência na área de tecnologia, em uma startup voltada para saúde digital. Participei da criação do Tiabetz, um sistema que auxilia pessoas sem conhecimento técnico a calcular o nível de insulina no sangue, oferecendo mais autonomia e segurança no cuidado diário.',
                    color: 'bg-pink-500',
                    side: 'right',
                  },
                  {
                    year: '2020 (Dezembro)',
                    title: 'Polícia Civil do Pará',
                    description:
                      'Estágio em desenvolvimento, atuando por 1 ano no desenvolvimento e modernização de sistemas. Atuei na criação do site oficial da Polícia Civil, implementação de sistemas internos, migração de projetos legados e melhorias da página de agendamento para emissão e renovação de RG.',
                    color: 'bg-blue-500',
                    side: 'left',
                  },
                  {
                    year: '2020',
                    title: 'Manas Digitais',
                    description:
                      'Iniciei minha jornada no projeto como mentoranda, participando de programas de capacitação e desenvolvimento de habilidades técnicas. Após dois anos, retornei como mentora, contribuindo para a formação de mulheres na área de tecnologia, especialmente em contextos de vulnerabilidade social. Através de mentorias, workshops e eventos como o ITForGirls, ajudei a ampliar a presença feminina na tecnologia, promovendo inclusão e empoderamento digital.',
                    color: 'bg-green-500',
                    side: 'right',
                  },

                  {
                    year: '2022 (Janeiro – 2025)',
                    title: 'Compass.uol',
                    description:
                      'Atuei como desenvolvedora frontend Vue 3 em projetos de e-commerce B2B e B2C de grandes empresas. Desenvolvi bibliotecas de componentes escaláveis, PWAs e integrações complexas, aplicando testes do início ao fim e arquitetura baseada em micro frontends e microservices, garantindo performance, escalabilidade e alta qualidade nas soluções.',
                    color: 'bg-yellow-500',
                    side: 'left',
                  },
                  {
                    year: '2024 – Atual',
                    title: 'MangaLab',
                    description:
                      'Mentora na MangaLab, um projeto social voltado para jovens, com foco em democratizar o acesso à tecnologia e incentivar a criatividade, programação e experiências de mercado para iniciantes.',
                    color: 'bg-red-500',
                    side: 'right',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='timeline-item mb-12 opacity-100 transform translate-x-0 transition-all duration-600'>
                    <div className='flex items-center'>
                      {item.side === 'left' ? (
                        <>
                          <div className='w-1/2 pr-8 text-right'>
                            <div className='bg-white rounded-lg p-6 shadow-lg'>
                              <h3 className='text-xl font-bold text-purple-600 mb-2'>
                                {item.year} — {item.title}
                              </h3>
                              <p className='text-gray-600'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`w-8 h-8 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}
                          />
                          <div className='w-1/2 pl-8' />
                        </>
                      ) : (
                        <>
                          <div className='w-1/2 pr-8' />
                          <div
                            className={`w-8 h-8 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}
                          />
                          <div className='w-1/2 pl-8'>
                            <div className='bg-white rounded-lg p-6 shadow-lg'>
                              <h3 className='text-xl font-bold text-pink-600 mb-2'>
                                {item.year} — {item.title}
                              </h3>
                              <p className='text-gray-600'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 mb-20'>
            <div>
              <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Meus Valores
              </h2>
              <div className='space-y-6'>
                {[
                  {
                    icon: '💜',
                    title: 'Empatia',
                    description:
                      'Desenvolvimento centrado em pessoas reais, com suas histórias e necessidades.',
                    color: 'bg-purple-500',
                  },
                  {
                    icon: '🎨',
                    title: 'Estética + Técnica',
                    description: 'Código limpo, bonito e acessível.',
                    color: 'bg-pink-500',
                  },
                  {
                    icon: '🌱',
                    title: 'Crescimento',
                    description:
                      'Aprendizado contínuo e compartilhamento de conhecimento.',
                    color: 'bg-blue-500',
                  },
                  {
                    icon: '🌍',
                    title: 'Impacto Social',
                    description:
                      'Usar tecnologia para gerar mudanças positivas na vida das pessoas.',
                    color: 'bg-green-500',
                  },
                ].map((value, index) => (
                  <div key={index} className='flex items-start space-x-4'>
                    <div
                      className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center text-white text-xl`}>
                      {value.icon}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold mb-2'>{value.title}</h3>
                      <p className='text-gray-600'>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Meus Interesses
              </h2>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  {
                    icon: '🐱',
                    title: 'Pets',
                    subtitle: 'Meus companheiros de código',
                  },
                  {
                    icon: '📚',
                    title: 'Literatura',
                    subtitle: 'Mundos e histórias que inspiram',
                  },
                  {
                    icon: '🎮',
                    title: 'Jogos',
                    subtitle: 'Diversão, estratégia e criatividade',
                  },
                  {
                    icon: '🍲',
                    title: 'Gastronomia',
                    subtitle: 'Explorar sabores e culturas',
                  },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer'>
                    <div className='text-4xl mb-3'>{interest.icon}</div>
                    <h3 className='font-bold'>{interest.title}</h3>
                    <p className='text-sm text-gray-600'>{interest.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              O que me motiva
            </h2>
            <div className='grid md:grid-cols-4 gap-6'>
              {[
                {
                  icon: '📚',
                  title: 'Aprender',
                  description:
                    'Sempre em busca de novas tecnologias e conhecimentos',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: '🤝',
                  title: 'Conectar',
                  description:
                    'Construir pontes entre pessoas através da tecnologia',
                  gradient: 'from-blue-500 to-teal-500',
                },
                {
                  icon: '✨',
                  title: 'Criar',
                  description:
                    'Transformar ideias em experiências digitais incríveis',
                  gradient: 'from-green-500 to-teal-500',
                },
                {
                  icon: '🌍',
                  title: 'Transformar',
                  description:
                    'Usar tecnologia para gerar impacto social positivo',
                  gradient: 'from-orange-500 to-red-500',
                },
              ].map((motivation, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${motivation.gradient} text-white rounded-xl p-6 transform hover:scale-105 transition-transform cursor-pointer`}>
                  <div className='text-4xl mb-4'>{motivation.icon}</div>
                  <h3 className='text-xl font-bold mb-2'>{motivation.title}</h3>
                  <p className='text-sm opacity-90'>{motivation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
