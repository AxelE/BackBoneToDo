define([
  'jquery',
  'backbone',
  'models/todo',
], function($, Backbone, TodoModel) {
	var Todos = Backbone.Collection.extend({
    url: 'slim.php/todos',
	  model: TodoModel,
	  //localStorage : new Store("TodoDB"),
	  initialize: function(){
				console.log('ToDo Collection has been intialized');
				this.on('add', function(todo){
					console.log('Nouveau todo ajouté : ' + todo.get('title'));
				});
				this.on('change:title', function(todo){
					console.log('En fait... Je souhaite faire : ' + todo.get('title'));
					Backbone.history.navigate("view1", { trigger: true });
				});
				this.on('sort', function(){
					Backbone.history.navigate("view1", { trigger: true });
				});
				this.on('reset', function(){
					console.log('NO TODOS, YOU ARE FREE')
					Backbone.history.navigate("view2", { trigger: true });
					Backbone.history.navigate("view1", { trigger: true });
				});
	  },
	});
	return Todos;
});