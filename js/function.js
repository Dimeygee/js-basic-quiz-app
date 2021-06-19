window.addEventListener('load',loadPage)

function loadPage(){
    
    let start = document.querySelector('.start')
    let question = document.querySelector('.question')
    let wrapper = document.querySelector('#wrapper')
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    let optionsBtn = document.querySelectorAll('.options_container > button')
    let currentQues = document.querySelectorAll('.ques_num')
    let totalQues = document.querySelector('.total_ques')
    let result = document.querySelector('.result')
    let start_again = document.querySelector('.start_again')
    let total = document.querySelector('.total')
    let Score_box = document.querySelector('.scores')


    start.classList.add('fadein')

        

    start.addEventListener('click',startQuiz)

    const myQuestions = [
        {
            question:'Which one of these is a JavaScript package manager ?',
            answer:['npm','node','angular','React'],
            correct:'npm'
        },
        {
            question:'Which tool can you use to ensure code quality ?',
            answer:['Angular','Jquery','Require js','ESlint'],
            correct:'ESlint'
        },
        {
            question:'Which is not a JavaScript Framework ?',
            answer: ["Python Script", "JQuery","Django", "NodeJS"],
            correct:'Django'
        },
        {
            question:'Hyper Text Markup Language Stand For?',
            answer:["JavaScript", "XHTML","CSS", "HTML"],
            correct:'HTML'
        },
        {
            question:'"Which language is used for styling web pages?"',
            answer:["HTML", "JQuery", "CSS", "XML"],
            correct:'CSS'
        },
        {
            question:'"Which is used for Connect To Database?"',
            answer:["PHP", "HTML", "JS", "All"],
            correct:'PHP'
        },
    ]

        let index = 0
        let scores = 0
        let answers = []
        let selected = false

    function startQuiz(){
        

        start.classList.remove('fadein')
        setQuestion(index)
        
    }

    function setQuestion(index){
        currentQues.forEach(num => {
            num.innerText = index + 1
        })
        totalQues.innerText = myQuestions.length
        wrapper.style.display = 'block'
        question.classList.add('fadein')
        let options = myQuestions[index].answer
        question.innerText = myQuestions[index].question
        for(let i = 0; i < options.length; i++){
            optionsBtn[i].innerText = options[i]
            selectAnswer(optionsBtn[i])
        }
    }


    function selectAnswer(options){
       options.onclick = function(e){
           (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : ''
           e.target.classList.add('clicked')
           selected = true
           answers[index] = e.target.innerText
       } 
    }
    

    function popUpScores(){
        for(let i = 0; i < myQuestions.length; i++){
            if(myQuestions[i].correct == answers[i]){
                scores++
                result.innerText = scores
                total.innerText = myQuestions.length
                Score_box.style.display = 'block'
                wrapper.style.display = 'none'
            }
        }
        
    }


    next.addEventListener('click',nextQuestion)
    function nextQuestion(){
        if(index == myQuestions.length - 1 && selected){
            popUpScores()
        }else if(selected){
            index++
            setQuestion(index)
            if(document.querySelector('.clicked')){
                document.querySelector('.clicked').classList.remove('clicked')
                selected = false 
            }
        }
    }


    prev.addEventListener('click',prevQuestion)
    function prevQuestion(){
        if(index == 0){
           index = 0
        }else{
            index--
            setQuestion(index)
        }
    }

    start_again.onclick = function(){
        index = 0
        setQuestion(index)
		document.querySelector('.clicked').classList.remove('clicked')
        Score_box.style.display = 'none'
        selected = false
		answers = []
        scores = 0
    }
    
}




































