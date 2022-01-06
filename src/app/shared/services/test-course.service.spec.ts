import { TestBed } from '@angular/core/testing';

import { TestCourseService } from './test-course.service';

describe('TestCourseService', () => {
  let service: TestCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
