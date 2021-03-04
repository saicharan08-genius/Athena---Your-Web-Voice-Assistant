alert("Hey! It is Athena! Be sure your commands are loud and clear")

responsiveVoice.speak("hi, I am Athena, How may I help you" , "US English Female");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

if(annyang){

  annyang.start();

  const googlesearch = {
    '(Hey) (Athena) (Hey) (man) search (for) *searchQuery': moveWeb
  };

  const ytsearch = {
    '(Hey) (Athena) (Hey) (man) (go to) youtube (and) search *searchQuery1' : ytsearch1
  };

  const athenawiki = {
    '(Athena) what (is) your name (Athena)' : answer,
  };

  const wikisearch = {
    //code
  };

  annyang.addCommands(googlesearch);
  annyang.addCommands(ytsearch);
  annyang.addCommands(athenawiki);
  annyang.addCommands(wikisearch);

  function moveWeb(searchQuery) {
    window.location.replace('https://google.com/search?q=' + searchQuery);
  }

  function ytsearch1(searchQuery1) {
    window.location.replace('https://www.youtube.com/results?search_query=' + searchQuery1);
  }

  function answer() {
    const names = ['My name is Athena' , 'Hey! My name is Athena!' , 'Hola! My name is Athena'];
    var i = parseInt(getRandomInt(3));
    responsiveVoice.speak(names[i] , "US English Female");
  }

}
