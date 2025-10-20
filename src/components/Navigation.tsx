import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'teaching', label: 'Impacto Social' },
    { id: 'skills', label: 'Competências' },
  ]

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 w-full glass z-50 border-b border-white/10 shadow-2xl'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='flex justify-between items-center h-20'>
          <button
            onClick={() => handleNavClick('home')}
            className='group flex items-center space-x-3 cursor-pointer'>
            <div className='w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 hover-glow'>
              <span className='text-white font-bold text-xl'>T</span>
            </div>
            <div className='hidden md:block'>
              <div className='font-heading font-bold text-xl text-white'>
                Thicianny Marques
              </div>
              <div className='text-xs text-purple-300 font-medium'>
                Full Stack Developer
              </div>
            </div>
          </button>

          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 relative cursor-pointer ${
                  currentPage === item.id
                    ? 'text-white bg-white/10 backdrop-blur-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}>
                {item.label}
                {currentPage === item.id && (
                  <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full pulse-glow' />
                )}
              </button>
            ))}
            <button
              onClick={() => {
                handleNavClick('home')
                setTimeout(() => {
                  const contactSection =
                    document.getElementById('contact-section')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className='ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm hover-glow hover:scale-105 transition-all duration-300 cursor-pointer'>
              Contato
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors'>
            {isMobileMenuOpen ? (
              <X className='w-6 h-6 text-white' />
            ) : (
              <Menu className='w-6 h-6 text-white' />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className='md:hidden py-6 border-t border-white/10 glass-dark space-y-2'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                handleNavClick('home')
                setTimeout(() => {
                  const contactSection =
                    document.getElementById('contact-section')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className='w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover-glow transition-all'>
              Contato
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
