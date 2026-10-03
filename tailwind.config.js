export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Point Tailwind's own font utilities at the same variables the component
      // layer uses. Without this, `font-mono` would silently fall back to
      // Tailwind's default monospace stack while `label-mono` resolved to Geist
      // Mono — two different monospace faces on the same page.
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
}