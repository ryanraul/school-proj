import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalService } from 'src/app/services/external.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['../../../styles/modal-form.style.scss']
})
export class StudentFormComponent implements OnInit {


  modalForm: FormGroup;
  classId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<StudentFormComponent>,
    private _formBuilder: FormBuilder,
    private _externaService: ExternalService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.modalForm = this._formBuilder.group({
      enrollment: ['', Validators.required],
      name: ['', Validators.required],
      class: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
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

  saveClass() {

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
