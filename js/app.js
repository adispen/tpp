//foundationify everything
$(document).foundation();

$("#refresh-tpp-org").on('click', function () {
    //support refreshing tpp.org
    $("#ifr").attr('src', "http://www.twitchplayspokemon.org/?" + new Date().getTime() + "#pokemon");
});