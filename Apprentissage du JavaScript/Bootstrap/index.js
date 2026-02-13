function faireQuelqueChose(callback){
    console.log("Début de l'opération");
   setTimeout(()=>{
    console.log("Fin de l'opération");
    callback();
},2000); 
}
function callbackFunction(){
    console.log("callback exécuté");
    
}
faireQuelqueChose(callbackFunction);
