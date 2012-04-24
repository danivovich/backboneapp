var TweetsView = Backbone.View.extend({
  tagName: 'table',
  className: 'tweets',

  initialize: function(options) {
    _.bindAll(this, 'render');
    this.collection.on('all', this.render, this);
  },

  render: function() {
    var rows = "";
    this.collection.each(function(tweet) {
      rows = rows + "<tr><td>" + tweet.get('text') + "</td></tr>";
    });
    this.$el.html(rows);
    return this;
  }
});
