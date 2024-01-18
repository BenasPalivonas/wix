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

  it('should render tree items on initialization', () => {
    const mockTree: treeNode = categoryTree;
    component.tree = mockTree;

    const renderIterativeSpy = jest.spyOn(component, 'renderIterative');

    fixture.detectChanges();

    expect(renderIterativeSpy).toHaveBeenCalledWith(mockTree, 0);
  });

  it('should emit addNode event when addChildNode is called', () => {
    const mockNode: treeNode = categoryTree;
    const emitSpy = jest.spyOn(component.addNode, 'emit');
    jest.spyOn(component, 'renderIterative').mockImplementation(jest.fn);

    component.addChildNode(mockNode);

    expect(emitSpy).toHaveBeenCalledWith(mockNode);
  });

  it('should render tree items correctly', () => {
    const mockTree: treeNode = {
      name: 'Root',
      children: [
        {
          name: 'Category 1',
          children: [
            { name: 'Subcategory 1.1', children: [] },
            { name: 'Subcategory 1.2', children: [] },
          ],
        },
      ],
    };

    const expectedRenderedItems = [
      { node: mockTree, depth: 0 },
      { node: mockTree.children[0], depth: 1 },
      { node: mockTree.children[0].children[0], depth: 2 },
      { node: mockTree.children[0].children[1], depth: 2 },
    ];

    component.renderIterative(mockTree, 0);

    expect(component.treeItems).toEqual(expectedRenderedItems);
  });

});
