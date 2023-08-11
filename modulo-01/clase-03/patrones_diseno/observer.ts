// Sujeto (Subject)
class WeatherStation {
    private temperature: number = 0;
    private observers: Observer[] = [];

    setTemperature(temp: number): void {
        this.temperature = temp;
        this.notifyObservers();
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

// Observador (Observer)
interface Observer {
    update(temperature: number): void;
}

// Observador Concreto (Concrete Observer)
class TemperatureDisplay implements Observer {
    update(temperature: number): void {
        console.log(`Temperature Display: ${temperature}°C`);
    }
}

// Uso del patrón Observer
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();

weatherStation.addObserver(tempDisplay);

weatherStation.setTemperature(25); // Salida: Temperature Display: 25°C
