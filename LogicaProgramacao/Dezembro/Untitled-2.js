function perdeu() {
  var dinehirodeperda = ['20', '30', '40', '50', '60', '70', '80', '90', '100'];
  var p = Math.floor(Math.random() * dinehirodeperda.length);
  var d = dinehirodeperda[p];
  return dineiro + d;
}
function ganhou() {
  var dinehirodevitoria = ['200', '300', '400', '500', '600', '700', '800', '900', '1000'];
  var a = Math.floor(Math.random() * dinehirodevitoria.length);
  var d = dinehirodevitoria[a];
  return dineiro + d;
}
function ataque(i,p) {
  var st;
  var vt;
  if (i == 0) {
    st = Math.floor(Math.random() * 100);
  }
  if (i == 1) {
    st = Math.floor(Math.random() * 100 + 100);
  }
  if (i == 2) {
    st = Math.floor(Math.random() * 100 + 300);
  }
  if (p == 0) {
    vt = Math.floor(Math.random() * 100);
  }
  if (p == 1) {
    vt = Math.floor(Math.random() * 100 + 100);
  }
  if (p == 2) {
    vt = Math.floor(Math.random() * 100 + 300);
  }
  alert('Seu pokemon atacou! O valor do ataque foi ' + st + '\nO valor do ataque do oponente foi ' + vt);
  if (vt > st) {
    alert('Você sofreu um dano de ' + vt);
    vdo = vdo - st;
    tvida = tvida - vt;
  }
  if (vt < st) {
    alert('O pokemon do oponente sofreu um dano de ' + st);
    vdo = vdo - st;
    tvida = tvida - vt;
  }
}
function batalha() {
  alert('BATALHA');
  var end = false;
  while (end == false) {
    ataque(i,p);
    if (vdo <= 0) {
      end = true;
      alert('Você ganhou');
      xp += 5;
      if ((xp == 10) || (xp == 20) || (xp == 30) || (xp == 40) || (xp == 50) || (xp == 60) || (xp == 70) || (xp == 80) || (xp == 90) || (xp == 100));
        level += 1;
      ganhou();
    }
    if (tvida <= 0) {
      end = true;
      alert('Você perdeu');
      xp += 2.5;
      if ((xp == 10) || (xp == 20) || (xp == 30) || (xp == 40) || (xp == 50) || (xp == 60) || (xp == 70) || (xp == 80) || (xp == 90) || (xp == 100)) {
        level += 1;
        perdeu();
      }
    }
  }
}
function sort() {
  return pokemon[sortpokemon];
}
function slep() {
  return variavel = " esta dormindo, se quiser acordar, digite 0";
}
function acordar() {
  return variavel = "\n\no que vc quer?\n\n1- dar a comida 2-batalhar 3-dormir 4-comprar comida 5-golpe suicida";
}
function oqelequer(necessidades) {
  oq = Math.floor(Math.random() * necessidades.length);
  return necessidades[oq];
}
function loja() {
  var k = "";
  for (c = 0; c < quantidadedecomida; c++) {
    comprar = parseInt(prompt("Bem vindos\n para comprar comida/bebidas escolhida vc precisa por a posiçao da comida/bebida escolhida\nex:\nmorango abacaxi agua\n\nse vc quiser o abacaxi vc coloca 2 e assim por diante.\nBoas compras" + mercadorias));
    k += mercadorias[comprar];
    geladeira.push(mercadorias[comprar]);
  }
  return k;
}
var evo = 0;
var dineiro = 500;
var level = 1;
var xp = 0;
var pokemon = ['pichu', 'Charmander', 'Squirtle', 'Caterpie', 'Weedle', 'Pidgey', 'Nidoran', 'Nidoran'];
var segundaevolucao = ['pikachu', 'chameleon', 'wartortle', 'metapod', 'kakuna', 'Pidgeotto', 'Nidorina', 'Nidorino'];
var terceiraevolucao = ['raichu', 'Charizard', 'Blastoise', 'Butterfree', 'Beedrill', 'Pidgeot', 'Nidoqueen', 'Nidoking'];
var representacao = ['🐁⚡', '🦖🔥', '🐢💧', '🐛🍃', '🐛☠', '🦜🌬', '🐇🚺', '🐇🚹'];
var segundarepresentacao = [' ⚡🐁⚡', '🔥🦖🔥', '💧🐢💧', '🍃🐛🍃', '☠🐛☠', '🌬🦜🌬', '🐇🚹', '🐇♀'];
var terceirarepresentacao = [' ⚡⚡🐁⚡⚡', '🔥🔥🦖🔥🔥', '💧💧🐢💧💧', '🦋🍃', '🐝', '🌬🌬🦜🌬🌬', '🐇🚹💪', '🐇♀💪'];
var pokemonscontra = [['pichu', 'Charmander', 'Squirtle', 'Caterpie', 'Weedle', 'Pidgey', 'Nidoran', 'Nidoran'], ['pikachu', 'chameleon', 'wartortle', 'metapod', 'kakuna', 'Pidgeotto', 'Nidorina', 'Nidorino'], ['raichu', 'Charizard', 'Blastoise', 'Butterfree', 'Beedrill', 'Pidgeot', 'Nidoqueen', 'Nidoking']];
var tamanho = pokemonscontra.length;
var sortcontra = Math.floor(Math.random() * tamanho);
var tvida = 100;
var vdo;
var sortpokemon = Math.floor(Math.random() * (pokemon.length));
var repre = representacao[sortpokemon]
var armazenamento = pokemon[sortpokemon];
var necessidades = ['dormir', '', 'comer', '', 'batalhar', ''];
var oq;
var variavel = "\n\no que vc quer?\n\n1- dar a comida 2-batalhar 3-dormir 4-comprar comida 5-golpe suicida";
var geladeira = [];
while (true) {
  var nivel = 1;
  var i = 0;
  var jogar = parseInt(prompt("Vamos começar?\n1-sim\n2-não\n3-como funciona"));
  if (jogar == 1) {
    var nome = prompt("qual seu nome de treinador?");
    alert(nome + " seu primeiro pokemon é: " + sort() + representacao[sortpokemon]);
    while (true) {
      if (level == 2) {
        armazenamento = segundaevolucao[sortpokemon];
        repre = segundarepresentacao[sortpokemon];
        tvida = 500;
        i = 1;
      }
      if (level == 10) {
        armazenamento = terceiraevolucao[sortpokemon];
        repre = terceirarepresentacao[sortpokemon];
        tvida = 1000;
        i = 2;
      }
      var comecar = parseInt(prompt("level:" + level + "                                                 seu pokemon é: " + armazenamento + "\n" + "dineiro: " + dineiro + "\n" + " necessidades: " + oqelequer(necessidades) + "\n" + repre + variavel));
      if (comecar == 1) {
        if (geladeira[0] == undefined) {
          var quer = parseInt(prompt("Sua geladeira está vazia :(\nquer comprar comida?\n1-sim\n2-não"));
          if (quer == 1) {
            var quantidadedecomida = parseInt(prompt("infome a quantidade de comida q vc vai comprar"));
            var mercadorias = ['\n0-🍏', '1-🍎', '2-🍐', '3-🍊', '4-🍋', '\n5-🍌', '6-🍉', '7-🍇', '8-🍓', '9-🍈', '\n10-🍒', '11-🍑', '12-🍍', '13-🥭', '14-🥥', '\n15-🥝', '16-🍅', '17-🍆', '18-🥑', '19-🥦', '\n20-🥒', '21-🥬', '22-🌶', '23-🌽', '24-🥕', '\n25-🥔', '26-🍠', '27-🥐', '28-🍞', '29-🥖', '\n30-🥨', '31-🥯', '32-🧀', '33-🥚', '34-🍳', '\n35-🥞', '36-🥓', '37-🥩', '38-🍗', '39-🍖', '\n40-🌭', '41-🍔', '42-🍟', '43-🍕', '44-🥪', '\n45-🥙', '46-🌮', '47-🌯', '48-🥗', '49-🥘', '\n50-🥫', '51-🍝', '52-🍜', '53-🍲', '54-🍛', '\n55-🍣', '56-🍱', '57-🥟', '58-🍤', '59-🍙', '\n60-🍚', '61-🍘', '62-🍥', '63-🥮', '64-🥠', '\n65-🍢', '66-🍡', '67-🍧', '68-🍨', '69-🍦', '\n70-🥧', '71-🍰', '72-🎂', '73-🍮', '74-🍭', '\n75-🍬', '76-🍫', '77-🍿', '78-🧂', '79-🍩', '\n80-🍪', '81-🌰', '82-🥜', '83-🍯', '84-🥛', '\n85-🍼', '86-☕', '87-🍵', '88-🥤'];
            var comprar;
            console.log(loja());
            dineiro -= 35 * quantidadedecomida;
            alert(geladeira);
            continue;
          }
        } if (quer == 2) {
          console.log("blz");
          continue;
        } else {
          alert(geladeira);
          var qualcomida = parseInt(prompt('informe a comida q vc quer\n' + geladeira));
          var tempgeladeira = geladeira;
          geladeira = [];
          var qt = 0;
          for (i = 0; i < tempgeladeira.length - 1; i++) {
            if (tempgeladeira[i] != qualcomida) {
              geladeira.push(tempgeladeira[i]);
            } else {
              if (qt == 0) {
                qt = 1;
              } else {
                geladeira.push(tempgeladeira[i]);
              }
            }
          }
          continue;
        }
      }
      if (comecar == 0) {
        acordar()
        continue;
      }
      if (comecar == 2) {
        var p = Math.floor(Math.random() * 3)
        sortcontra = Math.floor(Math.random() * tamanho);
        tvida = 100;
        if (p == 0) {
          vdo = 100;
        }
        if (p == 1) {
          vdo = 500;
        }
        if (p == 2) {
          vdo = 1000;
        }
        alert(pokemonscontra[p][sortcontra]);
        alert('VIDA DO OPONENTE ' + vdo);
        batalha();
        continue;
      }
      if (comecar == 3) {
        for (c = 0; c < 3; c++) {
          alert("ele esta dormindo")
        }
        slep();
        continue;
      }
      if (comecar == 4) {
        var quantidadedecomida = parseInt(prompt("infome a quantidade de comida q vc vai comprar"));
        var mercadorias = ['\n0-🍏', '1-🍎', '2-🍐', '3-🍊', '4-🍋', '\n5-🍌', '6-🍉', '7-🍇', '8-🍓', '9-🍈', '\n10-🍒', '11-🍑', '12-🍍', '13-🥭', '14-🥥', '\n15-🥝', '16-🍅', '17-🍆', '18-🥑', '19-🥦', '\n20-🥒', '21-🥬', '22-🌶', '23-🌽', '24-🥕', '\n25-🥔', '26-🍠', '27-🥐', '28-🍞', '29-🥖', '\n30-🥨', '31-🥯', '32-🧀', '33-🥚', '34-🍳', '\n35-🥞', '36-🥓', '37-🥩', '38-🍗', '39-🍖', '\n40-🌭', '41-🍔', '42-🍟', '43-🍕', '44-🥪', '\n45-🥙', '46-🌮', '47-🌯', '48-🥗', '49-🥘', '\n50-🥫', '51-🍝', '52-🍜', '53-🍲', '54-🍛', '\n55-🍣', '56-🍱', '57-🥟', '58-🍤', '59-🍙', '\n60-🍚', '61-🍘', '62-🍥', '63-🥮', '64-🥠', '\n65-🍢', '66-🍡', '67-🍧', '68-🍨', '69-🍦', '\n70-🥧', '71-🍰', '72-🎂', '73-🍮', '74-🍭', '\n75-🍬', '76-🍫', '77-🍿', '78-🧂', '79-🍩', '\n80-🍪', '81-🌰', '82-🥜', '83-🍯', '84-🥛', '\n85-🍼', '86-☕', '87-🍵', '88-🥤'];
        var comprar;
        console.log(loja());
        alert(geladeira);
        continue;
      }
      if (comecar == 5) {
        alert('vc aplicou o golpe suicida, logo vc matou seu pokemon :)\nEH US GURI');
        break;
      }
      break;
    }
    break;
  } if (jogar == 2) {
    break;
  } if (jogar == 3) {
    alert("pokemon diferenciado consiste em cuidar do pokemon virtual como se fosse real, dando-lhe carinho, comida, banho, cuidados, treinamento pra evoluir e etc.\nEle tem com objetivo você virar um mestre pokemon, ao longo de sua jornada você encontra outros pokemon ai você escolhe se quer cuidar dele ou não,\nobs:SÓ VAI TER POKEMON QUE TEM PELO MENOS 3 EVOLUÇÕES.");
    continue;
  }
}