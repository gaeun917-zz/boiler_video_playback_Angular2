"use strict";
/**
 * Created by gaeunlee on 5/3/17.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
// to get json data
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map