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

        this.$btnClose = document.createElement('button');
        this.$btnClose.type = "button";
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.addEventListener("click", () => {
            this.setVisible(false);
        });

        this.$txtConversationName = document.createElement('input');
        this.$txtConversationName.type = 'text';
        this.$txtConversationName.placeholder = "Enter name conversation";
    }

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.$txtConversationName.value;
        const authUser = firebase.auth().currentUser;
        db.collection('conversations').add({
            name: name,
            creator: authUser.email,
            user: [authUser.email],
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
        div.style.width = "500px";
        div.style.padding = "20px";
        div.style.backgroundColor = "white";
        // div.style.opacity = "1";

        const title = document.createElement("h3");
        title.innerHTML="Create new conversation";
        div.appendChild(title);

        this.$fromCreate.appendChild(this.$txtConversationName);
        this.$fromCreate.appendChild(this.$btnCreate);
        this.$fromCreate.appendChild(this.$btnClose);

        div.appendChild(this.$fromCreate);
        
        this.$backdrop.appendChild(div);

        container.appendChild(this.$backdrop);
    }
}

export default createConversationModal;