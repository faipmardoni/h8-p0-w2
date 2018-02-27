var name = 'Faip Mardoni';
var peran = 'Penyihir';

if (name ==='' && peran === '') {
	console.log('Nama harus diisi!');
} else if (name !== '') {
	console.log ('Selamat datang di Dunia Proxytia,',name);
	if (peran === '') {
		console.log('Halo',name+', Pilihlah peranmu untuk memulai game!');
	} else if (peran === 'Ksatria') {
		console.log ('Halo',peran,name+', kamu dapat menyerang dengan senjatamu!');
	} else if (peran === 'Tabib') {
		console.log ('Halo',peran,name+', kamu akan membantu temanmu yang terluka.');
	} else if (peran === 'Penyihir') {
		console.log ('Halo',peran,name+', ciptakan keajaiban yang membantu kemenanganmu!');
	} else {
		console.log('Peran',peran,'yang dimasukkan tidak tersedia',name+', Silakan coba lagi!');
	} 
} else {
	console.log('Jangan cuma isi peran doang, namanya juga haris diisi');
}