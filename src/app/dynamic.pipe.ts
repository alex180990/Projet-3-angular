import { Pipe, PipeTransform } from '@angular/core';
import { CategorieAAPipe } from './categorie-aa.pipe';
import { CategorieBbPipe } from './categorie-bb.pipe';
import { CategorieCcPipe } from './categorie-cc.pipe';
import { ScorePipe } from './score.pipe';

interface PipeDictionary {
  [key: string]: any;
}

@Pipe({
  name: 'dynamicPipe'
})
export class DynamicPipe implements PipeTransform {
  transform(value: any, pipeName: string, args?: any): any {
    if (pipeName) {
      const pipes: PipeDictionary = {
        'categorieAAPipe': CategorieAAPipe,
        'categorieBBPipe':CategorieBbPipe,
        'categorieCCPipe':CategorieCcPipe,
        'score': ScorePipe
      };

      const selectedPipe = pipes[pipeName];

      if (selectedPipe) {
        const pipe = new selectedPipe();

        if (args !== undefined) {
          return pipe.transform(value, ...args);
        } else {
          return pipe.transform(value);
        }
      }
    }

    return value;
  }
}