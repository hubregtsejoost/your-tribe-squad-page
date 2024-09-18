let names = [
	'Halima',
	'Iris',
	'Jordy',
	'Jules',
	'Julia',
	'Karima',
	'Kim',
	'Luc',
	'Marcin',
	'Matthijs',
	'Nadia',
	'Nas',
	'Ole',
	'Ravi',
	'Robby',
	'Robin',
	'Ties',
	'Viresh',
];

let squad = [
	{
		"name" : "Halima",
		"card" : "visitekaart github url"
	},
	{
		"name" : "Halima",
		"card" : "visitekaart github url"
	},
	{
		"name" : "Halima",
		"card" : "visitekaart github url"
	},
	{
		"name" : "Halima",
		"card" : "visitekaart github url"
	},
	{
		"name" : "Halima",
		"card" : "visitekaart github url"
	},
	{
		"name" : "Halima",
		"card" : "visitekaart github url"
	},{
		"name" : "Mercin",
		"card" : "visitekaart github url"
	},
]


function displayCards(){
	let squadSection = document.getElementsByClassName("squad-section")?.[0];

	squad.forEach((member) => {
		console.log(member?.name);
	});
	console.log(squadSection);
}


displayCards();
