import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: "#F5B21B", deep: "#E39A00" },
        oxblood: { DEFAULT: "#3B1014", soft: "#52191E", line: "#6B2A30" },
        chilli: "#D8372B",
        ink: "#1E0A0C",
        sand: "#FBE9BE",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
