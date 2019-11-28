import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VscodeExtensionWebviewAngularComponent } from './vscode-extension-webview-angular.component';

describe('VscodeExtensionWebviewAngularComponent', () => {
  let component: VscodeExtensionWebviewAngularComponent;
  let fixture: ComponentFixture<VscodeExtensionWebviewAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VscodeExtensionWebviewAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VscodeExtensionWebviewAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
