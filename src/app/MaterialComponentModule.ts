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
     MatRadioModule

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
        MatRadioModule
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
        MatRadioModule
    ]
})

export class MaterialComponentModule {}
