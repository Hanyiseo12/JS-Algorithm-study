
function solution(arr){
   let firstAnswer = 0, newArr =[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            newArr.push(arr[i])
            firstAnswer += arr[i];
        }
    }
    console.log(firstAnswer);

    answer = newArr[0];
    for(let i =1;i<newArr.length;i++){
        if(answer>newArr[i])
            answer=newArr[i];
    }
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

//1. 홀수 배열 만들기
//2. 합 구하고
//3. 최소값 찾기