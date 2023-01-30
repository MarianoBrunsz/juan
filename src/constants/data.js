import images from './images';

const wines = [
	{
		title: 'Lasagna',
		price: '$2560',
		tags: '2 porciones',
	},
	{
		title: 'Canelones',
		price: '$1259',
		tags: '6 canelones',
	},
	{
		title: 'Lomo al champignon',
		price: '$4400',
		tags: 'lomo al champignon ',
	},
	{
		title: 'Picada especial',
		price: '$3100',
		tags: 'picada para 6 personas',
	},
	{
		title: 'Bocaditos de carne',
		price: '$260',
		tags: 'bocaditos de carne',
	},
];

const cocktails = [
	{
		title: 'Aperol Sprtiz',
		price: '$2000',
		tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
	},
	{
		title: "Dark 'N' Stormy",
		price: '$1600',
		tags: 'Dark rum | Ginger beer | Slice of lime',
	},
	{
		title: 'Daiquiri',
		price: '$1000',
		tags: 'Rum | Citrus juice | Sugar',
	},
	{
		title: 'Old Fashioned',
		price: '$3100',
		tags: 'Bourbon | Brown sugar | Angostura Bitters',
	},
	{
		title: 'Negroni',
		price: '$2600',
		tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: 'Mejor cocina gourmet 2022',
		subtitle: 'Premio a la calidad y mejor cocina gourmet 2022',
	},
	{
		imgUrl: images.award01,
		title: 'Estrella de barrio',
		subtitle: 'Premio al mejor emprendimiento del barrio',
	},
	{
		imgUrl: images.award05,
		title: 'Comida de calidad del hospital',
		subtitle: 'Premio a las mejores milanesas del hospital',
	},
	{
		imgUrl: images.award03,
		title: 'Chef galardonado',
		subtitle: 'Premio al mejor chef de comidas para llevar de La Plata',
	},
];

export default { wines, cocktails, awards };
