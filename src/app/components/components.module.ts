import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { MagnetsComponent } from './products/magnets/magnets.component';
import { MagneticComponent } from './products/magnetic/magnetic.component';
import { ToolsComponent } from './products/tools/tools.component';
import { MotorComponent } from './products/motor/motor.component';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JWBootstrapSwitchModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        ComponentsComponent,
        MagnetsComponent,
        MagneticComponent,
        ToolsComponent,
        MotorComponent,
        MapComponent,
        HistoryComponent,
    ]
})
export class ComponentsModule { }
