// import React from 'react'

// import Header from "../components/Header/Header";
// import Footer from '../components/Footer/Footer';
// import Routers from "../routes/Routers";
// // import { Router } from 'express';

// const Layout = () => {
//   return <>
//     <Header/>
//     <main>
//       <Routers/>
//     </main>
//     <Footer/>
//   </>
//   }

// export default Layout










// 3. Create a proper Layout.jsx file in layout folder
// layout/Layout.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;