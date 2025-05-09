// // // // // // import {useEffect, userRef} from 'react';
// // // // // // import logo from '../../assets/images/logo.png';
// // // // // // import{navLink, Link } from 'react-router-dom'



// // // // // // const navLinks = [
// // // // // //   {
// // // // // //     path: '/home',
// // // // // //     display: 'Home'
// // // // // //   },
// // // // // //   {
// // // // // //     path: '/doctors',
// // // // // //     display: 'Find a Doctor'
// // // // // //   },
// // // // // //   {
// // // // // //     path: '/services',
// // // // // //     display: 'Services'
// // // // // //   },
// // // // // //   {
// // // // // //     path: '/contact',
// // // // // //     display: 'Contact'
// // // // // //   },
// // // // // // ]




// // // // // // const Header = () => {
// // // // // //   return 
// // // // // //     <Header className="header">
// // // // // //       <div className='container'>
// // // // // //         <div className='flex items-center justify-between'>
// // // // // //           {/* --------- logo ------- */}
// // // // // //           <div>
// // // // // //             <img src={logo} alt=''/>
// // // // // //           </div>

// // // // // //           {/* ---------- menu ------*/}
// // // // // //           <div className='navigation'>
// // // // // //             <ul className='menu flex items-center gap-[2.7rem]'>
// // // // // //               {
// // // // // //                 navLinks.map(link, index)=><li key={index}>
// // // // // //                   <navLink to={link.path} className={navClass=> navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : ''}>{link.display}</navLink>
// // // // // //                 </li>
// // // // // //               }

// // // // // //             </ul>
// // // // // //           </div>






// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </Header>
// // // // // //   }

// // // // // // export default Header













// // // import React from 'react';
// // // import { useEffect, useRef } from 'react';
// // // import logo from '../../assets/images/logo.png';
// // // import userImg from '../../assets/images/avatar-icon.png';
// // // import { NavLink, Link } from 'react-router-dom';
// // // import {BiMenu} from "react-icons/bi";

// // // const navLinks = [
// // //   { path: '/home', display: 'Home' },
// // //   { path: '/doctors', display: 'Find a Doctor' },
// // //   { path: '/services', display: 'Services' },
// // //   { path: '/contact', display: 'Contact' },
// // // ];

// // // const Header = () => {


// // //   const headerRef = useRef(null)
// // //   const menuRef = useRef(null)

// // //   const handleStickyHeader = () => {
// // //     window.addEventListener('scroll', ()=> {
// // //       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
// // //         headerRef.current.classList.add('sticky__header')
// // //       }else {
// // //         headerRef.current.classList.remove('stciky__header')
// // //       }
// // //     })
// // //   }

// // //   useEffect(()=> {
// // //     handleStickyHeader()
// // //     return ()=> window.removeEventListener()
// // //   } )


// // //   const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')


// // //   return (
// // //     <header className="header flex items-center" ref={headerRef}>
// // //       <div className="container">
// // //         <div className="flex items-center justify-between">
// // //           {/* Logo */}
// // //           <div>
// // //             <img src={logo} alt="Logo" />
// // //           </div>

// // //           {/* Navigation */}
// // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // //             <ul className="menu flex items-center gap-[2.7rem]">
// // //               {navLinks.map((link, index) => (
// // //                 <li key={index}>
// // //                   <NavLink
// // //                     to={link.path}
// // //                     className={({ isActive }) =>
// // //                       isActive
// // //                         ? 'text-primaryColor text-[16px] leading-7 font-[600]'
// // //                         : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
// // //                     }
// // //                   >
// // //                     {link.display}
// // //                   </NavLink>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>


// // //           { /* nav right */ }
// // //           <div className='flex items-center gap-4'>
// // //             <div className='hidden'>
// // //               <Link to='/'>
// // //               <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
// // //                 <img src={userImg} className='w-full rounded-full' alt=''/>
// // //               </figure>
// // //               </Link>
// // //             </div>

// // //             <Link to='/login'>
// // //             <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]flex items-center justify-center rounded-[50px]'>Login</button>
// // //             </Link>

// // //             <span className='md:hidden' onClick={toggleMenu}>
// // //               <BiMenu className="w-6 h-6 cursor-pointer"/>
// // //             </span>
// // //           </div>





// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;



