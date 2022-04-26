    $("button").click(function() {
        let name = $(".name").val();
        let useSpotify = $(".spotify").val();
        let timesADay = $(".listenToSpotify").val();

        let finalAnswer = (timesADay * 365);

        $(".fortune-display").append(name + ", you will listen to Spotify " + finalAnswer + " times per year." + "<br>");

});