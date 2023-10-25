import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogContentComponent } from './single-blog-content.component';

describe('SingleBlogContentComponent', () => {
  let component: SingleBlogContentComponent;
  let fixture: ComponentFixture<SingleBlogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBlogContentComponent]
    });
    fixture = TestBed.createComponent(SingleBlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
