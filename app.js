// define variables
let main = document.getElementById('main')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let p = document.querySelectorAll('p')
let follow = document.querySelectorAll('.follow')
let box = document.querySelectorAll('.box')
let num = document.querySelectorAll('.num')
let btn = document.querySelector('input')

btn.addEventListener('click', function() {
    if(this.checked){
        return darkTheme()
    } else {
        return lightTheme()
    }
})


let darkTheme = function(){
    main.style.backgroundColor = "hsl(230, 17%, 14%)"
    h1.style.color = "hsl(0, 0%, 100%)"
    h2.style.color = "hsl(0, 0%, 100%)"
    num.forEach(item => {
        item.style.color = "hsl(0, 0%, 100%)"
    });
    p.forEach(item => {
        item.style.color = "hsl(228, 34%, 66%)"
    });
    follow.forEach(item => {
        item.style.color = "hsl(228, 34%, 66%)"
    })
    box.forEach(item => {
        item.style.backgroundColor = "hsl(232, 19%, 15%)"
    })   
}
let lightTheme = function(){
    main.style.backgroundColor = "hsl(0, 0%, 100%)"
    h1.style.color = "hsl(230, 17%, 14%)"
    h2.style.color = "hsl(228, 12%, 40%)"
    num.forEach(item => {
        item.style.color = "hsl(230, 17%, 14%)"
    });
    p.forEach(item => {
        item.style.color = "hsl(230, 17%, 14%)"
    });
    follow.forEach(item => {
        item.style.color = "hsl(228, 12%, 40%)"
    })
    box.forEach(item => {
        item.style.backgroundColor = "hsl(225, 100%, 98%)"
    })
}
