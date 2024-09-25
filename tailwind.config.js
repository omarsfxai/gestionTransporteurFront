/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
      },
      colors: {
        "white-100": "#fff",
        slateblue: "#6e5ed0",
        darkgray: "#9da4b1",
        gray: {
          "100": "#1e1e1e",
          "200": "#08081a",
        },
        slategray: "#2b6983",
        "accent-1": "#d0d5dd",
        skyblue: "#88cbe8",
        lightblue: "#9bbec8",
        darkslategray: "#344054",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "text-1": "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
