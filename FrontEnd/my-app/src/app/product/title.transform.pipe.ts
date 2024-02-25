import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'titleTransform'})
export class TitleTransformPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        if (value=== 'designerbags'){
            return 'Designer Bags'
        } else if (value==='strollerbags'){
            return 'Stroller Bags'
        }
        return
    }

}