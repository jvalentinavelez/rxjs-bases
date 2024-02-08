import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyupPluck$.subscribe( val => console.log('pluck', val) );