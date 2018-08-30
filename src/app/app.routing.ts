import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { MagnetsComponent } from './components/products/magnets/magnets.component';
import { MagneticComponent } from './components/products/magnetic/magnetic.component';
import { ToolsComponent } from './components/products/tools/tools.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',     component: LandingComponent },
    { path: 'magnets',  component: MagnetsComponent },
    { path: 'magnetic', component: MagneticComponent },
    { path: 'tools',    component: ToolsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
