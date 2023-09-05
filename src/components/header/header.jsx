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

export default function Header() {
  return (
   

      <header className="header-wrapper">
			<div className="main-header">
				<div className="container">
					<nav className="navbar">


						<a className="navbar-brand" >
							<img className="logo" src="./inckd-logo.svg" alt=""/>
						</a>


						<div className="nav-right-block">
							<ul className="nav main-nav navbar-collapse collapse" id="navbarNavDropdown">
								<li className="nav-item">
									<a href="#">Tattoo search</a>
								</li>
								<li className="nav-item">
									<a href="#">Styleguide</a>
								</li>
								<li className="nav-item">
									<a href="#">Dictonary</a>
								</li>

                <li className="nav-item">
									<a href="#">Klarna</a>
								</li>
							</ul>

							<div className="header-right">
								<button type="button" className="btn btn-tattoo-art navbar-collapse collapse" id="navbarNavDropdown">For Tattoo Artists</button>

								<button className="navbar-toggler" type="button" data-toggle="collapse"
									data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
									aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
									<ul className="nav navbar-nav">
										<li className="nav-item">
											<a href="#">Home</a>
										</li>
										<li className="nav-item">
											<a href="#">For Artists</a>
										</li>
										<li className="nav-item">
											<a href="#">Klarna</a>
										</li>
										<li className="nav-item">
											<a href="#">Contact Us</a>
										</li>
										<li className="nav-item">
											<a href="#">FAQ</a>
										</li>
									</ul>
								</div> */}
							</div>
						</div>

					</nav>
				</div>
			</div>
		</header>	
      
    
  )
}
