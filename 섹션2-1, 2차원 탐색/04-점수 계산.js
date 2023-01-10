function solution(arr){         
    let answer =0, isFirst = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            isFirst = 0;
        }
        else{
            isFirst++;
            answer+=isFirst;
        }
    }      
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

//for 문 arr.length
//isFirst는 문제가 틀리면 0으로 만들어주고 
//맞으면 더하고 0이아니면 그 값만큼 answer에 더해주기