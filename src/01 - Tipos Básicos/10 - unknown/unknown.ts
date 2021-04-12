let x: unknown

x = 20
x = 30
x = '10'

const y = 300

if (typeof x === 'number') console.log(x + y)

// unknown é um any mais seguro
