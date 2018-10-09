import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { MagnetsComponent } from './components/products/magnets/magnets.component';
import { MagneticComponent } from './components/products/magnetic/magnetic.component';
import { ToolsComponent } from './components/products/tools/tools.component';
import { MotorComponent } from './components/products/motor/motor.component';
import { HistoryComponent } from './components/history/history.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',     component: LandingComponent },
    { path: 'history',  component: HistoryComponent },
    { path: 'magnetic', component: MagneticComponent },
    { path: 'magnets',  component: MagnetsComponent },
    { path: 'tools',    component: ToolsComponent },
    { path: 'motor',    component: MotorComponent },
    { path: 'contact',  component: MapComponent },
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
