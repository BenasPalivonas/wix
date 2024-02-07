import { Component, OnInit } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';

@Component({
  selector: 'wix-app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  categoryTree: treeNode = {
    name: 'Root',
    children: [
      {
        name: 'Node 1',
        children: [
          { name: 'Node 1.1', children: [] },
          { name: 'Node 1.2', children: [] },
        ],
      },
      {
        name: 'Node 2',
        children: [
          { name: 'Node 2.1', children: [] },
          { name: 'Node 2.2', children: [] },
        ],
      },
    ]
  }

  treeItems: { node: treeNode, depth: number }[] = [];

  ngOnInit() {
    this.treeItems = this.renderIterative(this.categoryTree, 0);
  }

  addChildNode(parentNode: treeNode) {
    const newNodeName = prompt('Enter the name of the new node:');

    if (!newNodeName) {
      alert("Name can't be empty");
      return;
    }

    const newNode: treeNode = { name: newNodeName, children: [] };
    parentNode.children.push(newNode);
    this.treeItems = this.renderIterative(this.categoryTree, 0);
  }

  renderIterative(node: treeNode, depth: number): { node: treeNode, depth: number }[] {
    const stack = [{ node, depth }];
    const items = [];

    while (stack.length > 0) {
      const stackItem = stack.pop()!;

      const { node, depth } = stackItem;
      items.push({ node, depth });

      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
    return items;
  }
}
