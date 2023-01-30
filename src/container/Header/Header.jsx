import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="Disfruta de comidas frescas y deliciosas, cada día." />
			<h1 className="app__header-h1">Comida casera, en todo momento.</h1>
			<p className="p__opensans" style={{ margin: '2rem 0' }}>
				¿Extrañas la comida casera y el sabor de la infancia? En "Mejor que te
				cocine Juan", ofrecemos una selección de platos caseros, preparados con los
				mismos ingredientes y técnicas que utilizarías en tu propia cocina. Ya sea
				que estés buscando un almuerzo rápido o una cena completa, tenemos algo para
				todos.
			</p>
			<button type="button" className="custom__button">
				Explorar Menu
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.welcome} alt="header img" />
		</div>
	</div>
);

export default Header;
