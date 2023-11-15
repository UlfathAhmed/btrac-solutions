/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
  extend: {
    backgroundImage: {
      'whitehb':" url('src/assets/images/lightbg.png') ",
      'darkhb':" url('src/assets/images/darkbg.png') ",
      'circle': "url('src/assets/images/homecircle.png')",
      'servicebgdark': "url('src/assets/images/servicebgdark.png')",
      'servicebglight': "url('src/assets/images/servicebglight.jpg')",
      'footerbgdark': " url('src/assets/images/footerbbg.png') ",
      'footerbglight':" url('src/assets/images/footerlbg.jpg') ",
      'blogpagelight':" url('src/assets/images/blogbgw.png') ",
      'blogpagedark':" url('src/assets/images/blogbgb.png') ",
      'btraclogodark':" url('src/assets/images/btraclogobb.png') ",
      'btraclogodark':" url('src/assets/images/btraclogowb.png') ",

      
    }
  },
  fontFamily: {
    blackerdisplay : ['Blacker Display'],
    syne : ['Syne'],
    blackertext :[ 'Blacker Text' ],
    prata: ['Prata'],
    Inter: ['Inter'],
    LondrinaOutline: ['Londrina Outline'],
    Poppins: ['Poppins'],
    sansserif: ['sans-serif']
  },  
    
  },
  plugins: [],


}

