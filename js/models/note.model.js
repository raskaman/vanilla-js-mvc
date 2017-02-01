var app = app || {};

(function() {

	app.model.Note = function(noteBodyText) {
      this.noteBodyText = noteBodyText;
      this.liked = false;
  };

})();