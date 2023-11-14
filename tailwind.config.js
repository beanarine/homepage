import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // black: colors.black,
      // white: colors.white,
      // rose: colors.rose,
      // pink: colors.pink,
      // fuchsia: colors.fuchsia,
      // purple: colors.purple,
      // violet: colors.violet,
      // indigo: colors.indigo,
      // blue: colors.blue,
      // lightBlue: colors.sky,
      // cyan: colors.cyan,
      // teal: colors.teal,
      // emerald: colors.emerald,
      // green: colors.green,
      // lime: colors.lime,
      // yellow: colors.yellow,
      // amber: colors.amber,
      // orange: colors.orange,
      // red: colors.red,
      // slate: colors.slate,
      // zinc: colors.zinc,
      // gray: colors.gray,
      // neutral: colors.slate,
      // stone: colors.stone,
    },
    variants: {},
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      //prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "macchiato",
    }),
  ],
};
