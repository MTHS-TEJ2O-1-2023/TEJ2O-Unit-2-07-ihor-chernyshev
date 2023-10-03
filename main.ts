/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program does "Cookie Clicker" on MicroBit
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let numbers = 0

input.onButtonPressed(Button.A, function () {
  numbers = numbers + 1
  basic.showNumber(numbers)
})

input.onButtonPressed(Button.B, function () {
  numbers = 0
  basic.showNumber(numbers)
})
