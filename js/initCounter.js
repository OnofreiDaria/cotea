
startCounter()

// Init Counter
function startCounter() {

    var allCounters = [].slice.call(document.querySelectorAll('.card__counter'));

    console.log(allCounters);

    if (allCounters.length) {

        for (var i = 0; i < allCounters.length; i++){

            $(allCounters[i])
                .countdown(allCounters[i].getAttribute('data-final'), function(event) {
                    var $this = $(this).html(event.strftime(''
                        + '<div class="card__counter-blc"><span>%D</span> <div class="card__text-sub">Days</div></div> '
                        + '<div class="card__counter-blc"><span>%H</span> <div class="card__text-sub">Hours</div></div>'
                        + '<div class="card__counter-blc"><span>%M</span> <div class="card__text-sub">Minutes</div></div>'
                        + '<div class="card__counter-blc"><span>%S</span> <div class="card__text-sub">Seconds</div></div>'
                    ));
                });
        }
    }
}
