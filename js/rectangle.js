/* The Rectangle prototype is used to determine
 * collisions by providing an intersects method.
 * Composition is preferred to inheritance, each
 * entity, (enemy, player and reward) has an instance of a Rectangle
 */
 
var Rectangle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};
Rectangle.prototype.setX = function (x) {
    this.x = x;
};

Rectangle.prototype.setY = function (y) {
    this.y = y;
};

/*  This is a helper function for the the
 *  intersects() method.
 */
Rectangle.prototype.containsPoint = function (x, y) {
    var withinXBounds = x <= this.x + this.width && x >= this.x &&
            y <= this.y + this.height && y >= this.y;
    return withinXBounds;
};
/*
 * The insterects method is used to determine collisions.
 */

Rectangle.prototype.intersects = function (otherRectangle) {

    /* if any vertices of the other rectangles
     * are within this rectantle, return true
     */
    var j;
    var retval = false;
    var vertices = [
        [otherRectangle.x, otherRectangle.y],
        [otherRectangle.x + otherRectangle.width, otherRectangle.y],
        [otherRectangle.x + otherRectangle.width, otherRectangle.y + otherRectangle.height],
        [otherRectangle.x, otherRectangle.y + otherRectangle.height]
    ];

    for (j = 0; j < vertices.length; j += 1) {
        retval = retval || this.containsPoint(vertices[j][0], vertices[j][1]);
    }
    return retval;
};

