function camelize(str){
    return str.split("-").map((word, index) => index==0 ? word: word.at(0).toUpperCase()+word.slice(1))
}

console.log(camelize("background-color"))