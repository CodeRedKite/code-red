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
    for (var i = 0; i < question.answers.length; i++) {
      console.log(question.answers[i]);
      $('.brick3 .inner #options').append(question.answers[i]["title"] + ' <input type="radio" name="radio" value="value1"></input><br/>');
    }
    $('.brick3').show();
  });
  
    $('.next').click(function() {
        $('#answer').slideToggle();
        $('#navbar').slideToggle();

        $('.step1').slideToggle();
    });

    $('#btn_up').click(function() {
        $('#answer').slideToggle();
        $('#navbar').slideToggle();

        $('.step1').slideToggle();
    });

    $('#submission_form_button').click(function() {
        alert('shared!');
        // $.ajax({
        //     url: 'some-url',
        //     type: 'post',
        //     dataType: 'json',
        //     data: $('form#myForm').serialize(),
        //     success: function(data) {
        //                ... do something with the data...
        //              }
        // });
    });
});
