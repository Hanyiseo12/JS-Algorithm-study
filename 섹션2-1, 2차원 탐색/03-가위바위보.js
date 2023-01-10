function solution(a, b){         
    let answer=[];
    for(let i=0;i<a.length;i++){
        if(a[i] == b[i]){
            answer.push("D");
        }
        else if(a[i]==1 && b[i] ==2)
            answer.push("B")
        
        else if(a[i] ==2 && b[i] == 3)
            answer.push("B")
    
        else if(a[i] == 3 && b[i] == 1)
            answer.push("B")
        else{
            answer.push("A")
            }
        }
        
        return answer;
    }


function solution2(a, b){         
    let answer=[];
    for(let i=0;i<a.length;i++){
        if(a[i] == b[i]){
            answer.push("D");
        }
        else if(a[i]==1){
            if(b[i] ==2){
                print(isB=true)
            }
            else{
                print(isB=false)
            }
        }
        else if(a[i] ==2){
            if(b[i] == 3){
                print(isB=true)
            }
            else{
                print(isB=false)
            }
        }
        else{
            if(b[i] == 1){
                print(isB=true)
            }
            else{
                print(isB=false)
            }
        }
    }

    function print(isB){
        if(isB)
            answer.push("B")
        else
            answer.push("A")
    }
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
console.log(solution2(a, b));

/*
//조건: a[i] == b[i] == D
a[i] ==1 일때 b[i]가 2면 B 3이면 A
a[i] == 2 일때 b[i]가 3면 B 1이면 A
a[i] == 3 일때 b[i]가 1면 B 2이면 A 
*/