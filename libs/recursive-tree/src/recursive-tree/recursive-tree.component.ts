import { Component, EventEmitter, Input, Output } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';

@Component({
  selector: 'wix-app-recursive-tree',
  templateUrl: './recursive-tree.component.html',
})
export class RecrusiveTreeComponent {
  @Input() node!: treeNode;
  @Output() addNode = new EventEmitter<treeNode>();

  constructor() { }

  addChildNode(node: treeNode) {
    this.addNode.emit(node);
  }
}
