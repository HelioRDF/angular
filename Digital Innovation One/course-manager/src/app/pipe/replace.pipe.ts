import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})

export class ReplacePipe implements PipeTransform {

  transform(value: string | undefined, char: string, valueToReplace: string) {

    if (value != null) {
      return value.replace(char, valueToReplace)
    } else {
      return null;
    }

  }
}
