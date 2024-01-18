import { Component } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wix-app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
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

  addChildNode(parentNode: treeNode) {
    const newNodeName = prompt('Enter the name of the new node:');

    if (!newNodeName) {
      alert("Name can't be empty");
      return;
    }

    const newNode: treeNode = { name: newNodeName, children: [] };
    parentNode.children.push(newNode);
  }
}
