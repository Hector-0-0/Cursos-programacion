let palabra = "Javascript";

for( let f in palabra){

    document.write(f);
    if( f == 4 ){
        document.write("<br>Estamos en la posicion 4 <br>");
        break;
    }
}

for( let f in palabra){

    if(palabra[f] == "a"  || palabra[f] == "e" || palabra[f] == "i" || palabra[f] == "o" || palabra[f] == "u" ){
        continue;
    }   
    document.write(palabra[f]);
}