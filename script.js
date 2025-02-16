class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {  // Fixed: Only one parameter
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;  // Use 'this.width' instead of 'this.side'
  }
}
