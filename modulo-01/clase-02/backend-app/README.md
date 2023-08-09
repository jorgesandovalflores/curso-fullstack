project-root/
│
├── src/                      # Contiene el código fuente de la aplicación
│   ├── controllers/          # Controladores para manejar las solicitudes HTTP y las respuestas
│   │   ├── UserController.ts # Lógica para las rutas relacionadas con los usuarios
│   │   └── ...
│   │
│   ├── models/               # Definiciones de los modelos de datos de la aplicación
│   │   ├── User.ts           # Definición del modelo de usuario
│   │   └── ...
│   │
│   ├── routes/               # Definiciones de las rutas de la aplicación
│   │   ├── index.ts          # Archivo principal para configurar las rutas
│   │   └── ...
│   │
│   ├── services/             # Lógica de negocio y manipulación de datos
│   │   ├── UserService.ts    # Funciones para interactuar con los usuarios en la base de datos
│   │   └── ...
│   │
│   ├── app.ts                # Punto de entrada de la aplicación, configura Express y middleware
│   └── ...
│
├── node_modules/             # Dependencias del proyecto (generado automáticamente)
│
├── package.json              # Archivo de configuración de npm con las dependencias y scripts
├── tsconfig.json             # Configuración de TypeScript para el proyecto
├── package-lock.json         # Archivo de bloqueo de dependencias (generado automáticamente)
├── README.md                 # Documentación del proyecto
└── .gitignore                # Archivo que especifica qué archivos/directorios se deben ignorar en Git
