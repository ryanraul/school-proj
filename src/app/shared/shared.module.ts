import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from './shared-material.module';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        SharedMaterialModule,
        FlexModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        FlexModule,
        FlexLayoutModule
    ]
})
export class SharedModule { }