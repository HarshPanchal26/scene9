/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-800
        input: 'var(--color-input)', // gray-900
        ring: 'var(--color-ring)', // cyan-400
        background: 'var(--color-background)', // gray-950
        foreground: 'var(--color-foreground)', // gray-50
        primary: {
          DEFAULT: 'var(--color-primary)', // gray-950
          foreground: 'var(--color-primary-foreground)', // gray-50
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // gray-900
          foreground: 'var(--color-secondary-foreground)', // gray-50
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-800
          foreground: 'var(--color-muted-foreground)', // gray-400
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // cyan-400
          foreground: 'var(--color-accent-foreground)', // gray-950
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // gray-900
          foreground: 'var(--color-popover-foreground)', // gray-50
        },
        card: {
          DEFAULT: 'var(--color-card)', // gray-900
          foreground: 'var(--color-card-foreground)', // gray-50
        },
        surface: {
          DEFAULT: 'var(--color-surface)', // gray-900
          foreground: 'var(--color-surface-foreground)', // gray-50
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-400
          foreground: 'var(--color-success-foreground)', // gray-950
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-400
          foreground: 'var(--color-warning-foreground)', // gray-950
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)', // white
        },
        text: {
          primary: 'var(--color-text-primary)', // gray-50
          secondary: 'var(--color-text-secondary)', // gray-400
        },
        brand: {
          purple: 'var(--color-brand-purple)', // indigo-500
          coral: 'var(--color-brand-coral)', // red-400
          'neon-cyan': 'var(--color-brand-neon-cyan)', // cyan-500
          'neon-red': 'var(--color-brand-neon-red)', // red-400
        },
      },
      borderRadius: {
        lg: 'var(--radius-lg)', // 12px
        md: 'var(--radius-md)', // 8px
        sm: 'var(--radius-sm)', // 4px
        xl: 'var(--radius-xl)', // 16px
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 48px
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
        'heading-1': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }], // 32px
        'heading-2': ['1.5rem', { lineHeight: '1.3' }], // 24px
        'heading-3': ['1.25rem', { lineHeight: '1.4' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4' }], // 12px
      },
      spacing: {
        'xs': 'var(--spacing-xs)', // 8px
        'sm': 'var(--spacing-sm)', // 13px
        'md': 'var(--spacing-md)', // 21px
        'lg': 'var(--spacing-lg)', // 34px
        'xl': 'var(--spacing-xl)', // 55px
        '2xl': 'var(--spacing-2xl)', // 89px
      },
      boxShadow: {
        'cinematic': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(99, 102, 241, 0.3)',
        'elevation-sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elevation-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'elevation-lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out-custom',
        'slide-up': 'slideUp 600ms ease-out-custom',
        'scale-in': 'scaleIn 400ms ease-out-custom',
        'morph': 'morph 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backgroundImage: {
        'gradient-consciousness': 'linear-gradient(45deg, #1a1a1a 0%, #00d4ff 50%, #6366f1 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
    },
  },
  plugins: [],
}