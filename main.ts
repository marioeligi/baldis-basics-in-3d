namespace SpriteKind {
    export const Notebook = SpriteKind.create()
    export const quarterr = SpriteKind.create()
    export const scissorss = SpriteKind.create()
    export const soda = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Notebook, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.quarterr, function (sprite, otherSprite) {
    otherSprite.destroy()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (yeah == 1) {
        game.over(false)
    }
})
let rev: tiles.Location[] = []
let mySprite5: Sprite = null
let yeah = 0
let BSODA: Sprite = null
let scsrs: Sprite = null
let qrtr: Sprite = null
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`level3`)
let mad_baldi = 0
info.setScore(0)
let mySprite3 = sprites.create(img`
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
let mySprite = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.raycastingView)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 16))
Render.moveWithController(2, 4)
Render.setZOffset(mySprite, 1)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(2, 16))
Loaditems()
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
            mySprite3,
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
            tiles.placeOnTile(mySprite3, tiles.getTileLocation(12, 16))
        }
    }
    if (info.score() == 11) {
        game.over(true)
    }
})
forever(function () {
    if (yeah == 1) {
        rev = scene.aStar(mySprite3.tilemapLocation(), mySprite.tilemapLocation())
        scene.followPath(mySprite3, rev, (info.score() - 1) * 10)
        pause(5000)
    }
})
