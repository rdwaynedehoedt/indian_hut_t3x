/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F6F1EB",
        charcoal: "#2E2B27",
        roast: "#4A3F35",
        gold: "#B89B67",
        heritage: "#556B2F",
        sage: "#A3B18A",
        spice: "#9B4444",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        handwritten: ["var(--font-handwritten)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': `
          linear-gradient(to right, rgba(186, 155, 103, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(186, 155, 103, 0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
    },
  },
  plugins: [],
}; 