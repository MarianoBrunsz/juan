import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
	<div className="app__footer section__padding" id="login">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contactanos</h1>
				<p className="p__opensans">511 n 1080 entre 11 y 12</p>
				<p className="p__opensans">+54 221-344-1230</p>
				<p className="p__opensans">+54 221-555-1230</p>
			</div>

			<div className="app__footer-links_logo">
				<img src={images.firma} alt="footer_logo" />
				<p className="p__opensans">
					&quot;La mejor forma de encontrarse es perderse al servicio de otros.&quot;
				</p>
				<img
					src={images.spoon}
					className="spoon__img"
					style={{ marginTop: 15 }}
					alt="spoon"
				/>
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>

			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Nuestro horario</h1>
				<p className="p__opensans">Lunes-Viernes:</p>
				<p className="p__opensans">08:00 am - 12:00 am</p>
				<p className="p__opensans">Sabados-Domingos:</p>
				<p className="p__opensans">07:00 am - 11:00 pm</p>
			</div>
		</div>

		<div className="footer__copyright">
			<p className="p__opensans">2023 Kirin . Todos los derechos reservados.</p>
		</div>
	</div>
);

export default Footer;
