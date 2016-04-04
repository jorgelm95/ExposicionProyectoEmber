/**
 * Created by jorgeluis on 03/04/2016.
 */
App = Ember.Application.create();

App.Router.map(function() {
    this.route("notificaciones");
});


App.Store = DS.Store.extend({
    revision: 11,
    adapter: "DS.FixtureAdapter"
});