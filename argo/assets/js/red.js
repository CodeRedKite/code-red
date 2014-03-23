// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery(function($) {
    $('.submission_form_button').hide();
    $('.brick3').hide();
    $('.share_text').hide();
    $('.brick3 .inner p').hide();
    $('.brick3 .inner input').hide();
    $(".infographic").hide();

    $.get("http://red.pccv.org.au/profiles/question", function(data) {
        json = JSON.parse(data);
        console.log(json);
        question = json.data[getRandomInt(0, json.data.length - 1)]
        console.log(question);
        console.log(question.text);
        $('.brick3 .inner h1').html(question.text);
        $('.brick3 .inner p').html(question.impact);
        for (var i = 0; i < question.answers.length; i++) {
            console.log(question.answers[i]);
            $('.brick3 .inner .options').append('<div class="radio-set"><span class="radio-button"></span><span class="radio-text ' + question.answers[i]["correct"] + '">' + question.answers[i]["title"] + '</span>' + '</div>');
        }

        $('.brick3 .inner .infographic').attr('src', 'assets/img/' + question.image);
        $('.brick3').show();

    });

    $(".options").on('click', function(e) {
        e.preventDefault();
        $(".front").hide();
        $('.brick3 .inner p').show();
        $('.brick3 .inner input').show();
        $(".infographic").show();
        $('.submission_form_button').show();
        $('.share_text').show();

        $('.brick3 .inner h1').html("RedKite lightens the load with…");
        $('.brick3 .inner h1').addClass('hidden');
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

    $('.submission_form_button').click(function() {
        //alert('shared!');
        $.ajax({
            url: 'http://red.pccv.org.au/profiles/share',
            type: 'post',
            dataType: 'json',
            data: $('form#myForm').serialize(),
            success: function(data) {
                $('.brick3 .inner h1').html("Thank you for helping redkite lighten the load of familes all around Australia.<p class='find-more'>Find out more…");
                $('.brick3 .inner .infographic').hide();

            }
        });
    });

    $('.submission_form_button').click(function() {
        $('.submission_form_button').attr({
            src: 'assets/img/share_but_on.png'
        });
    });
});
