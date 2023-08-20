// 方块的坐标
export interface Point { 
  readonly x: number,
  readonly y: number;
}

// 显示方块类
export interface IViewer { 
  // 显示这次的方块
  show(): void;

  // 移除上一次的方块
  remove(): void;
}