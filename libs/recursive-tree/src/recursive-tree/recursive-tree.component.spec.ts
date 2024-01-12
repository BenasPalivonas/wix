import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecrusiveTreeComponent } from './recursive-tree.component';
import { treeNode } from '@wix-app/rescursive-tree-types';

describe('RecrusiveTreeComponent', () => {
  let component: RecrusiveTreeComponent;
  let fixture: ComponentFixture<RecrusiveTreeComponent>;
  const categoryTree: treeNode = {
    name: 'Root',
    children: [
      {
        name: 'Category 1',
        children: [
          { name: 'Subcategory 1.1', children: [] },
          { name: 'Subcategory 1.2', children: [] },
        ],
      },
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecrusiveTreeComponent], // Declare the component in the testing module
    });

    fixture = TestBed.createComponent(RecrusiveTreeComponent);
    component = fixture.componentInstance;
    component.node = categoryTree;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addNode should call emit with provided node when calling addChildNode', () => {
    // GIVEN
    const addNodeSpy = jest.spyOn(component.addNode, 'emit');
    const node: treeNode = { name: 'testNode', children: [] }
    // WHEN
    component.addChildNode(node);
    // THEN
    expect(addNodeSpy).toHaveBeenCalledWith(node);
  });
});
