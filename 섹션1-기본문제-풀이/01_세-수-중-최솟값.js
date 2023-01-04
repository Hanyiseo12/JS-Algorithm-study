
function solution(a, b, c){
            let answer = 0;
               if(a>b){
                 answer = b;
                 if(answer>c)
                   answer= c; 
                   }
                else{
                  answer = a;
                  if(answer>c)
                    answer = c;
                }
          return answer;
              }
   
               
            console.log(solution(4, 5, 3));
  