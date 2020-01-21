namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 6 . . . . . . . 
. . . . . . 5 6 6 2 6 . . . . . 
. . . . . . 5 6 6 6 2 . . . . . 
. . . . . . 5 5 6 . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
2 2 4 5 2 2 2 5 2 2 5 4 2 2 2 5 
5 4 4 2 2 5 2 4 2 2 2 4 5 2 2 2 
2 4 2 4 4 2 2 4 5 2 2 4 4 2 2 2 
2 4 5 2 4 4 2 4 2 2 2 4 2 4 4 2 
2 4 2 2 2 4 5 4 4 2 4 5 2 5 4 4 
2 4 2 2 2 5 4 5 4 4 4 2 5 2 2 4 
4 4 5 2 2 4 4 2 2 5 4 4 2 5 2 4 
4 2 4 4 2 2 4 4 2 2 4 4 4 2 5 4 
2 2 4 4 2 2 2 4 4 4 2 2 4 4 4 4 
2 4 4 4 2 2 2 2 4 4 2 2 4 4 2 2 
2 4 2 4 4 2 2 4 4 4 2 2 4 4 2 2 
2 4 2 2 4 4 2 4 2 2 2 4 4 2 2 2 
2 f 2 2 2 4 4 4 2 2 4 4 2 2 2 f 
f 4 2 2 f 4 4 f 2 4 f f 2 2 f 2 
f f 2 f f 2 f f f 4 f 2 f f 2 f 
2 f f f 2 f f 4 2 f 2 f f f f 2 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    for (let fish of sprites.allOfKind(SpriteKind.Food)) {
        info.changeScoreBy(1)
        fish.destroy(effects.spray, 500)
        music.baDing.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false)
})
let fish: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`280008000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000004050000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000005040505000000000c0000000c0000000000000000000000000000000c000200000000000c0000000000000000000c0000000505040500000000000000000c0000000005040505000000000504050000000c00000000040000000000000000000000000005050405000000000000000000000000000000000504050500000000000000000000000000000000000000000000000000000c05050505050505050505050505050303030305050505050505050505050505050505050505050505`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 
. . . . 2 2 2 . . . . . . . . 2 . . . . . . . . . . . . . 2 2 2 2 . . . . . . . 
. . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath3,myTiles.tile3],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(9)
let myCorg = corgio.create(SpriteKind.Player)
let fishList: Sprite[] = []
for (let value of tiles.getTilesByType(myTiles.tile3)) {
    fish = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`, SpriteKind.Food)
    tiles.placeOnTile(fish, value)
    fishList.push(fish)
}
fishList = sprites.allOfKind(SpriteKind.Food)
myCorg.horizontalMovement()
myCorg.verticalMovement(true)
myCorg.updateSprite()
myCorg.follow()
