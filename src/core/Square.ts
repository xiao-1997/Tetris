// 俄罗斯方块的基础
// 小方块

import { IViewer, Point } from "./types";

/**
 * IViewer 显隐规则
 * Point 方块的坐标
 */
export class Square { 
  // 控制显隐
  private _viewer?: IViewer;

  // 颜色
  private _color: string = '';

  // 方块坐标
  private _point: Point = {
    x: 0,
    y: 0,
  };

  public get viewer() { 
    return this._viewer;
  }

  // 如果添加了方块,就运行方块内的显隐规则
  public set viewer(val) { 
    this._viewer = val;
    if (val) {
      // 如果添加了方块，就让本次添加的方块显示
      val.show();
    }
  }
  
  public get point() { 
    return this._point;
  }

  public set point(val) { 
    this._point = val;
    // 当数据发生变化时隐藏上一次，显示这一次
    // 发生变化时显示
    if (this.viewer) {
      this.viewer.show()
    }
  }

  public get color() { 
    return this._color;
  }

  public set color(val) { 
    this._color = val;
  }
}