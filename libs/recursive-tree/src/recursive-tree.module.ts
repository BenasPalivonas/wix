import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RecrusiveTreeComponent } from "./recursive-tree/recursive-tree.component";

@NgModule({
    imports: [CommonModule],
    declarations: [RecrusiveTreeComponent],
    exports: [RecrusiveTreeComponent]
})
export class WixAppRecursiveTreeModule { }