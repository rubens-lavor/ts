type User = { username: string; password: string }
type VerifyUserFn = (user: User, sentValue: User) => boolean

const verifyUserFn: VerifyUserFn = (user, sentvalue) => {
  return (
    user.username === sentvalue.username && user.password === sentvalue.password
  )
}

const bdUser = { username: 'joão', password: '123' }
const sentUser = { username: 'joão', password: '123' }

const loggedIn = verifyUserFn(bdUser, sentUser)

console.log(loggedIn)
