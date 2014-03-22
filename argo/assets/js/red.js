// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery(function($) {
  $('.brick3').hide();
  $.get( "http://red.pccv.org.au/profiles/form2", function( data ) {
    json = JSON.parse(data);
    console.log(json);
    question = json.data[getRandomInt(0, json.data.length - 1)]
    console.log(question);
    console.log(question.text);
    $('.brick3 .inner h1').html(question.text);
    $('.brick3 .inner p').html("");
    // console.log(question.answers);
    // console.log(question.answers.length);
    // for (var i = 0; i < question.answers.length; i++) {
    //   console.log(question.answers[i]);
    //   $('.brick3 .inner p').append(question.answers[i].title);
    // }
    $('.brick3').show('slow');
  });
});
