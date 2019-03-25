define([
  'jquery',
  'backbone',
], function($, Backbone) {
	var AppView = Backbone.View.extend({
	  el: $('#container'),
	  template: _.template("<h3>Hello <%= who %></h3>"),
	  initialize: function(options){
	    this.app = options.app;
	  },
	  render: function(){
	    this.$el.html(this.template({who: 'Axel!'}));
	    return this;
	  }
	});
	return AppView;
});