// 纯数据类
// 小方块组合
import { Point,Shape } from "./types";//坐标,组合的形状
import { Square } from "./Square";//小方块

export class SquareGroup {
  // 要组合的形状的数组
  private _Square: readonly Square[];

  // 获取形状的数组
  public get squares() { 
    return this._Square;
  }

  // 获取形状的中心坐标
  public get centerPoint(): Point {
    return this._centerPoint;
  }

  // 设置中心坐标的同时设置其他方块
  public set centerPoint(value: Point) { 
    this._centerPoint = value;

    // 设置把要组合形状的小方块坐标
    this._Shape.forEach((item, i) => { 
      this._Square[i].point = {
        x: item.x + this._centerPoint.x,
        y:item.y + this._centerPoint.y
      }
    })
  }
  
  // Shape 要组合的形状，坐标数组，_centerPoint 中心点的坐标，_color 方块的颜色
  constructor(
    private _Shape: Shape,
    private _centerPoint: Point,
    private _color: string
  ) {
    // 由于数据是只读的，需要重新赋值
    const arr: Square[] = [];
    
    this._Shape.forEach(item => { 
      const sq = new Square();//小方块
      sq.color = this._color;
      sq.point = {
        x: this._centerPoint.x + item.x,
        y: this._centerPoint.y + item.y
      }

      arr.push(sq);
    })

    // 组合图形现在的坐标
    this._Square = arr;
  }
}