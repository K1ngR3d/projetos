function tabuada() {

    let numero = Number(document.getElementById("numero").value)

    let ad = document.getElementById("adicao")
    let sub = document.getElementById("subtracao")
    let multi = document.getElementById("multiplicacao")
    let div = document.getElementById("divisao")

    for (i = 0; i <= 10; i++) {
        soma = numero + i 
        ad.innerHTML += numero + " + " + i + " = " + soma + "<br>"

        menos = i + numero 
        sub.innerHTML += menos + " - " + numero + " = " + i + "<br>"

        vezes = numero * i
        multi.innerHTML += numero + " x " + i + " = " + vezes + "<br>"

        dividi = i * numero
        div.innerHTML += dividi + " ÷ " + numero + " = " + i + "<br>"
    }
    
   
    
    
}