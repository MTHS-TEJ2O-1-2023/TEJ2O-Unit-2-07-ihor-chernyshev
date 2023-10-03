/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program does "Cookie Clicker" on MicroBit
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let numbersOfCliks = 0

input.onButtonPressed(Button.A, function () {
  numbersOfCliks = numbersOfCliks + 1
  basic.showNumber(numbersOfCliks)
})

input.onButtonPressed(Button.B, function () {
  numbersOfCliks = 0
  basic.showNumber(numbersOfCliks)
})
