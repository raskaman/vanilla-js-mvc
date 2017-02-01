var app = app || {};

app.model = {};
app.view = {};
app.controller = {};

app.main  = (function() {  

  var elements = {
    noteField : document.querySelector('.write-note'),
    noteSubmit : document.querySelector('.submit-note'),
    noteList : document.querySelector('.notes'),
    noNotesFound : document.querySelector('.no-notes-found')
  };

  var notes = [];

  var attachEvents = function() {

    elements.noteSubmit.addEventListener('click', function(event) {
      event.preventDefault();
        var fieldValue = elements.noteField.value;
        var newNote = new app.model.Note(fieldValue);
        app.controller.note.save(newNote);
        new app.view.Note(newNote).init();
        elements.noteField.value = '';
    });
  };

  var addAsFirstChild = function(parent, child) {
    var parentNode = parent,
      childNode = child;
    if(parentNode.firstChild) {
      parentNode.insertBefore(child, parent.firstChild);
    } else {
      parentNode.appendChild(child);
    }
  };

  var initialRender = function() {
    notes = JSON.parse(localStorage.getItem('notes'));
    if(notes.length > 0) {
      var i = 0,
      len = notes.length;
      for(i; i < len; i += 1) {
        new app.view.Note(notes[i]).init();
      }
    
    } else {
      elements.noNotesFound.classList.remove('hidden'); // if no notes exist in localstorage, show the "you have no notes yer" message
    }
  };
  
  var init = function() {
    console.log('App init');
    attachEvents();
    initialRender();
  };
  
  return {
    init : init,
    notes : notes,
    addAsFirstChild : addAsFirstChild,
    elements : elements
  };

})();

window.addEventListener('DOMContentLoaded', app.main.init);