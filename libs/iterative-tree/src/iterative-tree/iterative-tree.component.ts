import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';

@Component({
  selector: 'wix-app-iterative-tree',
  templateUrl: './iterative-tree.component.html',
})
export class IterativeTreeComponent implements OnInit {
  @Input() tree!: treeNode;
  @Output() addNode = new EventEmitter<treeNode>();

  treeItems: { node: treeNode, depth: number }[] = [];

  ngOnInit() {
    this.renderIterative(this.tree, 0);
  }

  renderIterative(node: treeNode, depth: number) {
    const stack = [{ node, depth }];

    while (stack.length > 0) {
      const stackItem = stack.pop();

      if (!stackItem) {
        return;
      }

      const { node, depth } = stackItem;
      this.treeItems.push({ node, depth });

      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }

    }
  }

  addChildNode(node: treeNode) {
    this.addNode.emit(node);

    this.treeItems = [];
    this.renderIterative(this.tree, 0);
  }
}
