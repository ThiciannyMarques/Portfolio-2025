export function TeachingPage() {
  return (
    <div className='pt-20'>
      <section className='py-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Ensino & Impacto Social
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Usando tecnologia para transformar vidas e construir um futuro
              mais inclusivo
            </p>
          </div>

          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center'>
              <div className='text-6xl mb-6'>🌱</div>
              <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Minha Filosofia
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                Para mim, a tecnologia vai muito além de códigos e ferramentas,
                ela é uma ponte capaz de transformar vidas e abrir caminhos que
                antes pareciam impossíveis. Cada linha de código que escrevo
                carrega o potencial de impactar pessoas, derrubar barreiras e
                criar oportunidades. Por isso, busco sempre construir soluções
                que sejam acessíveis, inclusivas e que façam sentido de verdade
                para quem vai utilizá-las.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                Minha forma de trabalhar combina técnica, empatia e estética. Ao
                desenvolver uma interface ou uma aplicação, penso não só em
                performance e escalabilidade, mas também em como diferentes
                pessoas, com realidades e desafios distintos, irão interagir com
                ela. Cada projeto é, para mim, uma chance de aplicar
                conhecimento de forma humana, trazendo beleza, clareza e
                funcionalidade que realmente ajudam.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                Além disso, acredito no poder de ensinar e compartilhar. Ver
                alguém descobrir algo novo ou se sentir confiante ao usar uma
                ferramenta que eu ajudei a criar é uma das maiores recompensas.
                A tecnologia pode e deve ser um espaço de inclusão, aprendizado
                e transformação. Meu compromisso é usar meus conhecimentos não
                apenas para construir bons produtos, mas para abrir portas,
                inspirar confiança e empoderar pessoas a encontrarem o seu lugar
                no mundo digital.
              </p>
              <div className='flex justify-center space-x-8'>
                {[
                  { icon: '🤝', label: 'Inclusão' },
                  { icon: '📚', label: 'Educação' },
                  { icon: '🚀', label: 'Transformação' },
                ].map((value) => (
                  <div key={value.label} className='text-center'>
                    <div className='text-3xl mb-2'>{value.icon}</div>
                    <p className='font-semibold'>{value.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 mb-20'>
            <div className='bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 transform hover:scale-105 transition-transform'>
              <div className='text-6xl mb-6 text-center'>👩‍💻</div>
              <h2 className='text-3xl font-bold mb-6 text-purple-800 text-center'>
                Manas Digitais
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                O projeto Manas Digitais é uma iniciativa de empoderamento
                feminino na área de Tecnologia da Informação, atuando em escolas
                públicas da região metropolitana de Belém, Pará. Através de
                oficinas de programação, rodas de conversa e mentorias, buscamos
                fomentar o interesse de meninas e mulheres pela tecnologia e
                promover a equidade de gênero nesse setor.
              </p>

              <div className='space-y-4 mb-6'>
                {[
                  'Oficinas de programação para meninas do ensino fundamental e médio',
                  'Mentorias com mulheres líderes da área de TI',
                  'Rodas de conversa sobre carreira e mercado de trabalho em tecnologia',
                  'Criação de materiais didáticos digitais para ensino remoto',
                ].map((item, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm'>
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className='bg-white rounded-lg p-4 mb-6'>
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='text-2xl font-bold text-purple-600'>
                      +200
                    </div>
                    <div className='text-sm text-gray-600'>
                      Mulheres impactadas
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-purple-600'>
                      15+
                    </div>
                    <div className='text-sm text-gray-600'>
                      Mentoras envolvidas
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-purple-600'>5</div>
                    <div className='text-sm text-gray-600'>
                      Escolas participantes
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <div className='inline-flex items-center text-purple-600 font-semibold'>
                  <i className='fas fa-heart mr-2' />
                  Empoderando mulheres na tecnologia desde 2016
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 transform hover:scale-105 transition-transform'>
              <div className='text-6xl mb-6 text-center'>💻</div>
              <h2 className='text-3xl font-bold mb-6 text-blue-800 text-center'>
                Ensino & Tecnologia
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                Nosso laboratório educacional tem como missão democratizar o
                ensino de programação e oferecer experiências práticas de
                mercado para iniciantes. Cada projeto é uma oportunidade de
                aprendizado guiado por desenvolvedores seniores, garantindo
                qualidade e desenvolvimento de habilidades reais.
              </p>

              <div className='space-y-4 mb-6'>
                {[
                  'Cursos práticos de programação para iniciantes',
                  'Mentoria e acompanhamento de projetos reais',
                  'Desenvolvimento de aplicativos e jogos educativos',
                  'Aprendizado de boas práticas de mercado e metodologias ágeis',
                ].map((item, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm'>
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className='bg-white rounded-lg p-4 mb-6'>
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='text-2xl font-bold text-blue-600'>50+</div>
                    <div className='text-sm text-gray-600'>
                      Estudantes impactados
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-blue-600'>30</div>
                    <div className='text-sm text-gray-600'>
                      Projetos guiados por mentores
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-blue-600'>5</div>
                    <div className='text-sm text-gray-600'>
                      Escolas e instituições parceiras
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <div className='inline-flex items-center text-blue-600 font-semibold'>
                  <i className='fas fa-lightbulb mr-2' />
                  Educação + Experiência = Transformação
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg mb-20'>
            <h2 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Como Ensino
            </h2>
            <div className='grid md:grid-cols-4 gap-8'>
              {[
                {
                  icon: '🎯',
                  title: 'Prática Primeiro',
                  description:
                    'Aprendizado baseado em projetos reais, onde teoria e prática caminham juntas.',
                  color: 'bg-purple-500',
                },
                {
                  icon: '🤝',
                  title: 'Mentoria Personalizada',
                  description:
                    'Acompanhamento individual respeitando o ritmo e objetivos de cada pessoa.',
                  color: 'bg-blue-500',
                },
                {
                  icon: '🌱',
                  title: 'Crescimento Gradual',
                  description:
                    'Construção sólida de conhecimento, do básico ao avançado, sem pressa.',
                  color: 'bg-green-500',
                },
                {
                  icon: '💡',
                  title: 'Criatividade',
                  description:
                    'Estímulo ao pensamento criativo e soluções inovadoras para problemas reais.',
                  color: 'bg-pink-500',
                },
              ].map((method, index) => (
                <div key={index} className='text-center'>
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 transform hover:scale-110 transition-transform cursor-pointer`}>
                    {method.icon}
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{method.title}</h3>
                  <p className='text-gray-600'>{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
