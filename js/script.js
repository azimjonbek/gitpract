window.addEventListener('load', function(){
    var card = document.querySelectorAll('.simple');
    var price = document.querySelector('.pp em')
    console.log(card)
    console.log(price)
    for( var i = 0; i<card.length; i++){
        card[i].addEventListener('click', function(){
            this.classList.toggle('card-active');
            price.innerHTML = sum()
        })
    }
    function sum(){
        var sum = 0;
        for(var i = 0; i<card.length; i++){
            if(card[i].classList.contains('card-active')){
                sum = sum + + card[i].getAttribute('data-price');
            }
        } return sum
    }
})