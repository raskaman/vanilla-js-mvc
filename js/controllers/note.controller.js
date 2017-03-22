var app = (function(module) {
  module.controller = (function() {
    note = {
      save: function(note) {
        app.notes.push(note);
        localStorage.setItem('notes', JSON.stringify(app.notes));
        return this;
      },
      
      like: function(note) {
        var indexToUpdate = app.notes.indexOf(note);

        note.liked = !note.liked;
        localStorage.setItem('notes', JSON.stringify(app.notes));
        return this;
      },

      remove: function(note) {
        app.notes.splice(app.notes.indexOf(note), 1); 
        localStorage.setItem('notes', JSON.stringify(app.notes));
        return this;
      }
    };
    return {
      note: note
    };
  }());
  return module;
}(app || {}));
