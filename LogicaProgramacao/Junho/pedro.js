/***********************
Pedro Machado - 11030373
Logica Program. - 2o Bim
Profa. Raquel M. Barbosa
***********************/

//AVISO
alert('AVISO\nUse *CAIXA ALTA* para jogar!\nVocê pode desistir da partida a qualquer momento apertando Enter, sem inserir nenhum X ou O.\nA partida está sujeita a cancelamento caso o jogador escolha a posição de outro jogador mais de uma vez.\nMelhor otimizado para Google Chrome.');

//MENU
var MEN = prompt('BEM VINDO AO JOGO DA VELHA\nPressione Enter para começar ou leia as regras.\nR - REGRAS');

switch(MEN) {
	case 'R':
	//REGRAS
	alert('Este jogo constitui por um tabuleiro 3x3 onde o primeiro jogador escolhe um símbolo e o segundo outro. \nA seguir cada jogador, um após o outro escolhe um lugar do tabuleiro para por seu símbolo. \nVence aquele que formar uma sequência de 3 símbolos de maneira vertical, horizontal ou diagonal primeiro.\nBom jogo!!');
	default:	
	//JOGADORES
	var J1, J2;
	J1 = Math.ceil(Math.random()*2);
	(J1 == 1) ? J2 = 'o' : J2 = 'x';
	(J2 == 'x') ? J1 = 'o' : J1 = 'x';
	alert('Por sorteio \nJOGADOR 1 será ' + J1 + '\nJOGADOR 2 será ' + J2);
	console.log(J1,J2);
	
	//TABULEIRO
	var A1, A2, A3, B1, B2, B3, C1, C2, C3, TAB;
	A1 = '_'; A2 = '_'; A3 = '_';
	B1 = '_'; B2 = '_'; B3 = '_';
	C1 = '_'; C2 = '_'; C3 = '_';
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	//A exibição do tabuleiro pode estar ruim no alert, porém no console está correta
	
	//JOGO
	var VJ1, VJ2;
	//POSIÇÕES JOGADAS
	var P1J1, P2J2, P3J1, P4J2, P5J1, P6J2, P7J1, P8J2, P9J1;
	P1J1 = ''; P3J1 = ''; P5J1 = ''; P7J1 = ''; P9J1 = '';
	P2J2 = ''; P4J2 = ''; P6J2 = ''; P8J2 = '';
	
	//JOGADOR 1 PARTIDA 1
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha uma letra e um número para ' + J1 + '. Exemplo: C3.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	P1J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 2 PARTIDA 2
	VJ2 = prompt(TAB + '\nJOGADOR 2: uma letra e um número para ' + J2 + '. Exemplo: B1.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P2J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 1 PARDTIDA 3
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P3J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 2 PARTIDA 4
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P4J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 1 PARTIDA 5
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P5J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 1
	if (A1+A2+A3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (B1+B2+B3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (C1+C2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B1+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A2+B2+C2 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B3+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B2+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	
	//JOGADOR 2 PARTIDA 6
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P6J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);

	//CASO 2
	if (A1+A2+A3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (B1+B2+B3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (C1+C2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B1+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A2+B2+C2 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B3+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B2+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	
	//JOGADOR 1 PARTIDA 7
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P7J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 3
	if (A1+A2+A3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (B1+B2+B3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (C1+C2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B1+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A2+B2+C2 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B3+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B2+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	
	//JOGADOR 2 PARTIDA 8
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1 || VJ2 == P6J2 || VJ2 == P7J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1 || VJ2 == P6J2 || VJ2 == P7J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P8J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 4
	if (A1+A2+A3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (B1+B2+B3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (C1+C2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B1+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A2+B2+C2 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B3+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B2+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	
	//JOGADOR 1 PARTIDA 9
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2 || VJ1 == P7J1 || VJ1 == P8J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2 || VJ1 == P7J1 || VJ1 == P8J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P9J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 5
	if (A1+A2+A3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (B1+B2+B3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (C1+C2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B1+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A2+B2+C2 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B3+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B2+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }

	//EMAPTE
	alert(TAB + '\nDEU VELHA!!');
}

//SEGUNDA TENTATIVA
MEN = prompt('Deseja jogar novamente? [S] [N]');

switch(MEN) {
	case 'N': break;
	case 'S':
	//JOGADORES
	J1 = Math.ceil(Math.random()*2);
	(J1 == 1) ? J2 = 'o' : J2 = 'x';
	(J2 == 'x') ? J1 = 'o' : J1 = 'x';
	alert('Por sorteio \nJOGADOR 1 será ' + J1 + '\nJOGADOR 2 será ' + J2);
	console.log(J1,J2);
	
	//TABULEIRO
	A1 = '_'; A2 = '_'; A3 = '_';
	B1 = '_'; B2 = '_'; B3 = '_';
	C1 = '_'; C2 = '_'; C3 = '_';
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGO
	//POSIÇÕES JOGADAS
	var P1J1, P2J2, P3J1, P4J2, P5J1, P6J2, P7J1, P8J2, P9J1;
	P1J1 = ''; P3J1 = ''; P5J1 = ''; P7J1 = ''; P9J1 = '';
	P2J2 = ''; P4J2 = ''; P6J2 = ''; P8J2 = '';
	
	//JOGADOR 1 PARTIDA 1
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	P1J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);

	//JOGADOR 2 PARTIDA 2
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P2J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 1 PARTIDA 3
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P3J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 2 PARTIDA 4
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P4J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//JOGADOR 1 PARTIDA 5
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P5J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 1
	if (A1+A2+A3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (B1+B2+B3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (C1+C2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B1+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A2+B2+C2 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B3+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B2+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	
	//JOGADOR 2 PARTIDA 6
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P6J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 2
	if (A1+A2+A3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (B1+B2+B3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (C1+C2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B1+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A2+B2+C2 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B3+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B2+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	
	//JOGADOR 1 PARTIDA 7
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P7J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 3
	if (A1+A2+A3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (B1+B2+B3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (C1+C2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B1+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A2+B2+C2 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B3+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B2+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	
	//JOGADOR 2 PARTIDA 8
	VJ2 = prompt(TAB + '\nJOGADOR 2: escolha a posição para ' + J2 + '.');
	if (VJ2 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1 || VJ2 == P6J2 || VJ2 == P7J1) {
		VJ2 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 2: escolha OUTRA posição para ' + J2 + '.');
		if (VJ2 == P1J1 || VJ2 == P2J2 || VJ2 == P3J1 || VJ2 == P4J2 || VJ2 == P5J1 || VJ2 == P6J2 || VJ2 == P7J1) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P8J2 = VJ2;
	
	switch (VJ2) {
		case 'A1': A1 = J2; break;
		case 'A2': A2 = J2; break;
		case 'A3': A3 = J2; break;
		case 'B1': B1 = J2; break;
		case 'B2': B2 = J2; break;
		case 'B3': B3 = J2; break;
		case 'C1': C1 = J2; break;
		case 'C2': C2 = J2; break;
		case 'C3': C3 = J2; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 4
	if (A1+A2+A3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (B1+B2+B3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (C1+C2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B1+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A2+B2+C2 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B3+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A1+B2+C3 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	if (A3+B2+C1 == J2+J2+J2) { alert(TAB + '\nJOGADOR 2 VENCEU'); break; }
	
	//JOGADOR 1 PARTIDA 9
	VJ1 = prompt(TAB + '\nJOGADOR 1: escolha a posição para ' + J1 + '.');
	if (VJ1 == '') { alert('FIM DO JOGO'); break; }
	//POSIÇÕES
	if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2 || VJ1 == P7J1 || VJ1 == P8J2) {
		VJ1 = prompt('POSIÇÃO JÁ ESCOLHIDA!\n'+ TAB + '\nJOGADOR 1: escolha OUTRA posição para ' + J1 + '.');
		if (VJ1 == P1J1 || VJ1 == P2J2 || VJ1 == P3J1 || VJ1 == P4J2 || VJ1 == P5J1 || VJ1 == P6J2 || VJ1 == P7J1 || VJ1 == P8J2) { alert('PARTIDA ENCERRADA!'); break; }
	}
	P9J1 = VJ1;
	
	switch (VJ1) {
		case 'A1': A1 = J1; break;
		case 'A2': A2 = J1; break;
		case 'A3': A3 = J1; break;
		case 'B1': B1 = J1; break;
		case 'B2': B2 = J1; break;
		case 'B3': B3 = J1; break;
		case 'C1': C1 = J1; break;
		case 'C2': C2 = J1; break;
		case 'C3': C3 = J1; break;
	}
	TAB = '   1 2 3\n' + 'A  ' + A1 + '|' + A2 + '|' + A3 + '\nB  ' + B1 + '|' + B2 + '|' + B3 + '\nC  ' + C1 + '|' + C2 + '|' + C3;
	console.log(TAB);
	
	//CASO 5
	if (A1+A2+A3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (B1+B2+B3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (C1+C2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B1+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A2+B2+C2 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B3+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A1+B2+C3 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	if (A3+B2+C1 == J1+J1+J1) { alert(TAB + '\nJOGADOR 1 VENCEU'); break; }
	
	//EMAPTE
	alert(TAB + '\nDEU VELHA!!');
}
//FIM DO JOGO
alert('FIM DO JOGO! \nObrigado por jogar!!\n\nJOGO DA VELHA\nDesenvolvido por: Pedro Garcia Machado\nVersão: v1.1961 de 10 jun. 2019.');