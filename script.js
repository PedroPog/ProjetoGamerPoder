let msg = document.getElementById("msg");
let btn = document.getElementById("btn");
let dado = document.getElementById("dado");

btn.addEventListener("click",start);
dado.addEventListener("click",rodardado);
let p1;
let p2;
let p3;


function start(){
    btn.classList.add("none");
    p1 = prompt("Digite seu nome");
    p2 = prompt(`${p1} qual seria seu poder?\n
    Entre os poderes abaixo: obs. voce pode escolher outro pdoer\n
    VOA||CORRER||RAIOS||SABEDORIA`);
    p3 = prompt("Digite o nome do seu vilão: ");
    
    msg.innerHTML = `Gire o dado para saber o resultado: `;
    dado.classList.remove("none");
}

function rodardado(){
    var min = 0;
    var max = 10;
    let res = Math.floor(Math.random() * (max-min));

    if(res<5){
        msg.innerHTML = `O(A) ${p1} lutou contrar o(a) ${p3} com o poder ${p2} e no final perdeu`;
    }else{
        msg.innerHTML = `O(A) ${p1} lutou contrar o(a) ${p3} com o poder ${p2} e no final GANHOU`;
    }
    dado.classList.add("none");
    btn.classList.remove("none");
    btn.innerHTML = "Jogar novamente!";
}