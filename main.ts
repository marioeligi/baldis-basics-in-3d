namespace SpriteKind {
    export const Notebook = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Notebook, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite4 = Render.getRenderSpriteVariable()
    Render.setViewAngleInDegree(Render.getAttribute(Render.attribute.fov) + 180)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Render.setViewAngleInDegree(Render.getAttribute(Render.attribute.fov) - 180)
})
let mySprite4: Sprite = null
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
    . . . e e . e e . . . 
    `, SpriteKind.Player)
let mySprite = Render.getRenderSpriteVariable()
Render.setViewMode(ViewMode.raycastingView)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 7))
Render.moveWithController(2, 4)
let mySprite2 = sprites.create(img`
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
tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 7))
Render.setZOffset(mySprite, 1)
forever(function () {
    if (info.score() == 2) {
        if (mad_baldi == 0) {
            mad_baldi = 1
            animation.runImageAnimation(
            mySprite3,
            [img`
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
                . . . e e . e e . . . 
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
            for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
                tiles.setWallAt(value, false)
            }
            mySprite3.follow(mySprite, 10)
        }
    }
})
