let grow = 0;
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");

btn.addEventListener('click',  function() {

    let num = 50 +Math.floor(Math.random()*50);

    let inc = setInterval(function(){
        grow++;
        h2.innerHTML = grow+"%";
        btn.innerHTML= "Downloading"
        inner.style.width = grow+"%";
        btn.style.pointerEvents = "none";
    }, num)

    setTimeout(function(){
        clearInterval(inc);
        btn.innerHTML ="Downloaded"
        btn.style.opacity = "0.5"
        console.log("Downoaded in",num/10,"Seconds")
    },num*100)



})

