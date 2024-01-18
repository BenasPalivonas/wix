import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IterativeTreeComponent } from "./iterative-tree/iterative-tree.component";

@NgModule({
    imports: [CommonModule],
    declarations: [IterativeTreeComponent],
    exports: [IterativeTreeComponent]
})
export class WixAppIterativeTreeModule { }