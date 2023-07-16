function possibleLove(nameOfFirst, nameOfSecond){
 
    var nameOfFirst = prompt("What is your name ?");
    var nameOfSecond = prompt("What is your partner name ?");
    
    var n = Math.random();
    n = (n * 100) + 1 ;
    n = Math.floor(n);
        if( n <= 50){
          alert("You and your partner have %"+ n + " possible Love matches .This is a bad matches");  
        }
        if(n > 50 && n <= 70){
            alert("You and your partner have %"+ n + " possible Love matches . This a middle matches");
        }
        if(n >70){
            alert("You and your partner have %"+ n + " possible Love matches . You are good couple , keep going :)");
        }    
        
    }
     possibleLove();
     
