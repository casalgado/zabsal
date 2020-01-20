export { road_types, road_variants, road_variants_ext, states, cities, districts };

const road_types = [
	{ text: 'calle', value: 'calle' },
	{ text: 'carrera', value: 'carrera' },
	{ text: 'autopista', value: 'autopista' },
	{ text: 'avenida', value: 'avenida' },
	{ text: 'avenida calle', value: 'avenida calle' },
	{ text: 'avenida carrera', value: 'avenida carrera' },
	{ text: 'bulevar', value: 'bulevar' },
	{ text: 'carretera', value: 'carretera' },
	{ text: 'circular', value: 'circular' },
	{ text: 'circunvalar', value: 'circunvalar' },
	{ text: 'cuentas corridas', value: 'cuentas corridas' },
	{ text: 'diagonal', value: 'diagonal' },
	{ text: 'pasaje', value: 'pasaje' },
	{ text: 'paseo', value: 'paseo' },
	{ text: 'peatonal', value: 'peatonal' },
	{ text: 'transversal', value: 'transversal' },
	{ text: 'troncal', value: 'troncal' },
	{ text: 'variante', value: 'variante' },
	{ text: 'via', value: 'via' }
];

const road_variants = [
	{ text: 'A', value: 'A' },
	{ text: 'B', value: 'B' },
	{ text: 'C', value: 'C' },
	{ text: 'D', value: 'D' },
	{ text: 'E', value: 'E' },
	{ text: 'F', value: 'F' },
	{ text: 'G', value: 'G' },
	{ text: 'H', value: 'H' },
	{ text: 'I', value: 'I' },
	{ text: 'Bis', value: 'Bis' },
	{ text: 'Norte', value: 'Norte' },
	{ text: 'Sur', value: 'Sur' },
	{ text: 'Este', value: 'Este' },
	{ text: 'Oeste', value: 'Oeste' }
];

const road_variants_ext = [
	{ text: 'Bis', value: 'Bis' },
	{ text: 'Norte', value: 'Norte' },
	{ text: 'Sur', value: 'Sur' },
	{ text: 'Este', value: 'Este' },
	{ text: 'Oeste', value: 'Oeste' }
];

const states = [
	{ text: 'Atlántico', value: 'atlantico' },
	{ text: 'Bogota', value: 'bogota' },
	{ text: 'Cesar', value: 'cesar' },
	{ text: 'Magdalena', value: 'magdalena' }
];

