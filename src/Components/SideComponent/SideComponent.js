import "./SideComponent.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TrendCompany from "../TrendCompany/TrendCompany";

const SideComponent = () =>{

// let array =  [0,1,2,3,4,5,6]


// let currentWeek=0;



// //for 29 days
// for(let i=0;i<=28;i++){
//     if(i<=0 && i>=6){
//         currentWeek=1;
//     }
//     else if(i<=7 && i>=13){
//         currentWeek=2;
//     }
//     else if(i<=14 && i>=20){
//         currentWeek=3;
//     }
//     else if(i<=21 && i>=27){
//         currentWeek=4;
//     }
//     else if(i<=28){
//         currentWeek=5;
//     }
// }


// //for 28 days
// for(let i=0;i<=27;i++){
//     if(i<=0 && i>=6){
//         currentWeek=1;
//     }
//     else if(i<=7 && i>=13){
//         currentWeek=2;
//     }
//     else if(i<=14 && i>=20){
//         currentWeek=3;
//     }
//     else if(i<=21 && i>=27){
//         currentWeek=4;
//     }
//     // else if(i<=28 && i>=29){
//     //     currentWeek=5;
//     // }
// }

// //for 30 days
// for(let i=0;i<=29;i++){
//     if(i<=0 && i>=6){
//         currentWeek=1;
//     }
//     else if(i<=7 && i>=13){
//         currentWeek=2;
//     }
//     else if(i<=14 && i>=20){
//         currentWeek=3;
//     }
//     else if(i<=21 && i>=27){
//         currentWeek=4;
//     }
//     else if(i<=28 && i>=29){
//         currentWeek=5;
//     }
// }

// //for 31 days
// for(let i=0;i<=30;i++){
//     if(i<=0 && i>=6){
//         currentWeek=1;
//     }
//     else if(i<=7 && i>=13){
//         currentWeek=2;
//     }
//     else if(i<=14 && i>=20){
//         currentWeek=3;
//     }
//     else if(i<=21 && i>=27){
//         currentWeek=4;
//     }
//     else if(i<=28 && i>=30){
//         currentWeek=5;
//     }
// }

// let remainingDayOFThatWeek = 0;
// let startingDate = 1;
// let weekCount=1;

// for(let i = 0 ; i<=6;i++){
//     if(startingDate && i==0){
//         remainingDayOFThatWeek=7
//     }
//     else if(startingDate && i==1){
//         remainingDayOFThatWeek=6
//     }
//     else if(startingDate && i==2){
//         remainingDayOFThatWeek=5
//     }
//     else if(startingDate && i==3){
//         remainingDayOFThatWeek=4
//     }
//     else if(startingDate && i==4){
//         remainingDayOFThatWeek=3
//     }
//     else if(startingDate && i==5){
//         remainingDayOFThatWeek=2
//     }
//     else if(startingDate && i==6){
//         remainingDayOFThatWeek=1
//     }
//     startingDate=startingDate+7;
//     weekCount++;
// }
// let totalMonthOfDays=28||29||30||31
// let days=1;
// if(days<=1 && days>=28){}
// if(days<=1 && days>=29){}
// if(days<=1 && days>=30){}
// if(days<=1 && days>=31){
//     for(let i = 0 ; i<=6;i++){
//         if(days && i==0){
//             remainingDayOFThatWeek=7
//         }
//         else if(days && i==1){
//             remainingDayOFThatWeek=6
//         }
//         else if(days && i==2){
//             remainingDayOFThatWeek=5
//         }
//         else if(days && i==3){
//             remainingDayOFThatWeek=4
//         }
//         else if(days && i==4){
//             remainingDayOFThatWeek=3
//         }
//         else if(days && i==5){
//             remainingDayOFThatWeek=2
//         }
//         else if(days && i==6){
//             remainingDayOFThatWeek=1
//         }
//         // startingDate=startingDate+7;
//         // weekCount++;
//     }

//     // startingDate=startingDate+7;
//     weekCount++;

//     days=days+7;
// }



    return(
       <div>
         <div className="calender">
                    <Calendar/>  
        </div>
        <TrendCompany/>
       </div>
    )
}

export default SideComponent;