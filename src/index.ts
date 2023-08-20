import { IViewer } from "./core/types";
import { Square } from "./core/Square";

// 控制显隐的方法
class SquareConsoleViewer implements IViewer { 
  constructor(
    // dom元素
    private Square: Square
  ) { }
  show(): void {
    // 显示dom元素
    console.log(this.Square.color,this.Square.Point);
  }
  remove(): void {
    
  }
}

const sq = new Square({ x: 0, y: 0 }, 'red');

sq.viewer = new SquareConsoleViewer(sq);

sq.viewer.show();

sq.Point = {
  x: 6,
  y: 4
}

sq.Point = {
  x: 8,
  y: 10
}
