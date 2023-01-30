import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
	<div className="app__newsletter">
		<div className="app__newsletter-heading">
			<SubHeading title="Novedades" />
			<h1 className="headtext__cormorant">Subscribete a nuestro Newsletter</h1>
			<p className="p__opensans">y no te pierdas las ultimas novedades!</p>
		</div>
		<div className="app__newsletter-input flex__center">
			<input type="email" placeholder="Ingresa tu direccion de email" />
			<button type="button" className="custom__button">
				Subscribir
			</button>
		</div>
	</div>
);

export default Newsletter;
