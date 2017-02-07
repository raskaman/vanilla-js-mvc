var app = app || {};

(function() {  

  app.controller.note = {
    save(note) {
      app.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(app.notes));
      return this;
    },
    
    like(note) {
      var indexToUpdate = app.notes.indexOf(note);

      note.liked = !note.liked;
      localStorage.setItem('notes', JSON.stringify(app.notes));
      return this;
    },

    remove(note) {
      app.notes.splice(app.notes.indexOf(note), 1); 
      localStorage.setItem('notes', JSON.stringify(app.notes));
      return this;
    }
  };

})();