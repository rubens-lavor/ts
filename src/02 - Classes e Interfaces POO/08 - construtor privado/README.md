# construtor privado

Uma classe com construtor privado não pode ser instanciada fora do corpo da classe e também não pode ser estendida.

## Código desenvolvido para exemplificar:

~~~typescript
// Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornnado instância já criada')
      return Database.database
    }
    console.log('Criando nova instância')
    Database.database = new Database(host, user, password)
    return Database.database
  }
}
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.
