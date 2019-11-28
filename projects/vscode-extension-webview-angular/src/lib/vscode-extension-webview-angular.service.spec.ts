import { TestBed } from '@angular/core/testing';

import { VscodeExtensionWebviewAngularService } from './vscode-extension-webview-angular.service';

describe('VscodeExtensionWebviewAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VscodeExtensionWebviewAngularService = TestBed.get(VscodeExtensionWebviewAngularService);
    expect(service).toBeTruthy();
  });
});
