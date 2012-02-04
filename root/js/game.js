// see also: http://ebi.dyndns.biz/diary/20110419.html
enchant();

window.onload = function () {
    var game = new Game(320, 320);
    game.fps = 24;
    game.preload('/libs/enchant.js/images/chara1.gif');

    game.onload = function () {
        var bear = new Sprite(32, 32);
        bear.x = 8;
        bear.y = 8;
        bear.image = game.assets['/libs/enchant.js/images/chara1.gif'];
      
        bear.addEventListener('enterframe', function (e) {
            if (game.input.right) {
                bear.x += 2;
            }
            if (game.input.left) {
                bear.x -= 2;
            }
    
            if (game.input.up) {
                bear.y -= 2;
            }
            if (game.input.down) {
                bear.y += 2;
            }
        }); 

        game.rootScene.addChild(bear);
        var pad = new Pad();
        pad.x = 0;
        pad.y = 224;
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = '#FFFFFF';
    };

    game.start();
};

