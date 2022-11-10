/**
 * Jet (2)
 * By: mohammed al-essawi
 * Version: 1.0
 * Since:   2022-10-21
 */

import Airplane from './Airplane'

class Jet extends Airplane {
  // Speed
  private readonly multiplier = 2

  setSpeed (speed: number): void {
    super.setSpeed(speed * this.multiplier)
  }

  accelerate (): void {
    super.setSpeed(super.getSpeed() * 2)
  }
}

export = Jet
