class Conversation{
    id;
    name; 
    users;
    $txtName;
    $txtNoOfUsers;
    onClick;
    $container;

    constructor(id, name, users, onClick){
        this.id = id;
        this.name = name;
        this.users = users;

        this.$txtName = document.createElement('p');
        this.$txtName.innerHTML = name;

        this.$txtNoOfUsers = document.createElement('small');
        this.$txtNoOfUsers.innerHTML = this.users.length + "user(s)";
        this.$container = document.createElement("div"); 
        this.$container.classList.add('conversation-item');

        this.onClick = onClick;
    }

    setActive = (isActive) => {
        if(isActive == true){
            this.$container.classList.add('active')
        }
        else{
            this.$container.classList.remove('active');
        }
    };

    initRender = (container) => {
        this.$container.addEventListener('click', () =>{
            this.onClick(this);
        });
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtNoOfUsers);
        container.appendChild(this.$container);
    }
}

export default Conversation; 