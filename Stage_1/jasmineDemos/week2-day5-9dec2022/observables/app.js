
import {Observable} from 'rxjs';

const obs = new Observable(
    subscriber =>{
        subscriber.next(5);
        subscriber.next(10);

        setTimeout(()=>{
            subscriber.next(90);
            subscriber.complete();
        }, 2000);
    }
);

console.log("before subscrpton");

obs.subscribe({
    next(data){console.log(data)},
    error(err){console.log(err)},
    complete(){console.log('completed')}
    
});

console.log("after subscrpton");