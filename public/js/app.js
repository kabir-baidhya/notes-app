var NotesApp = angular.module('NotesApp', []);

NotesApp.controller('NotesCtrl', function ($scope) {

	//Static Note List
	$scope.noteList = [
	{
		'id': '1',
		'title': 'Note 1',
		'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco ' 
				+ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco ',
		'previewText': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad...',
		'date': 'July 30, 2014'
	},
	{
		'id': '2',
		'title': 'Note 2',
		'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidentid est laborum io bst wertf.'
				+ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco ',
		'previewText': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non...',
		'date': 'May 21, 2014'
	},
	{
		'id': '3',
		'title': 'Note 3',
		'text': 'Ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco bbdsd asdvd tesdgs awedw hufns'
				+ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco ',
		'previewText': 'Ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation...',
		'date': 'March 04, 2014'
	},
	{
		'id': '4',
		'title': 'Note 4',
		'text': 'Besgw fer wtrev dw consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco '
				+ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco ',
		'previewText': 'Besgw fer wtrev dw consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad...',
		'date': 'May 27, 2014'
	},
	{
		'id': '5',
		'title': 'Note 5',
		'text': 'Consectetur if  etwc bvd bsetwd, adipisicing iu elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco '
				+ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco ',
		'previewText': 'Consectetur if  etwc bvd bsetwd, adipisicing iu elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad...',
		'date': 'March 23, 2014'
	}
	];

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
		$scope.modalBox.title = noteItem.title;
	};

});