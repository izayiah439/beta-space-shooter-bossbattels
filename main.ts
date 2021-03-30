namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const op_food = SpriteKind.create()
    export const god_food = SpriteKind.create()
    export const food_supply = SpriteKind.create()
    export const gun_supply = SpriteKind.create()
    export const meator = SpriteKind.create()
    export const player_2 = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const secret_code = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.food_supply, SpriteKind.Player, function (sprite, otherSprite) {
    info.setLife(30)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, player_2, 2000, 0)
    projectile3 = sprites.createProjectileFromSprite(assets.image`galgaDart1`, player_2, 2001, 0)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, 0)
    projectile3 = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2001, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.meator, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 1000)
    info.changeLifeBy(-5)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    info.setLife(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.meator, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 2000)
    scene.cameraShake(8, 2000)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.god_food, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    info.setLife(100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("go insane ")
    game.showLongText("go to bottom left for a code only at 2 hurts", DialogLayout.Bottom)
})
info.onLifeZero(function () {
    space_plane.say("better luck next time")
    game.over(false)
})
sprites.onOverlap(SpriteKind.gun_supply, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    player_2 = sprites.create(assets.image`bluePlane`, SpriteKind.player_2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(8, 1000)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.op_food, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    info.setLife(20)
})
sprites.onOverlap(SpriteKind.secret_code, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("COOLcode", game.askForString("enter code"))
    controller.player2.moveSprite(player_2, 100, 100)
    shh.destroy(effects.trail, 1000)
    info.setLife(8)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let power_guns: Sprite = null
let meator: Sprite = null
let bogey: Sprite = null
let op_food2: Sprite = null
let boss2: Sprite = null
let supply_crate: Sprite = null
let dimond: Sprite = null
let more_guns: Sprite = null
let shh: Sprite = null
let projectile3: Sprite = null
let projectile: Sprite = null
let player_2: Sprite = null
let ball_2: Sprite = null
let space_plane: Sprite = null
effects.starField.startScreenEffect()
if (game.ask("is 100x100 1000?")) {
    game.splash("good")
    info.setLife(6)
} else {
    game.splash("bad")
    info.setLife(0)
}
if (game.ask("is 10x10 = 100?")) {
    info.setLife(5)
    game.splash("good")
} else {
    info.setLife(0)
    game.splash("bad")
}
game.splash("high score 1k")
space_plane = sprites.create(assets.image`galgaPlane1`, SpriteKind.Player)
controller.moveSprite(space_plane, 200, 200)
space_plane.setStayInScreen(true)
controller.moveSprite(ball_2, 200, 200)
player_2.setStayInScreen(true)
game.onUpdateInterval(138000, function () {
    more_guns = sprites.create(assets.image`gun supply`, SpriteKind.gun_supply)
    more_guns.setVelocity(-100, 0)
    more_guns.setPosition(160, randint(5, 115))
    more_guns.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(138000, function () {
    ball_2 = sprites.create(assets.image`player 2`, SpriteKind.ball)
    ball_2.setVelocity(-100, 0)
    ball_2.setPosition(160, randint(5, 115))
    ball_2.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(180000, function () {
    dimond = sprites.create(assets.image`dimond`, SpriteKind.god_food)
    dimond.setVelocity(-100, 0)
    dimond.setPosition(160, randint(5, 115))
    dimond.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(120000, function () {
    supply_crate = sprites.create(assets.image`supply -crate`, SpriteKind.food_supply)
    supply_crate.setVelocity(-100, 0)
    supply_crate.setPosition(160, randint(5, 115))
    supply_crate.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(60000, function () {
    boss2 = sprites.create(assets.image`Fast n Blurrious`, SpriteKind.boss)
    boss2.setVelocity(-100, 0)
    boss2.setPosition(160, randint(5, 115))
    boss2.setFlag(SpriteFlag.AutoDestroy, true)
    boss2.setBounceOnWall(true)
})
game.onUpdateInterval(60000, function () {
    boss2 = sprites.create(assets.image`Fast n Blurrious`, SpriteKind.boss)
    boss2.setVelocity(-100, 0)
    boss2.setPosition(160, randint(5, 115))
    boss2.setFlag(SpriteFlag.AutoDestroy, true)
    boss2.setBounceOnWall(true)
})
game.onUpdateInterval(60000, function () {
    boss2 = sprites.create(assets.image`Fast n Blurrious`, SpriteKind.boss)
    boss2.setVelocity(-100, 0)
    boss2.setPosition(160, randint(5, 115))
    boss2.setFlag(SpriteFlag.AutoDestroy, true)
    boss2.setBounceOnWall(true)
})
game.onUpdateInterval(30000, function () {
    op_food2 = sprites.create(assets.image`op food`, SpriteKind.op_food)
    op_food2.setVelocity(-100, 0)
    op_food2.setPosition(160, randint(5, 115))
    op_food2.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`Spider0`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(10000, function () {
    shh = sprites.create(assets.image`shhh`, SpriteKind.secret_code)
    shh.setVelocity(13, 96)
    shh.setPosition(13, 96)
    shh.setFlag(SpriteFlag.AutoDestroy, false)
})
game.onUpdateInterval(10000, function () {
    meator = sprites.create(assets.image`meator`, SpriteKind.meator)
    meator.setVelocity(-100, 0)
    meator.setPosition(160, randint(5, 115))
    meator.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(10000, function () {
    power_guns = sprites.create(assets.image`power guns`, SpriteKind.Food)
    power_guns.setVelocity(-100, 0)
    power_guns.setPosition(160, randint(5, 115))
    power_guns.setFlag(SpriteFlag.AutoDestroy, true)
})
