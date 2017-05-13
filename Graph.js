var Graph = (function () {
    function Graph(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.points = [];
    }
    Graph.prototype.addPoint = function (point) {
        this.points.push(point);
    };
    Graph.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Graph.prototype.addRandomPoint = function () {
        var positionX = Graph.getRandomInt(0, this.canvas.width);
        var positionY = Graph.getRandomInt(0, this.canvas.height);
        var angle = Graph.getRandomInt(0, 360) * Math.PI / 180;
        var speed = Math.random() * 1.5;
        var maxPositionX = this.canvas.width;
        var maxPositionY = this.canvas.height;
        var point = new Point(positionX, positionY, 10, speed, angle, maxPositionX, maxPositionY);
        this.addPoint(point);
    };
    Graph.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#1c1c1c";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Graph.prototype.loop = function () {
        this.clear();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].move();
            this.points[i].draw(this.context);
        }
        this.drawConnections();
        setTimeout(function (grid) {
            grid.loop();
        }, 10, this);
    };
    Graph.prototype.drawConnections = function () {
        for (var i = 0; i < this.points.length; i++) {
            for (var j = i + 1; j < this.points.length; j++) {
                if (i != j) {
                    this.points[i].drawConnectionTo(this.context, this.points[j]);
                }
            }
        }
    };
    return Graph;
}());
//# sourceMappingURL=Graph.js.map