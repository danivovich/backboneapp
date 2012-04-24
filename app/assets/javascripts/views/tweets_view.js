var TweetsView = Backbone.View.extend({
  tagName: 'table',
  className: 'tweets',

  events: {
    'click': 'clickHandler'
  },

  initialize: function(options) {
    _.bindAll(this, 'render');
    this.collection.on('all', this.render, this);
  },

  render: function() {
    var rows = "";
    this.collection.each(function(tweet) {
      rows = rows + JST.tweet_row(tweet.toJSON());
    });
    this.$el.html(rows);
    return this;
  },

  clickHandler: function() {
    this.collection.fetch();
  }
});
