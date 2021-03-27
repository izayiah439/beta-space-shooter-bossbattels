@namespace
class SpriteKind:
    boss = SpriteKind.create()
    op_food = SpriteKind.create()
    god_food = SpriteKind.create()
    food_supply = SpriteKind.create()
    gun_supply = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    scene.camera_shake(4, 500)
    info.change_life_by(-2)
sprites.on_overlap(SpriteKind.player, SpriteKind.boss, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    info.set_life(30)
sprites.on_overlap(SpriteKind.food_supply, SpriteKind.player, on_on_overlap2)

def on_button_pressed():
    pass
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        galgaDart1
    """), space_plane, 2000, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap3(sprite, otherSprite):
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    info.set_life(10)
sprites.on_overlap(SpriteKind.food, SpriteKind.player, on_on_overlap3)

def on_on_overlap4(sprite, otherSprite):
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    info.set_life(100)
sprites.on_overlap(SpriteKind.god_food, SpriteKind.player, on_on_overlap4)

def on_life_zero():
    game.over(True, effects.confetti)
info.on_life_zero(on_life_zero)

def on_on_overlap5(sprite, otherSprite):
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
sprites.on_overlap(SpriteKind.gun_supply, SpriteKind.player, on_on_overlap5)

def on_on_overlap6(sprite, otherSprite):
    otherSprite.destroy(effects.fire, 500)
    scene.camera_shake(8, 1000)
    info.change_score_by(5)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.boss, on_on_overlap6)

def on_on_overlap7(sprite, otherSprite):
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    projectile = sprites.create_projectile_from_sprite(assets.image("""
            galgaDart1
        """),
        space_plane,
        2000,
        randint(5, 115))
    info.set_life(20)
sprites.on_overlap(SpriteKind.op_food, SpriteKind.player, on_on_overlap7)

def on_on_overlap8(sprite, otherSprite):
    otherSprite.destroy(effects.fire, 500)
    scene.camera_shake(4, 500)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap8)

def on_on_overlap9(sprite, otherSprite):
    otherSprite.destroy()
    scene.camera_shake(4, 500)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap9)

power_guns: Sprite = None
bogey: Sprite = None
op_food2: Sprite = None
boss2: Sprite = None
supply_crate: Sprite = None
dimond: Sprite = None
more_guns: Sprite = None
projectile: Sprite = None
space_plane: Sprite = None
effects.star_field.start_screen_effect()
if game.ask("is 100x100 1000?"):
    game.splash("good")
    info.set_life(6)
else:
    game.splash("bad")
    info.set_life(4)
game.splash("high score 1k")
space_plane = sprites.create(assets.image("""
    galgaPlane1
"""), SpriteKind.player)
controller.move_sprite(space_plane, 200, 200)
space_plane.set_stay_in_screen(True)

def on_update_interval():
    global more_guns
    more_guns = sprites.create(assets.image("""
        gun supply
    """), SpriteKind.gun_supply)
    more_guns.set_velocity(-100, 0)
    more_guns.set_position(160, randint(5, 115))
    more_guns.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(138000, on_update_interval)

def on_update_interval2():
    global dimond
    dimond = sprites.create(assets.image("""
        dimond
    """), SpriteKind.god_food)
    dimond.set_velocity(-100, 0)
    dimond.set_position(160, randint(5, 115))
    dimond.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(180000, on_update_interval2)

def on_update_interval3():
    global supply_crate
    supply_crate = sprites.create(assets.image("""
            supply -crate
        """),
        SpriteKind.food_supply)
    supply_crate.set_velocity(-100, 0)
    supply_crate.set_position(160, randint(5, 115))
    supply_crate.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(120000, on_update_interval3)

def on_update_interval4():
    global boss2
    boss2 = sprites.create(assets.image("""
        Fast n Blurrious
    """), SpriteKind.boss)
    boss2.set_velocity(-100, 0)
    boss2.set_position(160, randint(5, 115))
    boss2.set_flag(SpriteFlag.AUTO_DESTROY, True)
    boss2.set_bounce_on_wall(True)
    music.play_melody("D E C D E C D E ", 112)
game.on_update_interval(60000, on_update_interval4)

def on_update_interval5():
    global boss2
    boss2 = sprites.create(assets.image("""
        Fast n Blurrious
    """), SpriteKind.boss)
    boss2.set_velocity(-100, 0)
    boss2.set_position(160, randint(5, 115))
    boss2.set_flag(SpriteFlag.AUTO_DESTROY, True)
    boss2.set_bounce_on_wall(True)
game.on_update_interval(60000, on_update_interval5)

def on_update_interval6():
    global boss2
    boss2 = sprites.create(assets.image("""
        Fast n Blurrious
    """), SpriteKind.boss)
    boss2.set_velocity(-100, 0)
    boss2.set_position(160, randint(5, 115))
    boss2.set_flag(SpriteFlag.AUTO_DESTROY, True)
    boss2.set_bounce_on_wall(True)
game.on_update_interval(60000, on_update_interval6)

def on_update_interval7():
    global op_food2
    op_food2 = sprites.create(assets.image("""
        op food
    """), SpriteKind.op_food)
    op_food2.set_velocity(-100, 0)
    op_food2.set_position(160, randint(5, 115))
    op_food2.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(30000, on_update_interval7)

def on_update_interval8():
    global bogey
    bogey = sprites.create(assets.image("""
        Spider0
    """), SpriteKind.enemy)
    bogey.set_velocity(-100, 0)
    bogey.set_position(160, randint(5, 115))
    bogey.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(500, on_update_interval8)

def on_update_interval9():
    global power_guns
    power_guns = sprites.create(assets.image("""
        power guns
    """), SpriteKind.food)
    power_guns.set_velocity(-100, 0)
    power_guns.set_position(160, randint(5, 115))
    power_guns.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(10000, on_update_interval9)
