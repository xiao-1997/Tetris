import { SquareGroup } from "./SquareGroup";
import { Point, Shape } from "./types";
import { getRandom } from "./util";

// 三角形的方块，类型是包含方块坐标对象的数组
export const TShape: Shape = [
  { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }
]

// L形的组合，短处向右，长处向左
export const LShape: Shape = [
  { x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }
]

// L形的组合，短处向左，长处向右
export const LMirrorShape: Shape = [
  { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }
]

// Z形的组合，左右横向
export const SShape: Shape = [
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }
]

// 反向的Z形的组合
export const SMirrorShape: Shape = [
  { x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }
]


// 四个方块组合称的一个大方块
export const SquareShape: Shape = [
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }
]

// 一条横线
export const LineShape: Shape = [
  { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }
]

// 包含了所有俄罗斯方块形状的数组
export const shapes = [
  TShape,
    LShape,
    LMirrorShape,
    SShape,
    SMirrorShape,
    SquareShape,
    LineShape
]

// 包含了颜色的数组
export const colors = [
  "red",
    "#fff",
    "green",
    "blue",
    "orange"
]

/**
 * 随机产生一个形状的俄罗斯方块，和颜色
 * @param centerPoint 这个方块中心点的位置
 */
export function createTeris(centerPoint: Point) {
  // 取到一个随机的俄罗斯方块形状
  let index = getRandom(0, shapes.length);
  const shape = shapes[index];

  // 取到一个随机的颜色
  index = getRandom(0, colors.length);
  const color = colors[index];

  // 返回形成的俄罗斯方块
  return new SquareGroup(shape,centerPoint,color)
}