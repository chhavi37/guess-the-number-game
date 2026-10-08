    
    
    
        let minNum;
        let maxNum;
        let answer;
        const submit = document.getElementById("submit");
        const specify = document.getElementById("specify");
        let guess;
        let attempt = 0;
        const att = document.getElementById("att2");
        const submitguess = document.getElementById("submitguess");
        submit.onclick=function(){
            minNum = Number(document.getElementById("minNum").value);
            maxNum = Number(document.getElementById("maxNum").value);
            answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
        }
            
        
        submitguess.onclick=function(){
            const guess = Number(document.getElementById("guess").value);
            
            if(isNaN(guess)){
                specify.textContent="\nPlease enter Valid number.";
            }else if(guess<minNum||guess>maxNum){
                specify.textContent="\nplease guess only between the specified range :) ";
            }else{
                attempt++;
                att.textContent=attempt;
                if(guess<answer){
                    specify.textContent="\nToo Low! Try Again ;)";
                }else if(guess>answer){
                    specify.textContent="\nToo High! Try Again ;)";
                }else{
                    specify.textContent="\nBINGO! You got ittt!";
                    
                }


        }
    }
  
