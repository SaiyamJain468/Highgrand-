import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['var(--font-bebas)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
      fontSize: {
        'display':   ['96px',  { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'hero':      ['72px',  { lineHeight: '1.0',  letterSpacing: '-0.01em' }],
        'h1':        ['56px',  { lineHeight: '1.1',  letterSpacing: '0.02em'  }],
        'h2':        ['40px',  { lineHeight: '1.15', letterSpacing: '0.02em'  }],
        'h3':        ['28px',  { lineHeight: '1.2',  letterSpacing: '0.03em'  }],
        'h4':        ['20px',  { lineHeight: '1.3',  letterSpacing: '0.04em'  }],
        'body-lg':   ['18px',  { lineHeight: '1.6'                            }],
        'body':      ['16px',  { lineHeight: '1.6'                            }],
        'body-sm':   ['14px',  { lineHeight: '1.5'                            }],
        'label':     ['12px',  { lineHeight: '1.4',  letterSpacing: '0.12em'  }],
        'micro':     ['11px',  { lineHeight: '1.4',  letterSpacing: '0.1em'   }],
      },
      colors: {
        'brand': {
          black:    '#000000',
          dark:     '#0A0A0A',
          darker:   '#111111',
          border:   '#1F1F1F',
          muted:    '#888888',
          accent:   '#C8A96E',
          'accent-dark': '#9E7D45',
          white:    '#FFFFFF',
        }
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
