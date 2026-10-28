const plugin = require("tailwindcss/plugin");
const { blackA, mauve, violet, indigo, purple } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
        main: "#1a1a1a",
        org: "#ff5001",
        // WebWeave brand palette
        brand: {
          50: "#f3f1ff",
          100: "#e9e5ff",
          200: "#d5ceff",
          300: "#b6a6ff",
          400: "#9175ff",
          500: "#7047fb",
          600: "#5f2bf0",
          700: "#4f1fd6",
          800: "#421bb0",
          900: "#37198f",
          950: "#210d61",
        },
        weave: {
          ink: "#0d0b26",
          cyan: "#22d3ee",
          pink: "#f472b6",
        },
      },
      backgroundImage: {
        weave:
          "linear-gradient(135deg, #1e1458 0%, #4f1fd6 40%, #7047fb 70%, #22d3ee 100%)",
        "weave-soft":
          "radial-gradient(60rem 30rem at 10% -10%, rgba(112,71,251,0.18), transparent 60%), radial-gradient(50rem 30rem at 110% 10%, rgba(34,211,238,0.16), transparent 60%), linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 20, 88, 0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        glow: "0 10px 40px -10px rgba(112, 71, 251, 0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        bounce: {
          from: { transform: "translateY(-25%)" },
          via: { transform: "translateY(0)" },
          to: { transform: "translateY(-25%)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(-50%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(50%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDrawer: {
          from: { opacity: "0", transform: "translateX(-50%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideEndDrawer: {
          from: { opacity: "0", transform: "translateX(50%)" },
          to: { opacity: "1", transform: "translateX(100%)" },
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaling: {
          from: { transform: "scale(50%)" },
          to: { transform: "scale(100%)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromBottom: {
          from: { opacity: "0", transform: "translateY(-200px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        exitToBottom: {
          from: { opacity: "0", transform: "translateY(200px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pulse: {
          from: { opacity: "1" },
          to: { opacity: "0.5" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
    animation: {
      float: "float 6s ease-in-out infinite",
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUp: "slideUp 300ms ease",
      slideDown: "slideDown 300ms ease",
      slideDrawer: "slideDrawer 200ms ease",
      slideEndDrawer: "slideEndDrawer 200ms ease",
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
      enterFromBottom: "enterFromBottom 250ms ease",
      exitToBottom: "exitToBottom 250ms ease",
      spin: "spin 1s linear infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) alternate infinite",
      bounce: "bounce 2s cubic-bezier(0.8, 0, 1, 1) alternate infinite",
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
