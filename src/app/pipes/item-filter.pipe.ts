import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: any, type: string): any {
    let filteredValue = value;
    switch (type) {
      case 'i':
        filteredValue = value.filter(item => !item.selected);
        break;
      case 'c':
        filteredValue = value.filter(item => item.selected);
        break;
    }
    return filteredValue;
  }

}
