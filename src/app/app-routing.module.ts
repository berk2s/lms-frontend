import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

const routerConfig: ExtraOptions = {}

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)
    },
    {
        path: 'auth',
        component: MainLayoutComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, routerConfig)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}