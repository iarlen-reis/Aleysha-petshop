/* eslint-disable prettier/prettier */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: 'var(--font-amatic)',
        crimson: 'var(--font-crimson)',
        ruluko: 'var(--font-ruluko)',
      },
      colors: {
        'background': '#FAFAFA',
        'background-rose': '#E11D48',
        'background-input': '#E5E5E5',
        'background-button': '#171717',
        'light': '#000000',
        'sub-title': 'rgba(23, 23, 23, 0.55)',
      },
    },
  },
  plugins: [],
}
export default config
