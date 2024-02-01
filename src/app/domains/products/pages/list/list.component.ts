import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [ProductComponent]
})
export class ListComponent {

}
