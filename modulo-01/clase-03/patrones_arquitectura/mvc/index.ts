// Definición del Modelo
class UsuarioModel {
    private nombre: string = "";
    private correo: string = "";
  
    constructor(nombre: string, correo: string) {
      this.nombre = nombre;
      this.correo = correo;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getCorreo(): string {
      return this.correo;
    }

    public static toEmpty(): UsuarioModel {
        return new UsuarioModel("", "")
    }
  }
  
  // Definición de la Vista
  class UsuarioView {
    mostrarDetalles(nombre: string, correo: string): void {
      console.log(`Nombre: ${nombre}`);
      console.log(`Correo: ${correo}`);
    }

    public static toEmpty(): UsuarioView {
        return new UsuarioView()
    }
  }
  
  // Definición del Controlador
  class UsuarioController {
    private model: UsuarioModel = UsuarioModel.toEmpty();
    private view: UsuarioView = UsuarioView.toEmpty();
  
    constructor(model: UsuarioModel, view: UsuarioView) {
      this.model = model;
      this.view = view;
    }
  
    mostrarDetallesUsuario(): void {
      const nombre = this.model.getNombre();
      const correo = this.model.getCorreo();
      this.view.mostrarDetalles(nombre, correo);
    }
  }
  
  // Uso del patrón MVC
  const usuarioModel = new UsuarioModel("Juan Pérez", "juan@example.com");
  const usuarioView = new UsuarioView();
  const usuarioController = new UsuarioController(usuarioModel, usuarioView);
  
  usuarioController.mostrarDetallesUsuario();
  