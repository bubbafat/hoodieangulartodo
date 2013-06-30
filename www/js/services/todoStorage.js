/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function () {
	var STORAGE_ID = 'todos-angularjs';

	return {
		get: function () {
			var deferred = $.Deferred();

			hoodie.store.findOrAdd('todo', STORAGE_ID, {values: [] })
				.then(function(loaded) {
					deferred.resolve(loaded.values);
				})
				
			return deferred.promise();
		},

		put: function (todos) {
            hoodie.store.update('todo', STORAGE_ID, {values: todos })
		}
	};
});
