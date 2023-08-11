class DatabaseConnection {
    private static instance: DatabaseConnection;

    private constructor() {
        // Initialize database connection
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}