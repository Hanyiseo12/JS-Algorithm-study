function solution(a, b, c){
    let answer = ""
    const val1 = a+b
    const val2 = b+c
    const val3 = a+c

    if(val1 > c && val2 >a && val3 >b){
        answer = "YES"
    }
    else{
        answer = "NO"
    }
    return answer;
    }

    console.log(solution(6, 7, 11));
    console.log(solution(13,33, 17));
    