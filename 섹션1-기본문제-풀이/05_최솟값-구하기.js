function solution(arr){         
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i])
            max=arr[i];
    }
    return max;
}

let arr=[5, 7, 1, 3, 2, 9, 11, 17];
console.log(solution(arr));