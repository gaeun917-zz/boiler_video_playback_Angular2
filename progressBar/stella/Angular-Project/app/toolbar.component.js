/**
 * Created by gaeunlee on 5/3/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 1. import angular library (export class name)
var core_1 = require('@angular/core');
var video_service_1 = require('./video.service');
var timedisplay_pipe_1 = require("./timedisplay.pipe");
var ToolbarComponent = (function () {
    // pass videoservie.ts as a object, when you call toolbar, it will call videoservice too
    function ToolbarComponent(videoService) {
        this.videoService = videoService;
        // now you can use videoService function on template
    }
    ToolbarComponent = __decorate([
        core_1.Component({
            //<video-app>
            //(click): event trigger, eventListener at videoService
            //change the name of the class {'name':true, 'name':!false}
            //<i [ngClass] : {'fa-volume-off:videoService.isMuted', 'fa-volume-up: !videoService.isMute'} >
            selector: 'video-toolbar',
            template: "\n\n          <div id=\"playerToolBar\">\n                 <a id=\"playBtn\" \n                    class=\"btn btn-default\" \n                    (click)=\"videoService.playVideo()\">\n                        <i class=\"fa\" [ngClass]=\"{'fa-play': !videoService.isPlaying, 'fa-pause': videoService.isPlaying}\"></i></a>            \n                 <a id=\"muteBtn\" \n                    class=\"btn btn-default\" \n                    (click)=\"videoService.muteVideo()\">                  \n                        <i class=\"fa\" [ngClass]=\"{'fa-volume-off': videoService.isMuted, 'fa-volume-up': !videoService.isMuted}\" ></i></a>\n                 <span id=\"videoTime\">{{videoService.currentTime | timeDisplay }} / {{videoService.totalTime | timeDisplay}}</span>            \n                 <a id=\"fsBtn\" class=\"btn btn-default pull-right\" \n                    (click)=\"videoService.fullScreen()\"><i class=\"fa fa-expand\"></i></a>\n                 <a id=\"detailsBtn\" class=\"btn btn-default pull-right\" \n                    (click)=\"videoService.details()\"><i class=\"fa fa-bars\"></i></a>\n          </div>         \n                ",
            pipes: [timedisplay_pipe_1.TimeDisplayPipe]
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map