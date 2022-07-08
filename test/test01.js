function geekshubs(index) {

     let result = toString();
    
    for (let i = 0; i <= index; i++) {
        if (i%3==0  && i%5 == 0) {
            result=result+'GeeksHubs\n'
        }else if (i == 1) {
            result = "1\n";
        }else if (i%5==0) {
            result=result+"Hubs\n"
        }else if (i%3 == 0) {
            result=result+'Geeks\n'
        }else {
            result=result+i+'\n'
        }
        
        
    }
    return result;
}
module.exports = geekshubs;
