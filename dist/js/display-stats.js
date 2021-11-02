
var DomController = function () {


  // define classes and ids 
  var Domstrings = {
    leaguestats: ".league-player-stats",
    leagueDropUp: 'leagueDropUp',
    leagueDropDown: 'leagueDropDown',
    chevUp: '.chev-up',
    chevDown: '.chev-down',
    cupstats: ".match-player-stats",
    cupDropDown: 'cupDropDown',
    cupDropUp: 'cupDropUp',
    cupchevUp: '.cup-chev-up',
    cupchevDown: '.cup-chev-down',
  };

  // return the doms

  return {
    getDomstrings: function () {
      return Domstrings;
    },
  };
}();

var controller = (function (DomCtrl) {
  var Dom = DomCtrl.getDomstrings();

  var setEventListeners = function () {

    // league events
      document
      .getElementById(Dom.leagueDropDown)
      .addEventListener("click", displayLeagueStats);

      document
      .getElementById(Dom.leagueDropUp)
      .addEventListener("click", hideLeagueStats);

      // cup events

      document
      .getElementById(Dom.cupDropDown)
      .addEventListener("click", displayCupStats);

      document
      .getElementById(Dom.cupDropUp)
      .addEventListener("click", hideCupStats);
  };

  // league stats

  var displayLeagueStats = function () {

    document.querySelector(Dom.leaguestats).style.display = 'block';
    document.querySelector(Dom.chevUp).style.display = 'block';
    document.querySelector(Dom.chevDown).style.display = 'none';
  };

  var hideLeagueStats = function() {

    document.querySelector(Dom.leaguestats).style.display = 'none';
    document.querySelector(Dom.chevDown).style.display = 'block';
    document.querySelector(Dom.chevUp).style.display = 'none';

  };

  // cup stats

  var displayCupStats = function () {

    document.querySelector(Dom.cupstats).style.display = 'block';
    document.querySelector(Dom.cupchevUp).style.display = 'block';
    document.querySelector(Dom.cupchevDown).style.display = 'none';
    console.log(2);
  };

  var hideCupStats = function() {

        document.querySelector(Dom.cupstats).style.display = 'none';
        document.querySelector(Dom.cupchevDown).style.display = 'block';
        document.querySelector(Dom.cupchevUp).style.display = 'none';
  };


  return {
    initialize: function () {
      console.log('js file running');
      setEventListeners();
    },
  };
})(DomController);

controller.initialize();