const cities = {
	atlantico : [
		{ text: 'Barranquilla', value: 'Barranquilla' },
		{ text: 'Baranoa', value: 'Baranoa' },
		{ text: 'Candelaria', value: 'Candelaria' },
		{ text: 'Galapa', value: 'Galapa' },
		{ text: 'Luruaco', value: 'Luruaco' },
		{ text: 'Malambo', value: 'Malambo' },
		{ text: 'Manatí', value: 'Manati' },
		{ text: 'Piojó', value: 'Piojo' },
		{ text: 'Polonuevo', value: 'Polonuevo' },
		{ text: 'Sabanagrande', value: 'Sabanagrande' },
		{ text: 'Sabanalarga', value: 'Sabanalarga' },
		{ text: 'Santa Lucía', value: 'Santa Lucia' },
		{ text: 'Santo Tomás', value: 'Santo Tomás' },
		{ text: 'Soledad', value: 'Soledad' },
		{ text: 'Suan', value: 'Suan' },
		{ text: 'Tubará', value: 'Tubara' },
		{ text: 'Usiacurí', value: 'Usiacuri' },
		{ text: 'Repelón', value: 'Repelon' },
		{ text: 'Puerto Colombia', value: 'Puerto Colombia' },
		{ text: 'Ponedera', value: 'Ponedera' },
		{ text: 'Juan de Acosta', value: 'Juan de Acosta' },
		{ text: 'Palmar de Varela', value: 'Palmar de Varela' },
		{ text: 'Campo de La Cruz', value: 'Campo de La Cruz' }
	],
	cesar     : [
		{ text: 'Valledupar', value: 'Valledupar ' },
		{ text: 'Aguachica', value: 'Aguachica' },
		{ text: 'Agustín Codazzi', value: 'Agustin Codazzi' },
		{ text: 'Astrea', value: 'Astrea' },
		{ text: 'Becerril', value: 'Becerril' },
		{ text: 'Bosconia', value: 'Bosconia' },
		{ text: 'Chimichagua', value: 'Chimichagua' },
		{ text: 'Chiriguaná', value: 'Chiriguaná' },
		{ text: 'Curumaní', value: 'Curumani' },
		{ text: 'El Copey', value: 'El Copey' },
		{ text: 'El Paso', value: 'El Paso' },
		{ text: 'Gamarra', value: 'Gamarra' },
		{ text: 'González', value: 'Gonzalez' },
		{ text: 'La Gloria', value: 'La Gloria' },
		{ text: 'La Jagua de Ibirico', value: 'La Jagua de Ibirico' },
		{ text: 'La Paz Robles', value: 'La Paz Robles' },
		{ text: 'Balcón del Cesar', value: 'Balcon del Cesar' },
		{ text: 'Pailitas', value: 'Pailitas' },
		{ text: 'Pelaya ', value: 'Pelaya' },
		{ text: 'Pueblo Bello', value: 'Pueblo Bello' },
		{ text: 'Río de Oro', value: 'Rio de Oro' },
		{ text: 'San Alberto', value: 'San Alberto' },
		{ text: 'San Diego', value: 'San Diego' },
		{ text: 'San Martín', value: 'San Martín' },
		{ text: 'Tamalameque', value: 'Tamalameque' }
	],
	magdalena : [
		{ text: 'Santa Marta', value: 'Santa Marta' },
		{ text: 'Algarrobo', value: 'Algarrobo' },
		{ text: 'Aracataca', value: 'Aracataca' },
		{ text: 'Ariguaní', value: 'Ariguani' },
		{ text: 'Cerro de San Antonio', value: 'Cerro de San Antonio' },
		{ text: 'Chibolo', value: 'Chibolo' },
		{ text: 'Ciénaga', value: 'Cienaga' },
		{ text: 'Concordia', value: 'Concordia' },
		{ text: 'El Banco', value: 'El Banco' },
		{ text: 'El Piñón', value: 'El Piñon' },
		{ text: 'El Retén', value: 'El Reten' },
		{ text: 'Fundación', value: 'Fundacion' },
		{ text: 'Guamal', value: 'Guamal' },
		{ text: 'Nueva Granada', value: 'Nueva Granada' },
		{ text: 'Pedraza', value: 'Pedraza' },
		{ text: 'Pijiño del Carmen', value: 'Pijiño del Carmen' },
		{ text: 'Pivijay', value: 'Pivijay' },
		{ text: 'Plato', value: 'Plato' },
		{ text: 'Puebloviejo', value: 'Puebloviejo' },
		{ text: 'Remolino', value: 'Remolino' },
		{ text: 'Sabanas de San Ángel', value: 'Sabanas de San Angel' },
		{ text: 'Salamina', value: 'Salamina' },
		{ text: 'San Sebastián de Buenavista', value: 'San Sebastian de Buenavista' },
		{ text: 'San Zenón', value: 'San Zenon' },
		{ text: 'Santa Ana', value: 'Santa Ana' },
		{ text: 'Santa Bárbara de Pinto', value: 'Santa Barbara de Pinto' },
		{ text: 'Sitionuevo', value: 'Sitionuevo' },
		{ text: 'Tenerife', value: 'Tenerife' },
		{ text: 'Zapayán', value: 'Zapayan' },
		{ text: 'Zona Bananera', value: 'Zona Bananera' }
	],
	bogota    : [ { text: 'Bogotá', value: 'Bogota' } ]
};

const districts = [
	{ text: 'Suroccidente', value: 'Suroccidente' },
	{ text: 'Suroriente', value: 'Suroriente' },
	{ text: 'Norte - Centro Historico', value: 'Norte - Centro Historico' },
	{ text: 'Metropolitana', value: 'Metropolitana' },
	{ text: 'Riomar', value: 'Riomar' }
];
