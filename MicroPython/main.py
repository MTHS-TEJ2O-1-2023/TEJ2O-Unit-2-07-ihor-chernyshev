"""
Created by: Ihor Chernyshev
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)
numbers_of_cliks = 0

while True: 
    if button_a.was_pressed(): 
        numbers_of_cliks = numbers_of_cliks + 1
        display.scroll(numbers_of_cliks)
    if button_b.was_pressed():
        numbers_of_cliks = 0
        display.scroll(numbers_of_cliks)
