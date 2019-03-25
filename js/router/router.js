define([
  'jquery',
  'backbone',  
  'views/add_todo_view',  
  'views/app_view',  
  'views/details_view',  
  'views/principal_view',  
], function($, Backbone, AddTodoView, AppView, DetailsView, PrincipalView) {
    var MainRouter = Backbone.Router.extend({
        view1: null,
        view2: null,
        view3: null,
        view4: null,
        initialize: function (options) {
            this.app = options.app;
        },
        routes: {
            "": "handleRoute1",
            "view/:viewid": "handleRouteAll",
            "view1": "handleRoute1",
            "view2": "handleRoute2",
            "view3": "handleRoute3",
            "view4": "handleRoute4",
            "view4/:todoid": "detailview",
        },
         handleRouteAll: function (viewid) {
            if (viewid == 1) {
                this.handleRoute1();
            }
            else if (viewid == 2) {
                this.handleRoute2();
            }
            else if (viewid == 3) {
                this.handleRoute3();
            }
            else if (viewid == 4) {
                this.handleRoute4();
            }
        },
        handleRoute1: function () {
            if (this.view1 == null) {
                this.view1 = new PrincipalView({ app: this.app });
            }
            this.view1.render();
        },
        handleRoute2: function () {
            if (this.view2 == null) {
                this.view2 = new AppView({ app: this.app });
            }
            this.view2.render();
        },
        handleRoute3: function () {
            if (this.view3 == null) {
                this.view3 = new AddTodoView({ app: this.app });
            }
            this.view3.render();
        },
        handleRoute4: function () {
            if (this.view4 == null) {
                this.view4 = new DetailsView({ app: this.app });
            }
            this.view4.render();
        },
        detailview: function (todoid) {
            if (this.view4 == null) {
                this.view4 = new DetailsView({ app: this.app, todoid: todoid, model: this.app.todos.get(todoid) });
            }
            this.view4.render();
        }  
    });
    return MainRouter;
});