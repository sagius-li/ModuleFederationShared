import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";

import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
    declarations: [TitleBarComponent],
    imports: [MatCardModule],
    exports: [TitleBarComponent],
})
export class SharedCoreModule { }