function solution(s, t){
    let answer=0;
    for(let chr of s){
        if(chr == t){
            answer++;
        }
    }
    return answer
   
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
