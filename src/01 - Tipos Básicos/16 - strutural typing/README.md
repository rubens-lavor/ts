# strutural typing

A tipagem estrutural é uma forma de **relacionar tipos com base apenas em seus membros**.

O sistema de tipo estrutural do TypeScript foi projetado com base em como o código JavaScript é normalmente escrito. Como o JavaScript usa amplamente objetos anônimos como expressões de função e literais de objeto, é muito mais natural representar os tipos de relacionamentos encontrados nas bibliotecas JavaScript com um sistema de tipo estrutural em vez de nominal.

## Código desenvolvido para exemplificar:

~~~typescript
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
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.
