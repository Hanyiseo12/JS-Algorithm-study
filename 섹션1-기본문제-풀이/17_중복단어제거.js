function solution(s){  
    let answer=[];
    for(ans of s){
        let isValid = true;
        for(word of answer){
            if(word == ans){
                isValid = false
                break;
            }
        }
        if(isValid)
        {
            answer.push(ans)
        }
        }
        return answer;
    }

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
