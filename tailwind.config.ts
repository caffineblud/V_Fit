import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A0D12",
        panel: "#12161D",
        line: "#232A35",
        signal: "#4FE0C2",
        signalDim: "#2C6E62",
        warn: "#E0954F",
        ink: "#DCE4EA",
        inkDim: "#7C8896",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
