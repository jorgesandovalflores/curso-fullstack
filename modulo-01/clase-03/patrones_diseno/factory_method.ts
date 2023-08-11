// Inteface
interface Logger {
    log(message: string): void;
}

// Implementacion
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[Console] ${message}`);
    }
}
class FileLogger implements Logger {
    log(message: string): void {
        // Write log message to a file
    }
}

// Clase extendible Factory
abstract class LoggerFactory {
    abstract createLogger(): Logger;
}

// Implmentacines Factory
class ConsoleLoggerFactory extends LoggerFactory {
    createLogger(): Logger {
        return new ConsoleLogger();
    }
}

class FileLoggerFactory extends LoggerFactory {
    createLogger(): Logger {
        return new FileLogger();
    }
}