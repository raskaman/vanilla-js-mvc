var app = (function(module) {
	module.model = (function() {
		
		function Note(noteBodyText) {
			this.noteBodyText = noteBodyText;
			this.liked = false;
		};

		return {
			Note: Note
		};
	}());
  return module;
}(app || {}));