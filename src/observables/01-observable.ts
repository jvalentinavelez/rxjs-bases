import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [obs]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('mundo');

    //forzar un error
    const a  = undefined;
    a.nombre = 'fernando';

    subs.complete();

    subs.next('Hola');
    subs.next('mundo');
});


//obs$.subscribe( resp => console.log(resp) );
//subscribe tiene 3 argumentos
// obs$.subscribe( 
//     //callback llamado next
//     valor => console.log('next', valor),
//     // error?
//     error => console.warn('error', error),
//     //callback complete
//     () => console.info('Complete')
//  );

obs$.subscribe(observer);
