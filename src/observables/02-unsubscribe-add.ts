import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subscriber => {
    //Crear un contador
    let counter :number = 0;

    //Emite el valor cada 1seg
    const interval = setInterval(() => {
        counter++;
        subscriber.next(counter);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    ///Se dispara una vez se ejecute el subscriber.complete()
    // Si no se llama antes el complete, se dispara con el unsubscribe
    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }

});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

//agrega una función cuando se llame el unsubscribe,
//también puede usarse para llamar una suscripción hija
subscription1.add( subscription2 )
subscription1.add(subscription3);




//para cancelar subscripción
setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado timeout');
}, 6000);