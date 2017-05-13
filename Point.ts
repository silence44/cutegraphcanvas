class Point {
    positionX: number;
    positionY: number;
    positionZ: number;
    maxPositionX: number;
    maxPositionY: number;
    speed: number;
    angle: number;

    constructor (positionX :number, positionY :number, positionZ :number, speed :number, angle : number, maxPositionX : number, maxPositionY: number) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;
        this.speed = speed;
        this.angle = angle;
        this.maxPositionX = maxPositionX;
        this.maxPositionY = maxPositionY;
    }

    draw (context) {
        context.beginPath();
        context.arc(this.positionX, this.positionY, 5, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
        context.lineWidth = 1;
        context.stroke();
    }

    drawConnectionTo(context, point : Point) {
        context.beginPath();
        context.moveTo(this.positionX, this.positionY);
        context.lineTo(point.positionX, point.positionY);

        var opacityDistance = 200;

        var pointDistance = Math.sqrt(Math.pow(this.positionX - point.positionX, 2) + Math.pow(this.positionY - point.positionY, 2));

        var alpha = 0;
        if (pointDistance < opacityDistance) {
            alpha = (opacityDistance - pointDistance)/opacityDistance;
        }

        context.strokeStyle = 'rgba(255,255,255,' + alpha+')';
        context.stroke();
    }

    move() {
        if (this.positionX >= this.maxPositionX || this.positionX <= 0) {
            this.speed = (-1) * this.speed;
            this.angle = 90 * Math.PI/2 -  this.angle;
        }
        if (this.positionY >= this.maxPositionY || this.positionY <= 0) {
            this.speed = (-1) * this.speed;
            this.angle = 180 * Math.PI/2 -  this.angle;
        }

        this.positionX = this.positionX  +  this.speed * Math.sin(this.angle);
        this.positionY = this.positionY  +  this.speed * Math.cos(this.angle);
    }
}

export {Point};


