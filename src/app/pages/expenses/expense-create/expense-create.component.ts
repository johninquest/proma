import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EXPENSE_TYPE_LIST, PROPERTY_LIST } from '../../../shared/lists/dummy.list';
import { PbService } from '../../../utils/pb.service';
import { AuthService } from '../../../utils/auth.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrl: './expense-create.component.scss'
})
export class ExpenseCreateComponent {

  expenseForm: FormGroup;
  propertiesData: any[] = [];
  expenseList: string[] = EXPENSE_TYPE_LIST;
  // propertyList: string[] = PROPERTY_LIST;

  // Getter for property names
  get propertyList(): string[] {
    return this.propertiesData.map(property => property.name);
  }

  constructor(private fb: FormBuilder, private _pbService: PbService, private _fbAuth: AuthService) {
    this.expenseForm = this.fb.group({
      propertyId: ['', Validators.required],
      propertyName: ['', Validators.required],
      expenseDate: [''],
      expenseType: [''],
      description: [''],
      amount: [0, [Validators.required, Validators.min(0)]],
      vendorName: ['']
    });
    this._fbAuth.currentlyLoggedUser().subscribe((res) => {
      let currentUser: string = res?.email ?? '';
      if (currentUser) {
        let pData = this._pbService.getAllPropertyAsList(currentUser);
        pData.then(data => {
          console.log('Property data', data)
          this.propertiesData = data
        });
      }
    });
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      console.log(this.expenseForm.value);
      // Here you would typically send the data to your backend
    }
  }


}
