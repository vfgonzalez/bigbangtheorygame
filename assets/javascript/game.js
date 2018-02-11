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
            "' value='"+i+ "'style='width:14rem;'><div class='card-img-top'><img src='"+charArr[i].image+"' style='width:150px;height:170px;'/></div><div class='card-body'><div class='card-text'>"+charArr[i].name+"<br>"+"HP: "+charArr[i].HP+"</div></div></div>")
            $("#charlist").append(charImage)
            
        }
    }

    
    
    $(document).on("click",".myChar",function(){
        if(isHeroChosen===false){
            ChosenHero = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            console.log(ChosenHero.name)
            $(".hero-choice").append("<img src='"+ChosenHero.image+"' 'style='width:180px;height:200px;'/>"+"<br>"+"<div class='hero-HP'>"+'HP: '+ ChosenHero.HP+"</div>")

            isHeroChosen = true
        }
        else if(isEnemyChosen === false && ChosenHero.name !== charArr[$(this).attr("value")].name){
            ChosenEnemy = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            console.log(ChosenEnemy.name)
            $(".enemy-choice").append("<img src='"+ChosenEnemy.image+"''style='width:180px;height:200px;'/>"+"<br>"+"<div class='enemy-HP'>"+" HP: "+ ChosenEnemy.HP+"</div>" )
            isEnemyChosen = true
        }
    })

    $(".button").on("click",function(){
        attackbutton.play();
        $(".hero-HP").html("HP: "+(ChosenHero.HP -= ChosenEnemy.counterattack()))
        $(".enemy-HP").html("HP: "+(ChosenEnemy.HP -= ChosenHero.attackpower()))
        if(ChosenHero.HP <= 0){
            alert("Game Over, You Lose!")
            isEnemyChosen = false
            $(".enemy-choice").empty()
            isHeroChosen = false
            $(".hero-choice").empty()
            $(".hero-HP").reset()
            $(".enemy-HP").html("HP: "+100)
            

        }
        else if(ChosenEnemy.HP <= 0){
            alert("You Beat " + ChosenEnemy.name+"!")
            // $(document).reset()
            isEnemyChosen = false
            $(".enemy-choice").empty()
            $("hero-HP").html("HP: "+100)

        }
        else{
        }
       
    })

   

        var charArr = [
            {
                name:"Sheldon",
                HP: 100,
                attackpower: function(){
                    return Math.floor(Math.random()*10)+1},
                counterattack: function(){
                    return Math.floor(Math.random()*10)+1},
                image: "./assets/images/Sheldon.png"
            },
            {
                name:"Leonard",
                HP: 100,
                attackpower:function(){
                    return Math.floor(Math.random()*10)+1},
                counterattack:function(){
                    return Math.floor(Math.random()*10)+1},
                image: "./assets/images/Leonard.png"
            },
            {
                name:"Howard",
                HP: 100,
                attackpower: function(){
                    return Math.floor(Math.random()*10)+1},
                counterattack: function(){
                    return Math.floor(Math.random()*10)+1},
                image: "./assets/images/Howard.png"
            },
            {
                name:"Raj",
                HP: 100,
                attackpower: function(){
                    return Math.floor(Math.random()*10)+1},
                counterattack: function(){
                    return Math.floor(Math.random()*10)+1},
                image: "./assets/images/Raj.png"
            }
                

        ]

        initGame();



})