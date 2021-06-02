class Composer {
    $form 
    $txtMessage
    $btnSend

    activeConversation

    constructor(){
        this.$form = document.createElement('form')
        this.$form.addEventListener('submit', this.onSendMessage)
        
        this.$txtMessage = document.createElement('input')
        this.$txtMessage.type = 'text'
        this.$txtMessage.classList.add('grow-1');
        this.$txtMessage.placeholder = 'Pls be nice in the chat ...'

        this.$btnSend = document.createElement("button")
        this.$btnSend.type = 'submit'
        this.$btnSend.innerHTML = "Send"

    }

    setActiveConversation(conversation){
        this.activeConversation = conversation;
    }


    onSendMessage = (event) => {
        event.preventDefault();
        // console.log('content', this.$txtMessage.value);
        // console.log('authUser', firebase.auth().currentUser)
        // console.log('activeConversation', this.activeConversation)
        db.collection('messages').add({
            content: this.$txtMessage.value,
            sender : firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
            sentAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        }

    initRender = (container) => {

        const div = document.createElement('div');
        div.classList.add('d-flex', 'item');
        div.appendChild(this.$txtMessage);
        div.appendChild(this.$btnSend);

        this.$form.appendChild(div);
        
        container.appendChild(this.$form);
    }
}

export default Composer;