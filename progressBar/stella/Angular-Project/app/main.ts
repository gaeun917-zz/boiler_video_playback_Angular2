/**
 * Created by gaeunlee on 5/3/17.
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
// to get json data
import {HTTP_PROVIDERS} from '@angular/http';


bootstrap(AppComponent, [HTTP_PROVIDERS] );