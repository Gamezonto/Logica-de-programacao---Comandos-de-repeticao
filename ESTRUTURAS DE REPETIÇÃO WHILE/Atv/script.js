function exibirNumeros1a10() {
    let i = 1, resultado = "";
    while (i <= 10) {
        resultado += i + " ";
        i++;
    }
    document.getElementById("res1").innerText = resultado;
}

function soma1a100() {
    let i = 1, soma = 0;
    while (i <= 100) {
        soma += i;
        i++;
    }
    document.getElementById("res2").innerText = "Soma: " + soma;
}

function pares1a50() {
    let i = 1, pares = "";
    while (i <= 50) {
        if (i % 2 === 0) pares += i + " ";
        i++;
    }
    document.getElementById("res3").innerText = pares;
}

function media5Numeros() {
    let i = 1, soma = 0;
    while (i <= 5) {
        let num = parseInt(prompt(`Digite o número ${i}:`));
        soma += num;
        i++;
    }
    document.getElementById("res4").innerText = "Média: " + (soma / 5);
}

function tabuada() {
    let num = parseInt(prompt("Digite um número:"));
    let i = 1, resultado = "";
    while (i <= 10) {
        resultado += `${num} x ${i} = ${num * i}\n`;
        i++;
    }
    alert(resultado);
}

function divisores() {
    let num = parseInt(prompt("Digite um número:"));
    let i = 1, resultado = "";
    while (i <= num) {
        if (num % i === 0) resultado += i + " ";
        i++;
    }
    document.getElementById("res6").innerText = resultado;
}

function verificarPrimo() {
    let num = parseInt(prompt("Digite um número:"));
    let i = 2, primo = true;
    while (i < num) {
        if (num % i === 0) {
            primo = false;
            break;
        }
        i++;
    }
    document.getElementById("res7").innerText = primo ? "É primo" : "Não é primo";
}

function fibonacciAteN() {
    let n = parseInt(prompt("Digite um número:"));
    let a = 0, b = 1, resultado = "";
    while (a <= n) {
        resultado += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
    }
    document.getElementById("res8").innerText = resultado;
}

function mediaIdades() {
    let i = 1, soma = 0;
    while (i <= 5) {
        let idade = parseInt(prompt(`Digite a idade ${i}:`));
        soma += idade;
        i++;
    }
    document.getElementById("res9").innerText = "Média: " + (soma / 5);
}

function primeiros20Fibonacci() {
    let a = 0, b = 1, contador = 0, resultado = "";
    while (contador < 20) {
        resultado += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
        contador++;
    }
    document.getElementById("res10").innerText = resultado;
}



function doWhileNumeros1a10() {
    let i = 1, resultado = "";
    do {
        resultado += i + " ";
        i++;
    } while (i <= 10);
    document.getElementById("res16").innerText = resultado;
}

function doWhileSoma1a100() {
    let i = 1, soma = 0;
    do {
        soma += i;
        i++;
    } while (i <= 100);
    document.getElementById("res17").innerText = "Soma: " + soma;
}

function doWhilePares1a50() {
    let i = 1, pares = "";
    do {
        if (i % 2 === 0) pares += i + " ";
        i++;
    } while (i <= 50);
    document.getElementById("res18").innerText = pares;
}




function forExibirNumeros() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    document.getElementById("res31").innerText = resultado;
}

function forSoma1a100() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    document.getElementById("res32").innerText = "Soma: " + soma;
}

function forPares1a50() {
    let pares = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) pares += i + " ";
    }
    document.getElementById("res33").innerText = pares;
}


function forMedia5Numeros() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o número ${i}:`));
        soma += num;
    }
    let media = soma / 5;
    document.getElementById("res34").innerText = "Média: " + media;
}


function forTabuada() {
    let num = parseInt(prompt("Digite um número:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    alert(resultado);
}


function forDivisores() {
    let num = parseInt(prompt("Digite um número positivo:"));
    let resultado = "";
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) resultado += i + " ";
    }
    document.getElementById("res36").innerText = "Divisores: " + resultado;
}


function forPrimo() {
    let num = parseInt(prompt("Digite um número:"));
    let primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    document.getElementById("res37").innerText = primo ? "É primo" : "Não é primo";
}


function forFibonacciAteN() {
    let n = parseInt(prompt("Digite um número:"));
    let a = 0, b = 1, resultado = "";
    for (let i = 0; a <= n; i++) {
        resultado += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
    }
    document.getElementById("res38").innerText = resultado;
}


function forMediaIdades() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        let idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
        soma += idade;
    }
    let media = soma / 5;
    document.getElementById("res39").innerText = "Média das idades: " + media;
}


function forPrimeiros20Fibonacci() {
    let a = 0, b = 1, resultado = "";
    for (let i = 0; i < 20; i++) {
        resultado += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
    }
    document.getElementById("res40").innerText = resultado;
}


function forSomaParesAteN() {
    let n = parseInt(prompt("Digite um número:"));
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) soma += i;
    }
    document.getElementById("res41").innerText = "Soma dos pares: " + soma;
}


function forImpares50a1() {
    let resultado = "";
    for (let i = 50; i >= 1; i--) {
        if (i % 2 !== 0) resultado += i + " ";
    }
    document.getElementById("res42").innerText = resultado;
}


function forExibirDigitos() {
    let num = parseInt(prompt("Digite um número:"));
    let resultado = "";
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        resultado += strNum[i] + " ";
    }
    document.getElementById("res43").innerText = "Dígitos: " + resultado;
}


function forFatorial() {
    let num = parseInt(prompt("Digite um número:"));
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    document.getElementById("res44").innerText = "Fatorial: " + fatorial;
}


function forMediaIdadesAteFim() {
    let soma = 0, contador = 0;
    while (true) {
        let nome = prompt("Digite o nome (ou 'fim' para encerrar):");
        if (nome.toLowerCase() === "fim") break;
        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
        soma += idade;
        contador++;
    }
    let media = contador > 0 ? soma / contador : 0;
    document.getElementById("res45").innerText = "Média das idades: " + media;
}
