/**
 * Created by gaeunlee on 5/3/17.
 */

//1. import
import {Injectable} from '@angular/core';

//2. Injectable decorator meta
@Injectable()



//3. export class -> import to app.component
export class VideoService{

    public videoElement: any;
    public currentPath: string = "";
    public currentTitle: string = "loading...";
    // 3. time display
    public currentTime:number = 0;
    public totalTime:number = 0;
    // 4. progress bar
    public calculatedWidth:number;
    public calculatedScrubY:number;
    // 5. toggling the sound on/off
    public isMuted:boolean = false;
    // 6. toggle the play/pause
    public isPlaying:boolean = false;

    constructor(){}


    appSetup(v:string){ // data type
        //1. data binding (in this class.)
        this.videoElement = <HTMLVideoElement>document.getElementById(v);
        this.currentPath ="./video/cow.mp4";
        this.currentTitle = "Cow";
        //2. eventlistener(name,function)
        this.videoElement.addEventListener("loadedmetadata", this.updateData);
        this.videoElement.addEventListener("timeupdate", this.updateTime);
        //3. setInterval calling timerFired function
        window.setInterval(this.timerFired, 500);

    }
    // 3. triggered event
    updateData = (e:any) => {
        //4. updating variable
        this.totalTime = this.videoElement.duration;
    };
    // 3. triggered event
    updateTime = (e:any) => {
        this.currentTime = this.videoElement.currentTime;
    };

    //4. caculating progress bar position
    timerFired = () => {
        //4. where to position the bar
        this.calculatedScrubY = this.videoElement.offsetHeight;
        var t = this.videoElement.currentTime;
        var d = this.videoElement.duration;

        this.calculatedWidth = (t / d * this.videoElement.offsetWidth);
    };

    //.volume, .paused .play is navite function of vidoeElement
    //5. toggling the sound on/off
    muteVideo() {
        if(this.videoElement.volume == 0) { // false, Sound off == 0
            this.videoElement.volume = 1; // make the volume on
            this.isMuted = false;
        }else{
            this.videoElement.volume = 0;
            this.isMuted = true;
        }
    };
    //6. toggle the play/pause
    playVideo() {
        if(this.videoElement.paused) {
            this.videoElement.play();
            this.isPlaying = true;
        }else{
            this.videoElement.pause();
            this.isPlaying = false;
        }
    };




}
