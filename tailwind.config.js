/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        seed_sanctuary: {
          primary: '#A8B580',
          'primary-focus': '#88975B',
          'primary-content': '#EFF4DD',
          secondary: '#ccd5ae',
          'secondary-focus': '#A8B580',
          'secondary-content': '#EFF4DD',
          accent: '#FD4348',
          'accent-focus': '#FE686C',
          'accent-content': '#FEE2E3',
          neutral: '#212121',
          'base-100': '#fefae0',
          'base-200': '#faedcd',
          'base-300': '#B5A38A',
          'base-content': '#373737',
          info: '#89B2BE',
          'info-content': '#E7F2F5',
          success: '#82AF6F',
          'success-content': '#D3E7CB',
          warning: '#F8F083',
          'warning-content': '#AFA62D',
          error: '#DB405F',
          'error-content': '#F590A4',
          '--rounded-box': '0rem',
          '--rounded-btn': '0.0rem',
          '--rounded-badge': '0rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'uppercase',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem'
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

