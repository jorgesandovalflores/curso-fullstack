// Comando (Command)
interface Command {
    execute(): void;
    undo(): void;
}

// Comando Concreto (Concrete Command)
class EmptyCommand implements Command {
    execute(): void {
        
    }
    undo(): void {
        
    }
}

class LightOnCommand implements Command {
    private light: Light = Light.toEmpty();

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

// Receptor
class Light {
    private isOn: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("Light is on.");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Light is off.");
    }

    public static toEmpty(): Light {
        return new Light()
    }
}

// Invoker
class RemoteControl {
    private command: Command = new EmptyCommand();

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}

// Uso del patrón Command
const light = new Light();
const lightOnCommand = new LightOnCommand(light);

const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);

remoteControl.pressButton(); // Salida: Light is on.
