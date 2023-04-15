let messageForm = document.getElementById('messageForm');
let container = document.getElementById('messages-body');
let banner = document.querySelector('.banner');


const makePostRequest = async (data, endpoint, callback) => {
	const sent = await fetch(endpoint, {
		method: 'POST',
        headers: {
        	'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
    	const response = await sent.json()
        callback(response)
        console.log(response)
    } catch (error) {
        console.log(error)
        callback(error)
    }
}


messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    container.style.display="block";
    banner.style.display="none";
    document.getElementById('new-chat').style.display="block";
    let message = document.getElementById('message').value;
    let me = document.createElement('li');
    me.setAttribute('class', 'mychat');
    me.textContent = message;
    container.appendChild(me)
    messageForm.reset();
    
    let data = {
        message, 
        key: "288101"
    }
    
    makePostRequest(data, 'https://kei.lowkeydevs.repl.co/api/gptAPI', (res) => {
      let her = document.createElement('li');
      her.setAttribute('class', 'herchat');
      her.textContent = res.response;
      container.appendChild(her)
    })    
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  let msg = document.getElementById('message');
  msg.value = transcript;
}

document.getElementById('voice').addEventListener('click', () => {
  recognition.start();
})

document.getElementById('menuBtn').addEventListener('click', () => {
    let menu = document.getElementById('menu');
    menu.style.display="block"
    
})
document.getElementById('menu-close').addEventListener('click', () => {
    let menu = document.getElementById('menu');
    menu.style.display="none"
})


document.onkeydown = function(e) {
  if (event.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }

}

