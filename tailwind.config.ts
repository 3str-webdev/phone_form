import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: {
          1: "#86D3F4",
          2: "#000000",
        },
        subline: {
          1: "#565656",
        },
        error: {
          1: "#EA0000",
        },
        disabled: {
          1: "#4E4E4E",
        },
        transparent: "rgba(0, 0, 0, 0)",
        contrast: "#ffffff",
      },

      fontSize: {
        header: "26px",
        text: "16px",
        subtext: "14px",
        telnumber: "32px",
      },
    },
    plugins: [],
  },
};
export default config;
