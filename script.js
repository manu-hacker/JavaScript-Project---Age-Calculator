const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let num = 29 ; 
    let today = new Date();
    let inputDate=new Date(document.getElementById
        ("date-input").value);
        let birthMonth,birthDate,birthYear;
        
        let birthDetails = {
            date:inputDate.getDate(),
            month:inputDate.getMonth()+1,
            year:inputDate.getFullYear()
         }
         console.log( typeof(birthDetails.date ));
         console.log(typeof(birthDetails.month));
         console.log(typeof(birthDetails.year));
         console.log(birthDetails);

         let currentYear = today.getFullYear();
         let currentMonth = today.getMonth()+1;
         let currentDate = today.getDate();
        leapCheck(currentYear);   
  
        if(
            birthDetails.year > currentYear ||
            (birthDetails.month > currentMonth && 
               birthDetails.year == currentMonth  ) ||
               (birthDetails.date > currentDate &&
                birthDetails.month == currentMonth
                                &&
                birthDetails.year == currentYear) 
   
        )  
        {
            alert("Not born yet");
            displayResult("...","...","...");
            return;
        }
            // if( birthDetails.date === NaN && birthDetails.month === 02   ){
            //     alert('error');
            // }

            


        if(  isNaN(birthDetails.date) ){
            displayResult("...","...","...");
            alert("please check your date");
            return;
        }
          
           birthYear = currentYear - birthDetails.year;
      
      if(currentMonth >= birthDetails.month){
          birthMonth = currentMonth - birthDetails.month;
      }
      else{
          birthYear--;
          birthMonth = 12 + currentMonth - birthDetails.month;
      }

      if(currentDate >= birthDetails.date){
          birthDate = currentDate - birthDetails.date;
      }
      else{
          birthMonth--; 
          let days = months  [currentMonth - 2 ];
          birthDate = days + currentDate - birthDetails.date;
          if(birthMonth < 0 ){
              birthMonth=11;
              birthYear--; 
          }
      }
     
      displayResult(birthDate,birthMonth,birthYear)
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}
function leapCheck(year){    
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 ==0))
    {
                months[1] = 29 ;
        }
        else{
            months[1]=28;
        }
}




