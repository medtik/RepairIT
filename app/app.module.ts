import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SetupComponent } from "./setup/setup.component";
import { NewuserComponent } from "./newuser/newuser.component";
import { NeworderComponent } from "./neworder/neworder.component";
import { OrderModalComponent } from "./ordermodal/ordermodal.component";

import { CompanyService } from "./services/company.service";
import { CouchbaseService } from "./services/couchbase.service";
import { ProcessHTTPMsgService } from "./services/process-httpmsg.service";
import { BaseURL } from "./shared/baseurl";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        TNSFontIconModule.forRoot({
            "fa": "./fonts/font-awesome.min.css"
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SetupComponent,
        NewuserComponent,
        NeworderComponent,
        OrderModalComponent
    ],
    entryComponents: [
        OrderModalComponent
    ],
    providers: [
        {provide: 'BaseURL', useValue: BaseURL},
        ProcessHTTPMsgService,
        CompanyService,
        CouchbaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }