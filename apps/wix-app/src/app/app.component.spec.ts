import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponents } from 'ng-mocks';
import { RecrusiveTreeComponent } from '@wix-app/rescursive-tree';
import { treeNode } from '@wix-app/rescursive-tree-types';
import { IterativeTreeComponent } from '@wix-app/iterative-tree';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const parentNode = {
    name: 'ParentNode',
    children: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        MockComponents(RecrusiveTreeComponent, IterativeTreeComponent)],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
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
});
