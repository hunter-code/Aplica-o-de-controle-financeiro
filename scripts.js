

const entradas = [];
  
function adicionarEntrada() {
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);

  if (descricao && !isNaN(valor)) {
    const novaEntrada = { descricao, valor };
    entradas.push(novaEntrada);
    salvarEntradas();
    carregarEntradas();
    atualizarSaldo();
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
  }
}

function carregarEntradas() {
    const entradasLocal = localStorage.getItem('entradas');
    if(entradasLocal){
      entradas.length = 0; // Limpar array
      entradas.push(...JSON.parse(entradasLocal));
    }
    atualizarLista();
}

function atualizarLista(){
  const lista = document.getElementById("entradas");
  lista.innerHTML = "";
  entradas.forEach((entrada, index) => {
    const item = document.createElement("li");
    item.textContent = `${index+1}.${entrada.descricao} - R$ ${entrada.valor.toFixed(2)}`;
    lista.appendChild(item);
  });
}

function atualizarSaldo() {
  const saldo = entradas.reduce((total, entrada) => total + entrada.valor, 0);
  document.getElementById("saldo").textContent = saldo; 
  R$ `${saldo.toFixed(2)}`;
}

function salvarEntradas() {
  localStorage.setItem('entradas', JSON.stringify(entradas));
}

/*Parte de remção */
function atualizarLista(){
  const lista = document.getElementById("entradas");
  lista.innerHTML = "";
  entradas.forEach((entrada, index) => {
  const item = document.createElement("li");
  item.textContent = `${index+1}. ${entrada.descricao} - R$ ${entrada.valor.toFixed(2)}`;
  // const removerBtn = document.createElement("button");/*expirency ("button")*/
  removerBtn.textContent = 'Você pode adicionar uma nova entrada, ou remove-las!' ;
  removerBtn.onclick = () => removerEntrada(index);
  item.appendChild(removerBtn);
  lista.appendChild(item);
  });
 }
 
 function removerEntrada(index) {
  entradas.splice(index, 1);
  salvarEntradas();
  carregarEntradas();
  atualizarSaldo();
 }

 const removerBtn = document.createElement("li");/*button*/
removerBtn.textContent = "remover";
removerBtn.className = "remover";
removerBtn.onclick = () => removerEntrada(index);


 
 

carregarEntradas();
atualizarSaldo();
 removeEntredas();