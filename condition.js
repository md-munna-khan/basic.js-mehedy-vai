/**
 * if (condition){
 * if true
 * } else {
 * if false
 * }
 */
 

// var isPlaying = true ;
// if( isPlaying === true ){
//     console.log('will go to outside')
// } else{
//     console.log('will not go to outside')
// }
// //  ternary syntax = condition ? if true : if false
// isPlaying === true ? console.log('will go to outside')  : console.log('will not go to outside');

// multiple condition

// var money = 10;
// var isRaining = false;
// var taxi = 15;
// if( isRaining === true && money >= taxi){
//     console.log( "will go to bazar")
// }else{
//     console.log("wil not go to outside")
// }

// if( isRaining === true || money >= taxi){
//     console.log( "will go to bazar")
// }else{
//     console.log("wil not go to outside")
// }




// else if multiple condition
// var money = 100;

// if(money >=100){
//     console.log('i eat biryani')
// } else if( money >= 30){
//     console.log( 'i eat mango juice')
// } else if (money >=10){
//     console.log( 'i eat badam')
// } else{
//     console.log('na kheye thakbo')
// }

// nested if else
var isRaining = false;
var haveUmbrella =false;
if( isRaining === true){
    if(haveUmbrella === true){
console.log('i will go outside i have my umbrella')
    } else{
        console.log('will not go out side cata nai')
    }
    
}
    else{
        console.log( 'i will  go outside ')
    }