// // // // import React, { useEffect, useRef } from 'react';
// // // // import logo from '../../assets/images/logo.png';
// // // // import userImg from '../../assets/images/avatar-icon.png';
// // // // import { NavLink, Link } from 'react-router-dom';
// // // // import { BiMenu } from "react-icons/bi";

// // // // const navLinks = [
// // // //   { path: '/home', display: 'Home' },
// // // //   { path: '/doctors', display: 'Find a Doctor' },
// // // //   { path: '/services', display: 'Services' },
// // // //   { path: '/contact', display: 'Contact' },
// // // // ];

// // // // const Header = () => {
// // // //   const headerRef = useRef(null);
// // // //   const menuRef = useRef(null);

// // // //   const handleScroll = () => {
// // // //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
// // // //       headerRef.current?.classList.add('sticky__header');
// // // //     } else {
// // // //       headerRef.current?.classList.remove('sticky__header');
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     window.addEventListener('scroll', handleScroll);

// // // //     return () => {
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //     };
// // // //   }, []);

// // // //   const toggleMenu = () => {
// // // //     menuRef.current?.classList.toggle('show__menu');
// // // //   };

// // // //   return (
// // // //     <header className="header flex items-center" ref={headerRef}>
// // // //       <div className="container">
// // // //         <div className="flex items-center justify-between">
// // // //           <div>
// // // //             <img src={logo} alt="Logo" />
// // // //           </div>

// // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // //             <ul className="menu flex items-center gap-[2.7rem]">
// // // //               {navLinks.map((link, index) => (
// // // //                 <li key={index}>
// // // //                   <NavLink
// // // //                     to={link.path}
// // // //                     className={({ isActive }) =>
// // // //                       isActive
// // // //                         ? 'text-primaryColor text-[16px] leading-7 font-[600]'
// // // //                         : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
// // // //                     }
// // // //                   >
// // // //                     {link.display}
// // // //                   </NavLink>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           <div className="flex items-center gap-4">
// // // //             <div className="hidden">
// // // //               <Link to="/">
// // // //                 <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
// // // //                   <img src={userImg} className="w-full rounded-full" alt="" />
// // // //                 </figure>
// // // //               </Link>
// // // //             </div>

// // // //             <Link to="/login">
// // // //               <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
// // // //                 Login
// // // //               </button>
// // // //             </Link>

// // // //             <span className="md:hidden" onClick={toggleMenu}>
// // // //               <BiMenu className="w-6 h-6 cursor-pointer" />
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;











// // // // // components/Header/Header.jsx
// // // // import React, { useEffect, useRef } from 'react';
// // // // import { NavLink, Link } from 'react-router-dom';
// // // // import { BiMenu } from "react-icons/bi";

// // // // // Make sure these paths are correct for your project structure
// // // // // You may need to adjust them based on your actual folder structure
// // // // import logo from '../../assets/images/logo.png';
// // // // import userImg from '../../assets/images/avatar-icon.png';

// // // // const navLinks = [
// // // //   { path: '/home', display: 'Home' },
// // // //   { path: '/doctors', display: 'Find a Doctor' },
// // // //   { path: '/services', display: 'Services' },
// // // //   { path: '/contact', display: 'Contact' },
// // // // ];

// // // // const Header = () => {
// // // //   const headerRef = useRef(null);
// // // //   const menuRef = useRef(null);

// // //   // const handleScroll = () => {
// // //   //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
// // //   //     headerRef.current?.classList.add('sticky__header');
// // //   //   } else {
// // //   //     headerRef.current?.classList.remove('sticky__header');
// // //   //   }
// // //   // };

// // //   // useEffect(() => {
// // //   //   window.addEventListener('scroll', handleScroll);

// // //   //   return () => {
// // //   //     window.removeEventListener('scroll', handleScroll);
// // //   //   };
// // //   // }, []);


// // // //   const handleStickyHeader = () => {
// // // //     window.addEventListener('scroll', ()=>{
// // // //       if(document.body.scrollTop >80 || DocumentElement.scrollTop > 80){
// // // //         headerRef.current.classList.add('sticky__header')
// // // //       } else {
// // // //         headerRef.current.classList.add('sticky__header')
// // // //       }
// // // //     })
// // // //   }


// // // //   useEffect(()=> {
// // // //     handleStickyHeader()
// // // //     return ()=> window.removeEventListener('scroll', handleStickyHeader)
// // // //   })




