function square(a: number): number {
  return a ** 2;
}

function squareRoot(b: number) {
  return b ** 0.5;
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
	return squareRoot(square(x2 - x1) + square(y2 - y1))
}

console.log(distance(2, 3, 4, 6));
console.log(distance(1, 2, 2, 4));