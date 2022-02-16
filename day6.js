function day6() {
    for (let i = 0; i <= 10; i++) {
        console.log(i)
    }

    let a = 0
    while (a <= 10) {
        console.log(a)
        a++
    }
    let b = 0
    do {
        console.log(b)
        b++
    } while (b < 11)

    let odd = 0
    let even = 0
    for (let index = 0; index < 101; index++) {
        if (index % 2 == 0) even += index
        else odd += index
    }
    let arr = [odd, even]
    console.log(arr)

    let arr2 = []
    for (let i = 0; i < 5; i++) {
        arr2.push(Math.random() * 10)
    }
    console.log(arr2)
    let capCountries = []
    countries.forEach(element => {
        capCountries.push(element.toUpperCase())
    });
    console.log(capCountries)

    //E3.-
    let nCountries = countries
    let sortedCountries = nCountries.sort()
    let sortedWebTechs = webTechs.sort()
    let sortedMernStack = mernStack.sort()
    let land = []
    sortedCountries.forEach(element => {
        if (element.includes('land'))
            land.push(element)
    });
    let max = ''
    sortedCountries.forEach(element => {
        if (max.length < element.length)
            max = element
    });

    console.log(max)

    let four = []
    sortedCountries.forEach(element => {
        if (element.length == 4)
            four.push(element)
    })

    console.log(four)

    sortedCountries = sortedCountries.reverse()
    let capRev = []
    sortedCountries.forEach(element => {
        capRev.push(element.toUpperCase())
    });
    console.log(capRev)
}