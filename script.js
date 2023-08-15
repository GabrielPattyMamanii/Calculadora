const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton =>{
    boton.addEventListener("click", () => {
        const botonpress= boton.textContent

        if(botonpress=="C"){
            pantalla.textContent="0"
            return
        }

        if(botonpress=="="){
            try{
                pantalla.textContent = eval(pantalla.textContent)
            }catch{
                pantalla.textContent="error"
            }
            return
        }


        if(boton.id=="remove"){

            if(pantalla.textContent="error"){
                pantalla.textContent="0"
            }

            if(pantalla.textContent.length==1){
                pantalla.textContent="0"
            }else{
                pantalla.textContent=(pantalla.textContent).slice(0,-1 )
            }
            return
        }
        


        if(pantalla.textContent==0){
            pantalla.textContent=botonpress
        }else{
            pantalla.textContent+=botonpress
        }



    })
})