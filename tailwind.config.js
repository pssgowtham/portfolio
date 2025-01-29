export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      backgroundImage: {
        'light-bg': "url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your light image path
        'dark-bg': "url('https://img.freepik.com/free-vector/digital-red-circuit-lines-technology-background-design_1017-27263.jpg?t=st=1738098423~exp=1738102023~hmac=15153c2cc9fc9ef63b691ad21c824eb7921e3d6fe6eecf2bb8c2f3dda2727a79&w=1800')",  // Replace with your dark image path
      },
    },
  },
  plugins: [],
}