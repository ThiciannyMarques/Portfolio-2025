import { useState, useCallback, memo } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export const Navigation = memo(function Navigation({
  currentPage,
  onPageChange,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'teaching', label: 'Impacto Social' },
    { id: 'skills', label: 'Competências' },
  ]

  const handleNavClick = useCallback(
    (pageId: string) => {
      onPageChange(pageId)
      setIsMobileMenuOpen(false)
    },
    [onPageChange]
  )

  const handleContactClick = useCallback(() => {
    handleNavClick('home')
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section')
      contactSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }, [handleNavClick])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <nav
      className='fixed top-0 w-full glass z-50 border-b border-white/10 shadow-2xl'
      role='navigation'
      aria-label='Navegação principal'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200'>
        Pular para o conteúdo principal
      </a>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
          <button
            onClick={() => handleNavClick('home')}
            className='group flex items-center space-x-2 sm:space-x-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-1 transition-all duration-200'
            aria-label='Ir para Home'
            type='button'>
            <div
              className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 hover-glow'
              aria-hidden='true'>
              <img src="/iconTM.jpg" alt="TM icon" className='rounded-lg' />
            </div>
            <div className='hidden sm:block text-left'>
              <div className='font-heading font-bold text-lg sm:text-xl text-white leading-tight'>
                Thicianny Marques
              </div>
              <div className='text-xs text-purple-300 font-medium leading-tight'>
                Developer
              </div>
            </div>
          </button>

          <div
            className='hidden md:flex items-center space-x-1'
            role='menubar'
            aria-label='Menu principal'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm transition-all duration-300 relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  currentPage === item.id
                    ? 'text-white bg-white/10 backdrop-blur-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                role='menuitem'
                aria-current={currentPage === item.id ? 'page' : undefined}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }
                }}>
                {item.label}
                {currentPage === item.id && (
                  <span
                    className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full pulse-glow'
                    aria-hidden='true'
                  />
                )}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className='ml-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm hover-glow hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900'
              role='menuitem'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleContactClick()
                }
              }}>
              Contato
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900'
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            aria-haspopup='true'
            type='button'>
            {isMobileMenuOpen ? (
              <X className='w-6 h-6 text-white' aria-hidden='true' />
            ) : (
              <Menu className='w-6 h-6 text-white' aria-hidden='true' />
            )}
          </button>
        </div>

        <div
          id='mobile-menu'
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-96 py-4 border-t border-white/10 glass-dark opacity-100'
              : 'max-h-0 opacity-0'
          }`}
          role='menu'
          aria-label='Menu mobile'>
          <div className='space-y-2'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  currentPage === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                role='menuitem'
                aria-current={currentPage === item.id ? 'page' : undefined}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }
                }}>
                {item.label}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className='w-full mt-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover-glow transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900'
              role='menuitem'
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleContactClick()
                }
              }}>
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
})
