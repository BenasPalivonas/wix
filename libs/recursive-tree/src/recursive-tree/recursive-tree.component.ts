import { Component, EventEmitter, Input, Output } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';

@Component({
  selector: 'wix-app-recursive-tree',
  templateUrl: './recursive-tree.component.html',
})
export class RecrusiveTree {
  @Input() node!: treeNode;
  @Output() addNode = new EventEmitter<any>();

  constructor() { }

  addChildNode(node: any) {
    this.addNode.emit(node);
  }
}
