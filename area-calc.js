function calculateRectangleArea(length,width)
{
var rectangle = (length x width);
return rectangle
}
function calculateTriangleArea(base,height)
{
var triangle = (base x height / 2);
return triangle

}
function calculateCircleArea(radius)
{
  var circle = (MATH.PI x (radius x radius));
return circle

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined