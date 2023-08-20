// 俄罗斯方块的基础
// 小方块

import { IViewer, Point } from "./types";

export class Square { 
  // 控制显隐
  private _viewer?: IViewer;

  public get viewer() { 
    return this._viewer;
  }

  public set viewer(val) { 
    this._viewer = val;
  }
  
  public get Point() { 
    return this._Point;
  }

  public set Point(val) { 
    this._Point = val;
    // 当数据发生变化时隐藏上一次，显示这一次
    // 发生变化时显示
    if (this.viewer) {
      this.viewer.show()
    }
  }

  public get color() { 
    return this._color;
  }

  public constructor(private _Point: Point, private _color: string) { 

  }
}