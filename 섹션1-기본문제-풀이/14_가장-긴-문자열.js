function solution(s){  
    let answer =""
    let max = s[0].length;
    for(word of s){
        if(word.length> max){
            max = word.length
            answer += word
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));