
export  function summary(a:number, b:number){
    return a + b
}

export  function multiply(a:number, b:number){
    return a * b
}

export function splitIntoWords (sentence:string){
    return sentence.toLocaleLowerCase().split(" ")
        .filter(w => w!== " " && w !== "-")
        .map(w=>w.replace("!"," "))
}