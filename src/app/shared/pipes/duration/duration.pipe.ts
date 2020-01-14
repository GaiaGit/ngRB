import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if(isNaN(value)) return "-- : --";

    let duration:string = "";
    let hours = Math.floor(value / 3600) % 24;
    let minutes = Math.floor(value / 60) % 60;
    let seconds = Math.floor(value) % 60;

    duration  = hours ? hours + ":" : "";
    duration += hours && minutes < 10 ? "0" + minutes + ":" : minutes + ":";
    duration += seconds < 10 ? "0" + seconds : seconds;
    return duration;
  }

}
