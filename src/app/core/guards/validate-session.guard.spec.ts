import { TestBed } from '@angular/core/testing';

import { ValidateSessionGuard } from './validate-session.guard';

describe('ValidateSessionGuard', () => {
  let guard: ValidateSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
