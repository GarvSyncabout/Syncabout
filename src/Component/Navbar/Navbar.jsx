// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // const Navbar = () => {
// //   const navLinks = [
// //     { title: "Home", href: "/" },

// //     {
// //       title: "SAP Services",
// //       href: "/",
// //     },

// //     {
// //       title: "Blogs",
// //       href: "/",
// //     },
// //   ];

// //   const dropdownLinks = [
// //     {
// //       title: "Company",
// //       subHeading: [
// //         { subTitle: "About Us", href: "/" },
// //         { subTitle: "Why Choose Us", href: "/" },
// //         { subTitle: "How We Work", href: "/" },
// //         { subTitle: "Life At Syncabout", href: "/" },
// //       ],
// //     },
// //     {
// //       title: "Services",
// //       subHeading: [
// //         { subTitle: "Website Developent", href: "/" },
// //         { subTitle: "Software Development", href: "/" },
// //         { subTitle: "Mobile App Deveopment", href: "/" },
// //         { subTitle: "Custom ERP Development", href: "/" },
// //         { subTitle: "SEO Services", href: "/" },
// //         { subTitle: "Social Media Marketing", href: "/" },
// //       ],
// //     },
// //     {
// //       title: "Cloud Services",
// //       subHeading: [{ subTitle: "AWS", href: "/" }],
// //     },
// //     {
// //       title: "Portfolio",
// //       subHeading: [
// //         { subTitle: "Graphics Portfolio", href: "/" },
// //         { subTitle: "UI/UX Portolio", href: "/" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <>
// //       <header classNameName=" flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 shadow-md  ">
// //         <nav classNameName=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
// //           <div classNameName="flex items-center justify-between">
// //             <Link
// //               to={"/"}
// //               classNameName="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
// //               aria-label="Brand"
// //             >
// //               <img
// //                 src="./Syncabout Logo.png"
// //                 alt="Company Logo"
// //                 classNameName="h-16"
// //               />
// //             </Link>
// //             <div classNameName="sm:hidden">
// //               <button
// //                 type="button"
// //                 classNameName="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
// //                 id="hs-navbar-example-collapse"
// //                 aria-expanded="false"
// //                 aria-controls="hs-navbar-example"
// //                 aria-label="Toggle navigation"
// //                 data-hs-collapse="#hs-navbar-example"
// //               >
// //                 <svg
// //                   classNameName="hs-collapse-open:hidden shrink-0 size-4"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="24"
// //                   height="24"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <line x1="3" x2="21" y1="6" y2="6" />
// //                   <line x1="3" x2="21" y1="12" y2="12" />
// //                   <line x1="3" x2="21" y1="18" y2="18" />
// //                 </svg>
// //                 <svg
// //                   classNameName="hs-collapse-open:block hidden shrink-0 size-4"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="24"
// //                   height="24"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M18 6 6 18" />
// //                   <path d="m6 6 12 12" />
// //                 </svg>
// //                 <span classNameName="sr-only">Toggle navigation</span>
// //               </button>
// //             </div>
// //           </div>
// //           <div
// //             id="hs-navbar-example"
// //             classNameName="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
// //             aria-labelledby="hs-navbar-example-collapse"
// //           >
// //             <div classNameName="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
// //               {navLinks.map((navLink, index) => {
// //                 return (
// //                   <Link
// //                     classNameName="font-bold font-Pontano text-base text-black hover:text-[#ef7f1a] focus:outline-none"
// //                     to={navLink.href}
// //                     aria-current="page"
// //                     key={index}
// //                   >
// //                     {navLink.title}
// //                   </Link>
// //                 );
// //               })}
// //               {dropdownLinks.map((dropdownLink, index) => {
// //                 return (
// //                   <div
// //                     key={index}
// //                     classNameName="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] "
// //                   >
// //                     <button
// //                       id="hs-navbar-example-dropdown"
// //                       type="button"
// //                       classNameName="hs-dropdown-toggle font-Pontano font-bold text-base flex items-center w-full text-black hover:text-[#ef7f1a] focus:outline-none focus:text-black  dark:text-neutral-400 dark:hover:text-[#ef7f1a] dark:focus:text-black"
// //                       aria-haspopup="menu"
// //                       aria-expanded="false"
// //                       aria-label="Mega Menu"
// //                     >
// //                       {dropdownLink.title}
// //                       <svg
// //                         classNameName="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="24"
// //                         height="24"
// //                         viewBox="0 0 24 24"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         strokeWidth="2"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                       >
// //                         <path d="m6 9 6 6 6-6" />
// //                       </svg>
// //                     </button>

