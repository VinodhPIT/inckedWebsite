// import React from "react";
// import Link from "next/link";
// import styles from "./header.module.css";
// import { useRouter } from "next/router";


// const Navbar = (props) => {
//   const links = [
//     {
//       id: 2,
//       title: "Styleguide",
//       url: "/styleguide",
//     },
//     {
//       id: 3,
//       title: "Dictionary",
//       url: "/dictionary",
//     },
//     {
//       id: 4,
//       title: "For Tattooartists",
//       url: "/fortattooartists",
//     },
//     {
//       id: 5,
//       title: "Join Artists",
//       url: "/joinartist",
//     },
//   ];
//   const { locales, locale, push } = useRouter();





//   const handleClicks = (e) => {
//     push("", undefined, { locale: e });
//   };

//   return (
//     <header classNameName="">
//       <div classNameName={styles.headConatiner}>
//         <div classNameName={styles.logo}>
//           <Link href="/" style={{ color: "#fff" }}>
//             Logo.
//           </Link>
//         </div>
//         <nav classNameName={styles.navmenu}>
//           <ul classNameName={styles.kk}>
//             {links.map((link) => (
//               <li key={link.id}>
//                 <Link   href={link.url}>{link.title}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

// <div style={{"float":"right","width":"20%"}}>



//         <select onChange={(event) => handleClicks(event.target.value)}>
//           <option value={locale}>{locale}</option>
//           {locales
//             .filter((e) => e !== locale) // Filter out options with the same value as locale
//             .map((e) => (
//               <option      key={e} value={e}>
//                 {e}
//               </option>
//             ))}
            
//         </select>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React from 'react'
 import Link from "next/link";
import { Router } from 'next/router';
 import { useRouter } from "next/router";
export default function Header() {

 

  const links = [
    {
      id: 1,
      title: "Tattoo search",
      url: "/tattoosearch",
    },
    {
      id: 2,
      title: "Styleguide",
      url: "/styleguide",
    },
    {
      id: 3,
      title: "Dictionary",
      url: "/dictionary",
    },
 
    {
      id: 4,
      title: "Klarna",
      url: "/klarna",
    },
  
  ];


  const router = useRouter()
  return (
   

      <header  className="header-wrapper" >
			<div>
				<div className="container">
					<nav className="navbar">


						<Link href={'/'} className="navbar-brand" >
							<img className="logo" src="./inckd-logo.svg" alt=""/>
						</Link>


						<div className="nav-right-block">
							<ul className="nav main-nav navbar-collapse collapse">


                      {links.map((link) => (
              <li key={link.id} className="nav-item">
                <Link   href={link.url}>{link.title}</Link>
              </li>
            ))}


							</ul>



							<div className="header-right">



								<button type="button"  onClick={()=>router.push('/fortattooartists')} className="btn btn-tattoo-art navbar-collapse collapse" >For Tattoo Artists</button>

								<button className="navbar-toggler" type="button" data-toggle="collapse"
									data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
									aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
					
							</div>


						</div>

					</nav>
				</div>
			</div>
		</header>	
      
    
  )
}
