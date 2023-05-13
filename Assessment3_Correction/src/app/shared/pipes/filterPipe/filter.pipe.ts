import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchInput: any): any {
    return value.filter((search: any) => {

      return (
        search.firstname.toLowerCase().indexOf(searchInput.toLowerCase()) >
          -1 ||
        search.lastname.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        search.email.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        search.department.toLowerCase().indexOf(searchInput.toLowerCase()) >
          -1 ||
        search.address.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        search.contactnumber.toString().indexOf(searchInput.toString()) > -1 ||
        search.description.toLowerCase().indexOf(searchInput.toLowerCase()) > -1||
        search.status.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
      );
      // search.status.toLowerCase().indexOf(searchInput.toLowerCase())>-1
    });
  }
}
