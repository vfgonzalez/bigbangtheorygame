$(document).ready(function (){
    // Variables below:
    var ChosenHero
    var ChosenEnemy
    var isHeroAlive
    var isEnemyAlive
    var isHeroChosen
    var isEnemyChosen
    var enemybeatcount = 0

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/images/theme.mp3");
    // Bazinga sound for hero loses
    var attackbutton = document.createElement("audio");
    attackbutton.setAttribute("src", "./assets/images/bazinga.mp3");
    // Win sound once enemy defeated
    var winsound = document.createElement("audio");
    winsound.setAttribute("src", "./assets/images/swordmaster.mp3");
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

    // Pressing buttons below assigns Hero and Enemy
    
    $(document).on("click",".myChar",function(){
        if(isHeroChosen===false){
            ChosenHero = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            console.log("What is being changed hero "+ $(this))
            console.log(ChosenHero.name)
            $(".hero-choice").append("<img src='"+ChosenHero.image+"' 'style='width:180px;height:200px;'/>"+"<br>"+"<div class='hero-HP'>"+'HP: '+ ChosenHero.HP+"</div>")

            isHeroChosen = true
        }
        else if(isEnemyChosen === false && ChosenHero.name !== charArr[$(this).attr("value")].name){
            ChosenEnemy = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            console.log("what is being called "+$(this))
            console.log(ChosenEnemy.name)
            $(".enemy-choice").append("<img src='"+ChosenEnemy.image+"''style='width:180px;height:200px;'/>"+"<br>"+"<div class='enemy-HP'>"+" HP: "+ ChosenEnemy.HP+"</div>" )
            isEnemyChosen = true
        }
    })
    // Attack button 
    $(".button").on("click",function(){
        $(".hero-HP").html("HP: "+(ChosenHero.HP -= ChosenEnemy.counterattack()))
        $(".enemy-HP").html("HP: "+(ChosenEnemy.HP -= (ChosenHero.attackpower()+ChosenEnemy.attackpower())))
        if(ChosenHero.HP <= 0){
            attackbutton.play();
            alert("Game Over, You Lose!")
            ChosenHero.HP = 100
            ChosenEnemy.HP = 100
            isEnemyChosen = false
            $(".enemy-choice").empty()
            $(".enemy-HP").html("HP: "+100)
            isHeroChosen = false
            $(".hero-choice").empty()
            $(".hero-HP").html("HP: "+100)
            location.reload()
            $(document).scrollTop(0)
            enemybeatcount = 0
            
            
        }
        else if(ChosenEnemy.HP <= 0){
            alert("You Beat " + ChosenEnemy.name+"!")
            ChosenHero.HP = 100
            $(".hero-HP").html("HP: "+100)
            ChosenEnemy.HP = 100
            isEnemyChosen = false
            $(".enemy-choice").empty()
            $(".enemy-HP").html("HP: "+100)
            enemybeatcount++
            console.log("enemies defeated count: "+ enemybeatcount)
            if(enemybeatcount === 3){
                winsound.play();
                alert("You have Defeated all Nerds!")
                location.reload()
                $(document).scrollTop(0)
            }

        }
            
        
    })

   
    // Character Attributes Below:

        var charArr = [
            {
                name:"Sheldon",
                HP: 100,
                attackpower: function(){
                    return Math.floor(Math.random()*10)+10},
                counterattack: function(){
                    return Math.floor(Math.random()*10)+10},
                image: "./assets/images/Sheldon.png"
            },
            {
                name:"Leonard",
                HP: 100,
                attackpower:function(){
                    return Math.floor(Math.random()*10)+10},
                counterattack:function(){
                    return Math.floor(Math.random()*10)+10},
                image: "./assets/images/Leonard.png"
            },
            {
                name:"Howard",
                HP: 100,
                attackpower: function(){
                    return Math.floor(Math.random()*10)+10},
                counterattack: function(){
                    return Math.floor(Math.random()*10)+10},
                image: "./assets/images/Howard.png"
            },
            {
                name:"Raj",
                HP: 100,
                attackpower: function(){
                    return Math.floor(Math.random()*10)+10},
                counterattack: function(){
                    return Math.floor(Math.random()*10)+10},
                image: "./assets/images/Raj.png"
            }
                

        ]

        initGame();



})