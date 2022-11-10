/**
 * Airplane Class (3)
 *
 *
 * By: mohammed al-essawi
 * Version: 1.0
 * Since:   2022-10-17
 */

class Airplane {
  // Speed
  protected speed = 0

  setSpeed (speed: number): void {
    this.speed = speed
  }

  getSpeed (): number {
    return this.speed
  }
}

export = Airplane
