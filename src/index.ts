import { SquareGroup } from "./core/SquareGroup";//小方块
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

// 创建出要形成的方块形状
const group = new SquareGroup(
  [{ x: 0, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
  {x: 0, y: 1},
  "red"
)

// 把形状内的小方块显示出来
group.squares.forEach(item => {
  item.viewer = new SquarePageViewer(item,$('#root'));
})