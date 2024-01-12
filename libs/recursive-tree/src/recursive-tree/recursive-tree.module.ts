import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RecrusiveTree } from "./recursive-tree.component";

@NgModule({
    imports: [CommonModule],
    declarations: [RecrusiveTree],
    exports: [RecrusiveTree]
})
export class WixAppRecursiveTreeModule { }