define([
  'jquery',
  'backbone',
  'text!templates/addTodo.html',
  'models/todo'
], function($, Backbone, AddTodoTemplate, TodoModel) {
    var AddTodoView = Backbone.View.extend({
      el: $('#main'),
      initialize: function(options) {
        this.app = options.app;
      },
      events:{
          'click .back-to-home' : 'back_to_home',
          'click .add-todo' : 'add_todo',
      },
      back_to_home: function () {
        Backbone.history.navigate("view1", { trigger: true });
      },
      add_todo: function () {
        var todoAdd = new TodoModel({
            title: $('.title-input').val(),
            duedate: $('.date-input').val(),
            status: $('.status-select').val()
        });
        $('.title-input').val('');
        this.app.todos.add(todoAdd);
        alert("Vous avez ajouté un nouveau todo !");
      },
      render: function(){
        var template = _.template(AddTodoTemplate);
        this.$el.html(template({}));
        return this;
      }
  });
    return AddTodoView;
});