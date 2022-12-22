import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['../../../styles/modal-form.style.scss']
})
export class ClassFormComponent implements OnInit {

  modalForm: FormGroup;
  classId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<ClassFormComponent>,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.modalForm = this._formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      representative: ['', ],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    },);
  }

  fecharModal(): void{
    this._dialogRef.close();
  }

  saveClass() {

  }

}
