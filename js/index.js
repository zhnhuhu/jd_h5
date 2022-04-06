window.addEventListener('load',function(){
    var goback=document.querySelector('.goback')
    var main=document.querySelector('.mainContent')
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>=main.offsetTop){
            goback.style.display='block'
        }
        else{
            goback.style.display='none'
        }
    })
    goback.addEventListener('click',function(){
        window.scroll(0,0)
    })
})