class Idea {
  constructor (title, body, id, qualityIndex) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.qualityArray = ['swill', 'plausible', 'genius'];
    this.qualityIndex = qualityIndex || 0;
  }

  saveToStorage() {
    var stringifyIdea = JSON.stringify(this);
    localStorage.setItem(this.id, stringifyIdea);
  }

  deleteFromStorage(id) {
    localStorage.removeItem(id);
  }

  updateQuality(buttonClass) { 
    if(buttonClass.value === "upvote-button"){
      this.qualityIndex++;
    console.log(this.qualityIndex);
    } else if(buttonClass.value === "downvote-button") {
      this.qualityIndex--;

      //Incrementing a “genius” idea or decrementing a 
      //“swill” idea should have no effect.
      //This update of the data model should occur in 
      //an updateQuality method that is defined in the Idea class.
    }
    
    this.saveToStorage();
    return this.qualityArray[this.qualityIndex];
  }

updateSelf(text, type) {
    if (type === 'title') {
      this.title = text;
    } 
    if (type === 'body') {
      this.body = text;
    }
    this.saveToStorage();
  }
};

