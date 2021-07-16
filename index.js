<html>
    <head>
        <style type="text/css">
            body {
                color: rgb(0, 0, 0);
                background-color: rgb(255, 255, 255);
            }

            #seccion1 {
                color: rgb(255, 255, 255);
                font-size: 616px;
                text-align: center;
                background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbfQNU-aZQXk%2Fmaxresdefault.jpg&f=1&nofb=1);
                background-size: unset;
            }
        </style>
        <script type="text/javascript" src="https://Codigo_dino.com/js/main.js"></script>
    </head>
    <body>
        <section id="seccion1">_</section>
        <section style="word-wrap: break-word; white-space: pre-wrap;">
            Pagina para jugar al juego del dinosaurio sin tener que desconectar Internet (desde Google Chrome):
            
    chrome://dino/
    
    ------------------------------------------------------------------------------
    
    Direccion de la "skin" de Yoshi, Mario, Sonic, Batman, Naruto para introducir en el juego:
    
    Yoshi: https://guinxu.com/otros/yoshi.png
    Mario Bugeado: https://chromedino.com/assets/offline-sprite-2x-mario.png
    Sonic para Daltonicos: https://i.imgur.com/7BuRkS9.png
    Naruto Bugeado: https://trex-runner.com/img/offline-sprite-2x-naruto.png
    Batman Bugeado: https://chromedino.com/assets/batman2x.png
    
    ------------------------------------------------------------------------------
    
    Runner.instance_.setSpeed(1)
    Runner.instance_.setSpeed(100)
    Runner.instance_.setSpeed(-1)  //Pierde puntos XD
    Runner.instance_.setSpeed(0.1)
    Runner.instance_.setSpeed(500)
    
    Runner.instance_.tRex.setJumpVelocity(20)
    Runner.instance_.tRex.setJumpVelocity(50)
    Runner.instance_.tRex.setJumpVelocity(1000)
    Runner.instance_.tRex.setJumpVelocity(0)  //No salta
    
    Runner.instance_.horizon.addCloud()

    Runner.instance_.playingIntro = true  //Corres pero sin moverte
    
    Runner.instance_.horizon.removeFirstObstacle()  //Eliminas el 1 obstaculo
    
    Runner.instance_.inverted = true  //Sale la luna aunque sea de dia
    
    Runner.prototype.gameOver = function() {}   //Eres inmortal
    
    Runner.instance_.msPerFrame = 0.01  //Lo que tardas en ganar un punto
    
    Runner.instance_.distanceRan = 3999900  //Puntuacion
        </section>
     </body>
</html>
