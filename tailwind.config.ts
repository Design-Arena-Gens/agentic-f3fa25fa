import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "agent-blue": "#1d4ed8",
        "agent-indigo": "#4338ca",
        "agent-sky": "#0ea5e9"
      }
    }
  },
  plugins: []
};

export default config;
