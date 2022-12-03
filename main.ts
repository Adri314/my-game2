sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.startEffect(effects.smiles, 500)
    mySprite2.setPosition(randint(8, 152), randint(8, 112))
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(12)
mySprite = sprites.create(assets.image`T`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . b 5 5 5 b . . . . . 
    . . . . . b b 5 5 5 b b . . . . 
    . . b b b b 5 5 5 1 1 b b b b . 
    . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b d d 5 5 5 5 5 d d b . . 
    . . . c b 5 5 5 5 5 5 5 b c . . 
    . . . c b 5 5 5 5 5 5 5 b c . . 
    . . . c 5 5 d d b d d 5 5 c . . 
    . . . c 5 d d c c c d d 5 c . . 
    . . . c c c c . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . b 5 5 5 b . . . . . 
    . . . . . b b 5 5 5 b b . . . . 
    . . b b b b 5 5 5 1 1 b b b b . 
    . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b d d 5 5 5 5 5 d d b . . 
    . . . c b 5 5 5 5 5 5 5 b c . . 
    . . . c b 5 5 5 5 5 5 5 b c . . 
    . . . c 5 5 d d b d d 5 5 c . . 
    . . . c 5 d d c c c d d 5 c . . 
    . . . c c c c . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b 5 5 b . . . . . . 
    . . . b b b 5 5 1 1 b b b . . . 
    . . . b 5 5 5 5 1 1 5 5 b . . . 
    . . . . b d 5 5 5 5 d b . . . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . c 5 d d d d 5 c . . . . 
    . . . . c 5 d c c d 5 c . . . . 
    . . . . c c c . . c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . e e e e . . . . . . 
    . . . . . . d d d e . . . . . . 
    . . . . . . e d e d e . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . d . . . . d . . . . . . . 
    . . . 8 . . 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . . . 8 8 8 8 . . 8 . . . 
    . . . . . . 8 8 8 8 . . d . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e . . e . . . . . . 
    . . . . . . e . . e . . . . . . 
    . . . . . . e . . e e f . . . . 
    . . . . . . e . . . . f . . . . 
    . . . . . f f . . . . . . . . . 
    `,img`
    . . . . . . e e e e . . . . . . 
    . . . . . . d d d e . . . . . . 
    . . . . . . e d e d e . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . . . d . . . d . . . 
    . . . . . . 8 8 8 8 . . 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 . . 8 8 8 8 . . . . . . 
    . . . d . . 8 8 8 8 . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . e e f . e . . . . . . 
    . . . . . . . f . e . . . . . . 
    . . . . . . . . f f . . . . . . 
    `],
200,
true
)
mySprite2.setPosition(randint(8, 152), randint(8, 112))
info.setScore(0)
