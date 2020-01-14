import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFavorite'
})
export class FilterFavoritePipe implements PipeTransform {

  transform(data, filter:string): any {
    if(filter)
      return data.filter(function(item){
        return item.favoriteDate !== null;
      })
    else return data
  }

}
