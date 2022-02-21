function day7() {
    function solveQuadEquation(a = 0, b = 0, c = 0) {
        let discriminant = (b ** 2) - (4 * a * c)
        let root1 = 0
        let root2 = 0
        let ans = []
        if (discriminant > 0) {
            root1 = -b + Math.sqrt(b ** 2 - (4 * a * c)) / (2 * a)
            root2 = -b - Math.sqrt(b ** 2 - (4 * a * c)) / (2 * a)
        } else if (discriminant == 0) {
            root1 = root2 = -b / 2 * a
        } else {
            return null
        }

        ans.push(root1)
        ans.push(root2)
        return ans
    }
    console.log(solveQuadEquation(1, 4, 4))

    function printArray(arr) {
        arr.forEach(element => {
            console.log(element)
        });
    }
    printArray([0, 3, 6, 23])

    function showDateTime() {
        let day = new Date().getDate()
        let month = new Date().getMonth() + 1
        let year = new Date().getFullYear()
        let hour = new Date().getHours()
        let minute = new Date().getMinutes()

        day < 10 ? day = '0' + day : day
        month < 10 ? month = '0' + month : month
        hour < 10 ? hour = '0' + hour : hour
        minute < 10 ? minute = '0' + minute : minute

        console.log(`${day}/${month}/${year} ${hour}:${minute}`)
    }
    showDateTime()

    function sum() {
        let s = 0
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            s += element
        }
        return s
    }
    console.log(sum(1, 2, 100))

    function randomUserIp() {
        let ip = ''
        for (let index = 0; index < 4; index++) {
            ip += parseInt(Math.random() * 256) + '.'
        }

        return (ip.substring(0, ip.length - 1))
    }
    console.log(randomUserIp())

    function randomMacAddress() {
        let hex = '0123456789abcdef'
        let mcAdd = ''
        for (let index = 0; index < 6; index++) {
            mcAdd += hex.charAt(Math.floor(Math.random() * hex.length))
            mcAdd += hex.charAt(Math.floor(Math.random() * hex.length)) + ':'

        }
        return (mcAdd.substring(0, mcAdd.length - 1))
    }

    console.log(randomMacAddress())

    function randomHexaNumberGenerator() {
        let hex = '0123456789abcdef'
        let nHex = '#'

        for (let index = 0; index < 6; index++) {
            nHex += hex.charAt(Math.floor(Math.random() * hex.length))

        }
        return (nHex)
    }
    console.log(randomHexaNumberGenerator())

    function userIdGenerator() {
        let opt = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let id = ''
        for (let index = 0; index < 7; index++) {
            id += opt.charAt(Math.floor(Math.random() * opt.length))

        }

        return (id)
    }

    console.log(userIdGenerator())


    function userIdGeneratedByUser() {
        let opt = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let id = ''
        let l = prompt('Número de caracteres: ')
        let nId = prompt('Cuantas Ids quieres: ')
        for (let i = 0; i < nId; i++) {
            for (let index = 0; index < l; index++) {
                id += opt.charAt(Math.floor(Math.random() * opt.length))

            }
            console.log(id)
            id = ''
        }

    }
    userIdGeneratedByUser()

    function rgbColorGenerator() {
        let rgb = 'rgb('
        for (let index = 0; index < 2; index++) {
            rgb += Math.floor(Math.random() * 255) + ','
        }
        rgb += Math.floor(Math.random() * 255) + ')'
        return rgb
    }
    console.log(rgbColorGenerator())

    function arrayOfHexaColors(number) {
        let arr = []
        for (let index = 0; index < number; index++) {
            arr.push(randomHexaNumberGenerator())
        }

        return arr
    }
    console.log(arrayOfHexaColors(2))

}