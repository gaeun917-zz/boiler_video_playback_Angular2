/**
 * Created by gaeunlee on 5/3/17.
 */


// 1. import angular library
import {Component} from '@angular/core';
import {VideoService} from "./video.service";


@Component({
    //<video-app>
    selector: 'video-progress',
    template: `
               <div id="progressMeterFull">
                     <div id="progressMeter" [style.width.px]="videoService.calculatedWidth"></div>
                </div>
                        <div id="thumbScrubber" [style.top.px]="videoService.calculatedScrubY - 2"
                                                [style.left.px]="videoService.calculatedWidth"></div>
                
                `
})


//3. export
export class ProgressComponent {
    constructor(public videoService:VideoService) {
    }
}