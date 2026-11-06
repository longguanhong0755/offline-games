const fetch_display_joke=()=>{
    $.getJSON('/_assets/7b3503274ebf99261e0b.json', function(data) {
        $(".joke").html(data.joke).text()
});
}
fetch_display_joke()
let funny=new Audio("/_assets/a6ed78822e78c5f73230.wav")
let not_funny=new Audio("/_assets/8234ed97d23288425426.wav")

let click_funny=()=>{
    not_funny.pause()
    funny.play()
}

let click_not_funny=()=>{
    funny.pause()
    not_funny.play()
}
