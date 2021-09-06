interface CrossProductResult {
  getComponents(): any,
}

class Scalar extends Number implements CrossProductResult {
  getComponents() {
    return this.valueOf();
  }
}

class Vector implements CrossProductResult {
  protected components: number[] = [];

  constructor(components: number[]) {
    this.components = components;
  }

  getComponents(): number[] {
    return this.components;
  }

  getCrossProduct(v: Vector): CrossProductResult {
    if (this.getSize() > 3 || this.getSize() < 2) {
      throw new Error("Only 2D & 3D cross product is supported");
    } else if (this.getSize() === 2) {
      return new Scalar(this.components[0] * v.getComponents()[1] - this.components[1] * v.getComponents()[0]);
    } else {
      return new Vector([
        this.components[1] * v.getComponents()[2] - this.components[2] * v.getComponents()[1],
        this.components[2] * v.getComponents()[0] - this.components[0] * v.getComponents()[2],
        this.components[0] * v.getComponents()[1] - this.components[1] * v.getComponents()[0],
      ]);
    }
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
