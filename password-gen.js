const userInput = [4,6,8,1,2]

const indexSelectArrayLength = 10

let indexSelectArray =[[ 0, 3, 4, 2, 7, 1, 8, 5, 9, 6 ],
                       [ 4, 8, 0, 1, 9, 5, 7, 3, 2, 6 ],
                       [ 7, 1, 3, 0, 2, 8, 9, 4, 6, 5 ],
                       [ 7, 1, 9, 2, 5, 3, 8, 4, 6, 0 ],
                       [ 5, 2, 7, 4, 9, 8, 1, 3, 6, 0 ]]

let indexResultArray = []

function getIndexes() {
    for (let i = 0; i <= userInput.length -1; i++) {
            
        for (let j = 0; j <= indexSelectArrayLength -1; j++) {
            if (userInput[i] == indexSelectArray[i][j]) {
                //console.log(charsArray[j], j)
                indexResultArray.push(j)
            }     
        }   
    }
    return indexResultArray
}

getIndexes()
console.log(userInput)
console.log(indexResultArray)

let pwSelectArray = [ [ 'AnLy',
'C^7W',
'DB@t',
'14Tx',
'2zQQ',
'?nqP',
'i)i(',
'tk%r',
'caIi',
'Lh$%' ],
[ 'Ia!V',
'2T0t',
'hf4K',
'vszD',
'bHmp',
'n?!D',
'tTcb',
'E)v#',
'?pJa',
'oa!#' ],
[ 'ggV(',
'yJdM',
'1uNT',
'zOPW',
'E9QS',
'Dsib',
'$EQh',
'NhVt',
'Nk3a',
't^Bu' ],
[ 'yUDd',
'*m4v',
'%?n*',
'IiVW',
'pVKR',
'TCyU',
'QKIb',
'$b3H',
'@uRI',
'doCB' ],
[ '#XGT',
'HD6?',
'&kdq',
'ZhqU',
'DE43',
'OU0^',
'xt&5',
'2Luz',
'u1Dz',
'!U?i' ] ]

let passwordFinal = []
function generatePassword(pwArray, indexArray) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (j == indexArray[i]) {
                passwordFinal.push(pwArray[i][j]) 
            }    
        }  
    }
    passwordFinal = passwordFinal.join('')
    return passwordFinal
}

//console.log(pwSelectArray)
console.log(`YOUR PASSWORD IS: ${generatePassword(pwSelectArray, indexResultArray)}`)



// function randomString() {
//     for (let k = 0; k < 5; k++) {
//         let tempArray = []
//         for (let j = 0; j < 10; j++) {
//             var chars = "!@#$%^&*()?0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//             var string_length = 4;
//             var randomString = '';
//             for (var i=0; i<string_length; i++) {
//                 var rnum = Math.floor(Math.random() * chars.length);
//                 randomString += chars.substring(rnum,rnum+1);
//             }
//             tempArray.push(randomString)     
//         }
//         // console.log(tempArray)
//         pwSelectArray.push(tempArray)
//     }
//     return pwSelectArray
// }
// randomString()


// let numArray = [0,1,2,3,4,5,6,7,8,9]
// function randomizeArray(array) {
//     return array.sort(() => Math.random() - 0.5);
//   }

// console.log(randomizeArray(numArray))
// console.log(randomizeArray(numArray))
// console.log(randomizeArray(numArray))
// console.log(randomizeArray(numArray))
// console.log(randomizeArray(numArray))