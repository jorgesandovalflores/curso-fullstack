// Modelo (Model)
class User {
    constructor(public id: number, public name: string) {}
  }
  
  // Vista (View)
  class UserView {
    render(userViewModel: UserViewModel): void {
      console.log(`ID: ${userViewModel.id}, Name: ${userViewModel.name}`);
    }
  }
  
  // Modelo de Vista (ViewModel)
  class UserViewModel {
    private _user: User;
  
    constructor(user: User) {
      this._user = user;
    }
  
    get id(): number {
      return this._user.id;
    }
  
    get name(): string {
      return this._user.name;
    }
  }
  
  // Controlador (Controller)
  class UserController {
    private _user: User;
    private _userViewModel: UserViewModel;
    private _userView: UserView;
  
    constructor(id: number, name: string) {
      this._user = new User(id, name);
      this._userViewModel = new UserViewModel(this._user);
      this._userView = new UserView();
    }
  
    initializeView(): void {
      this._userView.render(this._userViewModel);
    }
  }
  
  // Uso
  const userController = new UserController(1, "John Doe");
  userController.initializeView();
  