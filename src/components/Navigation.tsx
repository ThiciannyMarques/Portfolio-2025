import { useState } from 'react'

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
    { id: 'teaching', label: 'Ensino & Social' },
    { id: 'skills', label: 'Skills' },
  ]

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex justify-between items-center'>
          <div className='text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
            Thicianny
          </div>

          <div className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link px-4 py-2 font-medium relative overflow-hidden transition-colors duration-300 cursor-pointer ${
                  currentPage === item.id
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}>
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform transition-transform duration-300 ${
                    currentPage === item.id
                      ? 'translate-x-0'
                      : '-translate-x-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-2xl'>
              <i className='fas fa-bars' />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 space-y-2 bg-white rounded-lg shadow-lg p-4'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 font-medium rounded transition-colors ${
                  currentPage === item.id
                    ? 'bg-purple-100 text-purple-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
