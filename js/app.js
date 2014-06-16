//foundationify everything
$(document).foundation();

$("#refresh-tpp-org").on('click', function () {
    //support refreshing tpp.org
    $("#ifr").attr('src', "http://www.twitchplayspokemon.org/?" + new Date().getTime() + "#pokemon");
});

$(function () {
    var $countdown = $('#countdown'),
        now = new Date(),
        start_time = $countdown.data('start-time'),
        target = new Date(start_time * 1000),
        total_seconds,
        text = '';

    target = target.getTime();
    now = now.getTime();

    total_seconds = target - now;

    if (total_seconds < 0) {
        text = 'Pokemon Black and White has started!';
        $countdown.text(text);
    } else {
        var getSecondsRemaining = function () {
            now = new Date(),
            start_time = $countdown.data('start-time'),
            target = new Date(start_time * 1000),
            text = '';

            target = target.getTime();
            now = now.getTime();

            total_seconds = target - now;
            //to seconds
            total_seconds = parseInt(total_seconds / 1000.0);

            //parse date
            var minute = 60,
                hour = 60 * minute,
                day = 24 * hour,
                days,
                hours,
                minutes,
                seconds;

            days = parseInt(total_seconds / day);
            total_seconds = total_seconds % day;

            hours = parseInt(total_seconds / hour);
            total_seconds = total_seconds % hour;

            minutes = parseInt(total_seconds / minute);
            seconds = total_seconds % minute;

            var day_text = days != 1 ? 'days' : 'day',
                hour_text = hours != 1 ? 'hours' : 'hour',
                minute_text = minutes != 1 ? 'minutes' : 'minute',
                second_text = seconds != 1 ? 'seconds' : 'second';

            text = days + ' ' + day_text +
                ', ' + hours + ' ' + hour_text +
                ', ' + minutes + ' ' + minute_text +
                ', and ' + seconds + ' ' + second_text +
                ' until Pokemon Black starts!';

            $countdown.text(text);

            setTimeout(getSecondsRemaining, 1000);
        };

//        setTimeout(getSecondsRemaining, 1000);
    }
});