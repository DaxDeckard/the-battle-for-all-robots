let _013 = sprites.create(assets.image`0-13`, SpriteKind.Player)
controller.moveSprite(_013, 100, 0)
_013.ay = 200
scene.cameraFollowSprite(_013)
tiles.setTilemap(tilemap`level2`)
