import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TutorialService } from './tutorial.service';

describe('TutorialService', () => {
  let service: TutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(TutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
