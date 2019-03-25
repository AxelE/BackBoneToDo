define([
  'jquery',
  'backbone',  
  'views/line_todo_view',  
  'text!templates/todos.html'
], function($, Backbone, LineTodoView, TodosTemplate) {
    var PrincipalView = Backbone.View.extend({
      el: $('#main'),
      initialize: function(options) {
        this.app = options.app;
      },
      events:{
          'click .new-todo' : 'new_todo',
          'click .reset-todos' : 'reset_todos',
          'click .sort-todo-title' : 'sort_todo_title',
          'click .sort-todo-duedate' : 'sort_todo_duedate',
          'click .sort-todo-status' : 'sort_todo_status',
      },
      new_todo: function () {
        Backbone.history.navigate("view3", { trigger: true });
      },
      reset_todos: function () {
        this.app.todos.reset();
      },
      sort_todo_title: function () {
        this.app.todos.comparator = 'title';
        this.app.todos.sort();
      },
      sort_todo_duedate: function () {
        this.app.todos.comparator = 'duedate';
        this.app.todos.sort();
      },
      sort_todo_status: function () {
        this.app.todos.comparator = 'status';
        this.app.todos.sort();
      },
      render: function(){
        var template = _.template(TodosTemplate);
        this.$el.html(template({Todos: this.app.todos}));
        this.app.todos.each(this.addOne, this);
      },
      addOne: function(todo){
        var line = new LineTodoView({model: todo});
        this.$('table tbody').append(line.render().$el);
        return this;
      }
  }); 
  return PrincipalView;
}); 