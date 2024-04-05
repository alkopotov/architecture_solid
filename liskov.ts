abstract class Geometry {
  protected _width: number;
  protected _color: string;
  constructor(width: number, color: string) {
    this._width = width;
    this._color = color;
  }
  get width() {
    return this._width;
  }
  get color() {
    return this._color;
  }
  abstract draw(): void;
}

abstract class Coordinate {
  protected abstract _dimension: number;
  protected abstract _values: number[];
}

class Point2D extends Coordinate {
  static type: string = "Dekart";
  protected _values: number[];
  protected _dimension: number = 2;
  constructor(x: number, y: number) {
    super();
    this._values = [x, y];
  }
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  set x(value: number) {
    this._values[0] = value;
  }
  set y(value: number) {
    this._values[1] = value;
  }
}

class Line extends Geometry {
  protected _pointA: Point2D;
  protected _pointB: Point2D;
  constructor(a: Point2D, b: Point2D, width: number, color: string) {
    super(width, color);
    this._pointA = a;
    this._pointB = b;
  }
  get pointA() {
    return this._pointA;
  }
  get pointB() {
    return this._pointB;
  }
  set pointA(p: Point2D) {
    this._pointA = p;
  }
  set pointB(p: Point2D) {
    this._pointB = p;
  }
  draw(): void {
    console.log(
      `Отрисовка линии цвета ${this._color} толщиной ${this._width}, проходящей через точки (${this.pointA.x}, ${this.pointA.y}) и (${this.pointB.x}, ${this.pointB.y}) `
    );
  }
}

class Rect extends Geometry {
  protected _vertexA: Point2D;
  protected _vertexB: Point2D;
  constructor(a: Point2D, b: Point2D, width: number, color: string) {
    super(width, color);
    this._vertexA = a;
    this._vertexB = b;
  }
  get vertexA() {
    return this._vertexA;
  }
  get vertexB() {
    return this._vertexB;
  }
  set vertexA(p: Point2D) {
    this._vertexA = p;
  }
  set vertexB(p: Point2D) {
    this._vertexB = p;
  }
  draw(): void {
    console.log(
      `Отрисовка прямоугольника линией цветом ${this._color} толщиной ${this._width}, с противоположными углами в точках (${this.vertexA.x}, ${this.vertexA.y}) и (${this.vertexB.x}, ${this.vertexB.y}) `
    );
  }
}

class Ellipse extends Geometry {
  protected _focusA: Point2D;
  protected _focusB: Point2D;
  protected _largeSemiAxis: number;
  constructor(a: Point2D, b: Point2D, c: number, width: number, color: string) {
    super(width, color);
    this._focusA = a;
    this._focusB = b;
    this._largeSemiAxis = c;
  }
  get focusA() {
    return this._focusA;
  }
  get focusB() {
    return this._focusB;
  }
  get largeSemiAxis() {
    return this._largeSemiAxis;
  }
  set focusA(p: Point2D) {
    this._focusA = p;
  }
  set focusB(p: Point2D) {
    this._focusB = p;
  }
  set largeSemiAxis(c: number) {
    this._largeSemiAxis = c;
  }
  draw(): void {
    console.log(
      `Отрисовка эллипса линией цветом ${this._color} толщиной ${this._width}, с фокусами в точках (${this._focusA.x}, ${this._focusA.y}) и (${this._focusB.x}, ${this._focusB.y}) c большой полуосью ${this._largeSemiAxis}`
    );
  }
}

const figures: Geometry[] = [];
figures[0] = new Line(new Point2D(2, 4), new Point2D(6, 7), 1, "red");
figures[1] = new Rect(new Point2D(5, 9), new Point2D(-1, -7), 2, "yellow");
figures[2] = new Ellipse(new Point2D(5, 9), new Point2D(0, 0), 15, 1, "green");
figures[3] = new Rect(new Point2D(0, 0), new Point2D(5, -2), 3, "blue");
figures.forEach((elem) => elem.draw());
