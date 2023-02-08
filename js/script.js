let wid
let changeRe = false

let verificarStateInitial = () => {
    let wi = innerWidth
    if(wi <= 937) {
        changeRe = true
        let arrow = document.querySelector('.arrow_i')
        arrow.className = 'fa-solid fa-circle-arrow-down arrow_i'
    } else {
        changeRe = false
        let arrow = document.querySelector('.arrow_i')
        arrow.className = 'fa-solid fa-circle-arrow-left arrow_i'
    
    }
}

verificarStateInitial()

function ChangeResolution() {
    wid = innerWidth
    console.log(wid)
    if(wid <= 937) {
        changeRe = true
        let arrow = document.querySelector('.arrow_i')
        arrow.className = 'fa-solid fa-circle-arrow-down arrow_i'
    } else {
        changeRe = false
        let arrow = document.querySelector('.arrow_i')
        arrow.className = 'fa-solid fa-circle-arrow-left arrow_i'
    }
}


let isChangeState = false
function ModificarStatusForm() {
    let form = document.getElementById('form')
    let arrow = document.querySelector('.arrow_i')
    if(changeRe == false) {
        if(isChangeState == false) {
            form.style.right = '30px'
            arrow.className = 'fa-solid fa-circle-arrow-right arrow_i'
            isChangeState = true
        } else {
            form.style.right = '-438px'
            arrow.className = 'fa-solid fa-circle-arrow-left arrow_i'
            isChangeState = false
        }
    } else {
        if(isChangeState == false) {
            form.style.top = '0'
            arrow.className = 'fa-solid fa-circle-arrow-up arrow_i'
            isChangeState = true
            document.getElementById('form__sub').style.height = 'auto'
        } else {
            form.style.top = '-440px'
            arrow.className = 'fa-solid fa-circle-arrow-down arrow_i'
            isChangeState = false
            setTimeout(() => {
                document.getElementById('form__sub').style.height = '50px'        
            }, 600);
        }
    }


}
isExit = false
function ChangeStateMenu() {
    let header = document.getElementById('head')
    let nav = document.getElementById('nav')
    if(isExit == false) {
        isExit = true
        header.style.height = '240px'
        setTimeout(() => {
            nav.style.display = 'block'    
        }, 400);
    } else {
        isExit = false
        header.style.height = '100px'
        nav.style.display = 'none'
    }
}

function ValidarDados() {
    let nome = document.getElementById('nome')
    let sobrenome = document.getElementById('sobrenome')
    let email = document.getElementById('email')
    let nomeInvalido = document.getElementById('nome__invalido')
    let sobrenomeInvalido = document.getElementById('sobrenome__invalido')
    let emailInvalido = document.getElementById('email__invalido')

    if(nome.value.length == 0) {
        nome.style.borderColor = 'red'
        nomeInvalido.style.display = 'block'
    } else {
        nome.style.borderColor = ''
        nomeInvalido.style.display = 'none'
    }
    
    if(sobrenome.value.length == 0) {
        sobrenome.style.borderColor = 'red'
        sobrenomeInvalido.style.display = 'block'
    } else {
        sobrenome.style.borderColor = ''
        sobrenomeInvalido.style.display = 'none'
    }

    if(email.value.length == 0) {
        email.style.borderColor = 'red'
        emailInvalido.style.display = 'block'
    } else {
        email.style.borderColor = ''
        emailInvalido.style.display = 'none'
    }
}