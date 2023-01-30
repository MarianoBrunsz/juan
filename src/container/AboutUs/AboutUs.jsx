import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div className="app__aboutus app__bg flex__center section__padding" id="about">
		{/* <div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="g letter" />
		</div> */}

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">Acerca nuestro</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					La comida de calidad es la esencia de "Mejor que te cocine Juan". En esta
					sección, te mostramos nuestra pasión por la comida de calidad, y cómo
					trabajamos con los mejores proveedores locales para ofrecerte los
					ingredientes más frescos y sabrosos. Descubre por qué nuestro menu es uno
					de los más populares de la ciudad.
				</p>
				<button type="button" className="custom__button">
					Saber mas
				</button>
			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="about_knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Nuestra historia</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					<strong>
						La evolución de "Mejor que te cocine Juan" a lo largo del tiempo.
					</strong>
					En esta sección, te llevamos a través de la evolución de "Mejor que te
					cocine Juan" a lo largo del tiempo. Desde nuestro primer día hasta hoy, te
					contamos cómo hemos crecido y mejorado para convertirnos en uno de los
					mejores servicios de lunch de la ciudad.
				</p>
				<button type="button" className="custom__button">
					Saber mas
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
