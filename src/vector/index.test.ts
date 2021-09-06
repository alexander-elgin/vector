import Vector from './';

describe('Vector', () => {
  describe('#getSize', () => {
    it('returns the vector size', () => {
      const elements = [1, 2, 3, 4];
      const vector = new Vector(elements);
      expect(vector.getSize()).toBe(elements.length);
    });
  });

  describe('#getComponents', () => {
    it('returns the vector components', () => {
      const elements = [1, 2, 3, 4];
      const vector = new Vector(elements);
      expect(vector.getComponents()).toEqual(elements);
    });
  });

  describe('#getDifference', () => {
    it('returns difference of the vectors', () => {
      const vector = new Vector([1, 2, 3]);
      const anotherVector = new Vector([6, 5, 4]);
      expect(vector.getDifference(anotherVector).getComponents()).toEqual([-5, -3, -1]);
    });
  });

  describe('#getDotProduct', () => {
    it('returns the vector dot product', () => {
      const vector = new Vector([1, 0]);
      expect(vector.getDotProduct(new Vector([0, -1]))).toBe(0);
    });
  });

  describe('#getLength', () => {
    it('returns the vector length', () => {
      const vector = new Vector([-3, 4]);
      expect(vector.getLength()).toBe(5);
    });
  });

  describe('#getSum', () => {
    it('returns sum of the vectors', () => {
      const vector = new Vector([1, 2, 3]);
      const anotherVector = new Vector([4, 5, 6]);
      expect(vector.getSum(anotherVector).getComponents()).toEqual([5, 7, 9]);
    });
  });

  describe('#getTimes', () => {
    it('returns a scaled vector', () => {
      const elements = [1, 2, 3];
      const vector = new Vector(elements);
      expect(vector.getTimes(-2).getComponents()).toEqual([-2, -4, -6]);
    });
  });
});
