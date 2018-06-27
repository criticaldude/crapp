import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class CharacterProvider{
    
    private map: Array<Character> = [
        {
            id:1, 
            campaignId: 1, 
            player: "Pedro", 
            name:"Ronrik Wizley Willhem", 
            race: "Gnome", 
            levels:[
                {level:1, class:{name:"Wizard"}},
                {level:2, class:{name:"Wizard"}},
                {level:3, class:{name:"Wizard"}},
                {level:4, class:{name:"Wizard"}},
                {level:5, class:{name:"Wizard"}},
                {level:6, class:{name:"Wizard"}},
                {level:7, class:{name:"Wizard"}},
                {level:8, class:{name:"Wizard"}},
                {level:9, class:{name:"Wizard"}}
            ],
            formatterClasses: "Wizard 9"
        },
        {
            id:2, 
            campaignId: 2, 
            player: "Adolfo", 
            name:"Aust", 
            race: "Wood Elf", 
            levels:[
                {level:1, class:{name:"Ranger"}},
                {level:2, class:{name:"Ranger"}},
                {level:3, class:{name:"Ranger"}},
                {level:4, class:{name:"Figther"}}
            ],
            formatterClasses: "Ranger 3, Figther 1"
        }
    ];

    constructor(private http: HttpClient){}

    public getCharactersByCampaign(campaignId:Number):Promise<Array<Character>>{
        return new Promise(resolve => { 
            let characters: Array<Character> = [];
            this.map.forEach(character => {
                if(character.campaignId == campaignId){
                    characters.push(character);
                }
            });
            resolve(characters);
        });
    }

    public getCharacter(id: Number):Promise<Character>{
        return new Promise(resolve => {
            this.map.forEach(character => {
                if(character.id === id) resolve(character);
            });
            resolve(undefined);
        });
    }
}

export interface Character{
    id: Number,
    player: String,
    name: String,
    race: String,
    campaignId: Number,
    levels: Array<Level>,
    formatterClasses: String
}

export interface Level{
    level: number,
    class: Class
}

export interface Class{
    name: string
}