async function load(){
    const conn = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
    const data = await conn.json();
    show(data);
}
load();
function show(data){
    for(let i = 0 ; i < data.results.length; i++){
        let diem = 0;
        let question = data.results[i].question;  
        let answer = data.results[i].correct_answer;
        let input = document.createElement('input');
        let btn = document.createElement('button');
        btn.innerHTML="Submit";
        const main = document.getElementById('main');
        main.insertAdjacentHTML('beforeend',`<p><b>Question : ${question}</b></p><p>Answer : ${answer}</p>`);
        main.appendChild(input);
        main.appendChild(btn);  
        
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            if(input.value == answer){
                diem += 10;
                alert("Tra loi dung duoc 10 diem ! " + diem);
            }else{
                alert("Tra loi sai 0 diem");
            }
        })
        
    }
}


