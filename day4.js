function day4() {

    //E1.-
    let age = prompt("Enter your age: ")
    if (age >= 18) console.log("You are long enough to drive.")
    else console.log(`You are left with ${18-age} years to drive.`)

    let a = 4
    let b = 3
    if (a > b) console.log(`${a} is greater than ${b}`)
    else console.log(`${a} is less than ${b}`)

    a > b ?
        console.log(`${a} is greater than ${b}`) :
        console.log(`${a} is less than ${b}`)

    let number = prompt("Enter a number: ")
    number % 2 == 0 ?
        console.log(`${number} is an even number.`) :
        console.log(`${number} is an odd number.`)

    //E2.-
    let grade = prompt("Enter your grade: ")
    switch (true) {
        case grade <= 100 && grade >= 80:
            console.log('A')
            break
        case grade <= 79 && grade >= 70:
            console.log('B')
            break
        case grade <= 69 && grade >= 60:
            console.log('C')
            break
        case grade <= 59 && grade >= 50:
            console.log('D')
            break
        case grade <= 49 && grade >= 0:
            console.log('F')
            break
        default:
            console.log('It is not a grade.')
    }

    let month = prompt("Enter a month: ").toLowerCase()

    switch (month) {
        case 'september' || 'october' || 'november':
            console.log('Autumn')
            break
        case 'december' || 'january' || 'february':
            console.log('Winter')
            break
        case 'march' || 'april' || 'may':
            console.log('Spring')
            break
        case 'june' || 'july' || 'august':
            console.log('Summer')
            break
        default:
            console.log('It is not a month.')
    }

    let day = prompt("Enter a day: ").toLocaleLowerCase()
    day = day[0].toUpperCase() + day.substring(1)
    console.log(day)


}