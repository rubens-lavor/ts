export class Carro {
  private readonly motor: Motor = new Motor()

  ligar(): void {
    this.motor.ligar()
  }

  acelerar(): void {
    this.motor.acelerar()
  }

  parar(): void {
    this.motor.parar()
  }

  desligar(): void {
    this.motor.desligar()
  }
}

export class Motor {
  ligar(): void {
    console.log('motor está ligado...')
  }

  acelerar(): void {
    console.log('motor está acelerando...')
  }

  parar(): void {
    console.log('motor está parado...')
  }

  desligar(): void {
    console.log('motor está desligado...')
  }
}

const carro = new Carro()
carro.acelerar()
