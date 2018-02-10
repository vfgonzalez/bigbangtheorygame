$(document).ready(function (){
    // Variables below:
    var ChosenHero
    var ChosenEnemy
    var isHeroAlive
    var isEnemyAlive
    var isHeroChosen
    var isEnemyChosen

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/images/theme.mp3");

    var attackbutton = document.createElement("audio");
    attackbutton.setAttribute("src", "./assets/images/bazinga.mp3");
    // Theme Button
    $(".theme-button").on("click", function() {
      audioElement.play();
    });

    $(".pause-button").on("click", function() {
      audioElement.pause();
    });

    // Initial Game function:
    function initGame(){
        isHeroChosen = false
        isEnemyChosen = false
        // for loop populates list of characters
        for (var i=0; i< charArr.length; i++){
            var num = (Math.floor(12/charArr.length))
            var charImage = $("<div class='card-deck myChar col-md-"+num+
            "' value='"+i+ "'style='width:14rem;'><div class='card-img-top'><img src='"+charArr[i].image+"' style='width:150px;height:170px;'/></div><div class='card-body'><div class='card-text'>"+charArr[i].name+"<br>"+"HP: "+charArr[i].HP+"<br>"+"Attack Power: "+charArr[i].attackpower+ "<br>"+"Counter Attack Power: "+charArr[i].counterattack+"</div></div></div>")
            $("#charlist").append(charImage)
            
        }
    }

    $(document).on("click",".myChar",function(){
        if(isHeroChosen===false){
            ChosenHero = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            console.log(ChosenHero.name)
            $(".hero-choice").append("<img src='"+ChosenHero.image+"' 'style='width:180px;height:200px;'/>"+"<br>"+"HP: "+ ChosenHero.HP+ "<br>"+ "Attack Power: "+ ChosenHero.attackpower+"<br>"+"Counter Attack Power: "+ ChosenHero.counterattack)

            isHeroChosen = true
        }
        else if(isEnemyChosen === false && ChosenHero.name !== charArr[$(this).attr("value")].name){
            ChosenEnemy = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            console.log(ChosenEnemy.name)
            $(".enemy-choice").append("<img src='"+ChosenEnemy.image+"''style='width:180px;height:200px;'/>"+"<br>"+" HP: "+ ChosenEnemy.HP+ "<br>"+ "Attack Power: "+ ChosenEnemy.attackpower+"<br>"+"Counter Attack Power: "+ChosenEnemy.counterattack)
            isEnemyChosen = true
        }
    })

    $(".button").on("click",function(){
        attackbutton.play();
        console.log(ChosenHero.name + " vs "+ ChosenEnemy.name)
        if(ChosenHero.HP>0 && ChosenEnemy.HP>0){
            console.log(chosenHero.HP)
        }
        // else{

        //     alert("Game Ends")
        // }
    })

        var charArr = [
            {
                name:"Sheldon",
                HP: 100,
                attackpower: 10,
                counterattack: 50,
                image: "./assets/images/Sheldon.png"
            },
            {
                name:"Leonard",
                HP: 110,
                attackpower: 40,
                counterattack: 30,
                image: "./assets/images/Leonard.png"
            },
            {
                name:"Howard",
                HP: 90,
                attackpower: 35,
                counterattack: 25,
                image: "./assets/images/Howard.png"
            },
            {
                name:"Raj",
                HP: 95,
                attackpower: 30,
                counterattack: 45,
                image: "./assets/images/Raj.png"
            }
                

        ]

        initGame();



})