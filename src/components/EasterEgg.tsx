import { useState } from 'react';

export function EasterEgg() {
  const [showNotification, setShowNotification] = useState(false);

  const messages = [
    "🐱 Miau! Você encontrou meu gatinho escondido!",
    "🎌 Konnichiwa! Você descobriu meu amor pela cultura asiática!",
    "🌟 Como Totoro, acredito na magia da criatividade!",
    "🧙‍♀️ 'Nem todos os que vagueiam estão perdidos' - Tolkien"
  ];

  const showEasterEgg = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    setShowNotification(true);
    
    // Create a temporary element for the message
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-6 bg-white border-l-4 border-purple-500 p-4 rounded-lg shadow-lg z-50 max-w-sm transform translate-x-full opacity-0 transition-all duration-300';
    notification.innerHTML = `
      <div class="flex items-center">
        <div class="text-2xl mr-3">🎉</div>
        <div>
          <p class="font-semibold text-purple-600">Easter Egg!</p>
          <p class="text-sm text-gray-600">${randomMessage}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
      notification.style.opacity = '1';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  };

  return (
    <div 
      className="fixed bottom-20 right-20 w-16 h-16 cursor-pointer z-50 animate-bounce hover:animate-pulse transition-all duration-300 text-4xl flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
      onClick={showEasterEgg}
      title="Clique para uma surpresa!"
    >
      🐱
    </div>
  );
}