
const inerval = setInterval( ()=>{
    const red = setTimeout(()=>{
        document.querySelector(".red").style.background = "red";  
        document.querySelector(".red").classList.add("redShadow")
      },0000)
    
    const offRed = setTimeout(()=>{
        document.querySelector(".red").style.background = "darkred"; 
        document.querySelector(".red").classList.remove("redShadow")

      },3000)
    
    const yellow = setTimeout(()=>{
          document.querySelector(".yellow").style.background = "yellow"; 
          document.querySelector(".yellow").classList.add("yellowShadow") 
      },3000)
    
      const offYellow = setTimeout(()=>{
        document.querySelector(".yellow").style.background = "darkgoldenrod";
        document.querySelector(".yellow").classList.remove("yellowShadow") 
      },5000)
      
      const green = setTimeout(()=>{
        document.querySelector(".green").style.background = "green";  
        document.querySelector(".green").classList.add("greenShadow");  

    },5000)
    
    const offGreen = setTimeout(()=>{
        document.querySelector(".green").style.background = "darkgreen";  
        document.querySelector(".green").classList.remove("greenShadow");  

    },7000)

    const blickgreen =setTimeout(()=>{
        document.querySelector(".green").style.background = "green";  
        document.querySelector(".green").classList.add("greenShadow");  

    },7500)
    const blickoffgreen =  setTimeout(()=>{
        document.querySelector(".green").style.background = "darkgreen";  
        document.querySelector(".green").classList.remove("greenShadow");  

    },8000)
    const onblickgreen =setTimeout(()=>{
        document.querySelector(".green").style.background = "green";  
        document.querySelector(".green").classList.add("greenShadow");  

    },8500)

    const offblickoffgreen =  setTimeout(()=>{
        document.querySelector(".green").style.background = "darkgreen";  
        document.querySelector(".green").classList.remove("greenShadow");  

    },9000)

    const onyellow = setTimeout(()=>{
        document.querySelector(".yellow").style.background = "yellow"; 
        document.querySelector(".yellow").classList.add("yellowShadow") 
    },9000)
  
    const offYellowOff = setTimeout(()=>{
      document.querySelector(".yellow").style.background = "darkgoldenrod";
      document.querySelector(".yellow").classList.remove("yellowShadow") 
    },9500)




},9500)

