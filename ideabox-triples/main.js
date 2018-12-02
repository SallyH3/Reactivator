var saveButton = document.querySelector('.save-button');

// -- event listeners -- //

saveButton.addEventListener('click', createNewIdea); 

var cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', delegateEvent);

cardContainer.addEventListener('keyup', saveOnReturnPress);

// cardContainer.addEventListener('keyup', function(e) {
//  if (e.keyCode === 13) {
//     saveOnReturnPress(e);


// -- functions -- //

function saveOnReturnPress(e) {
  var ideaTitle = document.getElementById('title-input');
  var ideaBody = document.getElementById('body-input');
  var ideaObject = new Idea(ideaTitle.value, ideaBody.value);
    if(e.keyCode === 13) {
    if (e.target.className === 'card-title') {
    ideaObject.updateSelf(e.target.innerText, 'title');
    }
    if (e.target.className === 'card-body') {
    ideaObject.updateSelf(e.target.innerText, 'body');
    }
    ideaObject.updateSelf(); 
  }
};
// ^ will now save to storage on return key after edit 
    //however, creates 2 new separate cards for title edit
    //and for body edit instead of displaying edits on 
    //1 card

function createNewIdea(e) {
  e.preventDefault();
  var ideaTitle = document.getElementById('title-input').value;
  var ideaBody = document.getElementById('body-input').value;
  var ideaObject = new Idea(ideaTitle, ideaBody);
  ideaObject.saveToStorage();
  createCard(ideaObject);
}

function onPageLoadLocalStorage() {
  var keyArray = Object.keys(localStorage);
  keyArray.forEach(function(key){
  var getIdea = localStorage.getItem(key);
  var parsedIdea = JSON.parse(getIdea);
  var ideaObject = new Idea(parsedIdea.title, parsedIdea.body, 
    parsedIdea.id, parsedIdea.qualityIndex);
  createCard(ideaObject); 
});
}

onPageLoadLocalStorage();

function createCard(ideaObject) {
  var card = document.createElement('article');
  card.className = 'idea-card';
  var cardContainer = document.querySelector('.card-container');
  card.innerHTML = 
  `<div id=${ideaObject.id} class="card-wrapper">
      <h2 contenteditable=true class="card-title">
      ${ideaObject.title}
      </h2>
      <article contenteditable=true class="card-body">
      ${ideaObject.body}
      </article>
      <hr>
      <footer class="idea-card-footer"> 
        <img class="downvote-button" src="downvote.svg">
        <img class="upvote-button" src="upvote.svg">
        Quality: ${ideaObject.qualityArray[ideaObject.qualityIndex]}
        <img class="delete-button" src="delete.svg">
      </footer> 
  </div>`     
  cardContainer.prepend(card);
}

function delegateEvent(e) {
   if(event.target.classList.contains("delete-button")) {
    var storageItem = localStorage.getItem(event.target.parentNode.parentNode.id);
    var parsedItem = JSON.parse(storageItem);
    var ideaObject = new Idea(parsedItem.title, parsedItem.body, parsedItem.id, parsedItem.qualityIndex);
    ideaObject.deleteFromStorage(ideaObject.id);
    event.target.parentNode.parentNode.parentNode.remove();
  } else if (event.target.classList.contains("upvote-button") || event.target.classList.contains("downvote-button")) {
    var storageItem = localStorage.getItem(event.target.parentNode.parentNode.id);
    var parsedItem = JSON.parse(storageItem);
    localStorage.removeItem(event.target.parentNode.parentNode.id);
    var ideaObject = new Idea(parsedItem.title, parsedItem.body, parsedItem.id, parsedItem.qualityIndex);
    ideaObject.updateQuality(event.target.classList);
  } else {
    return
  }
}