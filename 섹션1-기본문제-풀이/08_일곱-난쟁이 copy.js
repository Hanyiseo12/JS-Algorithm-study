function solution(arr){
    let val=0, newArr =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]+val < 100){
            newArr.push(arr[i]);
            val += arr[i];
            console.log(val)
            console.log(newArr)
        }
    }
    return newArr;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

//1. for문 돌려서 값 더한거 100 안넘으면 arr push