let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];
/* aqui criamos um vetor (array) vazio, que será nesse vetor que iremos usar para analisar os dados. */

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    /* se o number (n) for maior ou igual a 1 e number (n) for menor ou igual a 100. */
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  // aqui inlista recebe dois valores, n: número e l: da lista.
  if (l.indexOf(Number(n)) != -1) {
    /* se na lista (l), indexof(vai retornar a chave ou seja dentro da lista o valor que pedirmos). Se o number de (n) for diferente de -1 (indica que o valor não foi encontrado dentro da lista) */
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    /* ele só vai adicionar se for um número, para isso criamos uma function chamada de isnumero e ao lado estamos convertendo a string para número. E ele só irá adicionar se o número escolhido não (!) estiver dentro da lista, para isso criamos outra function chamada inlista. */
    valores.push(Number(num.value));
    /* valores é o meu indíce, push (adicionar um elemento no vetor), vou adicionar o number que está dentro de num.value */
    let item = document.createElement("option");
    /* aqui criamos uma var chamada item, e estamos criando um elemento pelo js no html, chamado option, ou seja ele vai criar uma tag chamada option no html. */
    item.text = `Valor ${num.value} adicionado.`; /* meu item vai ter o valor de text, e será uma string. o valor que será adicionado será o de num.value */
    lista.appendChild(
      item
    ); /* aqui estamos pedindo para adicionar a var que criamos chamada item na nossa lista */
    res.innerHTML = ""; // aqui estamos pedindo pra a cada número que acrescentarmos na lista, o js limpe o resultado anterior e mostre o resultado total só depois de finalizado.
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  num.value =
    ""; /* aqui estamos pedindo para apagar os dados que o usuário digitar, ou seja limpar a tela a cada valor digitado ao input. */
  num.focus(); /* o focus seria como se o usuário clicasse na caixinha onde vai digitar os valores. ou seja, estamos pedindo ao js que ele faça automaticamente */
}

function finalizar() {
  if (valores.length == 0) {
    // se o vetor estiver vazio
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let tot = valores.length; // total de elementos (tot), estamos pedindo para saber quantos elementos o meu vetor tem.
    let maior = valores[0]; // aqui estamos dizendo que o maior valor e o menor, é o primeiro, ou seja a primeira posição da nossa lista.
    let menor = valores[0];
    let soma = 0; // criamos a var soma, e inicialmente ela começa com 0 e vai somando com os demais valores que forem adicionados.
    let media = 0; // aqui criamos a var media para ao final do programa ela dar o resultado final de todos os valores digitados.
    for (let pos in valores) {
      // aqui criamos um for, e nele uma var chamada pos para cada posição in valores. Aqui ele vai analisar cada valor um por um e informar qual é o maior e qual é o menor.
      soma += valores[pos]; // aqui estamos chamando a var soma que criamos e estamos pedindo para ela somar valores (meu indice) + pos (posição).
      if (valores[pos] > maior)
        // se o valores na posição pos for maior do que o maior valor, etnão:
        maior = valores[pos];
      // o maior valor passa a ser valores: pos. ele deixa de ser o anterior e passa a ser esse.
      if (valores[pos] < menor)
        // se o valores pos for menor que o menor, então:
        menor = valores[pos]; // o menor passa a ser o valores pos.
    }
    media = soma / tot; // aqui estamos pedindo pra ao final dar o resultado final de soma / pelo total de elementos para dar o valor da media.

    res.innerHTML = ""; // aqui estamos pedindo para mostrar na tela ou seja o resultado dos números adicionados, para serem mostrados na tela. Ao inicio ele mostrará vazio, e conforme o usuário for adicionando os valores, o programa vai mostrando as demais msgs na tela do usuário.
    res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`;
    res.innerHTML += `<p>O <strong>maior</strong> valor informado foi <strong>${maior}</strong>.</p>`;
    res.innerHTML += `<p>O <strong>menor</strong> valor informado foi <strong>${menor}</strong>.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`;
  }
}
