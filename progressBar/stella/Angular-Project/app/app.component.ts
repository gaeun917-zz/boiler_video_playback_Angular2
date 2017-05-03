// 1. import angular library
import {Component, OnInit} from '@angular/core';
import {ProgressComponent} from './progress.component';
import {ToolbarComponent} from './toolbar.component';
import {VideoService} from './video.service';

//2. component
@Component({
    //<video-app>
    selector: 'video-app',
    template: `
              <div class="row">
                <div class="col-sm-12">
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
                                   [hidden]="videoService.isPlaying"><i class="fa fa-play"></i></div>
                            <div id="videoTitle" 
                                 style="font-size: 100px; margin: 250px 720px;"
                                 [hidden]="videoService.isPlaying">{{videoService.currentTitle}}</div>
                        </div>
                        <!--new angular component-->
                        <video-progress></video-progress>
                        <video-toolbar></video-toolbar>
                        
                    </div>                
                </div>
              </div>
              `,
    directives: [ProgressComponent, ToolbarComponent],
    providers: [VideoService]

})

//3. export
export class AppComponent implements OnInit {
    // pass VideoService as object
    constructor( public videoService: VideoService) {
    }

    ngOnInit() {
        this.videoService.appSetup("videoDisplay");
    }
}
