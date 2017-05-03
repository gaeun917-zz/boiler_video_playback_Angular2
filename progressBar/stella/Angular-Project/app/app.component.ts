// 1. import angular library
import {Component, OnInit} from '@angular/core';
import {ProgressComponent} from './progress.component';
import {ToolbarComponent} from './toolbar.component';
import {VideoService} from './video.service';
import {OptionsComponent} from './options.component';



//2. component
@Component({
    //<video-app>
    selector: 'video-app',
    template: `
                    <div id="fullPlayer" (mouseup)="videoService.dragStop($event)" 
                                         (mousemove)="videoService.dragMove($event)" 
                                         (mouseleave)="videoService.dragStop($event)">
                        <div class="embed-responsive embed-responsive-16by9">
                            <video id="videoDisplay" 
                                   width="100%" height="100%" 
                                   src="{{videoService.currentPath}}"  
                                   class="embed-responsive-item" controls
                                   (click)="videoService.playVideo()"></video>
                            <div id="bigPlayButton"
                                   (click)="videoService.playVideo()"
                                   [hidden]="videoService.isPlaying"
                                   [ngClass]="{'fade-out':videoService.isPlaying}"
                                   class="fader"><i class="fa fa-play"></i></div>
                            <div id="videoTitle" 
                                 style="font-size: 70px; margin: 100px 300px;"
                                 [hidden]="videoService.isPlaying"
                                 [ngClass]="{'fade-out':videoService.isPlaying}" 
                                 class="fader">{{videoService.currentTitle}}</div>
                            <video-options  class="fader"
                                            [hidden]="!videoService.showDetails"
                                            [ngClass]="{'fade-out':!videoService.showDetails}" ></video-options>

                        </div>
                        <!--new angular component-->
                        <video-progress></video-progress>
                        <video-toolbar></video-toolbar>
                    </div>                
              `,
    directives: [ProgressComponent, ToolbarComponent, OptionsComponent],
    providers: [VideoService]

})

//3. export
export class AppComponent implements OnInit {
    // pass VideoService as object
    constructor( public videoService: VideoService) {
    }

    ngOnInit() {
        this.videoService.appSetup("videoDisplay");
        this.videoService.gatherJSON();
    }
}
