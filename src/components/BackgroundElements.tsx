import { motion } from 'framer-motion';

interface BackgroundElementsProps {
  variant?: 'hero' | 'dark' | 'purple' | 'blue' | 'gold' | 'gradient';
}

export function BackgroundElements({ variant = 'hero' }: BackgroundElementsProps) {
  const variants = {
    hero: {
      gradient: 'from-slate-950 via-purple-950 to-slate-900',
      accent: 'from-purple-500/20 to-pink-500/20',
    },
    dark: {
      gradient: 'from-slate-950 via-slate-900 to-slate-950',
      accent: 'from-purple-600/10 to-blue-600/10',
    },
    purple: {
      gradient: 'from-purple-950 via-violet-950 to-slate-950',
      accent: 'from-violet-500/20 to-purple-500/20',
    },
    blue: {
      gradient: 'from-blue-950 via-slate-950 to-indigo-950',
      accent: 'from-blue-500/20 to-cyan-500/20',
    },
    gold: {
      gradient: 'from-amber-950 via-slate-950 to-orange-950',
      accent: 'from-amber-500/20 to-orange-500/20',
    },
    gradient: {
      gradient: 'from-slate-900 via-purple-900 to-slate-900',
      accent: 'from-purple-500/30 to-pink-500/30',
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentVariant.gradient}`} />
      
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr ${currentVariant.accent} opacity-50`}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.circle
          cx="20%"
          cy="30%"
          r="2"
          fill="white"
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="80%"
          cy="60%"
          r="3"
          fill="white"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="50%"
          cy="80%"
          r="2.5"
          fill="white"
          animate={{
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.line
          x1="10%"
          y1="50%"
          x2="30%"
          y2="50%"
          stroke="white"
          strokeWidth="1"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            x1: ['10%', '15%', '10%'],
            x2: ['30%', '35%', '30%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.line
          x1="70%"
          y1="20%"
          x2="90%"
          y2="20%"
          stroke="white"
          strokeWidth="1"
          animate={{
            opacity: [0.1, 0.5, 0.1],
            x1: ['70%', '75%', '70%'],
            x2: ['90%', '95%', '90%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </svg>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30" />
    </div>
  );
}
