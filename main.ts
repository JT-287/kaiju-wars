namespace SpriteKind {
    export const citizen = SpriteKind.create()
    export const body = SpriteKind.create()
    export const kaiju = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, assets.tile`myTile10`)
        info.changeScoreBy(-1)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 1) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . b b b b b b b b . . . . . . 
            . . . . c c c b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . b b b b b b . . . . . . 
            . . c c c c c b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `],
        100,
        false
        )
    } else if (direction == 2) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b b b b . . 
            . . b b b b c c c b b b b b . . 
            . . b b c b b b b b c b b b . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . c b b b c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . b b b b . b b b . b . . . . . 
            . b b b b b c c c b b b b . . . 
            . b b b c b b b b b c b b . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . c b b b c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `],
        100,
        false
        )
    } else if (direction == 3) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b b b b b b . . 
            . . . . . . b b b c c c . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . . b b b c c c c c . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `],
        100,
        false
        )
    } else if (direction == 4) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . b b b c b b 4 b b c b b . . . 
            . b b b . b b b b b . b b . . . 
            . b b b . b b 4 b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . c b b b c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . b b c b b 4 b b c b b b . . 
            . . b b . b b b b b . b b b . . 
            . . . . . b b 4 b b . b b b . . 
            . . . . . . b b b . . . . . . . 
            . . . . . c b b b c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `],
        100,
        false
        )
    } else {
    	
    }
    music.play(music.createSoundEffect(WaveShape.Noise, 3272, 2457, 255, 0, 339, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
scene.onHitWall(SpriteKind.kaiju, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`myTile10`)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 1) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . b b b . . . . . . 
            . 9 . . . . 5 1 5 b b . . . . . 
            . . 9 . . . 5 1 b b b . . . . . 
            . . . 1 . . b b b b b . . . . . 
            . . . . c . . b b b . . . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . 8 . . . . 5 1 5 b b . . . . . 
            8 . . . . . 5 1 b b b . . . . . 
            8 . . . . . b b b b b . . . . . 
            6 . . . . . . b b b . . . . . . 
            6 . . . . . b b b b b . . . . . 
            . 9 9 1 c b b b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            8 . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            8 . . . . . b b b b . . . . . . 
            8 . . . . b . b b b . . . . . . 
            8 . . . c . . b b b . . . . . . 
            6 . . 1 . . . . b . . . . . . . 
            6 . 9 . . . . . b . . . . . . . 
            . 9 . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b c b . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `],
        100,
        false
        )
    } else if (direction == 2) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . 9 . . b b b . . . . . . . 
            . . . 9 . b b b b b . . . . . . 
            . . . 1 . b b b b b . . . . . . 
            . . . c . b b b b b . . . . . . 
            . . . b b . b b b . b . . . . . 
            . . . b b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . . . b b b b b . b . . . . 
            . . . . . b b b b b . b . . . . 
            . . . . . . b b b . . c . . . . 
            . . . . . c b b b c . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . 8 . b b b b b . . . . . . 
            . . . 8 . b b b b b . . . . . . 
            . . . 8 b . b b b . b . . . . . 
            . . . 6 b b c c c b b . . . . . 
            . . . 6 c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . 1 . b b b b b . b . . . . 
            . . . . . . b b b . . c . . . . 
            . . . . . c b b b c . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . 1 . c b b b c . b . . . . 
            . . . 9 . b . . . b . b . . . . 
            . . . 9 . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `],
        100,
        false
        )
    } else if (direction == 3) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . 9 . 
            . . . . . b b b 1 5 . . . 9 . . 
            . . . . . b b b b b . . 1 . . . 
            . . . . . . b b b . . c . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . 8 . 
            . . . . . b b b 1 5 . . . . . 8 
            . . . . . b b b b b . . . . . 8 
            . . . . . . b b b . . . . . . 6 
            . . . . . b b b b b . . . . . 6 
            . . . . . . b b b b b c 1 9 9 . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . 8 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b b . . . . . 8 
            . . . . . . b b b . b . . . . 8 
            . . . . . . b b b . . c . . . 8 
            . . . . . . . b . . . . 1 . . 6 
            . . . . . . . b . . . . . 9 . 6 
            . . . . . . . b . . . . . . 9 . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `],
        100,
        false
        )
    } else if (direction == 4) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . 9 . . b b b . . . . . . . 
            . . . 9 . b 1 5 5 b . . . . . . 
            . . . 1 . b 5 5 5 b . . . . . . 
            . . . c . b b 5 b b . . . . . . 
            . . . b b . b b b . b . . . . . 
            . . . b b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . . . b b b b b . b . . . . 
            . . . . . b b 4 b b . b . . . . 
            . . . . . . b b b . . c . . . . 
            . . . . . c b b b c . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . 8 . b 5 5 5 b . . . . . . 
            . . . 8 . b b 5 b b . . . . . . 
            . . . 8 b . b b b . b . . . . . 
            . . . 6 b b c c c b b . . . . . 
            . . . 6 c b b 4 b b c b . . . . 
            . . . 9 . b b b b b . b . . . . 
            . . . 1 . b b 4 b b . b . . . . 
            . . . . . . b b b . . c . . . . 
            . . . . . c b b b c . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . 1 . c b b b c . b . . . . 
            . . . 9 . b . . . b . b . . . . 
            . . . 9 . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `],
        100,
        false
        )
    } else {
    	
    }
    music.play(music.createSoundEffect(WaveShape.Noise, 3272, 2457, 255, 0, 339, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 50, function (status) {
    mySprite2.startEffect(effects.fire, 5000)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(statusbar2.spriteAttachedTo(), effects.halo, 100)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.setGameOverMessage(false, "you have been defeated")
    game.setGameOverEffect(false, effects.slash)
    game.gameOver(false)
    game.reset()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 4
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kaiju, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbar2.value += -3
        otherSprite.startEffect(effects.disintegrate, 100)
    } else if (controller.B.isPressed()) {
        statusbar2.value += -1
        otherSprite.startEffect(effects.disintegrate, 100)
    } else {
    	
    }
})
sprites.onDestroyed(SpriteKind.kaiju, function (sprite) {
    info.changeScoreBy(5)
    mySprite4 = sprites.create(img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `, SpriteKind.kaiju)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile`)
    characterAnimations.loopFrames(
    mySprite4,
    [img`
        ........................
        ........................
        ...........cc...........
        .........cccc...........
        .....ccccccc...cc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bcc.....
        c5555555555555555b......
        .cbb31bb55555d555b..c...
        .c5333bb55ddddd55dccc...
        .c533b55ddddddddddbc....
        .c5555ddddb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bcdddddddbcccc
        .....cbbccbd55dddddddddc
        .....ccbbbd555ddddddddbc
        ...ccbdcbb555ddbbdddbcc.
        ...cbdddcc55ddbbbbccc...
        ...cccccccbdddbccc......
        ........cd555ddc........
        `,img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccbddddddddcc...
        ..c55cbbbbd55dddddddbcc.
        ...c5ccbbd555dddddddddcc
        ....cccbb555ddbbbddddddc
        ......ccb55ddbbbbddddcc.
        ....ccddcbdddbbbbbccc...
        ....ccccd555ddccccc.....
        ........cccccc..........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccdddddddddcccc.
        ..c55cbbbd55ddddddddcdc.
        ...c5cccd555ddddddddddc.
        ....cc555d5ddbbbbddddbc.
        ......5555ddbbbbbdddbc..
        ......c5555dbbbbbbccc...
        .......c555cccccccc.....
        ........ccc.............
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb555555bdddddcc...
        ....ccb5555ccddddddccc..
        ..ccccbcccbddddddddccdc.
        ..c55cbbbbdddddddddbddc.
        ...c5cbbbd55ddddddddddc.
        ....cccbdd55dbbbbddddbc.
        .....cccd555dbbbbdddbc..
        .....c555dddbbbbbbccc...
        .....c55555dbcccccc.....
        ......c5555cc...........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc..cc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddd5ddcc....
        .c5555ddddb55bddddb.....
        ..ccccbbbbb55bdddddccc..
        ..ccccbc5555bddddddcccc.
        ..c55cbc555cdddddddccdc.
        ...c5cbbcccdddddddddddc.
        ....cccbbbbd55dddddddbc.
        ....cbcbbbd555ddddddbcc.
        .....cccbb555dbbbddccc..
        .......cc555dbbbbbcc....
        .......cbddddbcccc......
        ......cd5555dc..........
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite4,
    [img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `,img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        .ccccdddddddddcccbcccc..
        .cdcdddddddd55dbbbc55c..
        .cdddddddddd555dccc5c...
        .cbddddbbbbdd5d555cc....
        ..cbdddbbbbbdd5555......
        ...cccbbbbbbd5555c......
        .....cccccccc555c.......
        .............ccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddb555555bccc...
        ..cccddddddcc5555bcc....
        .cdccddddddddbcccbcccc..
        .cddbdddddddddbbbbc55c..
        .cdddddddddd55dbbbc5c...
        .cbddddbbbbd55ddbccc....
        ..cbdddbbbbd555dccc.....
        ...cccbbbbbbddd555c.....
        .....ccccccbd55555c.....
        ...........cc5555c......
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    mySprite4.follow(mySprite2, 25)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.setLabel("kaiju")
    statusbar2.attachToSprite(mySprite4)
})
let direction = 0
let statusbar2: StatusBarSprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
story.printText("KAIJU WARS", 80, 11, 9, 0, story.TextSpeed.VerySlow)
story.printText("by JT Games", 80, 11, 9, 0, story.TextSpeed.VerySlow)
story.printText("the year is 2045, and a viscous force has arisen", 80, 11, 9, 0, story.TextSpeed.Normal)
story.printText("Kaiju, titan like creatures that will show no mercy until humanity is wiped from the face of the earth", 80, 11, 9, 0, story.TextSpeed.Normal)
story.printText("your mission is to pilot a giant mech to fight of the oncoming beasts", 80, 11, 9, 0, story.TextSpeed.Normal)
story.printText("we belive in you...", 80, 11, 9, 0, story.TextSpeed.Normal)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.createSong(hex`0078000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000000010001000400050001030800090001000c000d0001001000110001001400150001031800190001001c001d000100`), music.PlaybackMode.LoopingInBackground)
color.startFade(color.Black, color.originalPalette, 2000)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite2 = sprites.create(img`
    . . . . . . b b b . . . . . . . 
    . . . . . b 1 5 5 b . . . . . . 
    . . . . . b 5 1 5 b . . . . . . 
    . . . . . b b 5 b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b 4 b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b 4 b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . . . c . . . c . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . b b . . . b b . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 30, 30)
scene.cameraFollowSprite(mySprite2)
characterAnimations.loopFrames(
mySprite2,
[img`
    . . . . . . b b b . . . . . . . 
    . . . . . b 1 5 5 b . . . . . . 
    . . . . . b 5 5 5 b . . . . . . 
    . . . . . b b 5 b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b 4 b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b 4 b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . c . b . . . . 
    . . . . . c . . . b . . . . . . 
    . . . . . b . . . b b . . . . . 
    . . . . b b . . . . . . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b 1 5 5 b . . . . . . 
    . . . . . b 5 5 5 b . . . . . . 
    . . . . . b b 5 b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b 4 b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b 4 b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . . . c . . . c . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . b b . . . b b . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b 1 5 5 b . . . . . . 
    . . . . . b 5 5 5 b . . . . . . 
    . . . . . b b 5 b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b 4 b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b 4 b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . c . . . b . b . . . . 
    . . . . . b . . . c . . . . . . 
    . . . . b b . . . b . . . . . . 
    . . . . . . . . . b b . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b 1 5 5 b . . . . . . 
    . . . . . b 5 5 5 b . . . . . . 
    . . . . . b b 5 b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b 4 b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b 4 b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . . . c . . . c . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . b b . . . b b . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
mySprite2,
[img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b b b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . c . b . . . . 
    . . . . . c . . . b . . . . . . 
    . . . . . b . . . b b . . . . . 
    . . . . b b . . . . . . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b b b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . . . c . . . c . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . b b . . . b b . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b b b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . c . . . b . b . . . . 
    . . . . . b . . . c . . . . . . 
    . . . . b b . . . b . . . . . . 
    . . . . . . . . . b b . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . b . b b b . b . . . . . 
    . . . . b b c c c b b . . . . . 
    . . . b c b b b b b c b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . b . b b b b b . b . . . . 
    . . . c . . b b b . . c . . . . 
    . . . b . c b b b c . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . b . b . . . b . b . . . . 
    . . . . . c . . . c . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . b b . . . b b . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite2,
[img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b 5 1 5 . . . . . . 
    . . . . . b b b 1 5 . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b 5 1 5 . . . . . . 
    . . . . . b b b 1 5 . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b c c c b . . . . . . 
    . . . . . . b c b . . . . . . . 
    . . . . . c b b b b . . . . . . 
    . . . . c . b b b . c . . . . . 
    . . . . c . b c b . b . . . . . 
    . . . c . . . b . . . b . . . . 
    . . . c . . c . b . . b . . . . 
    . . . . . . c . b . . . . . . . 
    . . . . . c . . . b . . . . . . 
    . . . . . c . . . b . . . . . . 
    . . . . . c c . . b b . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b 5 1 5 . . . . . . 
    . . . . . b b b 1 5 . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    `,img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b 5 1 5 . . . . . . 
    . . . . . b b b 1 5 . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b c c c b . . . . . . 
    . . . . . . b c b . . . . . . . 
    . . . . . b b b b c . . . . . . 
    . . . . b . b b b . c . . . . . 
    . . . . b . b c b . c . . . . . 
    . . . b . . . b . . . c . . . . 
    . . . b . . b . c . . c . . . . 
    . . . . . . b . c . . . . . . . 
    . . . . . b . . . c . . . . . . 
    . . . . . b . . . c . . . . . . 
    . . . . . b b . . c c . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite2,
[img`
    . . . . . . . b b b . . . . . . 
    . . . . . . 5 1 5 b b . . . . . 
    . . . . . . 5 1 b b b . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . b b . . . . . . . 
    `,img`
    . . . . . . . b b b . . . . . . 
    . . . . . . 5 1 5 b b . . . . . 
    . . . . . . 5 1 b b b . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . b c c c b . . . . . 
    . . . . . . . b c b . . . . . . 
    . . . . . . b b b b c . . . . . 
    . . . . . c . b b b . c . . . . 
    . . . . . b . b c b . c . . . . 
    . . . . b . . . b . . . c . . . 
    . . . . b . . b . c . . c . . . 
    . . . . . . . b . c . . . . . . 
    . . . . . . b . . . c . . . . . 
    . . . . . . b . . . c . . . . . 
    . . . . . b b . . c c . . . . . 
    `,img`
    . . . . . . . b b b . . . . . . 
    . . . . . . 5 1 5 b b . . . . . 
    . . . . . . 5 1 b b b . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . b b . . . . . . . 
    `,img`
    . . . . . . . b b b . . . . . . 
    . . . . . . 5 1 5 b b . . . . . 
    . . . . . . 5 1 b b b . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . b c c c b . . . . . 
    . . . . . . . b c b . . . . . . 
    . . . . . . c b b b b . . . . . 
    . . . . . c . b b b . b . . . . 
    . . . . . c . b c b . b . . . . 
    . . . . c . . . b . . . b . . . 
    . . . . c . . c . b . . b . . . 
    . . . . . . . c . b . . . . . . 
    . . . . . . c . . . b . . . . . 
    . . . . . . c . . . b . . . . . 
    . . . . . c c . . b b . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(52, 64))
mySprite4 = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `, SpriteKind.kaiju)
tiles.placeOnRandomTile(mySprite4, assets.tile`myTile`)
characterAnimations.loopFrames(
mySprite4,
[img`
    ........................
    ........................
    ...........cc...........
    .........cccc...........
    .....ccccccc...cc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555551ff555555bccc.....
    c55d55ff55555555bcc.....
    c5555555555555555b......
    .cbb31bb55555d555b..c...
    .c5333bb55ddddd55dccc...
    .c533b55ddddddddddbc....
    .c5555ddddb55bdddddccc..
    ..ccccbbbb555bdddddccc..
    ...cdcbc5555bddddddcc...
    ....ccbc55bcdddddddbcccc
    .....cbbccbd55dddddddddc
    .....ccbbbd555ddddddddbc
    ...ccbdcbb555ddbbdddbcc.
    ...cbdddcc55ddbbbbccc...
    ...cccccccbdddbccc......
    ........cd555ddc........
    `,img`
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555551ff555555bccc.....
    c55d55ff55555555bc......
    c5555555555555555b......
    .cbb31bb5555dd555b.cc...
    .c5333b555ddddd55dccc...
    .c533b55ddddddddddb.....
    .c5555dddbb55bdddddccc..
    ..ccccbbbb555bdddddccc..
    ...cdcbc5555bddddddcc...
    ....ccbc55bc5ddddddbcccc
    .....cbbcc5555dddddddddc
    .....ccbbb555ddbddddddc.
    .....cdcbc55ddbbbdddcc..
    ...ccdddccddddbcbbcc....
    ...ccccccd555ddccc......
    ........cccccccc........
    `,img`
    ........................
    ..........cc............
    .........ccc............
    .....ccccccc.ccc........
    ...cc555555ccccc........
    ..c5555555555bcc........
    .c55551ff55555b.ccc.....
    c55555ff5555555bccc.....
    c55d555555555555bc......
    c55555bb555555555b.c....
    .cbb31b5555ddd555bcc....
    .c5333b555ddddd55dcc....
    .c533b55ddddddd5ddc.....
    ..c555dbbb555bddddb.c...
    ...cccb55555bbdddddcc...
    ....ccb555ccdddddddcc...
    ..ccccbcccbddddddddcc...
    ..c55cbbbbd55dddddddbcc.
    ...c5ccbbd555dddddddddcc
    ....cccbb555ddbbbddddddc
    ......ccb55ddbbbbddddcc.
    ....ccddcbdddbbbbbccc...
    ....ccccd555ddccccc.....
    ........cccccc..........
    `,img`
    ........................
    ..........cc............
    .........ccc............
    .....ccccccc.ccc........
    ...cc555555ccccc........
    ..c5555555555bcc........
    .c55551ff55555b.ccc.....
    c55555ff5555555bccc.....
    c55d555555555555bc......
    c55555bb555555555b.c....
    .cbb31b5555ddd555bcc....
    .c5333b555ddddd55dcc....
    .c533b55ddddddd5ddc.....
    ..c555dbbb555bddddb.c...
    ...cccb55555bbdddddcc...
    ....ccb555ccdddddddcc...
    ..ccccbcccdddddddddcccc.
    ..c55cbbbd55ddddddddcdc.
    ...c5cccd555ddddddddddc.
    ....cc555d5ddbbbbddddbc.
    ......5555ddbbbbbdddbc..
    ......c5555dbbbbbbccc...
    .......c555cccccccc.....
    ........ccc.............
    `,img`
    ........................
    ..........cc............
    .........ccc............
    .....ccccccc.ccc........
    ...cc555555ccccc........
    ..c5555555555bcc........
    .c55551ff55555b.ccc.....
    c55555ff5555555bccc.....
    c55d555555555555bc......
    c55555bb555555555b.c....
    .cbb31b5555ddd555bcc....
    .c5333b555ddddd55dcc....
    .c533b55ddddddd5ddc.....
    ..c555dbbb555bddddb.c...
    ...cccb555555bdddddcc...
    ....ccb5555ccddddddccc..
    ..ccccbcccbddddddddccdc.
    ..c55cbbbbdddddddddbddc.
    ...c5cbbbd55ddddddddddc.
    ....cccbdd55dbbbbddddbc.
    .....cccd555dbbbbdddbc..
    .....c555dddbbbbbbccc...
    .....c55555dbcccccc.....
    ......c5555cc...........
    `,img`
    ........................
    ..........cc............
    .........ccc............
    .....ccccccc..cc........
    ...cc555555ccccc........
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555551ff555555bccc.....
    c55d55ff55555555bc......
    c5555555555555555b......
    .cbb31bb5555dd555b.cc...
    .c5333b555ddddd55dccc...
    .c533b55ddddddd5ddcc....
    .c5555ddddb55bddddb.....
    ..ccccbbbbb55bdddddccc..
    ..ccccbc5555bddddddcccc.
    ..c55cbc555cdddddddccdc.
    ...c5cbbcccdddddddddddc.
    ....cccbbbbd55dddddddbc.
    ....cbcbbbd555ddddddbcc.
    .....cccbb555dbbbddccc..
    .......cc555dbbbbbcc....
    .......cbddddbcccc......
    ......cd5555dc..........
    `],
200,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite4,
[img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `,img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddbb55555bccc...
    ...ccdddddddcc555bcc....
    ...ccddddddddbcccbcccc..
    .ccbddddddd55dbbbbc55c..
    ccddddddddd555dbbcc5c...
    cddddddbbbdd555bbccc....
    .ccddddbbbbdd55bcc......
    ...cccbbbbbdddbcddcc....
    .....cccccdd555dcccc....
    ..........cccccc........
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddbb55555bccc...
    ...ccdddddddcc555bcc....
    .ccccdddddddddcccbcccc..
    .cdcdddddddd55dbbbc55c..
    .cdddddddddd555dccc5c...
    .cbddddbbbbdd5d555cc....
    ..cbdddbbbbbdd5555......
    ...cccbbbbbbd5555c......
    .....cccccccc555c.......
    .............ccc........
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........cc..ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    ....ccdd5ddddddd55b335c.
    .....bddddb55bdddd5555c.
    ..cccdddddb55bbbbbcccc..
    .ccccddddddb5555cbcccc..
    .cdccdddddddc555cbc55c..
    .cdddddddddddcccbbc5c...
    .cbddddddd55dbbbbccc....
    .ccbdddddd555dbbbcbc....
    ..cccddbbbd555bbccc.....
    ....ccbbbbbd555cc.......
    ......ccccbddddbc.......
    ..........cd5555dc......
    `],
200,
characterAnimations.rule(Predicate.MovingRight)
)
mySprite4.follow(mySprite2, 25)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar2.setLabel("kaiju")
statusbar2.attachToSprite(mySprite4)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . 8 
    . . . . 8 . . . . . . . . . 8 1 
    . . 8 8 8 8 . . . . . . . 8 1 8 
    . 8 1 8 8 1 8 . 8 . . . 8 1 1 . 
    . 1 a 8 8 a 1 6 6 6 . 8 1 8 1 . 
    . 8 8 8 8 8 8 6 6 6 8 1 1 1 . . 
    . . 8 8 8 8 6 6 8 6 6 8 1 . . . 
    . . . . 6 6 6 6 8 6 6 . . . . . 
    . . . . 6 1 1 6 8 6 6 8 . . . . 
    . . . . . 1 1 1 8 6 6 6 8 . . . 
    . . . . . . 1 1 6 6 6 6 6 . 8 . 
    . . . . . 8 . . . . 8 . 6 6 6 6 
    . . . . 8 . . . . 8 . . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . 8 . . . . 8 . . . . . 
    . . . . . . 8 . . . . 8 . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 6 6 6 6 . . . . . . . . . . 
    . . 6 6 6 6 6 . . . . . . . . . 
    . 6 6 6 6 6 6 . . . . . . . . . 
    . . 6 6 6 6 6 6 . . . . . . . . 
    . . . 6 6 6 6 6 6 . . . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(mySprite2.tilemapLocation(), assets.tile`myTile0`)) {
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . c . b . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . c . . . b . b . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . c . b . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . c . . . b . b . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b c c c b . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . c b b b b . . . . . . 
            . . . . c . b b b . c . . . . . 
            . . . . c . b c b . b . . . . . 
            . . . c . . . b . . . b . . . . 
            . . . c . . c . b . . b . . . . 
            . . . . . . c . b . . . . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b c c c b . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . b b b b c . . . . . . 
            . . . . b . b b b . c . . . . . 
            . . . . b . b c b . c . . . . . 
            . . . b . . . b . . . c . . . . 
            . . . b . . b . c . . c . . . . 
            . . . . . . b . c . . . . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b c c c b . . . . . 
            . . . . . . . b c b . . . . . . 
            . . . . . . b b b b c . . . . . 
            . . . . . c . b b b . c . . . . 
            . . . . . b . b c b . c . . . . 
            . . . . b . . . b . . . c . . . 
            . . . . b . . b . c . . c . . . 
            . . . . . . . b . c . . . . . . 
            . . . . . . b . . . c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b c c c b . . . . . 
            . . . . . . . b c b . . . . . . 
            . . . . . . c b b b b . . . . . 
            . . . . . c . b b b . b . . . . 
            . . . . . c . b c b . b . . . . 
            . . . . c . . . b . . . b . . . 
            . . . . c . . c . b . . b . . . 
            . . . . . . . c . b . . . . . . 
            . . . . . . c . . . b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . c . b . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . b . . . b b . . . . . 
            . . . . b b . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . c . . . b . b . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . b b . . . b . . . . . . 
            . . . . . . . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b 1 5 5 b . . . . . . 
            . . . . . b 5 5 5 b . . . . . . 
            . . . . . b b 5 b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b 4 b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b 4 b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . c . b . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . b . . . b b . . . . . 
            . . . . b b . . . . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . c . . . b . b . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . b b . . . b . . . . . . 
            . . . . . . . . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . b . b b b . b . . . . . 
            . . . . b b c c c b b . . . . . 
            . . . b c b b b b b c b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . b . b b b b b . b . . . . 
            . . . c . . b b b . . c . . . . 
            . . . b . c b b b c . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . b . b . . . b . b . . . . 
            . . . . . c . . . c . . . . . . 
            . . . . . b . . . b . . . . . . 
            . . . . b b . . . b b . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b c c c b . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . c b b b b . . . . . . 
            . . . . c . b b b . c . . . . . 
            . . . . c . b c b . b . . . . . 
            . . . c . . . b . . . b . . . . 
            . . . c . . c . b . . b . . . . 
            . . . . . . c . b . . . . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . c . . . b . . . . . . 
            . . . . . c c . . b b . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . b b b . . . . . . . 
            . . . . . b b 5 1 5 . . . . . . 
            . . . . . b b b 1 5 . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . b c c c b . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . b b b b c . . . . . . 
            . . . . b . b b b . c . . . . . 
            . . . . b . b c b . c . . . . . 
            . . . b . . . b . . . c . . . . 
            . . . b . . b . c . . c . . . . 
            . . . . . . b . c . . . . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . . b . . . c . . . . . . 
            . . . . . b b . . c c . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b c c c b . . . . . 
            . . . . . . . b c b . . . . . . 
            . . . . . . b b b b c . . . . . 
            . . . . . c . b b b . c . . . . 
            . . . . . b . b c b . c . . . . 
            . . . . b . . . b . . . c . . . 
            . . . . b . . b . c . . c . . . 
            . . . . . . . b . c . . . . . . 
            . . . . . . b . . . c . . . . . 
            . . . . . . b . . . c . . . . . 
            . . . . . b b . . c c . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `,img`
            . . . . . . . b b b . . . . . . 
            . . . . . . 5 1 5 b b . . . . . 
            . . . . . . 5 1 b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . b c c c b . . . . . 
            . . . . . . . b c b . . . . . . 
            . . . . . . c b b b b . . . . . 
            . . . . . c . b b b . b . . . . 
            . . . . . c . b c b . b . . . . 
            . . . . c . . . b . . . b . . . 
            . . . . c . . c . b . . b . . . 
            . . . . . . . c . b . . . . . . 
            . . . . . . c . . . b . . . . . 
            . . . . . . c . . . b . . . . . 
            . . . . . c c . . b b . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    }
})
game.onUpdateInterval(2000, function () {
    if (mySprite4.overlapsWith(mySprite2)) {
        characterAnimations.loopFrames(
        mySprite4,
        [img`
            ........................
            ........................
            ..........ccc...........
            .........cccc...........
            .....ccccccc..ccc.......
            ...cc555555cccccc.......
            ..c5555555555bcc........
            .c555555555555b..cc.....
            c555551ff555555bccc.....
            c55d55ff55555555bc......
            c5555555555555555b......
            .cbb31bb5555dd555b.cc...
            .c5333b555ddddd55dccc...
            .c533b55ddddddddddb.....
            .c5555dddbb55bdddddccc..
            ..ccccbbbb555bdddddccc..
            ...cdcbc5555bddddddcc...
            ....ccbc55bc5ddddddbcccc
            .....cbbcc5555dddddddddc
            .....ccbbb555ddbddddddc.
            .....cdcbc55ddbbbdddcc..
            ...ccdddccddddbcbbcc....
            ...ccccccd555ddccc......
            ........cccccccc........
            `,img`
            ............ccc.........
            .......cccccccc.........
            .....cc55555cc..cc......
            ....c555555555cccc......
            ...c55555555555bcc......
            ..c555551ff55555b..cc...
            ..c55d55ff5555555bccc...
            ..c55555555d55555bcc....
            ..c5555d5555d55555b.....
            ..cbbbb55555ddd555b.cc..
            ..c555d5555ddddd55dccc..
            ...c555dbbbdddbd5ddcc...
            ....cccbbbbb555bdddb....
            ....cbbbbbbc555bdddccc..
            ...cbbbbbbc555bddddcc...
            ...cbbbbbc555bdddddc....
            ..ccbbbbbc55bddddddcc...
            ..ccbbbbbbcb55dddddbcc..
            ...cbbbbbb5555ddddddddcc
            ....cbbbbb555ddbdddddddc
            ....cccbbc55ddbbbddddcc.
            ...ccdddccddddbcbbccc...
            ...ccccccd555ddccc......
            ........cccccccc........
            `,img`
            .............ccc........
            ........cccccccc........
            ......cc55555cc..cc.....
            .....c555555555cccc.....
            ....c55555555555bcc.....
            ...c555555ccb5555b.cc...
            ...c55d55c55555555bcc...
            ...c55555555dd5555bc....
            ...c5555d5555dd5555.....
            ...cbbbd555555dd555.cc..
            ...c555d555555ddd55ccc..
            ....c555d5555ddbd5dcc...
            ....cccbbbbb555bdddb....
            ...cbbbbbbbc555bdddccc..
            ..cbbbbbbbc555bddddcc...
            ..cbbbbbbc555bdddddc....
            .ccbbbbbbc55bddddddcc...
            .ccbbbbbbbcb55dddddbc...
            ..cbbbbbbb5555ddddddbc..
            ...cbbbbbb555ddbddddddc.
            ....cccbbc55ddbbbddddddc
            ...ccdddccddddbcbbcccccc
            ...ccccccd555ddccc......
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ..........ccc...........
            .........cccc...........
            .....ccccccc..ccc.......
            ...cc555555cccccc.......
            ..c5555555555bcc........
            .c555555555555b..cc.....
            c555555ccb55555bccc.....
            c55d55c555555555bc......
            c5555555555555555b......
            .cbbb1bb5555dd555b.cc...
            .c533bbbb5ddddd55dcc....
            .c533bbbb5ddddddddbcc...
            .c533bbb55dddddddddcccc.
            .c5333bb5bb55bdddddcccdc
            .c5333b5bb555bddddddbddc
            .c53335b5555bddddddddddc
            ..c5555c55bb55dbddddddcc
            ...cccbccc55ddbbbddddcc.
            ....cdddccddddbcbbbcc...
            ....cccccd555ddcccc.....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ..........ccc...........
            .........cccc...........
            .....ccccccc..ccc.......
            ...cc555555cccccc.......
            ..c5555555555bcc........
            .c555555555555b..cc.....
            c555555ccb55555bccc.....
            c55d55c555555555bc......
            c5555555555555555b......
            .cbbb1bb5555dd555b.cc...
            .c533bbbb5ddddd55dcc....
            .c533bbbb5ddddddddbcc...
            .c5333bb55dddddddddcccc.
            .c5333b55bb55bdddddcccdc
            .c533355bb555bddddddbddc
            ..c5555b5555bddddddddddc
            ...cccbc55bb55dbddddddcc
            .....cbbcc55ddbbbddddcc.
            ....cdddccddddbcbbbcc...
            ....cccccd555ddcccc.....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ..........ccc...........
            .........cccc...........
            .....ccccccc..ccc.......
            ...cc555555cccccc.......
            ..c5555555555bcc........
            .c555555555555b..cc.....
            c555555ccb55555bccc.....
            c55d55c555555555bc......
            c5555555555555555b......
            .cbbb1bb5555dd555b.cc...
            .c533bbb55ddddd55dcc....
            .c5333bb5dddddddddbcc...
            .c5333b55ddddddddddcccc.
            .c533355dbb55bdddddcccdc
            ..c55555bb555bddddddbddc
            ...cccbb5555bddddddddddc
            .....cbc55bb55dbddddddcc
            .....cdbcc55ddbbbddddcc.
            ....cdddccddddbcbbbcc...
            ....cccccd555ddcccc.....
            ........cccccccc........
            `],
        100,
        characterAnimations.rule(Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite4,
        [img`
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb555555ff155555c
            ......cb55555555ff55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb13bbc.
            ...cccd55ddddd555b3335c.
            .....bdddddddddd55b335c.
            ..cccdddddb55bbddd5555c.
            ..cccdddddb555bbbbcccc..
            ...ccddddddb5555cbcdc...
            ccccbdddddd5cb55cbcc....
            cddddddddd5555ccbbc.....
            .cddddddbdd555bbbcc.....
            ..ccdddbbbdd55cbcdc.....
            ....ccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            .........ccc............
            .........cccccccc.......
            ......cc..cc55555cc.....
            ......cccc555555555c....
            ......ccb55555555555c...
            ...cc..b55555ff155555c..
            ...cccb5555555ff55d55c..
            ....ccb55555d55555555c..
            .....b55555d5555d5555c..
            ..cc.b555ddd55555bbbbc..
            ..cccd55ddddd5555d555c..
            ...ccdd5dbdddbbbd555c...
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbc....
            ...ccddddb555cbbbbbbc...
            ....cdddddb555cbbbbbc...
            ...ccddddddb55cbbbbbcc..
            ..ccbddddd55bcbbbbbbcc..
            ccdddddddd5555bbbbbbc...
            cdddddddbdd555bbbbbc....
            .ccddddbbbdd55cbbccc....
            ...cccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            ........ccc.............
            ........cccccccc........
            .....cc..cc55555cc......
            .....cccc555555555c.....
            .....ccb55555555555c....
            ...cc.b5555bcc555555c...
            ...ccb55555555c55d55c...
            ....cb5555dd55555555c...
            .....5555dd5555d5555c...
            ..cc.555dd555555dbbbc...
            ..ccc55ddd555555d555c...
            ...ccd5dbdd5555d555c....
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbbc...
            ...ccddddb555cbbbbbbbc..
            ....cdddddb555cbbbbbbc..
            ...ccddddddb55cbbbbbbcc.
            ...cbddddd55bcbbbbbbbcc.
            ..cbdddddd5555bbbbbbbc..
            .cddddddbdd555bbbbbbc...
            cddddddbbbdd55cbbccc....
            ccccccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd5bbbb335c.
            ...ccbdddddddd5bbbb335c.
            .ccccddddddddd55bbb335c.
            cdcccdddddb55bb5bb3335c.
            cddbddddddb555bb5b3335c.
            cddddddddddb5555b53335c.
            ccddddddbd55bb55c5555c..
            .ccddddbbbdd55cccbccc...
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd5bbbb335c.
            ...ccbdddddddd5bbbb335c.
            .ccccddddddddd55bb3335c.
            cdcccdddddb55bb55b3335c.
            cddbddddddb555bb553335c.
            cddddddddddb5555b5555c..
            ccddddddbd55bb55cbccc...
            .ccddddbbbdd55ccbbc.....
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd55bbb335c.
            ...ccbddddddddd5bb3335c.
            .ccccdddddddddd55b3335c.
            cdcccdddddb55bbd553335c.
            cddbddddddb555bb55555c..
            cddddddddddb5555bbccc...
            ccddddddbd55bb55cbc.....
            .ccddddbbbdd55ccbdc.....
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `],
        100,
        characterAnimations.rule(Predicate.FacingRight)
        )
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        statusbar.value += -20
    }
})
game.onUpdateInterval(2000, function () {
    statusbar.value += 3
})
