//ALGORITMO OrcamentoObra
var m_compPeca, m_largPeca, cm_compPiso, cm_largPiso, precoUnit_pisoRS, val_maoObraM2, typeAssent;
var dimPeca, dimPiso, qntPiso_assent;
var cust_maoObra, cust_pisoAssent, cust_totalObra;
m_compPeca = parseFloat(prompt("Insira o comprimento da peça em metros"));
m_largPeca = parseFloat(prompt("Insira a largura da peça em metros"));
cm_compPiso = parseFloat(prompt("Insira o comprimento do piso em centímetros"));
cm_largPiso = parseFloat(prompt("Insira a largura do piso em centímetros"));
precoUnit_pisoRS = parseFloat(prompt("Insira o preço unitário do piso, em reais"));
val_maoObraM2 = parseFloat(prompt("Insira o preço da mão de obra por m^2"));
typeAssent = prompt("Insira o tipo de assentamento: [c] para convencional, [d] para diagonal");
alert("O piso convencional adiciona 10% na quantidade de piso a ser comprada, o diagonal, 20%");
dimPeca = m_compPeca *m_largPeca;
dimPiso = cm_compPiso *cm_largPiso;
qntPiso_assent = dimPeca /(dimPiso /1000);
if (typeAssent == "c") {
	qntPiso_assent += qntPiso_assent *0.1;
} else if (typeAssent == "d") {
	qntPiso_assent += qntPiso_assent *0.2;
}
cust_maoObra = dimPeca *val_maoObraM2;
cust_pisoAssent = qntPiso_assent *precoUnit_pisoRS;
cust_totalObra = cust_maoObra +cust_pisoAssent;
alert("Mão de obra: R$" +cust_maoObra+ ". Piso por assentamento: R$" +cust_pisoAssent+ ". Total da obra: R$" +cust_totalObra);
