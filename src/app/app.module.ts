import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

/* estas 2 de aqui son necesarias para cambiar la fecha al español */
/* al igual que ejecutar ng @angular/localize para instalar todos los idiomas localmente en la maquina*/
import { registerLocaleData } from '@angular/common';
import _defaultEs from '@angular/common/locales/es';
import _defaultFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ConstrasenaPipe } from './pipes/constrasena.pipe';

/* esta tambien aqui se llama el idioma */
registerLocaleData(_defaultEs);
registerLocaleData(_defaultFr);

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, ConstrasenaPipe],
  imports: [BrowserModule],
  providers: [
    /* esta tambien aqui se le dice que el idioma por defecto es el español*/
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
