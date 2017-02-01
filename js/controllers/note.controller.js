var app = app || {};

(function() {  

  app.controller.note = {
    save(note) {
      app.main.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(app.main.notes));
      return this;
    },
    
    like(note) {
      var indexToUpdate = app.main.notes.indexOf(note);

      note.liked = !note.liked;
      localStorage.setItem('notes', JSON.stringify(app.main.notes));
      return this;
    },

    remove(note) {
      app.main.notes.splice(app.main.notes.indexOf(note), 1); 
      localStorage.setItem('notes', JSON.stringify(app.main.notes));
      return this;
    }
  };

})();