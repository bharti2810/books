//used to bootstrap module, only used whenever we have a module.
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './appcomponent/app.module'

platformBrowserDynamic().bootstrapModule(AppModule);
