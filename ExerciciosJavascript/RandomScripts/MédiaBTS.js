/************************
Leia as notas de um aluno
e indique se aprovou no 
ano ou não, sendo este 
divido por bimestres, 
trimestres ou semestres.
************************/

var N1, N2, N3, N4, AUL, FRQ, BTS, MED;
BTS = prompt('Avalição é feita em: [BI]mestres, [TRI]mestres ou [SE]mestres?');
AUL = parseInt(prompt('Aulas dadas'));
FRQ = parseInt(prompt('Aulas frequentadas'));
FRQ *= 100/AUL;

function media() {
	if (MED >= 7 && FRQ >= 75) {
		alert('Aprovado, média '+ MED +' e frequência '+ FRQ +'%');
	} else {
		alert('Reprovado, média '+ MED +' e frequência '+ FRQ +'%');
	}
}

switch (BTS) {
	case 'BI':
	N1 = parseFloat(prompt('Nota 1'));
	N2 = parseFloat(prompt('Nota 2'));
	N3 = parseFloat(prompt('Nota 3'));
	N4 = parseFloat(prompt('Nota 4'));
	MED = (N1 + N2 + N3 + N4)/4;
	media();
	break;
	case 'TRI':
	N1 = parseFloat(prompt('Nota 1'));
	N2 = parseFloat(prompt('Nota 2'));
	N3 = parseFloat(prompt('Nota 3'));
	MED = (N1 + N2 + N3)/3;
	media();
	break;
	case 'SE':
	N1 = parseFloat(prompt('Nota 1'));
	N2 = parseFloat(prompt('Nota 2'));
	MED = (N1 + N2)/2;
	media();
	break;
}