// //                     <div
// //                       key={index}
// //                       classNameName="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 behtmlFore:absolute top-full sm:border behtmlFore:-top-5 behtmlFore:start-0 behtmlFore:w-full behtmlFore:h-5 hidden"
// //                       role="menu"
// //                       aria-orientation="vertical"
// //                       aria-labelledby="hs-navbar-example-dropdown"
// //                     >
// //                       {dropdownLink.subHeading.map((subHeadingLinks, index) => {
// //                         return (
// //                           <Link
// //                             key={index}
// //                             classNameName="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
// //                             to={subHeadingLinks.href}
// //                           >
// //                             {subHeadingLinks.subTitle}
// //                           </Link>
// //                         );
// //                       })}
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //               <Link
// //                 to={"/"}
// //                 classNameName="font-Pontano text-base font-bold  px-4 py-3 bg-[#ef7f1a] rounded text-white"
// //               >
// //                 Contact Us
// //               </Link>
// //             </div>
// //           </div>
// //         </nav>
// //       </header>
// //     </>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [openNav, setOpenNav] = useState(false);
//   const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

//   const toggleNav = () => {
//     setOpenNav(!openNav);
//     setOpenAvatarDropdown(false);
//   };

//   const toggleAvatarDropdown = () => {
//     setOpenAvatarDropdown(!openAvatarDropdown);
//   };

//   const navList = () => {
//     return (
//       <>
//         <NavLink
//           to="/"
//           classNameName={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/event"
//           classNameName={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Event
//         </NavLink>
//         <NavLink
//           to="/services"
//           classNameName={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Services
//         </NavLink>
//         <NavLink
//           to="/registration"
//           classNameName={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Registration
//         </NavLink>
//       </>
//     );
//   };

//   return (
//     <header classNameName="bg-slate-200 border-b-2 border-gray-200 font-DM">
//       <div classNameName="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
//         <div classNameName="flex items-center justify-between">
//           <a href="#" classNameName="text-2xl font-semibold text-gray-800">
//             <img classNameName="w-20" src="WellnessFusion.png" alt="" />
//           </a>
//           <button
//             onClick={toggleNav}
//             classNameName="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
//           >
//             <svg
//               classNameName={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//             <svg
//               classNameName={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav classNameName="hidden md:flex space-x-4">{navList()}</nav>
//         <div
//           classNameName={`${
//             openNav ? "" : "hidden"
//           } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
//         >
//           {navList()}
//         </div>
//         <div
//           onClick={toggleAvatarDropdown}
//           classNameName="relative transition-all duration-500"
//         >
//           <span classNameName="cursor-pointer">Avatar</span>
//           <div
//             classNameName={`absolute ${
//               openAvatarDropdown ? "block" : "hidden"
//             } bg-slate-300 rounded shadow-md mt-2 space-y-2`}
//           >
//             <div classNameName="p-4 flex flex-col ">
//               <NavLink to="/profile">Profile</NavLink>
//               <NavLink to="/dashboard">Dashboard</NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import "../Navbar/navbar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img src="./Syncabout Logo.png" className="h-14" />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
            <IoClose />
          </label>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Company
            </a>

            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Company
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Why Choose Us</a>
              </li>
              <li>
                <a href="#">What We Work</a>
              </li>
              <li>
                <a href="#">Life At Syncabout</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">SAP Services</a>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Services
            </a>
            <input type="checkbox" id="showDropTwo" />
            <label htmlFor="showDropTwo" className="mobile-item">
              Services
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Software Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Custom ERP Development</a>
              </li>
              <li>
                <a href="#">SEO Service</a>
              </li>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Cloud Services
            </a>
            <input type="checkbox" id="showDropThree" />
            <label htmlFor="showDropThree" className="mobile-item">
              Cloud Services
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">AWS</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Portfolio
            </a>
            <input type="checkbox" id="showDropFour" />
            <label htmlFor="showDropFour" className="mobile-item">
              Portfolio
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">Graphics Portfolio</a>
              </li>
              <li>
                <a href="#">UI/UX Portfolio</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
          <FaBars />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
