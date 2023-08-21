import { Square } from "./core/Square";//小方块
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const sq = new Square({x: 3, y: 1},'red');
sq.viewer = new SquarePageViewer(sq, $("#root"))

$('#btnDown').click(function() {
  sq.point = {
    x: sq.point.x,
    y: sq.point.y + 1
  }
})

$('#btnRemove').click(function() {
  if (sq.viewer) { 
    sq.viewer.remove()
  }
})

$('#btnAdd').click(function () {
  sq.viewer = new SquarePageViewer(sq, $("#root"))
})