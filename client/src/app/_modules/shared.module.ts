import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from 'ngx-timeago';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
      }
    ),
    NgxGalleryModule ,
    NgxSpinnerModule.forRoot({
      type: 'square-jelly-box'
    }),
    FileUploadModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TimeagoModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
      BsDropdownModule,
      ToastrModule,
      TabsModule,
      NgxGalleryModule,
      NgxSpinnerModule,
      FileUploadModule,
      PaginationModule,
      ButtonsModule,
      TimeagoModule,
      ModalModule,
  ]
})
export class SharedModule { }
