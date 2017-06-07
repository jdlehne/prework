 document.getElementById("button1").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";

        });

 document.getElementById("button2").addEventListener("click", function(){

          document.getElementById("box").style.backgroundColor = "blue";

        });  


function fadeOutEffect() {
    var fadeTarget = document.getElementById("box");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fadeTarget.style.opacity -= 0.1;
        }
    }, 200);
}

document.getElementById("button3").addEventListener('click', fadeOutEffect);


document.getElementById("button4").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.backgroundColor = "orange";
            document.getElementById("box").style.opacity =1;

            });