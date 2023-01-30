import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

// import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="app__navbar">
			{/* <div className="app__navbar-logo">
				<img src={images.firma} alt="app logo" />
			</div> */}
			<ul className="app__navbar-links">
				<li className="p__opensans">
					<a
						href="#home"
						style={{ fontSize: '1.25rem', fontStyle: 'bold', fontWeight: 'bolder' }}
					>
						Mejor que te cocine Juan{' '}
					</a>
				</li>
				{/* <li className="p__opensans">
					<a href="#home">Inicio</a>
				</li> */}
				<li className="p__opensans">
					<a href="#about">Acerca nuestro</a>
				</li>
				<li className="p__opensans">
					<a href="#menu">Menu</a>
				</li>
				<li className="p__opensans">
					<a href="#awards">Premios</a>
				</li>
				<li className="p__opensans">
					<a href="#contact">Contacto</a>
				</li>
			</ul>
			<div className="app__navbar-login">
				<a href="#login" className="p__opensans">
					Log In / Registro
				</a>
				<div />
				<a href="/" className="p__opensans">
					Pedir ahora
				</a>
			</div>
			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>
				{toggleMenu && (
					<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
						<MdOutlineRestaurantMenu
							fontSize={27}
							className="overlay__close"
							onClick={() => setToggleMenu(false)}
						/>
						<ul className="app__navbar-smallscreen_links">
							<li className="p__opensans">
								<a href="#home">Inicio</a>
							</li>
							<li className="p__opensans">
								<a href="#about">Acerca Nuestro</a>
							</li>
							<li className="p__opensans">
								<a href="#menu">Menu</a>
							</li>
							<li className="p__opensans">
								<a href="#awards">Premios</a>
							</li>
							<li className="p__opensans">
								<a href="#contact">Contacto</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
