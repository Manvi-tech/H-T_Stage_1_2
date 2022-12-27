import { Injectable } from "@angular/core";

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class InMemoryDbEventService implements InMemoryDbService {
    
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 
        
        const events = [
            {
                "id":1,
                "name":"enva",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
                "imageUrl":"../assets/images/dog1.jpg",
                "location":{
                    "address":"123",
                    "city":"Delhi",
                    "country":"India"
                },
                "sessions":[
                    {
                        "id":10,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    {
                        "id":11,
                        "name":"",
                        "presentor":"Ivnam",
                        "duration":"",
                        "level":11,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                ]
            },
        
            {
                "id":2,
                "name":"Anugoonj",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
                "imageUrl":"../assets/images/dog1.jpg",
                "location":{
                    "address":"123",
                    "city":"Delhi",
                    "country":"India"
                },
                "sessions":[
                    {
                        "id":20,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    {
                        "id":21,
                        "name":"",
                        "presentor":"Ivnam",
                        "duration":"",
                        "level":11,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                ]
            },
        
            {
                "id":3,
                "name":"Asndbsnd",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
                "imageUrl":"../assets/images/dog1.jpg",
                "location":{
                    "address":"123",
                    "city":"Delhi",
                    "country":"India"
                },
                "sessions":[
                    {
                        "id":10,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    {
                        "id":11,
                        "name":"",
                        "presentor":"Ivnam",
                        "duration":"",
                        "level":11,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                ]
            }
        ]

        return events;
                
    }

}