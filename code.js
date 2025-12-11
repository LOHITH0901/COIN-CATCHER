var score = 0;

Coin.detectCollisionsWith([MinecraftAvatar], function (collidedObject) {
    Horse_neigh.playSound()
    Hatch.destroyObject(Coin)
    score = score + 1

    Text2D.setText(score)
    if (score == 6) {

        Text3D2.setText('congratulation')
        Text2D.setText('')
    }
});

Coin2.detectCollisionsWith([MinecraftAvatar], function (collidedObject) {
    Horse_neigh.playSound()
    Hatch.destroyObject(Coin2)
    score = score + 1

    Text2D.setText(score)
    if (score == 6) {

        Text3D2.setText('congratulation')
        Text2D.setText('')
    }
});
Coin3.detectCollisionsWith([MinecraftAvatar], function (collidedObject) {
    Horse_neigh.playSound()
    Hatch.destroyObject(Coin3)
    score = score + 1

    Text2D.setText(score)
    if (score == 6) {

        Text3D2.setText('congratulation')
        Text2D.setText('')
    }
});
Coin4.detectCollisionsWith([MinecraftAvatar], function (collidedObject) {
    Horse_neigh.playSound()
    Hatch.destroyObject(Coin4)
    score = score + 1

    Text2D.setText(score)
    if (score == 6) {

        Text3D2.setText('congratulation')
        Text2D.setText('')
    }
});
Coin5.detectCollisionsWith([MinecraftAvatar], function (collidedObject) {
    Horse_neigh.playSound()
    Hatch.destroyObject(Coin5)
    score = score + 1

    Text2D.setText(score)
    if (score == 6) {

        Text3D2.setText('congratulation')
        Text2D.setText('')
    }
});
Coin6.detectCollisionsWith([MinecraftAvatar], function (collidedObject) {
    Horse_neigh.playSound()
    Hatch.destroyObject(Coin6)
    score = score + 1

    Text2D.setText(score)
    if (score == 6) {

        Text3D2.setText('congratulation')
        Text2D.setText('')
    }
});
