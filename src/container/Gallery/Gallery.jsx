import React, { useRef } from 'react';
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [
	images.gallery01,
	images.gallery02,
	images.gallery03,
	images.gallery04,
];

const Gallery = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className="app__gallery flex__center">
			<div className="app__gallery-content">
				<SubHeading title="Instagram" />
				<h1 className="headtext__cormorant">Galeria de fotos</h1>
				<p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
					¿Quieres conocer la verdad sobre "Mejor que te cocine Juan"? En esta
					sección, presentamos los comentarios reales y sin filtros de nuestros
					clientes. Aquí encontrarás opiniones honestas y detalladas sobre nuestra
					comida, nuestro servicio y nuestro ambiente.
				</p>
				<button type="button" className="custom__button">
					Ver Mas
				</button>
			</div>

			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{galleryImages.map((image, index) => (
						<div
							className="app__gallery-images_card flex__center"
							key={`gallery_image-${index + 1}`}
						>
							<img src={image} alt="gallery" />
							<BsInstagram className="gallery__image-icon" />
						</div>
					))}
				</div>
				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => scroll('left')}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
