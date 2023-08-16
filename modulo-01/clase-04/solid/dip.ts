interface ILogger {
    log(message: string): void;
  }
  
  class ConsoleLogger implements ILogger {
    log(message: string): void {
      console.log(message);
    }
  }
  
  class EmailLogger implements ILogger {
    log(message: string): void {
      // Lógica para enviar un correo electrónico con el mensaje de registro
    }
  }
  
  class App {
    private logger: ILogger;
  
    constructor(logger: ILogger) {
      this.logger = logger;
    }
  
    doSomething(): void {
      // Hacer algo en la aplicación y luego registrar usando el logger
      this.logger.log("Se realizó una acción importante.");
    }
  }
  
  // Ahora, la clase App depende de una abstracción (ILogger) en lugar de una implementación concreta.
  // Esto permite cambiar fácilmente el comportamiento de registro sin cambiar App.
  