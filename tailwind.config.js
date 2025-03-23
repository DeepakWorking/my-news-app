/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8", // Blue-700
          dark: "#1E40AF", // Blue-800
          contrast: "#FFFFFF", // White text on primary
        },
        secondary: {
          DEFAULT: "#10B981", // Green-500
          dark: "#047857", // Green-700
          contrast: "#FFFFFF", // White text on secondary
        },
        textPrimary: {
          DEFAULT: "#1F2937", // Gray-800 (Dark text for light mode)
          dark: "#E5E7EB", // Gray-200 (Light text for dark mode)
        },
        textSecondary: {
          DEFAULT: "#6B7280", // Gray-500 (Muted text)
          dark: "#9CA3AF", // Gray-400 (Muted text in dark mode)
        },
        background: {
          light: "#F9FAFB", // Gray-50 (Light mode background)
          dark: "#111827", // Gray-900 (Dark mode background)
        },
      },
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

