import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chefjuan} alt="chef_image" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title="Palabra del chef" />
			<h1 className="headtext__cormorant">
				Nuestra filosofía de servicio al cliente.
			</h1>

			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote_image" />
					<p className="p__opensans">
						En "Mejor que te cocine Juan", creemos que la satisfacción del cliente es
						lo más importante.
					</p>
				</div>
				<p className="p__opensans">
					En esta sección, te hablamos sobre nuestra filosofía de servicio al
					cliente, y cómo trabajamos día a día para asegurarnos de que cada cliente
					tenga una experiencia inolvidable.
				</p>

				<div className="app__chef-sign">
					<p>Juan Muñoz</p>
					<p className="p__opensans">Chef & Fundador</p>
					<img src={images.sign} alt="sign" />
				</div>
			</div>
		</div>
	</div>
);

export default Chef;
