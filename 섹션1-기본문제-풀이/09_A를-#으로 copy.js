function solution(s){
    let answer=""
    for(let chr of s){
        if(chr =="A"){
            answer+= "#"
        }
        else{
            answer += chr
        }
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));
