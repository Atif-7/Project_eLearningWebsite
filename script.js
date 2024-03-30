$('#getStBtn').click(function () {
    $(this).css('display','none')
    $('#signup').css('display','block')
});
$('#lms').click(function () {
    $('#getStBtn').css('display','none')
    $('#login').css('display','block')
});
$('.showhideform').click(function () {
    $('#login').toggle()
    $('#signup').toggle()
});
$('#admin').click( function (){
    $('#adminform form').toggle()
})

$('#adminform').submit(function(e) {
    e.preventDefault();
    var errorMsg = "";
    var missingfields = "";

    if ($('#user').val() == "") {
        missingfields += "<p>User</p>";
    }
    if ($('#pass').val() == "") {
        missingfields += "<p>Password</p>";
    }

    if (missingfields != "") {
        errorMsg += "<p>The followings fields are missing</p>" + missingfields;
    }  
    if (errorMsg != "") {
        $('#errorMsg1').html('<div class="text-center alert alert-danger">'+errorMsg+'</div>')
    }else{
        if ($('#user').val() == 'atif' && $('#pass').val() == 'root') {
        window.location.assign('dashboard.html')
        }else{
            $('#errorMsg1').html('<div class="text-center alert alert-danger">invalid User or Password</div>')
        }
    }
})

$('#signup').submit(function(e) {
    e.preventDefault();

    var errorMsg = "";
    var missingfields = "";
    
    if ($('#fname').val() == "") {
        missingfields += "First Name";
    }
    if ($('#lname').val() == "") {
        missingfields += "<br> Last Name";
    }
    if ($('#city').val() == "") {
        missingfields += "<br> City";
    }
    if ($('#email').val() == "") {
        missingfields += "<br> Email";
    }
    if ($('#password').val() == "") {
        missingfields += "<br> Password";
    }
    if (missingfields != "") {
        errorMsg += "<p>The followings fields are missing</p>" + missingfields;
    }
    
    if (errorMsg != "") {
        $('#errorMsg').html('<div class="text-center alert alert-danger">'+errorMsg+'</div>')
    }
    else {
        window.location.assign('lms.html')
        $("#res").hide();
    }
})

$('#login').submit(function(e) {
    e.preventDefault();
    var errorMsg = "";
    var missingfields = "";

    if ($('#email2').val() == "") {
        missingfields += "<p>Email</p>";
    }
    if ($('#password2').val() == "") {
        missingfields += "<p>Password</p>";
    }
    if (missingfields != "") {
        errorMsg += "<p>The followings fields are missing</p>" + missingfields;
    }  
    if (errorMsg != "") {
        $('#errorMsg2').html('<div class="text-center alert alert-danger">'+errorMsg+'</div>')
    }
    else {
        window.location.assign('lms.html')
    }
})

// online assessment
document.getElementById('intro').innerHTML = '<h2>Exam</h2><h3>this is the online assessment feature of E-Learning website for my internship. there are some mcqs questions about web developement. hope you like this project. <br>-Atif ur Rehman- -Github(@atif-7)- -contact(ratif3610@gmail.com)-</h3><button style="width:7rem" id="start" class="Btn fs-2" onclick="Start()">Start</button>'
document.getElementById('box').style.display="none"

document.getElementById('start').onclick = function(){
    document.getElementById('intro').style.display="none";
    document.getElementById('box').style.display="block"
}
const questions = [
    {
        'que':"Which of the following is the markup language?",
        'a':"html",
        'b':"css",
        'c':"javascript",
        'd':"php",
        'correct':"a"
    },
    {
        'que':"What is the correct HTML for creating a hyperlink?",
        'a':"<a name='example.com'> example </a>",
        'b':"<a url='example.com'> example </a>",
        'c':"<a href='example.com'> example </a>",
        'd':"<a>example.com</a>",
        'correct':"c"
    },
    {
        'que':"Which keyword is used to declare variables in javascript?",
        'a':"string",
        'b':"var",
        'c':"$",
        'd':"variable",
        'correct':"b"
    },
    {
       'que':"Which technology is primarily responsible for the styling of web pages?",
        'a':"JavaScript",
        'b':"HTML",
        'c':"CSS",
        'd':"Python",
        'correct': "c" 
    },
    {
        'que':"Which of the following is not a back-end programming language commonly used in web development?",
        'a':"PHP",
        'b':"Ruby",
        'c':"Java",
        'd':"HTML",
        'correct':"d"
    }, 
    {
        'que':"Which of the following is used to store and query data in a tabular format in web development?",
        'a':"Database",
        'b':"API",
        'c':"JSON",
        'd':"XML",
        'correct':"a"
    },
    {
        'que':"Which JavaScript function is used to change the content of an HTML element?",
        'a':"modify()",
        'b':"change()",
        'c':"update()",
        'd':"innerHTML()",
        'correct':"d"
    },
    {
        'que':"Which CSS property is used to create rounded corners for an HTML element?",
        'a':"border-radius",
        'b':"corner-radius",
        'c':"rounded-corners",
        'd':"box-radius",
        'correct':"a"
    }
    
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0
const queBox = document.getElementById('quesBox')
const options = document.querySelectorAll('.option')
const startQuiz = () => {
    if (index === total) {
       return endQuiz()
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index+ 1}) ${data.que}`
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    }else{
        wrong++;
    }
    index++;
    startQuiz();
    return;
}
const getAnswer = () => {
    let answer;
    options.forEach(input => {
        if (input.checked) {
            answer = input.value
        }
    })
    return answer;
}
const reset = () => {
    options.forEach(input => {
        input.checked = false
    });
}
const endQuiz = () => {
    if (right >4) {
        document.getElementById('container').innerHTML = `
        <div class="result">
            <h2>Result</h2>
            <h3>thanks for playing</h3>
            <div>
                <h4 style='border:2px solid green; border-radius:3px; padding:3px'>your marks ${right}/${total}</h4>
            </div>
            <div>
                <img src="img/win.gif" alt="you_lose" class="img">
            </div>
            <div>
                <a href="online_assessment.html" class="Btn">Restart</a>
            </div>
        </div>
        `
    }else{
        document.getElementById('container').innerHTML = `
        <div class="result">
            <h2 class='merriweather-bold'>Result</h2>
            <h3>thanks for playing</h3>
            <div>
                <h4 style='border:2px solid red; border-radius:3px; padding:3px'>your marks ${right}/${total}</h4>
            </div>
            <div>
                <img src="img/lose.gif" alt="you_lose" class="img">
            </div>
            <div>
                <a href="online_assessment.html" class="Btn">Try Again</a>
            </div>
        </div>
        `
    }
}
startQuiz();