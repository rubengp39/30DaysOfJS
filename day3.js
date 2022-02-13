let firstName = 'Rubén'
let lastName = 'García'
let country = 'Spain'
let city = 'Bilbao'
let age = 22
let isMarried = false
let year = 2022

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year))
console.log(typeof(10), typeof('10'))
console.log(typeof(parseInt('9.8')), typeof(10))

let ist = 3 < 4
let ist2 = 'ruben' === 'ruben'
let ist3 = 1+1 === 2
let ist4 = true === true

console.log(ist,ist2,ist3,ist4)

let isf = 4 < 3
let isf2 = 'carry' === 'run'
let isf3 = 1+1 == 3
let isf4 = true == false

console.log(isf,isf2,isf3,isf4)

console.log('5.-')
console.log(4>3) //true
console.log(4>=3) //true
console.log(4<3) //false
console.log(4<=3) //false
console.log(4==4) //true
console.log(4===4) //true
console.log(4!=4) //false
console.log(4!==4) //false
console.log(4!='4') //false
console.log(4!=='4') //true
console.log(4==='4') //false
console.log('python'.length != 'jargon'.length) //false

console.log('6.-')
console.log(4>3 && 10<12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4>3)) //false
console.log(!(4<3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4==='4')) // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))) // false

console.log('7.-')
let currYear = new Date().getFullYear()
let currMonth = new Date().getMonth() +1
let currDate = new Date()
let currDay = new Date().getDate()
let currHour = new Date().getHours()
let currMin = new Date().getMinutes()
let currMil = new Date().getTime()
console.log(currYear)
console.log(currMonth)
console.log(currDate)
console.log(currDay)
console.log(currHour)
console.log(currMin)
console.log(currMil)

//2.-

let base = prompt('Enter base: ')
let height = prompt('Enter height: ')
console.log(`The area of the triangle is ${base*height*0.5}`)

let name = prompt('Enter your name: ')
name.length > 7 ? console.log('It is long') : console.log('It is small')

firstName.length >= lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : console.log(`Your first name, ${firstName} is smaller than your family name, ${lastName}`)

//3.- 

let rYear = new Date().getFullYear()
let rMonth = new Date().getMonth() + 1
let rDay = new Date().getDate()
let rHour = new Date().getHours()
let rMinute = new Date().getMinutes()

rYear.length < 2 ? rYear = '0' + rYear : rYear
rMonth < 10 ? rMonth = '0' + rMonth : rMonth
rHour.length < 2 ? rHour = '0' + rHour : rHour
rMinute.length < 2 ? rMinute = '0' + rMinute : rMinute
console.log(`${rYear}-${rMonth}-${rDay} ${rHour}:${rMinute}`)
