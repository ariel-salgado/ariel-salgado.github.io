/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      colors: {
        // hsl
        primary: 'hsl(var(--primary) / <alpha-value>)',

        // rbg
        navy: 'rgb(var(--navy) / <alpha-value>)',
        'dark-navy':
          'rgb(var(--dark-navy) / <alpha-value>)',
        'light-navy':
          'rgb(var(--light-navy) / <alpha-value>)',
        'lightest-navy':
          'rgb(var(--lightest-navy) / <alpha-value>)',

        slate: 'rgb(var(--slate) / <alpha-value>)',
        'light-slate':
          'rgb(var(--light-slate) / <alpha-value>)',
        'dark-slate':
          'rgb(var(--dark-slate) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
