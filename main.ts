namespace SpriteKind {
    export const Notebook = SpriteKind.create()
    export const quarterr = SpriteKind.create()
    export const scissorss = SpriteKind.create()
    export const soda = SpriteKind.create()
    export const riunning = SpriteKind.create()
    export const playyyy = SpriteKind.create()
    export const roebot = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Notebook, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (cameraplayer.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
        info.changeScoreBy(1)
        tiles.setWallAt(cameraplayer.tilemapLocation(), true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.roebot, function (sprite, otherSprite) {
    if (prize_push_period != 0) {
        if (!(false)) {
            prize_push_period = 0
            tiles.placeOnTile(sprite, otherSprite.tilemapLocation())
            music.baDing.play()
        }
    }
    pause(3000)
    prize_push_period = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewAngle(0 - Render.getAttribute(Render.attribute.dirX), 0 - Render.getAttribute(Render.attribute.dirY))
})
scene.onPathCompletion(SpriteKind.riunning, function (sprite, location) {
    principal = scene.aStar(location, list[randint(0, 18)])
    scene.followPath(principle, principal)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Render.setViewAngle(0 - Render.getAttribute(Render.attribute.dirX), 0 - Render.getAttribute(Render.attribute.dirY))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.quarterr, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(true)
})
scene.onPathCompletion(SpriteKind.playyyy, function (sprite, location) {
    ppp = scene.aStar(location, list[randint(0, 18)])
    scene.followPath(playtime, ppp)
})
function Loaditems () {
    mySprite2 = sprites.create(img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile1`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile8`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile6`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile9`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile7`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        `, SpriteKind.Notebook)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile3`)
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        qrtr = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . b b b b b b b b b b . . . 
            . . . b b b b b b b b b b . . . 
            . . . b b b b b b b b b b . . . 
            . . . b b b b b b b b b b . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.quarterr)
        tiles.placeOnTile(qrtr, value)
        tiles.setTileAt(qrtr.tilemapLocation(), assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        scsrs = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 3 . . . . . . 3 3 3 . . . 
            . 3 3 3 3 . . . . 3 3 . 3 3 . . 
            . . . 3 3 3 3 . 3 3 . . . 3 3 . 
            . . . . . 3 3 3 3 3 3 3 3 3 . . 
            . . . . . 3 3 3 3 3 3 3 3 3 . . 
            . . . 3 3 3 3 . 3 3 . . . 3 3 . 
            . 3 3 3 3 . . . . 3 3 . 3 3 . . 
            . 3 3 3 . . . . . . 3 3 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.scissorss)
        tiles.placeOnTile(scsrs, value)
        tiles.setTileAt(scsrs.tilemapLocation(), assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        BSODA = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 1 8 8 1 1 8 8 . . . . 
            . . . . 8 1 1 1 1 1 1 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 1 1 1 1 1 1 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 1 1 1 1 1 1 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.soda)
        tiles.placeOnTile(BSODA, value)
        tiles.setTileAt(BSODA.tilemapLocation(), assets.tile`transparency16`)
    }
}
scene.onPathCompletion(SpriteKind.roebot, function (sprite, location) {
    prizeeroadcar = scene.aStar(location, list[randint(0, 18)])
    scene.followPath(prize, prizeeroadcar)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (yeah == 1) {
        game.over(false)
    }
})
let rev: tiles.Location[] = []
let mySprite5: Sprite = null
let yeah = 0
let prize: Sprite = null
let prizeeroadcar: tiles.Location[] = []
let BSODA: Sprite = null
let scsrs: Sprite = null
let qrtr: Sprite = null
let mySprite2: Sprite = null
let ppp: tiles.Location[] = []
let principal: tiles.Location[] = []
let cameraplayer: Sprite = null
let playtime: Sprite = null
let principle: Sprite = null
let list: tiles.Location[] = []
let prize_push_period = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
prize_push_period = 1
list = [
tiles.getTileLocation(2, 4),
tiles.getTileLocation(2, 16),
tiles.getTileLocation(2, 26),
tiles.getTileLocation(12, 4),
tiles.getTileLocation(12, 13),
tiles.getTileLocation(12, 16),
tiles.getTileLocation(12, 19),
tiles.getTileLocation(12, 21),
tiles.getTileLocation(17, 13),
tiles.getTileLocation(17, 8),
tiles.getTileLocation(17, 13),
tiles.getTileLocation(22, 4),
tiles.getTileLocation(22, 8),
tiles.getTileLocation(22, 19),
tiles.getTileLocation(27, 11),
tiles.getTileLocation(30, 19),
tiles.getTileLocation(30, 26),
tiles.getTileLocation(17, 4)
]
principle = sprites.create(img`
    . . . . e e e . . . . 
    . . . e d d d e . . . 
    . . . d f d f d . . . 
    d . . d d d d d . . . 
    f . . d d f d d . . . 
    f . . . d d d . . . . 
    f . f f f f f f f . . 
    . f . f f f f f . f . 
    . . . f f f f f . f . 
    . . . f f f f f . . f 
    . . . f f f f f . . f 
    . . . f f f f f . . d 
    . . . c c c c c . . . 
    . . . c c c c c . . . 
    . . . c c . c c . . . 
    . . . c c . c c . . . 
    `, SpriteKind.riunning)
principle.destroy()
tiles.setCurrentTilemap(tilemap`level3`)
let mad_baldi = 0
info.setScore(0)
let baldi = sprites.create(img`
    . . . . . e . . . . . 
    . . . . d e d . . . . 
    . . . d f d f d . . . 
    . . . d d d d d . . . 
    . . . d 2 d 2 d . . . 
    . . . . d 2 d . . . . 
    . . 7 7 7 7 7 7 7 . . 
    . 7 . 7 7 7 7 7 . 7 . 
    . 7 . 7 7 7 7 7 . 7 . 
    7 . . 7 7 7 7 7 . . 7 
    7 . . 7 7 7 7 7 . . 7 
    d . . 7 7 7 7 7 . . d 
    . . . 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 . . . 
    . . . 8 8 . 8 8 . . . 
    . . . 8 8 . 8 8 . . . 
    `, SpriteKind.Enemy)
playtime = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.playyyy)
playtime.destroy()
cameraplayer = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.raycastingView)
tiles.placeOnTile(cameraplayer, tiles.getTileLocation(1, 16))
Render.moveWithController(2, 4)
Render.setZOffset(cameraplayer, 1)
tiles.placeOnTile(baldi, tiles.getTileLocation(2, 16))
Loaditems()
game.onUpdate(function () {
	
})
forever(function () {
    if (info.score() == 1) {
        if (mad_baldi != 0) {
            mad_baldi = 0
            mySprite5 = sprites.create(img`
                . . . b b b . . . . . . . . . . 
                . b b b b b b b . . . . . . . . 
                . b b b b b b b . . . . . . . . 
                b b b b b b b b b . . . . . . . 
                b b b b b b b b b . . . . . . . 
                b b b b b b b b b . . . . . . . 
                . b b b b b b b . . . . . . . . 
                . b b b b b b b . . . . . . . . 
                . . . b b b . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.quarterr)
            tiles.placeOnTile(mySprite5, tiles.getTileLocation(3, 16))
        }
    }
    if (info.score() == 2) {
        if (mad_baldi != 1) {
            yeah = 1
            mad_baldi = 1
            animation.runImageAnimation(
            baldi,
            [img`
                . . . . . e . . . . . 
                . . . . d e d . . . 5 
                . . . d f d f d . . 5 
                . . . d d d d d . . 5 
                . . . d 2 2 2 d . . 5 
                . . . . d d d . . . 5 
                . . 7 7 7 7 7 7 7 . 5 
                . 7 . 7 7 7 7 7 . 7 5 
                . 7 . 7 7 7 7 7 . 7 5 
                7 . . 7 7 7 7 7 . . 5 
                7 . . 7 7 7 7 7 . . 5 
                d . . 7 7 7 7 7 . . 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e 5 . . . . 
                . . . d f d 5 d . . . 
                . . . d d d 5 d . . . 
                . . . d 2 2 2 5 . . . 
                . . . . d d d 5 . . . 
                . . 7 7 7 7 7 7 5 . . 
                . 7 . 7 7 7 7 7 5 7 . 
                . 7 . 7 7 7 7 7 . 5 . 
                7 . . 7 7 7 7 7 . 5 . 
                7 . . 7 7 7 7 7 . . 5 
                d . . 7 7 7 7 7 . . 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                5 . . . d e d . . . . 
                . 5 . d f d f d . . . 
                . . 5 d d d d d . . . 
                . . . 5 2 2 2 d . . . 
                . . . . 5 d d . . . . 
                . . 7 7 7 5 7 7 7 . . 
                . 7 . 7 7 7 5 7 . 7 . 
                . 7 . 7 7 7 7 5 . 7 . 
                7 . . 7 7 7 7 7 5 . . 
                7 . . 7 7 7 7 7 . 5 . 
                d . . 7 7 7 7 7 . . 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                5 5 . 7 7 7 7 7 . 7 . 
                7 . 5 5 5 7 7 7 . . 7 
                7 . . 7 7 5 5 5 . . 7 
                d . . 7 7 7 7 7 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                5 5 5 7 7 7 7 7 . . 7 
                7 . . 5 5 5 5 7 . . 7 
                d . . 7 7 7 7 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `,img`
                . . . . . e . . . . . 
                . . . . d e d . . . . 
                . . . d f d f d . . . 
                . . . d d d d d . . . 
                . . . d 2 2 2 d . . . 
                . . . . d d d . . . . 
                . . 7 7 7 7 7 7 7 . . 
                . 7 . 7 7 7 7 7 . 7 . 
                . 7 . 7 7 7 7 7 . 7 . 
                7 . . 7 7 7 7 7 . . 7 
                7 . . 7 7 7 7 7 . . 7 
                5 5 5 5 5 5 5 5 5 5 5 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 8 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                . . . 8 8 . 8 8 . . . 
                `],
            100,
            true
            )
            for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
                tiles.setWallAt(value, false)
            }
            tiles.placeOnTile(baldi, tiles.getTileLocation(12, 16))
            principle = sprites.create(img`
                . . . . e e e . . . . 
                . . . e d d d e . . . 
                . . . d f d f d . . . 
                d . . d d d d d . . . 
                f . . d d f d d . . . 
                f . . . d d d . . . . 
                f . f f f f f f f . . 
                . f . f f f f f . f . 
                . . . f f f f f . f . 
                . . . f f f f f . . f 
                . . . f f f f f . . f 
                . . . f f f f f . . d 
                . . . c c c c c . . . 
                . . . c c c c c . . . 
                . . . c c . c c . . . 
                . . . c c . c c . . . 
                `, SpriteKind.riunning)
            tiles.placeOnTile(principle, tiles.getTileLocation(12, 16))
            principal = scene.aStar(principle.tilemapLocation(), principle.tilemapLocation())
            scene.followPath(principle, principal)
            playtime = sprites.create(img`
                . . . f f f f f f f . . . . . 
                . f f f . f f d f f f . . . . 
                d f . . . d d d d d f f . . . 
                d d 2 . . d f d f d . f f . . 
                . 2 2 2 . . d d d d . . . f . 
                . . 2 2 2 2 2 2 2 2 2 2 . f f 
                . . . 2 2 2 2 2 2 2 2 2 2 . f 
                . . . . 2 2 2 2 2 2 . 2 2 2 f 
                . . . 2 2 2 2 2 2 2 . . 2 d f 
                . e . 2 2 2 2 2 2 2 . . . d d 
                . e e 8 2 2 2 2 2 2 . . . . . 
                . e e 8 8 2 2 2 2 2 . . . . . 
                . e e . . 8 8 2 2 2 . . . . . 
                . . . . . . . 8 8 8 . . . . . 
                . . . . . . . . e e e . . . . 
                . . . . . . . . e e e e . . . 
                `, SpriteKind.playyyy)
            tiles.placeOnTile(principle, tiles.getTileLocation(12, 16))
            ppp = scene.aStar(principle.tilemapLocation(), principle.tilemapLocation())
            scene.followPath(playtime, ppp)
            prize = sprites.create(img`
                . . . . . . d d d . . . . . . 
                . . . . . d f d 1 d . . . . . 
                . . . . . d d d d d . . . . . 
                . . . . . d 2 2 2 d . . . . . 
                . d d d . 9 d d d 9 . d d d . 
                . d d d 9 . . . . . 9 d d d . 
                . d d d 9 9 9 9 9 9 9 d d d . 
                . . . 9 9 . . . . . 9 9 . . . 
                . . . 9 . 9 2 . 2 9 . 9 . . . 
                . . . 9 . 2 2 2 9 2 . 9 . . . 
                . . . 9 9 2 2 9 2 2 9 9 . . . 
                . . . 9 . . 9 2 2 . . 9 . . . 
                . . . 9 . 9 . 2 . 9 . 9 . . . 
                f f f 9 9 . . . . . 9 9 f f f 
                f f f 9 9 9 9 9 9 9 9 9 f f f 
                f f f . . . . . . . . . f f f 
                `, SpriteKind.roebot)
            tiles.placeOnTile(prize, tiles.getTileLocation(12, 16))
            prizeeroadcar = scene.aStar(principle.tilemapLocation(), principle.tilemapLocation())
            scene.followPath(prize, prizeeroadcar, 50)
        }
    }
    if (info.score() == 10) {
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            tiles.setWallAt(value, false)
        }
    }
    if (info.score() == 7) {
        for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
            tiles.setWallAt(value, false)
        }
    }
})
forever(function () {
    if (yeah == 1) {
        rev = scene.aStar(baldi.tilemapLocation(), cameraplayer.tilemapLocation())
        scene.followPath(baldi, rev, (info.score() - 1) * 10)
        pause(5000)
    }
})
