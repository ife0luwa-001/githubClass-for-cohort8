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

let fullName = "Aremu David Ayomide"
function info (Fn){
    return Fn.toUpperCase
}
console.log(info(fullName))

//using trim function 
const friend = "   Dominion   " //this is to learn the uses of trim, trimStart and trimEnd
console.log(friend.trim());
console.log(friend.trimStart());
console.log(friend.trimEnd());

//startsWith(),  endsWith()
let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report"));
console.log(filename.startsWith("draft"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".docs"));


const extractExample = "David"
console.log(extractExample.slice(0, 3)); // "Dav"
console.log(extractExample.slice(3));    // "id"
console.log(extractExample.slice(-3));  // "vid"
console.log(extractExample.substring(0, 3)); // "Dav"
console.log(extractExample.substring(3));    // "id"
console.log(extractExample.substring(-3));  // "David" (negative index treated as 0)