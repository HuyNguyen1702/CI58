class createConversationModal {

    $backdrop;
    $fromCreate;
    $txtConversationName;
    $btnCreate;
    $btnClose;
    
    constructor(){

        this.$backdrop = document.createElement('div');
        this.$backdrop.style.height = "100vh";
        this.$backdrop.style.width = "100vw";
        // this.$backdrop.style.opacity = "0.5"; 
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.classList.add("centering");
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        this.$backdrop.style.display = "none";

        this.$fromCreate = document.createElement('form');
        this.$fromCreate.addEventListener("submit", this.onSubmit);

        this.$btnCreate = document.createElement('button');
        this.$btnCreate.type = "submit";
        this.$btnCreate.innerHTML = "Create";
        this.$btnCreate.classList.add('btn','btn-primary')

        this.$btnClose = document.createElement('button');
        this.$btnClose.type = "button";
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.classList.add('btn','btn-secondary');
        this.$btnClose.addEventListener("click", () => {
            this.setVisible(false);
        });

        this.$txtConversationName = document.createElement('input');
        this.$txtConversationName.type = 'text';
        this.$txtConversationName.placeholder = "Enter name conversation";
        this.$txtConversationName.classList.add('form-input','m-l-sm');
    }

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.$txtConversationName.value;
        const authUser = firebase.auth().currentUser;
        db.collection('conversations').add({
            name: name,
            creator: authUser.email,
            users: [authUser.email],
        })
        .then(()=>{
            this.setVisible(false);
        });
    }

    setVisible = (value) => {
        if(value === true){
            this.$backdrop.style.display= "flex";
        }else{
            this.$backdrop.style.display="none";
        }
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.style.padding = "20px";
        div.style.backgroundColor = "white";
        div.classList.add('d-flex','column','justify-center');
        // div.style.opacity = "1";

        const title = document.createElement("h3");
        title.innerHTML="Create new conversation";
        title.style.textAlign = "center";
        div.appendChild(title);

        div.appendChild(this.$txtConversationName);
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('d-flex','justify-between', 'm-t-sm')
        btnContainer.appendChild(this.$btnCreate);
        btnContainer.appendChild(this.$btnClose);

        div.appendChild(btnContainer);

        this.$fromCreate.appendChild(div);
        
        this.$backdrop.appendChild(this.$fromCreate);

        container.appendChild(this.$backdrop);
    }
}

export default createConversationModal;