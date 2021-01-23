export default {
  optimizeDeps: {
    include: ["lodash/fp"],
  },
  plugins: [require("@vitejs/plugin-react-refresh")()],
};
