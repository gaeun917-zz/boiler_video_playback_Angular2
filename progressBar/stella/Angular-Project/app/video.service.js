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
//1. import
var core_1 = require('@angular/core');
//1.1 gathering json data
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//2. Injectable decorator meta
var VideoService = (function () {
    function VideoService(http) {
        var _this = this;
        this.http = http;
        this.currentPath = "";
        this.currentTitle = "loading...";
        // 3. time display
        this.currentTime = 0;
        this.totalTime = 0;
        // 5. toggling the sound on/off
        this.isMuted = false;
        // 6. toggle the play/pause
        this.isPlaying = false;
        // 7. thumb srcubber : drag to seek
        this.isDragging = false;
        // 8. fullscreen mode
        // 9. playlist detail
        this.showDetails = false;
        this.currentDesc = "current video description";
        //10. gathering json data
        this.playlist = [];
        // 3. triggered event
        this.updateData = function (e) {
            //4. updating variable
            _this.totalTime = _this.videoElement.duration;
        };
        // 3. triggered event
        this.updateTime = function (e) {
            _this.currentTime = _this.videoElement.currentTime;
        };
        //4. caculating progress bar position
        this.timerFired = function () {
            if (!_this.isDragging) {
                //4. where to position the bar
                _this.calculatedScrubY = _this.videoElement.offsetHeight;
                var t = _this.videoElement.currentTime;
                var d = _this.videoElement.duration;
                _this.calculatedWidth = (t / d * _this.videoElement.offsetWidth);
            }
        };
        //8. drag to seek
        this.dragStart = function (e) {
            this.isDragging = true;
        };
        this.dragMove = function (e) {
            if (this.isDragging) {
                this.calculatedWidth = e.x;
            }
        };
        this.dragStop = function (e) {
            if (this.isDragging) {
                this.isDragging = false;
                this.seekVideo(e);
            }
        };
        //11. gather json data -> ngOnInit
        this.gatherJSON = function () {
            _this.http.get('./data/playlist.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.playlist = data;
                _this.selectedVideo(1);
            });
        };
        // 12. *ngFor
        this.selectedVideo = function (i) {
            _this.currentTitle = _this.playlist[i]['title'];
            _this.currentDesc = _this.playlist[i]['description'];
            _this.videoElement.src = _this.playlist[i]['path'];
            _this.videoElement.pause();
            _this.isPlaying = false;
        };
    }
    VideoService.prototype.appSetup = function (v) {
        //1. data binding (in this class.)
        this.videoElement = document.getElementById(v);
        // this.currentPath ="./video/cow.mp4";
        // this.currentTitle = "Cow";
        // //2. eventlistener(name,function)
        this.videoElement.addEventListener("loadedmetadata", this.updateData);
        this.videoElement.addEventListener("timeupdate", this.updateTime);
        //3. setInterval calling timerFired function
        window.setInterval(this.timerFired, 500);
        //4. video description
        // this.currentDesc = "A cow.";
    };
    //navite function of vidoeElement: .volume, .paused .play
    //5. toggling the sound on/off
    VideoService.prototype.muteVideo = function () {
        if (this.videoElement.volume == 0) {
            this.videoElement.volume = 1; // make the volume on
            this.isMuted = false;
        }
        else {
            this.videoElement.volume = 0;
            this.isMuted = true;
        }
    };
    ;
    //6. toggle the play/pause
    VideoService.prototype.playVideo = function () {
        if (this.videoElement.paused) {
            this.videoElement.play();
            this.isPlaying = true;
        }
        else {
            this.videoElement.pause();
            this.isPlaying = false;
        }
    };
    ;
    //7. click to seek a frame on progress.component click event
    VideoService.prototype.seekVideo = function (e) {
        var w = document.getElementById('progressMeterFull').offsetWidth;
        var d = this.videoElement.duration;
        var s = Math.round(e.pageX / w * d);
        this.videoElement.currentTime = s;
    };
    ;
    // 9. fullscreen (depends on browsers)
    VideoService.prototype.fullScreen = function () {
        if (this.videoElement.requestFullscreen) {
            this.videoElement.requestFullscreen();
        }
        else if (this.videoElement.mozRequestFullScreen) {
            this.videoElement.mozRequestFullScreen();
        }
        else if (this.videoElement.webkitRequestFullscreen) {
            this.videoElement.webkitRequestFullscreen();
        }
        else if (this.videoElement.msRequestFullscreen) {
            this.videoElement.msRequestFullscreen();
        }
    };
    ;
    //10. playlist detail toggling
    VideoService.prototype.details = function () {
        if (this.showDetails == false) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
    };
    ;
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map