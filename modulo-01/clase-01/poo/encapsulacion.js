/* 
4. Encapsulación:
*/

class CuentaBancaria {
    constructor(saldoInicial) {
        let saldo = saldoInicial;
      
        this.depositar = monto => {
            saldo += monto;
            console.log(`Depósito de ${monto} realizado. Saldo actual: ${saldo}`);
        };
      
        this.obtenerSaldo = () => {
            return saldo;
        };
    }
}
  
const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(700);  // Salida: Depósito de 500 realizado. Saldo actual: 1500
console.log(`Saldo final: ${miCuenta.obtenerSaldo()}`);  // Salida: Saldo final: 1500

/*
En este ejemplo, la variable saldo está encapsulada dentro de la clase CuentaBancaria, 
y solo se puede acceder a través de los métodos públicos depositar y obtenerSaldo. 
Esto oculta la implementación interna y protege los datos sensibles.
*/