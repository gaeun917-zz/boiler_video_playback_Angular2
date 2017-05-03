/**
 * Created by gaeunlee on 5/3/17.
 */



// 1. import angular library (export class name)
import {Component} from '@angular/core';
import {VideoService} from './video.service';
import {TimeDisplayPipe} from "./timedisplay.pipe";


@Component({
    //<video-app>
    //(click): event trigger, eventListener at videoService
    //change the name of the class {'name':true, 'name':!false}
    //<i [ngClass] : {'fa-volume-off:videoService.isMuted', 'fa-volume-up: !videoService.isMute'} >
    selector: 'video-toolbar',
    template: `

          <div id="playerToolBar">
                 <a id="playBtn" 
                    class="btn btn-default" 
                    (click)="videoService.playVideo()">
                        <i class="fa" [ngClass]="{'fa-play': !videoService.isPlaying, 'fa-pause': videoService.isPlaying}"></i></a>            
                 <a id="muteBtn" 
                    class="btn btn-default" 
                    (click)="videoService.muteVideo()">                  
                        <i class="fa" [ngClass]="{'fa-volume-off': videoService.isMuted, 'fa-volume-up': !videoService.isMuted}" ></i></a>
                 <span id="videoTime">{{videoService.currentTime | timeDisplay }} / {{videoService.totalTime | timeDisplay}}</span>            
                 <a id="fsBtn" class="btn btn-default pull-right" 
                    (click)="videoService.fullScreen()"><i class="fa fa-expand"></i></a>
                 <a id="detailsBtn" class="btn btn-default pull-right" 
                    (click)="videoService.details()"><i class="fa fa-bars"></i></a>
          </div>         
                `,
    pipes: [TimeDisplayPipe]
})


//3. export
export class ToolbarComponent {
    // pass videoservie.ts as a object, when you call toolbar, it will call videoservice too
    constructor(public videoService: VideoService) {
        // now you can use videoService function on template
    }
}