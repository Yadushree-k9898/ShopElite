import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(222.2, 84%, 4.9%)",
        background: "hsl(0, 0%, 100%)",
        border: "hsl(214.3, 31.8%, 91.4%)",
        primary: "hsl(222.2, 47.4%, 11.2%)",
        primaryForeground: "hsl(210, 40%, 98%)",
        secondary: "hsl(210, 40%, 96.1%)",
        secondaryForeground: "hsl(222.2, 47.4%, 11.2%)",
        muted: "hsl(210, 40%, 96.1%)",
        mutedForeground: "hsl(215.4, 16.3%, 46.9%)",
        accent: "hsl(210, 40%, 96.1%)",
        accentForeground: "hsl(222.2, 47.4%, 11.2%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        destructiveForeground: "hsl(210, 40%, 98%)",
        ring: "hsl(222.2, 84%, 4.9%)"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
