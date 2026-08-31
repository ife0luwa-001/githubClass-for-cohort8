const herName = "EsTheR"

console.log(herName.toLowerCase()); //esther
console.log(herName.toUpperCase()); //ESTHER

function lowerMe (value){
    return value.toLowerCase();
}
console.log(lowerMe(herName))

//trim, trimstart, trimend
const trimExample = "   Hello world!    ";
console.log(trimExample.trim());
console.log(trimExample.trimStart());
console.log(trimExample.trimEnd());

let filename = "report_final_2024.pdf"