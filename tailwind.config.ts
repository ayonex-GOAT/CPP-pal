import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 18px 50px rgba(26, 50, 87, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
