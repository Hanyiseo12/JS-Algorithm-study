function solution(arr){  
    let answer=0, isValid =0;
    const N = arr.length;
    let dx=[0,1,0,-1];
    let dy=[-1,0,1,0];
    for(let y=0;y<arr.length;y++){
        for(let x=0;x<arr.length;x++){
            isValid = 1;
            for(let r=0;r<4;r++){
                let nx = x+dx[r]
                let ny = y+dy[r]
                if(nx>=0 && ny>=0 && nx <N && ny <N && arr[nx][ny] >=arr[x][y]){
                    isValid = 0;
                    break;
                }
            }
            if(isValid){
                answer++
            }
        }
    }
    return answer;
}

/*
dx[0,1,0,-1]
dy[-1,0,1,0]
*/

let arr=[[5, 3, 7, 2, 3], 
            [3, 7, 1, 6, 1],
            [7, 2, 5, 3, 4],
            [4, 3, 6, 4, 1],
            [8, 7, 3, 5, 2]];
console.log(solution(arr));

/*
let dx=[0,1,0,-1];
let dy=[-1,0,1,0];
변화될 좌표값을 dx와 dy로 만들어준뒤 새롭게 nx와 ny로 arr좌표 찍어주고 for 돌려서 값 비교하는 방법.
*/