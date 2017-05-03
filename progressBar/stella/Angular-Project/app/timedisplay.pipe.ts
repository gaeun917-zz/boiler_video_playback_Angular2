/**
 * Created by gaeunlee on 5/3/17.
 */

// 1. import pipe & pipeTransform
import {Pipe, PipeTransform} from '@angular/core';


//2. pipe decorator : defining name of pipe
@Pipe({
    name: 'timeDisplay'
})


//3. export the class
export class TimeDisplayPipe implements PipeTransform {
    // 3.1 transform one number to another
    transform(value: number, args: string[]): string { // 3.2 returning format will be a String
        // 3.3 calculating hr, min, sec
        var hh = Math.floor(value / 3600),
            mm = Math.floor(value / 60) % 60,
            ss = Math.floor(value) % 60;
        //3.4 always have two digit numbers
        return hh + ":" + (mm < 10 ? "0" : "")
             + mm + ":" + (ss < 10 ? "0" : "") + ss;
    }
}

