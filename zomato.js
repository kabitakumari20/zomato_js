var readlineSync=require("readline-sync")
var name=readlineSync.question("enter the name=")
var pas=readlineSync.question("enter the pasword=")
console.log("Welcome,💐💐🌹🌹🌷🌷🌹🌹🌹" ,name,"in zomato Application🧇🧇")
console.log(name," your login is succesfull 😊😊😊😊")
var place=readlineSync.question("enter ur current location where u are=")
console.log("added ur location",place)
console.log("Eat what makes you happy")
function choose_food(){
    var non_vej=["chicken_biryani","egg_fry","fish_kadi","mutten_kadi"]
    console.log(non_vej)
    var vej=["muter", "paneer","momos","nudels","dosa"]
    console.log(vej)
    var food_categaris=readlineSync.question("enter food-categaries what do u like 1 non vej ,2 vej=")
    if (food_categaris=="1"){
        console.log(non_vej)
        var price={chicken_biryani:180,egg_fry:100,fish_kadi:120,mutten_kadi:300}
        console.log(price)}
    else if (food_categaris=="2"){
        console.log(vej)
        var price={muter:30,paneer:80,momos:50,nudels:90,dosa:25}
        console.log(price)}}
choose_food()
function choose_rest(){
    console.log("its avilable in all restaurants")
    console.log("254 restaurants around you")
    console.log("here we have 254 restaurants but in that 4 is fames restaurants")
    console.log("1-manvi-headrabad, 2-suman-banglor, 3- durga-electronic,4- kavita-bomsondhra")
    var resturent=readlineSync.question("enter the restaurants number 1 2 3 4=")
    console.log("1-sarda-resturent-headrabad, 2-manvi-banglor, 3- durga-electronic,4- sara-bomsondhra")
    if (resturent=="1"){
        console.log("manvi-headrabad")
        console.log("thanks for choosing my resturent")}
    else if (resturent=="2"){
        console.log("suman-banglor")
        console.log("thanks for choosing my resturent")}
    else if (resturent=="3"){
        console.log("durga-electronic")
        console.log("thanks for choosing my resturent")}
    else if (resturent=="4"){
        console.log("kavita-bomsondhra")
        console.log("thanks for choosing my resturent")}}
choose_rest()
var add_card=readlineSync.questionInt("enter the choose confirm ---\n1-confiram\n 2-cancle=")
if (add_card=="1"){
    var delevery=40
    console.log("slacte item  what u want") }
else if (add_card=="2"){
    console.log("surry i dont like ur dis")}
var slacte_item=readlineSync.question("enter ur item what u want to by=")
if (slacte_item=="checkan"){
    console.log("checken",180, "total amount",b=180+delevery)
    console.log("thanku for sleact dis")}
else if(slacte_item=="egg"){
    console.log("agg",100, "total amount",b=100+delevery)
    console.log("thanku for sleact dis")}
else if (slacte_item=="fish"){
    console.log("fish",120, "total amount",b=120+delevery)
    console.log("thanku for sleact dis")}
else if (slacte_item=="mutten"){
    console.log("mutten",300, "total amount",b=300+delevery)
    console.log("thanku for sleact dis")}
else if(slacte_item=="muter"){
    console.log("muter",30, "total amount",b=30+delevery)
    console.log("thanku for sleact dis")}
else if (slacte_item=="paneer"){
    console.log("panner",80, "total amount",b=80+delevery)
    console.log("thanku for sleact dis")}
else if (slacte_item=="momos"){
    console.log("momos",50, "total amount",b=50+delevery)}
else if(slacte_item=="nudels"){
    console.log("nudels",90, "total amount",b=90+delevery)
    console.log("thanku for sleact dis")}
else if (slacte_item=="dhosa"){
    console.log("dosa",25, "total amount",b=25+delevery)
    console.log("thanku for sleact dis")}
by_again()
console.log("delevery Charge",delevery)
function by_again(){
    var by_again=readlineSync.question("u want by again enter yes or not if yes click 1 if not click 2\n1-yes\n2-no-----")
    if (by_again=="1"){
        var again_item=readlineSync.question("enter item what u want =")
        if (again_item=="mutten"){
            a=300
            console.log("total",a+b) }
        else if (again_item=="egg"){
            a=100
            console.log("total",a+b)}
        else if (again_item=="fish"){
            a=120
            console.log("total",a+b)}
        else if (again_item=="checkan"){
            a=180
            console.log("total",a+b)}
        else if (again_item=="muter"){
            a=30
            console.log(a+b)}
        else if (again_item=="paneer"){
            a=80
            console.log("total",a+b)}
        else if (again_item=="momos"){
            a=50
            console.log("total",a+b)}
        else if (again_item=="nudels"){
            a=90
            console.log("total",a+b)}
        else if (again_item=="dhosa"){
            a=25
            console.log("total",a+b)}}
    else if (by_again=="2"){
        console.log("no i dont want by again only one time ")}}
var time=40
console.log(time,"minutes it will be take")
function pament_process(){
    var option=readlineSync.question("enter the option u want exit ya continue for \n1 continue \n2 exit----")
    if (option=="1"){
        console.log("continue")
        console.log("WHAT YOU WANT FOR PAY :- Phone_pay,Google_pay,cash")
        var payment=readlineSync.question("Enter payment option?----\n1-Phone_pay\n2-Google_pay\n3-Cash=")
        if (payment=="1"){
            var num=readlineSync.questionInt("enter the ur number=")
            var pin=readlineSync.questionInt("enter ur pin=")
            console.log("hey your payment is succesfull")}
        else if (payment=="2"){
            var num=readlineSync.questionInt("enter the ur number=")
            var pin=readlineSync.questionInt("enter ur pin=")
            console.log("hey your payment is succesfull")}
        else if (payment=="3"){
            var pay=readlineSync.questionInt("enter the ur payment=")
            console.log("hey your payment is succesfull") }
        console.log("congraculation💐💐🌹🌹🌷🌷🌹🌹",name," ur orded is succesfull")}
    else if (option=="2"){
        console.log(" Sorry you have exited")
        console.log("if u want by so again u have to do all process")}}
pament_process()
