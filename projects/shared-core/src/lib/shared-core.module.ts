import { NgModule } from '@angular/core';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
    declarations: [TitleBarComponent],
    exports: [TitleBarComponent],
})
export class SharedCoreModule { }