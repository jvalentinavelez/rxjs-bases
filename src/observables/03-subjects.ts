import { Observable, Observer, Subject, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable <number> ( subs => {

    //emite número random cada 1 seg
    const intervalID = setInterval(
        ()=> subs.next( Math.random() ), 1000
        );
    
    return () => { 
        clearInterval( intervalID );
        console.log('Intervalo destruido');
    };

});

// para que el observable se ejecute debe existir al menos una suscripción

const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {

    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 3500 );
