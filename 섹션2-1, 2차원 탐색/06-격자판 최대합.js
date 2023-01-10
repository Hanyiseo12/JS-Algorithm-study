function solution(arr){  
    let val=0, max=0;
    //가로 
    for(let x=0;x<arr.length;x++){
        val=0;
        for(let y=0;y<arr.length;y++){
            val += arr[x][y];
        }
        if(x == 0){
            max = val;
        }else{
            if(val>max)
                max=val
        }
    }
    //세로
    for(let x=0;x<arr.length;x++){
        val =0;
        for(let y=0;y<arr.length;y++){
            val += arr[y][x];
        }

        if(val>max){
            max=val
        }
    }
    //대각1
    val=0;
    for(let x=0;x<arr.length;x++){
        for(let y=0; y<arr.length;y++){
            if(y==x){
                val+=arr[x][y];
            } 
        }

        if(val>max){
            max=val;
        }
        }
    //대각2
        let checkNum = arr.length-1;
        val=0;
    for(let y=0;y<arr.length;y++){
        for(let x=arr.length-1;x>=0;x--){
            if(x==checkNum){
                val+= arr[y][x]
                checkNum--;
                break;
            }
        }
    }
    if(val>max){
        max=val;
        }
    return max;
}

function solution1(arr){  
   let answer=sumX=sumY=0;
   let N = arr.length;

   for(let x=0;x<N;x++){
    sumX=sumY=0;
    for(let y=0;y<N;y++){
        sumX += arr[x][y];
        sumY += arr[y][x];
    }
    answer= Math.max(answer,sumX,sumY);
   }

   sumX=sumY=0;
   for(let x=0;x<N;x++){
    sumX += arr[x][x];
    sumY += arr[x][N-x-1];
   }
   answer= Math.max(answer,sumX,sumY);

    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];
console.log(solution(arr));
console.log(solution1(arr));

// 간결하게 풀 수 있는 패턴에 대해서 찾으려고 노력하기
// 겹치는 코드는 합칠 수 있는지 생각해보기
// Math.max() 이용하기