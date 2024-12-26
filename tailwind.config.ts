import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "top-nav": {
          bg: "var(--top-nav-bg)",
          text: "var(--top-nav-text)",
        },
        sidebar: {
          bg: "var(--sidebar-bg)",
          text: "var(--sidebar-text)",
          hover: "var(--sidebar-hover)",
        },
        content: {
          bg: "var(--content-bg)",
          text: "var(--content-text)",
        },
        ai: {
          border: "var(--ai-border)",
          bg: "var(--ai-bg)",
          icon: "var(--ai-icon)",
          text: "var(--ai-text)",
        },
        chart: {
          blue: "var(--chart-blue)",
          orange: "var(--chart-orange)",
          green: "var(--chart-green)",
          lightBlue: "var(--chart-light-blue)",
          gray: "var(--chart-gray)",
        },
        action: {
          bg: "var(--action-bg)",
          text: "var(--action-text)",
        },
        table: {
          header: "var(--table-header)",
          row: "var(--table-row)",
          altRow: "var(--table-alt-row)",
        },
        scrollbar: {
          thumb: "var(--scrollbar-thumb)",
        },
        status: {
          new: {
            bg: "var(--status-new-bg)",
            text: "var(--status-new-text)",
          },
        },
        date: "var(--date-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;
