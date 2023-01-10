function solution(arr){  
    const N = arr.length;
    let answer= Array.from({length:N}, ()=> 1);
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[i]){
                answer[i]++;
            }
        }
    }
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));

/* let answer= Array.from({length:N}, ()=> 1);
N 만큼의 길이를 갖고 있는 array의 각각 요소를 1로 초기화
*/