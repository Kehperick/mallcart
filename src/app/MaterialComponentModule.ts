import {
    MatButtonModule,
     MatIconModule,
     MatTooltipModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatDividerModule,
     MatListModule,
     MatRippleModule,
     MatSelectModule,
     MatToolbarModule,
     MatRadioModule,
     MatSnackBarModule,
     MatButtonToggleModule,

} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatRippleModule,
        MatSelectModule,
        MatToolbarModule,
        MatRadioModule,
        MatSnackBarModule,
        MatButtonToggleModule
    ],
    exports:    [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatRippleModule,
        MatSelectModule,
        MatToolbarModule,
        MatRadioModule,
        MatSnackBarModule,
        MatButtonToggleModule
    ]
})

export class MaterialComponentModule {}
