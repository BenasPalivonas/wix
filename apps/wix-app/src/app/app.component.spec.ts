import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponents } from 'ng-mocks';
import { RecrusiveTreeComponent } from '@wix-app/rescursive-tree';
import { treeNode } from '@wix-app/rescursive-tree-types';
import { IterativeTreeComponent } from '@wix-app/iterative-tree';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let parentNode: treeNode;
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
      declarations: [AppComponent,
        MockComponents(RecrusiveTreeComponent, IterativeTreeComponent)],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    parentNode = {
      name: 'ParentNode',
      children: [],
    };
    component.categoryTree = { name: "root", children: [] }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a child node when calling addChildNode', () => {
    // GIVEN
    jest.spyOn(window, 'prompt').mockReturnValue('NewNode');
    // WHEN
    component.addChildNode(parentNode);
    fixture.detectChanges();
    // THEN
    expect(parentNode.children.length).toBe(1);
    const addedChildNode = parentNode.children[0] as treeNode;
    expect(addedChildNode.name).toBe('NewNode');
  });

  it('should add a child node when calling addChildNode2', () => {
    // GIVEN
    jest.spyOn(window, 'prompt').mockReturnValue('NewNode');
    // WHEN
    component.addChildNode(parentNode);
    fixture.detectChanges();
    // THEN
    expect(parentNode.children.length).toBe(1);
    const addedChildNode = parentNode.children[0] as treeNode;
    expect(addedChildNode.name).toBe('NewNode');
  });

  it('should display an alert if prompt returns an empty string', () => {
    // GIVEN
    jest.spyOn(window, 'prompt').mockReturnValue('');
    const alertSpy = jest.spyOn(window, 'alert');
    // WHEN
    component.addChildNode(parentNode);
    // THEN
    expect(component.categoryTree.children.length).toBe(0);
    expect(alertSpy).toHaveBeenCalledWith("Name can't be empty");
  });

  it('should call renderIterative on init', () => {
    const mockTree: treeNode = categoryTree
    component.categoryTree = mockTree;
    const expectedRenderedItems = [
      { node: mockTree, depth: 0 },
      { node: mockTree.children[0], depth: 1 },
      { node: mockTree.children[0].children[0], depth: 2 },
      { node: mockTree.children[0].children[1], depth: 2 },
    ];

    component.ngOnInit();

    expect(component.treeItems).toEqual(expectedRenderedItems);
  });

  it('should render tree items correctly2', () => {
    const mockTree: treeNode = categoryTree

    const expectedRenderedItems = [
      { node: mockTree, depth: 0 },
      { node: mockTree.children[0], depth: 1 },
      { node: mockTree.children[0].children[0], depth: 2 },
      { node: mockTree.children[0].children[1], depth: 2 },
    ];

    const items = component.renderIterative(mockTree, 0);

    expect(items).toEqual(expectedRenderedItems);
  });

  it('should render tree items on initialization', () => {
    const mockTree: treeNode = categoryTree;
    component.categoryTree = categoryTree;

    const renderIterativeSpy = jest.spyOn(component, 'renderIterative');

    component.ngOnInit();

    expect(renderIterativeSpy).toHaveBeenCalledWith(mockTree, 0);
  });
});
