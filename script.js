let msg = document.getElementById("msg");
let btn = document.getElementById("btn");
let msgf;
msg.innerHTML = "";

btn.addEventListener("click",start);


function start(){
    let p1 = prompt("Digite seu nome");
    let p2 = prompt(`${p1} qual seria seu poder?\n
    Entre os poderes abaixo: obs. voce pode escolher outro pdoer\n
    VOA||CORRER||RAIOS||SABEDORIA`);
    let p3 = prompt("Digite o nome do seu vilão: ");
    
    switch(p2){
        case "VOA":
        case "voa":
            msgf = `Perdeu`;
            break;
        case "CORRER":
        case "correr":
            msgf = `Ganhou`;
            break;
        case "RAIOS":
        case "raios":
            msgf = `Perdeu`;
            break;
        case "SABEDORIA":
        case "sabedoria":
            msgf = `Ganhou`;
            break;
        default:
            msgf = `Perdeu`;
            break;
    }



    msg.innerHTML = `O(A) ${p1} lutou contrar o(a) ${p3} com o poder ${p2} e o resultado é: \n
    ${msgf}`;
}