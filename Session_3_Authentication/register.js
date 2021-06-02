class Register { 
    $txtEmail;
    $txtDisplayName;
    $txtPassword;
    $txtConfirmPassword;
    $formRegister;
    $btnSubmit;
    $errorMessage;

    constructor(){

        this.$txtEmail=document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter email ";

        this.$txtDisplayName=document.createElement("input");
        this.$txtDisplayName.type = "text";
        this.$txtDisplayName.placeholder = "Enter Display Name";

        this.$txtPassword=document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter Password";

        this.$txtConfirmPassword=document.createElement("input");
        this.$txtConfirmPassword.type = "password";
        this.$txtConfirmPassword.placeholder = "Enter Password";

        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener('submit',this.handleSubmit);

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.innerHTML = "Register";
        this.$btnSubmit.type = "submit";

        this.$errorMessage = document.createElement("p");
        this.$errorMessage.classList.add("error-message");


    }

    handleSubmit = (event) => {

        event.preventDefault();
        const email = this.$txtEmail.value;
        const displayName = this.$txtDisplayName.value;
        const password = this.$txtPassword.value;
        const confirmPassword = this.$txtConfirmPassword.value;

        if(displayName === ""){
            this.setErrorMessage("Display name cannot be empty !");
            return;
        }
        if(password === ""){
            this.setErrorMessage("Pass cannot be empty !");
            return;
        }
        if(confirmPassword === ""){
            this.setErrorMessage("Confirm password cannot be empty");
            return;
        }
        if(confirmPassword !== password){
            this.setErrorMessage("Password and Confirm Password are not matched !");
            return;
        }
        this.setErrorMessage("");

        firebase.auth().createUserWithEmailAndPassword(email, password).then((UserCredential) => {
            fisebase.auth().currentUser.updateProfile({
                displayName: displayName
            })
            firebase.auth().currentUser.sendEmailVerification();
        });

    };

    setErrorMessage = (content) => {
        this.$errorMessage.innerHTML = content;
        if(content !== ''){
            this.$errorMessage.style.display = "block";
        }else{
            this.$errorMessage.style.display = "none";
        }
    }

    initRender = (container) => {

        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex" ,"flex-column","centering");
        const title = document.createElement("h2");
        title.innerHTML = "Create Your Account";

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtDisplayName);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$txtConfirmPassword);
        flexContainer.appendChild(this.$btnSubmit);

        this.$formRegister.appendChild(flexContainer);
        container.appendChild(this.$formRegister);

    };
}

export default Register;