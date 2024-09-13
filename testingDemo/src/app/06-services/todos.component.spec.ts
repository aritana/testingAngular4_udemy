import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of } from 'rxjs';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[TodosComponent],
      imports:[HttpClientTestingModule],
      providers:[TodoService]
    });

    service = TestBed.inject(TodoService);
    component = TestBed.createComponent(TodosComponent).componentInstance;
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.returnValue(of(todos));

    component.ngOnInit();

    expect(component.todos).toBe(todos);

  });
});