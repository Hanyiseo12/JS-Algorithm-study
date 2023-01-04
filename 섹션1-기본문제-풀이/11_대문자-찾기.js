function solution(s){         
    let answer =0;
    for (chr of s){
        if(chr == chr.toUpperCase())
            answer++;
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));
