import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 


describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let formbuilder: FormBuilder;

  beforeEach(() => {
    formbuilder = new FormBuilder();
    component = new TodoFormComponent(formbuilder);
  });

  it('should contains name', () => {
    expect(component.form.contains('name')).toBe(true);

  });

  it('should make the name required', () => {
    component.form.get('name')?.setValue('');
    expect(component.form.get('name')?.valid).toBeFalsy();

  });

  it('should contains email', () => {
    expect(component.form.contains('email')).toBe(true);
  });
});