import { SquareGroup } from "./core/SquareGroup";//小方块
import { createTeris } from "./core/Teris";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

// 输入中心点，创建出随机形成的方块形状
const group = createTeris({x: 3, y: 3});

// 把形状内的小方块显示出来
group.squares.forEach(item => {
  item.viewer = new SquarePageViewer(item,$('#root'));
})