controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    biden.setImage(img`
        . . . . b b b b b b b b b . . . 
        . . . b b b b b b b b b b b . . 
        . . b d d d d d d d d d d d b . 
        . . . d d d d f d d d f d d . . 
        . . . d d d d d d d d d d d . . 
        . . . d d f d d d d d d f d . . 
        . . . d d d f f f f f f d d . . 
        . . . d d d d d d d d d d d . . 
        . . f f f f 1 2 2 1 f f f f f . 
        . . f f f f 1 2 2 1 f f f f f . 
        . . d d f f f 2 2 f f f f d d . 
        . . d d f f f f f f f f f d d . 
        . . d d f f . . . . . f f d d . 
        . . . . f f . . . . . f f f f b 
        . . . . f f . . . . . f f f f b 
        . . . . b b . . . . . . . . . . 
        `)
    pause(500)
    biden.setImage(img`
        . . . . b b b b b b b b b . . . 
        . . . b b b b b b b b b b b . . 
        . . b d d d d d d d d d d d b . 
        . . . d d d d f d d d f d d . . 
        . . . d d d d d d d d d d d . . 
        . . . d d f d d d d d d f d . . 
        . . . d d d f f f f f f d d . . 
        . . . d d d d d d d d d d d . . 
        . . f f f f 1 2 2 1 f f f f f . 
        . . f f f f 1 2 2 1 f f f f f . 
        . . d d f f f 2 2 f f f f d d . 
        . . d d f f f f f f f f f d d . 
        . . d d f f . . . . . f f d d . 
        . . . . f f . . . . . f f . . . 
        . . . . b b . . . . . b b . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbar.value += -1
        pause(1000)
    }
})
let statusbar: StatusBarSprite = null
let biden: Sprite = null
let trump = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 d d f d d f d d 4 . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d f d d d d f d . . . . 
    . . . . d d f f f f d d . . . . 
    . . . f f f 1 2 2 1 f f f . . . 
    . . . f f f 1 2 2 1 f f f . . . 
    . . . d d f f 2 2 f f d d . . . 
    . . . d d f f f f f f d d . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . b b . . b b . . . . . 
    `, SpriteKind.Player)
biden = sprites.create(img`
    . . . . b b b b b b b b b . . . 
    . . . b b b b b b b b b b b . . 
    . . b d d d d d d d d d d d b . 
    . . . d d d d f d d d f d d . . 
    . . . d d d d d d d d d d d . . 
    . . . d d f d d d d d d f d . . 
    . . . d d d f f f f f f d d . . 
    . . . d d d d d d d d d d d . . 
    . . f f f f 1 2 2 1 f f f f f . 
    . . f f f f 1 2 2 1 f f f f f . 
    . . d d f f f 2 2 f f f f d d . 
    . . d d f f f f f f f f f d d . 
    . . d d f f . . . . . f f d d . 
    . . . . f f . . . . . f f . . . 
    . . . . b b . . . . . b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.max = 50
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setLabel("")
tiles.placeOnRandomTile(trump, sprites.dungeon.stairNorth)
tiles.placeOnRandomTile(biden, sprites.dungeon.stairNorth)
trump.setPosition(126, 83)
scene.cameraFollowSprite(biden)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101020202020202020101010101010101020202020202020202010101010101010405040504050405040106010101010104050405040504050401010101010601040504050405040504010101010101010303030303030303030101010101010103030303030303030301010101010101030303030303030303010101010101010101010202020101010101060101010101010102020201010101010101010101010101020202010101010101010101060101010202020101010101010101010101010102020201010106010101010101010101020202010101010101010101010101010202020101010101010101010101010102020201010101010101`, img`
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 . 2 . 2 . 2 . 2 . . . . 
    . . . 2 . 2 . 2 . 2 . 2 . . . . 
    . . . 2 . 2 . 2 . 2 . 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.dungeon.floorLight0,sprites.dungeon.stairNorth,sprites.dungeon.floorLight2,sprites.builtin.brick,sprites.castle.tileGrass2], TileScale.Sixteen))
controller.moveSprite(biden)
forever(function () {
    if (statusbar.value == 0) {
        game.splash("trump wants to leave!")
        pause(5000)
        game.over(true)
    }
})
