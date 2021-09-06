class Vector {
  protected components: number[] = [];

  constructor(components: number[]) {
    this.components = components;
  }

  getComponents(): number[] {
    return this.components;
  }

  getDifference(v: Vector): Vector {
    return this.getSum(v.getTimes(-1));
  }

  getDotProduct(v: Vector): number {
    return this.components.reduce((total, value, index) =>
      total + value * v.getComponents()[index], 0);
  }

  getLength(): number {
    return Math.sqrt(this.getDotProduct(this));
  }

  getSize(): number {
    return this.components.length;
  }

  getSum(v: Vector): Vector {
    return new Vector(this.components.map((value, index) =>
      value + v.getComponents()[index]));
  }

  getTimes(coefficient: number): Vector {
    return new Vector(this.components.map(value => coefficient * value));
  }
}

export default Vector;
