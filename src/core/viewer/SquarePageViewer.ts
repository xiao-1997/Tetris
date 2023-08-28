import { Square } from "../Square";
import { IViewer } from "../types";
import PageConfig from "./PageConfig";
import $ from "jquery";

/**
 * 显示一个小方块
 * square 要显示那个小方块，
 * container 显示小方块的容器
 * HTMLElement 表示HTML元素
 * JQuery<HTMLElement> 表示的是一个jquery的泛型，需要下载@types/jquery
 */
export class SquarePageViewer implements IViewer {
  constructor(
    private square: Square,
    private container: JQuery<HTMLElement>
  ) { 
  }
  private dom?: JQuery<HTMLElement>
  private isRemove: boolean = false;//是否被移除

  show(): void {
    if (this.isRemove) {
      return;
    }
    // 如果没有dom，就创建dom对象
    if (!this.dom) {
      this.dom = $('<div>').css({
        position: "absolute",
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: "1px solid #ccc",
        boxSizing: "border-box"
      }).appendTo(this.container)
    }

    // 并设置样式
    this.dom.css({
            left: this.square.point.x * PageConfig.SquareSize.width,
            top: this.square.point.y * PageConfig.SquareSize.height,
            background: this.square.color
        })
  }

  remove(): void {
    if (this.dom) { 
      this.dom.remove();
      this.isRemove = true;
    }
  }

}