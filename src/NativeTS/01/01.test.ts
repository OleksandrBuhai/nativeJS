import {multiply, splitIntoWords, summary} from "./01";

test('correct summary', ()=>{
    let a = 5;
    let b =6;
    let c= 11;
    expect(summary(a,b)).toBe(11)
})
test("correct multiply",()=>{
    let a = 2;
    let b = 2;
    expect(multiply(a,b)).toBe(4)
})
test("splitting sentence" ,()=>{
    let sentence1 = "Hello my friend!"
    let sentence2 = "JS - is awesome programming language!"
    let result1 = splitIntoWords(sentence1)
    let result2 = splitIntoWords(sentence2)


    expect(result2.length).toBe(5)


})