// // // //   const toggleMenu = () => {
// // // //     menuRef.current?.classList.toggle('show__menu');
// // // //   };

// // // //   return (
// // // //     <header className="header flex items-center" ref={headerRef}>
// // // //       <div className="container">
// // // //         <div className="flex items-center justify-between">
// // // //           {/* Logo */}
// // // //           <div>
// // // //             <img src={logo} alt="Logo" />
// // // //           </div>

// // // //           {/* Menu */}
// // // //           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
// // // //             <ul className="menu flex items-center gap-[2.7rem]">
// // // //               {navLinks.map((link, index) => (
// // // //                 <li key={index}>
// // // //                   <NavLink
// // // //                     to={link.path}
// // // //                     className={({ isActive }) =>
// // // //                       isActive
// // // //                         ? 'text-primaryColor text-[16px] leading-7 font-[600]'
// // // //                         : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
// // // //                     }
// // // //                   >
// // // //                     {link.display}
// // // //                   </NavLink>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Right side - login button and mobile menu */}
// // // //           <div className="flex items-center gap-4">
// // // //             <div className="hidden">
// // // //               <Link to="/">
// // // //                 <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
// // // //                   <img src={userImg} className="w-full rounded-full" alt="" />
// // // //                 </figure>
// // // //               </Link>
// // // //             </div>

// // // //             <Link to="/login">
// // // //               <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
// // // //                 Login
// // // //               </button>
// // // //             </Link>

// // // //             <span className="md:hidden" onClick={toggleMenu}>
// // // //               <BiMenu className="w-6 h-6 cursor-pointer" />
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;











// import React from 'react';
// import { useEffect, useRef } from 'react';
// import logo from '../../assets/images/logo.png';
// import userImg from '../../assets/images/avatar-icon.png';
// import { NavLink, Link } from 'react-router-dom';
// import {BiMenu} from "react-icons/bi";

// const navLinks = [
//   { path: '/home', display: 'Home' },
//   { path: '/doctors', display: 'Find a Doctor' },
//   { path: '/services', display: 'Services' },
//   { path: '/contact', display: 'Contact' },
// ];

// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);

//   const handleStickyHeader = () => {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       headerRef.current?.classList.add('sticky__header');
//     } else {
//       headerRef.current?.classList.remove('sticky__header'); // Fixed typo: stciky__header -> sticky__header
//     }
//   };

//   useEffect(() => {
//     // Add the event listener
//     window.addEventListener('scroll', handleStickyHeader);
    
//     // Cleanup function - properly remove the event listener
//     return () => {
//       window.removeEventListener('scroll', handleStickyHeader);
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

//   return (
//     <header className="header flex items-center" ref={headerRef}>
//       <div className="container">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div>
//             <img src={logo} alt="Logo" />
//           </div>

//           {/* Navigation */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <ul className="menu flex items-center gap-[2.7rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) =>
//                       isActive
//                         ? 'text-primaryColor text-[16px] leading-7 font-[600]'
//                         : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Nav right */}
//           <div className='flex items-center gap-4'>
//             <div className='hidden'>
//               <Link to='/'>
//                 <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
//                   <img src={userImg} className='w-full rounded-full' alt='User avatar'/>
//                 </figure>
//               </Link>
//             </div>

//             <Link to='/login'>
//               <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
//             </Link>

//             <span className='md:hidden' onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer"/>
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current?.classList.add('sticky__header');
    } else {
      headerRef.current?.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    // Add the event listener
    window.addEventListener('scroll', handleStickyHeader);
    
    // Cleanup function - properly remove the event listener
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuActive && 
        menuRef.current && 
        !menuRef.current.contains(e.target) && 
        !e.target.closest('.menu-icon')
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Navigation */}
          <div className={`navigation ${menuActive ? 'show__menu' : ''}`}>
            <ul className="menu flex items-center gap-[2.7rem]" ref={menuRef}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                    onClick={() => setMenuActive(false)}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              
              {/* Mobile-only close button inside menu */}
              <li className="md:hidden absolute top-6 right-6">
                <button 
                  onClick={toggleMenu}
                  className="text-2xl"
                >
                  <AiOutlineClose />
                </button>
              </li>
            </ul>
          </div>

          {/* Nav right */}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt='User avatar'/>
                </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
            </Link>

            <span className='md:hidden menu-icon cursor-pointer' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



