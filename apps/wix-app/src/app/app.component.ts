import { Component } from '@angular/core';
import { treeNode } from '@wix-app/rescursive-tree-types';

@Component({
  selector: 'wix-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  categoryTree: treeNode = {
    name: 'Root',
    children: [
      {
        name: 'Category 1',
        children: [
          { name: 'Subcategory 1.1', children: [] },
          { name: 'Subcategory 1.2', children: [] },
        ],
      },
      {
        name: 'Category 2',
        children: [
          { name: 'Subcategory 2.1', children: [] },
          { name: 'Subcategory 2.2', children: [] },
        ],
      },
    ],
  };


  addChildNode(parentNode: any) {
    const newNodeName = prompt('Enter the name of the new node:');
    if (newNodeName) {
      const newNode = { name: newNodeName, children: [] };
      parentNode.children.push(newNode);
    }
  }
  ngOnInit() {
    console.log("hello");
  }
}
