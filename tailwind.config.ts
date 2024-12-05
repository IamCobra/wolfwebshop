const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/shadcn-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
        'fade-up': 'fadeUp 2s ease-out',
        'image-motion': 'imageMotion 10s infinite alternate ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        imageMotion: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
