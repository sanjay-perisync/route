import "./globals.css";


export const metadata={
  title:{
  title:"%s | Blogs Town",
  default : "Blogs Town"
},
description:'Blogs site'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-teal-700 p-4">Header</header>
        <section className="h-screen">
        {children}
        </section>
       
        <footer className="bg-teal-700 p-4">Footer</footer>
      </body>
    </html>
  );
}
