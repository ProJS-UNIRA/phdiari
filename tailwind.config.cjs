/**
 * Tailwind CSS v4 configuration
 * Sets serif family and enables typography plugin
 */
module.exports = {
  content: [
    './src/**/*.{html,svelte,js,ts}',
    './src/*.{html,svelte,js,ts}',
    './app.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cambria', 'Merriweather', 'Georgia', '"Times New Roman"', 'serif']
      },
      colors: {
        brand: {
          DEFAULT: '#4A9A94',
          accent: '#E47A53'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
  ,
  safelist: [
    'bg-white',
    'rounded-lg',
    'shadow-sm',
    'font-serif',
    'prose',
    'prose-lg'
  ]
};

