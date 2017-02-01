var app = app || {};

(function() {

  app.view.Note = function(note) {

      var index = app.main.notes.indexOf(note),
          that = this;

      this.render = function() {
        this.listItem = document.createElement('li');
        this.paragraph = document.createElement('p');
        this.actions = document.createElement('ul');
        this.removeButton = document.createElement('li');
        this.likeButton = document.createElement('li');

        this.listItem.classList.add('note');
        this.actions.classList.add('actions');
        this.removeButton.classList.add('remove' ,'icon-cancel');
        this.likeButton.classList.add('like' ,'icon-heart');

        if(note.liked === true)
        {
          this.likeButton.classList.add('liked');
        }

        this.paragraph.innerHTML = note.noteBodyText;
        this.actions.appendChild(this.removeButton);
        this.actions.appendChild(this.likeButton);
        this.listItem.appendChild(this.paragraph);
        this.listItem.appendChild(this.actions);

        app.main.addAsFirstChild(app.main.elements.noteList, this.listItem);

        app.main.elements.noNotesFound.classList.add('hidden');

        return this;     
      };

      this.like = function() {
        app.controller.note.like(note); // update the "liked" in our Model (data)
        that.likeButton.classList.toggle('liked'); // update the UI and show a red heart
      };

      this.remove = function() {
        app.main.elements.noteList.removeChild(that.listItem); // update the UI by removing that list item
        app.controller.note.remove(note); // update the data by calling the remove method from Model
        if(app.main.elements.noteList.childElementCount === 0) {
          app.main.elements.noNotesFound.classList.remove('hidden');  // Show the "you have no notes yet" message, if all the notes are deleted
        }
      };
      this.attachEvents = function() {
        this.likeButton.addEventListener('click', this.like);
        this.removeButton.addEventListener('click', this.remove);
      };
      
      this.init = function() {
        this.render();
        this.attachEvents();
        return this;
      };

    };

  })();