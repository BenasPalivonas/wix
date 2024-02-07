import { Component, EventEmitter, Input, Output } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';

@Component({
  selector: 'wix-app-iterative-tree',
  templateUrl: './iterative-tree.component.html',
})
export class IterativeTreeComponent {
  @Input() tree!: { node: treeNode, depth: number }[];
  @Output() addNode = new EventEmitter<treeNode>();

  constructor() { }

  addChildNode(node: treeNode) {
    this.addNode.emit(node);
  }
}
