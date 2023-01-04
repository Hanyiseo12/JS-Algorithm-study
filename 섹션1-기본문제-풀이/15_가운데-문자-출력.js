function solution(s){  
    let answer="",val
    let len = s.length;
    val = Math.floor(len / 2)
    if(len % 2 ==0){
        for(let i=1;i>=0;i--){
            answer+= s.charAt(val-i)
        }
    }
    else{
        answer+= s.charAt(val)
    }
    return answer;
}
console.log(solution("abcd"));

//1. length에서 나누기 2 하고 홀수 => charAt(Math.floor) 짝수 => charAt(그 수 -1, 그수)