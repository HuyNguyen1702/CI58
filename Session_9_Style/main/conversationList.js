import Conversation from './conversation.js';
import createConversationModal from './createConversationModal.js';

class ConversationList {
    $btnCreateConversation;
    createConversationModal;

    conversationList;

    $conversationListContainer;

    activeConversation;
    onChangeActiveConversation;

    constructor(onChangeActiveConversation){
        this.$btnCreateConversation = document.createElement("button");
        this.$btnCreateConversation.innerHTML = "New Conversation";
        this.$btnCreateConversation.addEventListener('click', this.openCreateModal);
        this.$btnCreateConversation.classList.add('btn','btn-secondary','m-b-sm','m-t-sm');

        this.createConversationModal = new createConversationModal();
        this.setUpConversationListener();

        this.conversationList = [];

        this.$conversationListContainer = document.createElement('div');

        this.onChangeActiveConversation = onChangeActiveConversation;
    }

    openCreateModal = () => {
        this.createConversationModal.setVisible(true);
    }

    setUpConversationListener = () => {
        db.collection('conversations')
        .where('users','array-contains',firebase.auth().currentUser.email)
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change)=>{
                if(change.type == "added"){
                const conversation = new Conversation(
                    change.doc.id, 
                    change.doc.data().name, 
                    change.doc.data().users,
                    (conversation) => {
                        this.onChangeActiveConversation(conversation);
                    } 
                    );
            this.conversationList.push(conversation);
            conversation.initRender(this.$conversationListContainer);
                }
                if(change.type == "modified"){
                    const conversation = this.conversationList.find(item => {
                        return item.id = change.doc.id
                    })
                    conversation.updateData(change.doc.data());
                }
        });
        })
    };

    setActiveConversation = (conversation) => {
        if(this.activeConversation){
            this.activeConversation.setActive(false);
        }
        this.activeConversation = conversation;
        this.activeConversation.setActive(true);
    }

    initRender = (container)=> {
        const div = document.createElement('div');
        div.classList.add('overflow-y');
        div.style.width = "300px";
        div.style.border = "1px solid #ececec";
        div.style.backgroundColor = "#fafafa";
        div.appendChild(this.$btnCreateConversation);
        div.appendChild(this.$conversationListContainer);
        this.createConversationModal.initRender(div);


        container.appendChild(div);
    };

}

export default ConversationList;