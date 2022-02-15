function day2() {
    // EX1
    let challenge = '30 Days Of JavaScript'
    console.log(challenge)
    console.log(challenge.length)
    console.log(challenge.toUpperCase())
    console.log(challenge.toLowerCase())
    console.log(challenge.substring(0, 2))
    console.log(challenge.substring(3))
    console.log(challenge.includes("Script"))
    console.log(challenge.split())
    console.log(challenge.split(" "))

    let emp = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
    console.log(emp.split(", "))
    console.log(challenge.replace("JavaScript", "Python"))
    console.log(challenge.charAt(15))
    console.log(challenge.charCodeAt("J"))
    console.log(challenge.indexOf("a"))
    console.log(challenge.lastIndexOf("a"))
    let bec = "You cannot end a sentence with because because because is a conjunction"
    console.log(bec.indexOf("because"))
    console.log(bec.lastIndexOf("because"))
    console.log(bec.search("because"))
    let err = " 30 Days Of JavaScript "
    console.log(err.trim())
    console.log(challenge.startsWith("30 Days Of JavaScript"))
    console.log(challenge.endsWith("30 Days Of JavaScript"))
    console.log(challenge.match("a"))

    let str = '30 Days of'
    console.log(str.concat(' ', 'JavaScript'))
    console.log(challenge.repeat(2))

    // EX2
    console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
    by John Holmes teaches us to help one another.")
    console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same\
    -- with charity you give love, so don't just give money but reach out your hand instead.")

    let s10 = '10'
    let n10 = 10
    console.log(typeof(s10), typeof(n10))
    s10 = +s10
    console.log(typeof(s10), typeof(n10))

    console.log(parseFloat(Math.round('9.8')))
    console.log('python'.search('on'), 'jargon'.search('on'))
    console.log('I hope this course is not full of jargon'.search('jargon'))
    console.log(Math.random() * 101)
    console.log(Math.random() * 51 + 50)
    console.log(Math.random() * 256)

    console.log('JavaScript' [parseInt(Math.random() * 9)])

    console.log('1\t1\t1\t1\t1\n\
    2\t1\t2\t4\t8\n\
    3\t1\t3\t9\t27\n\
    4\t1\t4\t16\t64\n\
    5\t1\t5\t25\t125')

    console.log(bec.substring(bec.indexOf('because'), bec.lastIndexOf('is')))

    // EX3
    let loveS = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
    let love = /love/g
    console.log(loveS.match(love))
    console.log(bec.match(/because/g))

    let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    const eChars = /\%|\$|\#|\&|\@|\;|\!/g

    sentence = sentence.replace(eChars, "")

    console.log(sentence)

    let s = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

    let s1 = +s.substring(s.search('5'), s.search('euro'))
    let s2 = +s.substring(s.search('1'), s.search('euro annual'))
    let s3 = +s.substring(s.search('15'), s.search('euro online'))
    console.log(s1 * 12 + s2 + s3 * 12)
}