function day5() {
    //E1.-
    let aEmpty = []
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]

    console.log(webTechs.length)
    console.log(webTechs[0], webTechs[(webTechs.length - 1) / 2], webTechs[(webTechs.length - 1)])

    let mixedDataTypes = [
        'Hi',
        2, [1, 2, 3, 4],
        true,
        null,
        9.8
    ]
    console.log(mixedDataTypes.length)

    let itCompanies = [
        'Facebook',
        'Google',
        'Microsoft',
        'Apple',
        'IBM',
        'Oracle',
        'Amazon'
    ]
    console.log(itCompanies)
    console.log(itCompanies.length)
    console.log(itCompanies[0], itCompanies[(itCompanies.length - 1) / 2], itCompanies[itCompanies.length - 1])
    console.log(itCompanies.toString())
    console.log(itCompanies.toString().toUpperCase())
    console.log(itCompanies.toString() + ' are big IT companies.')

    let id = itCompanies.indexOf('Amazon')
    id != -1 ?
        console.log(itCompanies[id]) :
        console.log('Not found')

    itCompanies.sort()
    console.log(itCompanies)
    itCompanies.reverse()
    console.log(itCompanies)
    console.log(itCompanies.slice(0, 3))
    console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length - 1))
    console.log(itCompanies.slice((((itCompanies.length - 1) / 2) - 1), (itCompanies.length - 1) / 2))
    itCompanies.shift()
    console.log(itCompanies)
    itCompanies.pop()
    console.log(itCompanies)
    while (itCompanies[0] != null) {
        itCompanies.pop()
    }
    console.log(itCompanies)

    //E2.-
    console.log(countries)
    let text =
        'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    text = text.replaceAll('.', '')
    text = text.replaceAll(',', '')
    words = text.split(" ")
    console.log(words)
    console.log(words.length)

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift('Meat')
    shoppingCart.push('Sugar')
    shoppingCart.splice(3, 4)

    console.log(shoppingCart)
}