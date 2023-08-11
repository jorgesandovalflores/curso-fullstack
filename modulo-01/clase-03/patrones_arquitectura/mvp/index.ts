// Modelo (Model)
class UserModel {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }
}

// Vista (View)
class UserView {
    renderUserDetails(name: string, email: string) {
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
    }
}

// Presentador (Presenter)
class UserPresenter {
    private model: UserModel;
    private view: UserView;

    constructor(model: UserModel, view: UserView) {
        this.model = model;
        this.view = view;
    }

    init() {
        const name = this.model.getName();
        const email = this.model.getEmail();
        this.view.renderUserDetails(name, email);
    }
}

// Creación de instancias
const user = new UserModel("John Doe", "johndoe@example.com");
const view = new UserView();
const presenter = new UserPresenter(user, view);
presenter.init();
