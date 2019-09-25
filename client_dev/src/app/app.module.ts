import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TtdComponent } from './components/ttd/ttd.component';
// import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.router';
import { WeComponent } from './components/we/we.component';
import { SecretariaTecnicaComponent } from './components/secretaria-tecnica/secretaria-tecnica.component';
import { NoticieroComponent } from './components/noticiero/noticiero.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ReunionesComponent } from './components/reuniones/reuniones.component';
import { VisionComponent } from './components/vision/vision.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { StatutosComponent } from './components/statutos/statutos.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { DocumentoService } from './components/services/comuneto/documento.service';
import { HttpClientModule } from '@angular/common/http';
import { SubirArchivoService } from './components/services/subirArchivo/subir-archivo.service';

import { ContactService } from './components/services/contact/contact.service';



import { ImagenPipe } from './components/pipes/imagen.pipe';
import { PipePipe } from './components/pipes/search.pipe';
import { DocumentPipe } from './components/pipes/document.pipe';
import { InsumosGPipe } from './components/pipes/insumos-g.pipe';
import { InsumosGroupPipe } from './components/pipes/insumos-group.pipe';
import { ConveniosPipe } from './components/pipes/convenios.pipe';
import { JusticiaJPipe } from './components/pipes/justicia-j.pipe';

import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';
import { ResumenNoticiaComponent } from './components/resumen-noticia/resumen-noticia.component';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { LinkComponent } from './components/link/link.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { EditorModule } from '@tinymce/tinymce-angular';

import { CKEditorModule} from 'ng2-ckeditor';
import { NoticiaPipe } from './components/pipes/noticia.pipe';

// hash local estrategi
import { HashLocationStrategy, LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TtdComponent,
    // NavbarComponent,
    FooterComponent,
    HomeComponent,
    WeComponent,
    SecretariaTecnicaComponent,
    NoticieroComponent,
    ContactanosComponent,
    ReunionesComponent,
    VisionComponent,
    ObjetivosComponent,
    StatutosComponent,
    LoginComponent,
    DocumentosComponent,
    ImagenPipe,
    PipePipe,
    DocumentPipe,
    InsumosGPipe,
    InsumosGroupPipe,
    ConveniosPipe,
    JusticiaJPipe,
    MapaComponent,
    ReunionesComponent,
    ResumenNoticiaComponent,
    ComunicadosComponent,
    LinkComponent,
    MultimediaComponent,
    NoticiaComponent,
    NoticiaPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    CKEditorModule,
    NgxYoutubePlayerModule.forRoot(),
    // platformBrowserDynamic,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBW3aCDf0fYoh3B6yWW1eJ5TvxJSEBATJc'
    })
  ],
  providers: [DocumentoService, SubirArchivoService, ContactService,
    {provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
