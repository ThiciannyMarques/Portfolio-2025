import { useState, useEffect } from 'react'

interface Notification {
  id: number
  message: string
}

export function EasterEgg() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const messages = [
    '🐱 Miau! Você encontrou meu gatinho escondido!',
    '🎌 Konnichiwa! Você descobriu meu amor pela cultura asiática!',
    '🌟 Como Totoro, acredito na magia da criatividade!',
    "🧙‍♀️ 'Nem todos os que vagueiam estão perdidos' - Tolkien",
  ]

  const showEasterEgg = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    const id = Date.now()

    setNotifications((prev) => [...prev, { id, message: randomMessage }])

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id))
    }, 5000)

    const randomTop = Math.floor(Math.random() * (window.innerHeight - 100))
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100))
    setPosition({ top: randomTop, left: randomLeft })
  }

  useEffect(() => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 100))
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100))
    setPosition({ top: randomTop, left: randomLeft })
  }, [])

  return (
    <>
      <div
        className='fixed w-16 h-16 cursor-pointer z-50 animate-bounce hover:animate-pulse transition-all duration-300 text-4xl flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110'
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        onClick={showEasterEgg}
        title='Clique para uma surpresa!'>
        🐱
      </div>

      <div className='fixed top-24 right-6 flex flex-col gap-4 z-50'>
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className='bg-white border-l-4 border-purple-500 p-4 rounded-lg shadow-lg max-w-sm transform transition-transform duration-300 opacity-100'>
            <div className='flex items-center'>
              <div className='text-2xl mr-3'>🎉</div>
              <div>
                <p className='font-semibold text-purple-600'>Easter Egg!</p>
                <p className='text-sm text-gray-600'>{notif.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
