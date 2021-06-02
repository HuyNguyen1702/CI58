import ConversationList from './main/conversationList.js';
import Title from './main/title.js';
import Composer from './main/composer.js';
import MessageList from './main/messageList.js'
import ConversationInfo from './main/conversationInfo.js'
class Main {

    conversationList;
    title;
    composer;
    messageList;
    conversationInfo;
    activeConversation;

    constructor(){
        this.conversationList = new ConversationList((conversation)=>{
            this.setActiveConversation(conversation);
        });
        this.title = new Title('',0);
        this.composer = new Composer();
        this.messageList = new MessageList();
        this.conversationInfo = new ConversationInfo();
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add("d-flex");
        div.style.height = "100vh";

        const content = document.createElement('div');
        content.classList.add("item", "grow-1", 'd-flex', 'column');
        this.title.initRender(content);

        const div2 = document.createElement('div');
        div2.classList.add('item','grow-1','d-flex');

        content.appendChild(div2);



        const div3 = document.createElement('div');
        div3.classList.add('grow-1','item','d-flex','column');

        const messageList = document.createElement("div");
        messageList.classList.add('grow-1');


        
        this.conversationList.initRender(div);
        div.appendChild(content);

        this.messageList.initRender(div3);
        this.composer.initRender(div3);
        
        div2.appendChild(div3);
        this.conversationInfo.initRender(div2);

        container.appendChild(div);
    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.conversationList.setActiveConversation(conversation);
        this.title.setActiveConversation(conversation);
        this.composer.setActiveConversation(conversation);
        this.messageList.setActiveConversation(conversation);
    };


}
export default Main;

