define([
  'jquery',
  'backbone',
  'text!templates/detailsTodo.html'
], function($, Backbone, DetailsTemplate) {
	var DetailsView = Backbone.View.extend({
	    el: $('#main'),
	    initialize: function(options) {
				this.app = options.app;
	    },
	    events:{
	        'click .back-to-home' : 'back_to_home',
	        'click .modifyTodo' : 'modifyTodo',
	    },
	    back_to_home: function () {
	    	Backbone.history.navigate("view1", { trigger: true });
	    },
			modifyTodo: function () {
				this.model.set({
					title: this.$el.find('.title-input').val(),
					duedate: this.$el.find('.date-input').val(),
					status: this.$el.find('.status-select').val(),
				});
	    },
	    render: function(){
				var template = _.template(DetailsTemplate);
	      this.$el.html(template({todo: this.model}));
	      return this;
	    }
	});  
	return DetailsView;
});  
