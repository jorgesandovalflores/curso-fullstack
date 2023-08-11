interface Logger {
    log(message: string): void;
}

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

abstract class LoggerFactory {
    abstract createLogger(): Logger;
}

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