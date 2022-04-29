const promptBtn = document.getElementById('prompt-btn');

promptBtn.addEventListener('click', () => {
   document.getElementById('prompt-popup').classList.toggle('hidden')
})

// UPD: a counter doesn't exist anymore
// function setCompletedRequests(req) {
//    document.getElementById('completedRequests').innerText = `${req}/10000`
// }

export {promptBtn}