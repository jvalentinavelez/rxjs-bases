import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code )
)

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyup$.subscribe(console.log);
keyupCode$.subscribe( val => console.log('map', val) );
keyupPluck$.subscribe( val => console.log('pluck', val) );