function Szamol(){
    var szakmaiszobeli = parseInt(document.getElementById("irasbeliMat").value);
    
     var stuff = [];

    if((szakmaiszobeli*100/50)/2 <= 100 && (szakmaiszobeli*100/50)/2 >= 80){
        stuff[0] = "Szakma 5";
     }
     else if((szakmaiszobeli*100/50)/2 <= 79 && (szakmaiszobeli*100/50)/2 >= 60){
         stuff[0] = "Szakma(informatika) 4";
     }else if((szakmaiszobeli*100/50)/2 <= 59 && (szakmaiszobeli*100/50)/2 >= 40){
         stuff[0] = "Szakma(informatika) 3";
     }else if((szakmaiszobeli*100/50)/2 <= 39 && (szakmaiszobeli*100/50)/2 >= 25){
         stuff[0] = "Szakma(informatika) 2";
     }else if((szakmaiszobeli*100/50)/2 <= 24 && (szakmaiszobeli*100/50)/2 >= 0){
         stuff[0] = "Szakma(informatika) 1";
     }
    
