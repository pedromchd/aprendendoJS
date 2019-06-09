//PEDRA PAPEL TESOURA SPOK LAGARTO

//JOGADOR, PC
var VC, PC;
VC = 0;
PC = 0;

//MENU
var MEN, JOG;
MEN = prompt('Bem vindo. Deseja começar? [S] [N]');
switch(MEN) {
    case 'N': JOG = false; break;
    case 'S': JOG = true; break; 
}

//PLACAR
var PLA = 0;
var PVC = 0;
var PPC = 0;

//JOGO
var JVC, JPC;
var JO;
while(JOG == true) {
    PLA++;
    JO = '';
    //VC
    VC = parseInt(prompt('JOGADOR: Insira uma das opções abaixo: \n1 - PEDRA \n2 - PAPEL \n3 - TESOURA \n4 - SPOK \n5 - LAGARTO'));
    switch(VC) {
        case 1: JO += 1; JVC = 'Pedra'; break;
        case 2: JO += 2; JVC = 'Papel'; break;
        case 3: JO += 3; JVC = 'Tesoura'; break;
        case 4: JO += 4; JVC = 'Spok'; break;
        case 5: JO += 5; JVC = 'Lagarto'; break;
        default: JOG = false;
    }
    
    //PC
    PC = Math.ceil(Math.random()*5);
    switch(PC) {
        case 1: JO += 1; JPC = 'Pedra'; break;
        case 2: JO += 2; JPC = 'Papel'; break;
        case 3: JO += 3; JPC = 'Tesoura'; break;
        case 4: JO += 4; JPC = 'Spok'; break;
        case 5: JO += 5; JPC = 'Lagarto'; break;
        default: JOG = false;
    }
    
    //JOGO
    alert('Você escolheu "' + JVC + '" enquanto o PC escolheu "' + JPC + '".');
    JO = parseInt(JO);
    switch(JO) {
        case 11: case 22: case 33: case 44: case 55:
            alert('Empate nesta partida!');
            break;
        case 13: case 15: case 21: case 24: case 32:
        case 35: case 41: case 43: case 52: case 54:
            alert('VC ganhou esta partida!');
            PVC++;
            break;
        case 12: case 14: case 23: case 25: case 31:
        case 34: case 42: case 45: case 51: case 53:
            alert('PC ganhou esta partida!');
            PPC++;
            break;
        default: JOG = false;
    }

    //GANHADOR
    if (PLA == 2) {
        if (PVC == 2) { alert('VC: ' + PVC + '\nPC: ' + PPC + '\nVC ganhou o jogo!'); break; }
        if (PPC == 2) { alert('VC: ' + PVC + '\nPC: ' + PPC + '\nPC ganhou o jogo!'); break; }
    }

    if (PLA == 3) {
        if (PVC > PPC) { alert('VC: ' + PVC + '\nPC: ' + PPC + '\nVC ganhou o jogo!'); break; }
        if (PPC > PVC) { alert('VC: ' + PVC + '\nPC: ' + PPC + '\nPC ganhou o jogo!'); break; }
        if (PVC == PPC) { alert('VC: ' + PVC + '\nPC: ' + PPC + '\nO jogo empatou!'); break; }
    }
}

/*
13 31
15 51
21 12
24 42
32 23
35 53
41 14
43 34
52 25
54 45

11 0 
22 0 
33 0
44 0
55 0

13 1
15 1
21 1
24 1
32 1
35 1
41 1
43 1
52 1
54 1

12 2
14 2
23 2
25 2
31 2
34 2
42 2
45 2
51 2
53 2
*/