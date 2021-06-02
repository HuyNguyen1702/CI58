import ConversationList from './main/conversationList.js';
class Main {

    conversationList

    constructor(){
        this.conversationList = new ConversationList();
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add("d-flex");
        div.style.height = "100vh";

        const content = document.createElement('div');
        content.classList.add("item", "grow-1");
        content.innerHTML= "Content";

        this.conversationList.initRender(div);
        div.appendChild(content);
        
        container.appendChild(div);
    };


}
export default Main;