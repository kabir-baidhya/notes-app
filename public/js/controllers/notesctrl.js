
NotesApp.controller('NotesCtrl', function ($scope, $http) {

	var apiBase = 'api/notes';

	//Dynamic Note List
	$scope.noteList = [];

	$http.get(apiBase).success(function(data) {
		$scope.noteList = data;
	});

	/** Initialization **/
	$scope.modalBox = {title: null, type: 'view'};
	$scope.activeNote = {'id': null, 'title': null, 'text': null, 'date': null };

	/** Functions **/
	// View note
	$scope.viewNote = function(noteId) {

		var noteItem = null;
		for(var i = 0; i < $scope.noteList.length; i++) {
			var item = $scope.noteList[i];

			if(item.id == noteId) {
				noteItem = item;
				break;
			}
		}
		
		$scope.activeNote = noteItem;

		$scope.modalBox.title = $scope.activeNote.title;
		$scope.modalBox.type = 'view';
	};

	// Edit note

	$scope.editNote = function() {
		$scope.modalBox.title = 'Edit Note';
		$scope.modalBox.type = 'edit';
		$scope.formData = {
			noteTitle: $scope.activeNote.title,
			noteText: $scope.activeNote.text
		};
	};

	$scope.editSave = function() {
		//commit the updated changes 
		var updatedTitle = $scope.formData.noteTitle;
		var updatedText = $scope.formData.noteText;

		$scope.activeNote.title = updatedTitle;
		$scope.activeNote.text = updatedText;
		$scope.activeNote.previewText = updatedText.length > 150 ? updatedText.substring(0, 150) + '...' : updatedText;

		$('#note-modal-box').modal('hide');
	};

	$scope.editCancel = function() {
		$scope.modalBox.title = $scope.activeNote.title;
		$scope.modalBox.type = 'view';
	}

	// Create note

	$scope.createNote = function() {
		$scope.modalBox.title = 'Add Note';
		$scope.modalBox.type = 'create';
		$scope.formData = {
			noteTitle: '',
			noteText: ''
		};
	};

	$scope.createSave = function() {
		//commit the updated changes 

		$http.post(apiBase, {
			title: $scope.formData.noteTitle,
			text: $scope.formData.noteText
		})
		.success(function(data, status) {

			if(data.success) {
				$scope.noteList.push(data.note);
				
			} else {
				//create note failed
			}
			
			$('#note-modal-box').modal('hide');
		});

	};

	$scope.createCancel = function() {
		$('#note-modal-box').modal('hide');
	};



});


