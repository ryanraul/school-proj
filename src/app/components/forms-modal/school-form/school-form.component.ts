import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { School } from 'src/app/models/School';
import { ExternalService } from 'src/app/services/external.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['../../../styles/modal-form.style.scss']
})
export class SchoolFormComponent implements OnInit {

  modalForm: FormGroup;
  classId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<SchoolFormComponent>,
    private _formBuilder: FormBuilder,
    private _service: SchoolService,
    private _externaService: ExternalService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.modalForm = this._formBuilder.group({
      name: ['', Validators.required],
      zipCode: ['', [Validators.required]],
      street: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    },);
  }

  fecharModal(): void{
    this._dialogRef.close();
  }

  saveSchool() {
    const school: School = {
      name: this.modalForm.get('name').value,
      email: this.modalForm.get('email').value,
      phone: this.modalForm.get('phone').value,
      zipCode: this.modalForm.get('name').value,
      street: this.modalForm.get('name').value,
      state: this.modalForm.get('name').value,
      district: this.modalForm.get('name').value,
      city: this.modalForm.get('name').value
    };

    this._service.saveSchool(school).subscribe(res => {
      console.log(res);
    })
  }

  setAddress(event){
    if(this.modalForm.get('zipCode').invalid) return;
    const zipCodeFormated = event.target.value.replace("-","");

    this._externaService.getAddress(zipCodeFormated).subscribe(res => {
      if(!res) return;

      this.modalForm.patchValue({
        street: res.logradouro,
        district: res.bairro,
        city: res.localidade,
        state: res.uf,
      })
    })
  }

}
