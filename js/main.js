require.config({
  paths: {
    'jquery': 'libs/jquery',
    'underscore': 'libs/underscore',
    'backbone': 'libs/backbone',
    'backbonelocalstorage': 'libs/backbonelocalstorage',
    'text': 'libs/text',
    'models': 'models',
    'collections': 'collections',
    'views': 'views',
    'templates': "templates",
    'router': "router"
  }
});
require([
		'collections/todos',
		'router/router',
	], function(
		Todos,
		Router
	) {
	var app = app || {};
	app.todos = new Todos();


	app.todos.fetch({
		success: function(collection){
			collection.at(0).fetch();
		}
	});
	console.log(app.todos);

	/*console.log(Todos.length);
	var myTodoChangeTitle = Todos.at(1);
	myTodoChangeTitle.get('title');
	myTodoChangeTitle.set('title', 'Doing This');
	myTodoChangeTitle.destroy();
	myTodoChangeTitle.on('doitnow', function(msg){
	  console.log('DO IT NOW ' + msg)
	})
	myTodoChangeTitle.trigger('doitnow', 'AXEL')
	myTodoChangeTitle.off('doitnow');
	Todos.forEach(function(model){
	  console.log(model.get('title'));
	})
	console.log('rangé');
	var sortedByTitle = Todos.sortBy(function(todo){
	  return todo.get('title').toLowerCase();
	})
	sortedByTitle.forEach(function(model){
	  console.log(model.get('title'));
	})
	var count = 1;
	console.log(Todos.map(function(model){
	  return count++ + ". " + model.get('title');
	}));
	*/

	router = new Router({app: app});
	router.navigate("/");
  Backbone.history.start();

});