import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProviderComponent } from './components/provider/provider.component';
import { StoreComponent } from './components/store/store.component';
import { InventoryComponent } from './components/inventory/inventory.component';


const routes: Routes = [
	{ path:'', component: ProductComponent },
	{ path:'products', component: ProductComponent },
	{ path:'providers', component: ProviderComponent },
	{ path:'store', component: StoreComponent },
	{ path:'inventory', component: InventoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
