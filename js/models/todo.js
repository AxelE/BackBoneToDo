define([
  'jquery',
  'backbone',
], function($, Backbone) {
  var Todo = Backbone.Model.extend({
    idAttribute: "id",
    //localStorage : new Store("TodoDB"),
    validate: function(attributes){
      if(attributes.title === undefined){
          return "Remember to set a title for your todo.";
      }
    },
    initialize: function(){
      console.log('ToDo Model has been intialized');
      this.on('change', function(){
        //console.log('- Values for this model have changed.');
      });
      this.on('change:title', function(){
        console.log('Title value for this model has changed.');
      });
    },
    showAlert: function () {
        alert('TODO: ' + this.get('title') + ', DueDate: ' + this.get('duedate') + ', Status: ' + this.get('status'));
    }
  });
  return Todo;
});