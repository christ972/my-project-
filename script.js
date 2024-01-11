let display=document.getElementById("display");
let afficher='';
function addToDisplay(number){
    afficher+=number;
    display.value=afficher;
}
function clean(){
    afficher=" "
    display.value=afficher;
}
function calculate(){
   try{ afficher=eval(afficher);
    display.value=afficher;
    }

    catch {
    display.value = "error";
            
    }

}