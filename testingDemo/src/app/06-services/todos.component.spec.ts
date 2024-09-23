import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [HttpClientTestingModule],
      providers: [TodoService]
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

  it('should call the server to save the changes when a new todo item is added', () => {
    const newTodo = { id: 4, title: 'New Todo' };
    spyOn(service, 'add').and.returnValue(EMPTY);
    component.add();

    expect(service.add).toHaveBeenCalled();

  });

  it('should add the new Todo returned from the server', () => {
    let todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(of(todo));
    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });

  it('should set the message property if service returns an error when adding a new todo', () => {
    const errorMessage = 'Error adding todo';
    spyOn(service, 'add').and.returnValue(throwError(() => new Error(errorMessage)));

    component.add();
    expect(component.message).toBe(errorMessage);
  });
});