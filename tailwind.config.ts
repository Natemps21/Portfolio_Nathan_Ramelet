import { type Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#000000",
          900: "#0a0a0a",
          800: "#111111",
          dark: "#000000",
          light: "#1a1a1a",
          accent: "#8b5cf6",
          black: "#000000",
        },
        nebula: {
          cyan: "#4a90e2",
          magenta: "#d946ef",
          purple: "#8b5cf6",
        },
        star: {
          cyan: "#00FFFF",
          magenta: "#FF00FF",
          gold: "#FDB813",
          yellow: "#fdb813",
        },
        glass: {
          low: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.1)",
          border: "rgba(255, 255, 255, 0.15)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(112, 0, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(112, 0, 255, 0.8)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;

