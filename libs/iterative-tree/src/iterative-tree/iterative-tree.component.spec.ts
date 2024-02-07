import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IterativeTreeComponent } from './iterative-tree.component';
import { treeNode } from '@wix-app/rescursive-tree-types';

describe('IterativeTreeComponent', () => {
  let component: IterativeTreeComponent;
  let fixture: ComponentFixture<IterativeTreeComponent>;
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
      declarations: [IterativeTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IterativeTreeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should emit addNode event when addChildNode is called', () => {
    const mockNode: treeNode = categoryTree;
    const emitSpy = jest.spyOn(component.addNode, 'emit');

    component.addChildNode(mockNode);

    expect(emitSpy).toHaveBeenCalledWith(mockNode);
  });



});
