const display =document.querySelector('.display')
display.innerHTML= 0

function escribir(valor, screen= display ){      
    if(screen.innerHTML==0){
        screen.innerHTML=''
    }
    
    return screen.innerHTML+=valor 
        
}

function borrarTodo(){
    return document.querySelector('.display').innerHTML= '0'

}

function calcular(){
    let displaySnap=document.querySelector('.display').innerHTML
    if(displaySnap!== undefined)
    document.querySelector('.display').innerHTML= eval(displaySnap)

}




