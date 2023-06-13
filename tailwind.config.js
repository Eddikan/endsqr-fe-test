/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39CDCC",
        primaryText: "#7A8CB1",
        secondaryText: "#F3FCFC",
        navActive: "#39CDCC",
        dashboard: "#545F7D",
        dashboardBold: "#213F7D",
        dashboardBackground: "#FBFBFB",
        tableBorder:"#E9ECF2",
        paginationDropdown:"#E5E8EE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
