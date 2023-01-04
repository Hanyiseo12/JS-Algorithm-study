function solution(s){  
    let answer="";
    for (chr of s){
        if(chr == chr.toUpperCase()){
            answer += chr.toLowerCase()
        }
        else{
            answer += chr.toUpperCase();
        }
    }
    return answer;
}

console.log(solution("StuDY"));
