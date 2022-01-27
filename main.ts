input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let enemyX = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
player.set(LedSpriteProperty.Blink, 300)
let enemies: game.LedSprite[] = []
let ticks = 0
let speed = 1000
basic.forever(function () {
    while (enemies.length > 0 && enemies[0].get(LedSpriteProperty.Y) == 4) {
        enemies.removeAt(0).delete()
    }
    for (let enemy of enemies) {
        enemy.change(LedSpriteProperty.Y, 1)
    }
    if (ticks % 3 == 0) {
        enemyX = randint(0, 4)
        for (let plats = 0; plats <= 4; plats++) {
            if (plats != enemyX) {
                enemies.push(game.createSprite(plats, 0))
            }
        }
    }
    if (ticks % 10 == 0 && speed > 300) {
        speed += -50
    }
    for (let enemy of enemies) {
        if (enemy.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X) && enemy.get(LedSpriteProperty.Y) == player.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(speed)
})
