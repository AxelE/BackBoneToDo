define([
  'jquery',
  'backbone',  
  'text!templates/lineTodo.html',
  'views/details_view'
], function($, Backbone, LineTodoTemplate, TodoModel, DetailsView) {
var LineTodoView = Backbone.View.extend({
    tagName: 'tr',
    className: 'todo',
    initialize: function(options) {
      this.app = options.app;
    },
	events:{
		'click .details-todo' : 'details_todo',
	},
  	details_todo: function () {
      Backbone.history.navigate("view4/"+this.model.id, { trigger: true });
      /*
    	var detailsView = new DetailsView({model: this.model});
      detailsView.render();
      */
    },
    render: function(){
    	var template = _.template(LineTodoTemplate);
        this.$el.html(template({todo: this.model}));
        return this;
    }
	});  
	return LineTodoView
});  