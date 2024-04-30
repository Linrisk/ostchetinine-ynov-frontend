import { FormsModule } from '@angular/forms';
import { TutorialDetailsComponent } from './../tutorial-details/tutorial-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TutorialsListComponent } from './tutorials-list.component';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[HttpClientModule,AppRoutingModule,FormsModule],
      declarations: [TutorialsListComponent,TutorialDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
