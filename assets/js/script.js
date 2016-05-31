/**
 * Created by oliver on 8/12/2015.
 */

/**
 * 1. DOM inladen.
 * 2. Forms toevoegen
 * 3. Forms aanpassen aan vereisten
 * 4. Verschillende afbeeldingen linken => hide/show
 * 5. Array aanmaken en rechts plaatsen in een ul
 * 6. Submitknop linken => pop-up
 */


function popup(){
    window.alert("Thank you for your purchase!")
}


var html = '<label for="naam">full name</label>';
html += '<input type="text" id="naam" name="naam" placeholder="Enter your name" required>';

$(".personbody div:first-child").append(html);


var html = '<label for="email">Email</label>';
html += '<input type="email" id="email" name="email" placeholder="Enter your email" required>';

$(".personbody div:first-child").next().append(html);


var html = '<label for="aantal">How many pizzas would you like?</label>';
html += '<input type="number" id="aantal" name="aantal" required max="3" min="1" value="0">';

$(".personbody div:first-child").next().next().append(html);



var html = '<label for="soort">Which type of pizza would you like?</label>';
html += '<select id="soort" name="soort">'
html += '<option value="small">small</option>'
html += '<option value="medium">medium</option>'
html += '<option value="large">large</option>'

$(".personbody div:first-child").next().next().next().append(html);


var html = '<label>Would you like extra topping?</label>';
html += '<input type="radio" id="yes" name="topping" value="yes">';
html += '<label for="yes">Yes</label>';
html += '<input type="radio" id="no" name="topping" value="no" checked>';
html += '<label for="no">No</label>';

$(".personbody div:first-child").next().next().next().next().append(html);


var html ='<label>Which kind of topping would you like?</label>';
html += '<input type="checkbox" id="salami" name="extraTopping" value="salami">';
html += '<label for="salami">Salami</label>';
html += '<input type="checkbox" id="olives" name="extraTopping" value="olives">';
html += '<label for="olives">Olives</label>';
html += '<input type="checkbox" id="ansjovis" name="extraTopping" value="ansjovis">';
html += '<label for="ansjovis">Ansjovis</label>'

$("#toppings").append(html);


var html = '<label for="wanneer">When do you want the pizza<span class="plural">s</span> to be delivered?</label>';
html += '<input type="date" id="wanneer" name="wanneer" required>';
html += '<input type="time" id="wanneer" name="wanneer" required>'

$("#toppings").next().append(html);


var html = '<label for="discount">Do you have a discount code?</label>';
html += '<input type="text" id="discount" name="discount" pattern="[0-9]{1}-[A-Z]{3}">'

$("#toppings").next().next().append(html);

var topping = function(){
    if(this.value == "yes"){
        $('.hide').show();
    } else {
        $('.hide').hide();
    }
};

var toonNaam = function(){
    var naam = $(this).val();
    $('#displayname').html(naam)
};

var howManyPizzas = function(){
    var aantal = $(this).val();
    $('#displayamount').html(aantal);
    if (aantal > 1){
        $('.plural').show();
    }
    else if (aantal < 1){
        $('.plural').show();
    }
    else{
        $('.plural').hide();
    }
};

var veranderenhandje = function(){
    var id = $(this).attr('id');
    switch(id){
        case 'email' :
            $('#arm').attr('class','pointemail');
            break;
        case 'naam':
            $('#arm').attr('class','');
            break;
        case 'aantal':
            $('#arm').attr('class','pointamount');
            break;
        default:
            $('#arm').attr('class','pointothers');
            break;
    }
};

var toonSalami = function(){

    if(this.checked == true){

        $('#salamitje').show();
    } else {
        $('#salamitje').hide();
    }

};

var toonOlives = function(){

    if(this.checked == true){

        $('#olijven').show();
    } else {
        $('#olijven').hide();
    }
};

var toonAnsjovis = function(){

    if(this.checked == true){

        $('#ansjovisje').show();
    } else {
        $('#ansjovisje').hide();
    }
};



$(document).ready(function(){
    console.log('het werkt!!');
    $('.personbody div:first-child input').focus();
    $('.topping input').on('click',topping);
    $('input,select').on('focus',veranderenhandje);
    $('#naam').on('change',toonNaam);
    $('#aantal').on('change',howManyPizzas);
    $('#salami').on('change',toonSalami);
    $('#olives').on('change',toonOlives);
    $('#ansjovis').on('change',toonAnsjovis);
});