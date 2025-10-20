import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black/75 border-t border-slate-800 py-2'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-gray-400 text-sm flex items-center gap-2'>
            © {currentYear}{' '}
            <span className='font-semibold text-white'>Thicianny Marques</span>
            <span className='hidden sm:inline'>•</span>
            <span className='hidden sm:inline'>
              Todos os direitos reservados
            </span>
          </p>
          <p className='text-gray-500 text-xs flex items-center gap-1'>
            Feito com{' '}
            <Heart className='w-3 h-3 text-red-500 fill-red-500 animate-pulse' />{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
