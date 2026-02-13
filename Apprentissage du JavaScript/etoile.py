import turtle
fenetre = turtle.Screen()
fenetre.bgcolor("black")
fenetre.title("Etoile en Python")

etoile = turtle.Turtle()
etoile.color("yellow")
etoile.penize(2)
etoile.speed(3)

for i in range (5):
    etoile.forward(200) 
    etoile.right(144)

turtle.done()
