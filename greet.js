function greet(name){

    if (name == null){ //require 2 
        return "Hello, my friend.";
    } else if (name != null){ //require 1 
        if (Array.isArray(name) && name.length == 2) { //require 4
            return `Hello, ${name.join(' and ')}.`;
        }else if (Array.isArray(name) && name.length > 2){ //require 5
            name1 = name.slice(length-1)
            name.pop();
            return `Hello, ${name.join(', ')}, and ${name1}.`;
        }else if (name == name.toUpperCase()){ //require 3
            return `HELLO ${name}!`;
        }else { 
            return `Hello, ${name}.`; 
        }  
    }
    
}

module.exports = greet