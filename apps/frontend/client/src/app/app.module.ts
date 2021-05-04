import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'intSrv-client' }),
    HttpClientModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ],
})
export class AppModule {}
