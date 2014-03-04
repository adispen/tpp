$(function(){
	function updateViewers(){
		$.ajax({
			'url':'https://api.twitch.tv/kraken/streams/twitchplayspokemon.json',
			'dataType':'jsonp',
			'success': function(response){
				$('#viewers').html('Twitch Viewer Count: ' + response.stream.viewers);
			}

		})
	}
	setInterval(updateViewers,5000);
});