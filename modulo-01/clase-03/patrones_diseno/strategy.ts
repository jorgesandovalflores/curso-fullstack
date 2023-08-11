// Estrategia (Strategy)
interface PaymentStrategy {
    pay(amount: number): void;
}

// Estrategias Concretas (Concrete Strategies)
class EmptyPaymentStrategy implements PaymentStrategy {
    pay(amount: number = 0): void {
    }

}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

// Contexto
class ShoppingCart {
    private paymentStrategy: PaymentStrategy = new EmptyPaymentStrategy();

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    checkout(amount: number): void {
        if (this.paymentStrategy) {
            this.paymentStrategy.pay(amount);
        } else {
            console.log("No payment strategy set.");
        }
    }
}

// Uso del patrón Strategy
const shoppingCart = new ShoppingCart();

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

shoppingCart.setPaymentStrategy(creditCardPayment);
shoppingCart.checkout(100); // Salida: Paid $100 using Credit Card.

shoppingCart.setPaymentStrategy(payPalPayment);
shoppingCart.checkout(50); // Salida: Paid $50 using PayPal.
