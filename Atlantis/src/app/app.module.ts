import { Injectable, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { IonicStorageModule } from "@ionic/storage";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import { ChartsModule } from "ng2-charts";
import { ModalDevicePageModule } from "./members/modal-device/modal-device.module";
import { MetricsPageModule } from "./members/metrics/metrics.module";
import { CommandPageModule } from "./members/command/command.module";
import { CalculationPageModule } from "./members/calculation/calculation.module";
import { from } from "rxjs";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ChartsModule,
    ModalDevicePageModule,
    MetricsPageModule,
    CommandPageModule,
    CalculationPageModule,
    IonicStorageModule.forRoot()
  ],
  exports: [ChartsModule],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
