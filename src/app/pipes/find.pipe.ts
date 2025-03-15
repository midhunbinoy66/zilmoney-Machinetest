import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../shared/interface/userInterfaces';

@Pipe({
  name: 'find',
  standalone: true
})
export class FindPipe implements PipeTransform {

  transform(value: IUser[],field:string,query:string ): IUser[] {

    if(query){
      const reg = new RegExp(query,'i');
      if(field === 'name'){
        return value.filter(item=>item.name.match(reg))
      } 
      if(field === 'company'){
        return value.filter(item=>item.company.name.match(reg))
      }
      if(field ==='designation'){
        return value.filter(item=>item.company.designation.match(reg))
      }
    }
    return value;;
  }

}
