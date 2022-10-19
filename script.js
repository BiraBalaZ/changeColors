function changeColor() {
    //Pegando dados do Body
	var corpo = window.document.body;
    
	//Coletando os dados dos Parágrafos
	var backgroundRed = document.getElementById('color0');   //Vermelho
	var textRed = document.getElementById('color3');
	var backgroundGreen = document.getElementById('color1'); //Verde
	var textGreen = document.getElementById('color4');
	var backgroundBlue = document.getElementById('color2');  //Azul
	var textBlue = document.getElementById('color5');
	
	//Coletando dados em Números dos inputs que irão definir a cor do Background e Texto
	var bred = document.getElementById('bg0').value //BG Vermelho
	var tred = document.getElementById('tx0').value //Texto Vermelho
    
	var bgrn = document.getElementById('bg1').value //BG Verde
	var tgrn = document.getElementById('tx1').value //Texto verde

	var bblu = document.getElementById('bg2').value //BG Azul
	var tblu = document.getElementById('tx2').value //Texto Azul
	
	//Mudando o Background e Textos
	corpo.style.background = `rgb(${bred}, ${bgrn}, ${bblu})`;
	corpo.style.color = `rgb(${tred}, ${tgrn}, ${tblu})`;

	//Escrevendo o número de cada cor do RGB ao lado de cada Input
	backgroundRed.innerText = `${bred}`;    //BG Vermelho
	textRed.innerText = `${tred}`;          //Texto Vermelho

	backgroundGreen.innerText = `${bgrn}`;  //BG Verde
	textGreen.innerText = `${tgrn}`;        //Texto Verde
	
    backgroundBlue.innerText = `${bblu}`;   //BG Azul
	textBlue.innerText = `${tblu}`;         //Texto Azul
}