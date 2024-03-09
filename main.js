const myBtn = document.getElementById("myBtn");
        myBtn.addEventListener("click", function (e){
            const name = prompt ("What's your name?");

            dodument.body.innerHTML = "<h1>Hello" + name + "!</h1>"; 
            
        });
