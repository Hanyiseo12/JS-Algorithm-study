function solution(s){  
    let answer="";
    for(chr of s){
        let isValid = true;
        for(ans of answer){
            if(chr == ans){
                isValid = false;
                break;
            }
        }
        if(isValid){
            answer+= chr;
        }
        }
        return answer;
    }

console.log(solution("aaddtjweisllk"));
console.log(solution("ksekkset"));

