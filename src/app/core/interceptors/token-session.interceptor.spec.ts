import { TestBed } from '@angular/core/testing';

import { TokenSessionInterceptor } from './token-session.interceptor';

describe('TokenSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenSessionInterceptor = TestBed.inject(TokenSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
