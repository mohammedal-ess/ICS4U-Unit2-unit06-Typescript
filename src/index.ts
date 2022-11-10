/**
 * index class 1
 * aurthor :     mohammed al-essawi
 * version : 1.0
 *
 */
import Airplane from './Airplane'
import Jet from './Jet'

const one = 212
const two = 422
const three = 4
const four = 5000

const biplane = new Airplane()
biplane.setSpeed(one)
console.log(biplane.getSpeed())

const boeing = new Jet()
boeing.setSpeed(two)
console.log(boeing.getSpeed())
let counter = 0

while (counter < three) {
  boeing.accelerate()
  console.log(boeing.getSpeed())

  if (boeing.getSpeed() > four) {
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    boeing.accelerate()
  }
  counter++
}

console.log(biplane.getSpeed())
