import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatListModule, MatMenuModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { OrderModule } from 'ngx-order-pipe';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ReelService } from './shared/services/reel.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { ManagerListComponent } from './pages/manager-list/manager-list.component';
import { ManagerSorterComponent } from './pages/manager-sorter/manager-sorter.component';
import { ManagerHeaderComponent } from './pages/manager-header/manager-header.component';
import { ManagerListItemComponent } from './pages/manager-list-item/manager-list-item.component';
import { DetailsDialogComponent } from './shared/dialogs/details-dialog/details-dialog.component';
import { DurationPipe } from './shared/pipes/duration/duration.pipe';
import { FilterFavoritePipe } from './shared/pipes/filter-favorite/filter-favorite.pipe';
import { FilterSearchPipe } from './shared/pipes/filter-search/filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ManagerListComponent,
    ManagerSorterComponent,
    ManagerHeaderComponent,
    ManagerListItemComponent,
    DetailsDialogComponent,
    DurationPipe,
    FilterFavoritePipe,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OrderModule,
    AngularSvgIconModule,
    LayoutModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    FormsModule
  ],
  providers: [ ReelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
