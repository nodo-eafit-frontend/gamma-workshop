var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FigureTS = /** @class */ (function () {
    function FigureTS(color) {
        this.color = String;
        this.color = color;
    }
    FigureTS.prototype.getArea = function () {
        return 'number';
    };
    FigureTS.prototype.getInfo = function () {
        return 'number';
    };
    return FigureTS;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = Number;
        _this._radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.pow((Math.PI * this.radius), 2);
    };
    Circle.prototype.getInfo = function () {
        return "".concat(this.radius, " ").concat(this.color);
    };
    return Circle;
}(FigureTS));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, side) {
        var _this = _super.call(this, color) || this;
        _this.side = side;
        return _this;
    }
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this.side;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.getArea = function () {
        return Math.pow(this.side, 2);
    };
    return Square;
}(FigureTS));
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(color, radius, radius2) {
        var _this = _super.call(this, color, radius) || this;
        _this.radius2 = Number;
        _this._radius2 = radius2;
        return _this;
    }
    Ellipse.prototype.getArea = function () {
        return Math.PI * this._radius * this._radius2;
    };
    return Ellipse;
}(Circle));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        var _this = _super.call(this, color, width) || this;
        _this.width = 100;
        _this.height = 150;
        _this.width = _super.prototype.side;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Square));
var figure = new Rectangle('red');
console.log(figure.getArea());
