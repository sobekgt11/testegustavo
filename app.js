var numero = document.getElementById('guess-input')
var btn = document.getElementById('guess-value')
var res = document.getElementsByClassName('message')
var random = Math.floor((Math.random() * 10)+1)
var ress = document.getElementById('res')
var chances = 3




function enviar(){
    var numero1 = Number(numero.value)
    --chances
        numero.innerText = ''
        if (numero1 < 1 || numero1 > 10 || numero1 === ''){
        alert('Recomeçando o jogo, atente-se às regras')
        window.location.reload()
                 
     } else if (numero1 == random) { 
            ress.innerHTML = `Parabéns! Você acertou!`
            numero.disabled = true
            ress.style.color = 'green'
            btn.value = 'Jogar Novamente'
            btn.style.backgroundColor = 'green'
            numero.value = ''
            } else { ress.innerHTML = `Você errou! ${chances} tentativas restantes!`
            ress.style.color = 'red'}
        
            if (chances == 0) {
                ress.innerHTML = `Você PERDEU`
                ress.style.color = 'white'
                ress.style.backgroundColor = 'black'
                btn.value = 'Jogar Novamente'
                numero.disabled = true
                btn.style.background = 'red'
                
            } else if (chances == -1){
                window.location.reload()
            }

    /*    if (numero1 < 1 || numero1 > 10 || numero1 === ''){
        alert('presta atenção no jogo')
        numero.value= ''
    } else if (numero1 != random){
        ress.innerHTML = `Você errou! 3 tentativas restantes!`
    } else { ress.innerHTML = `Você acertou de primeira! Parabéns!` } else if (numero1 != random) {
        ress.innerHTML = `Você errou! 2 tentativas restantes!`
    } else { ress.innerHTML = `Você acertou de segunda =/ Parabéns!`} else if (numero1 != random) {
        ress.innerHTML = `Você errou! 1 tentativa restante...`
    } else { ress.innerHTML = `Você acertou no último momento.. Parabéns... eu acho.`}
}
*/

}
