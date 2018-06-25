import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class CharacterProvider{

    /*
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
                {level:4, class:{name:"Wizard"}}
            ]
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
            ]
        }
    ];
    */

    private map: Array<Character> = [];

    constructor(private http: HttpClient){
        /*
            id: Number;
            player: String;
            name: String;
            race: String;
            campaignId: Number;
            levels: Array<Level>;
        */
        this.map.push(new Character(
            2,"Adolfo", "Aust", 
            "Wood Elf", 2, [
                {level:1, class:{name:"Ranger"}},
                {level:2, class:{name:"Ranger"}},
                {level:3, class:{name:"Ranger"}},
                {level:4, class:{name:"Figther"}}
            ]
        ));

        this.map.push(new Character(
            1,"Pedro", "Ronrik Wizley Willhem", 
            "Gnome", 1, [
                {level:1, class:{name:"Wizard"}},
                {level:2, class:{name:"Wizard"}},
                {level:3, class:{name:"Wizard"}},
                {level:4, class:{name:"Wizard"}},
                {level:5, class:{name:"Wizard"}},
                {level:6, class:{name:"Wizard"}}
            ]
        ));


    }

    public getCharactersByCampaign(campaignId:number):Promise<Array<Character>>{
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

export class Character{
    id: Number;
    player: String;
    name: String;
    race: String;
    campaignId: Number;
    levels: Array<Level>;

    constructor(id: Number,
        player: String,
        name: String,
        race: String,
        campaignId: Number,
        levels: Array<Level>){

    }
    
    public level():number{
        return this.levels.length;
    }

    public class():string{
        let classString = "";
        this.levels.forEach(lvl => {
            if(classString.lastIndexOf(lvl.class.name) == -1) return;
            if(classString != "") classString += classString+", ";
            classString += lvl.class.name;
        });
        return classString;
    }
}

export interface ICharacter{
    id: Number,
    player: String,
    name: String,
    race: String,
    class: String,
    campaignId: Number,
    levels: Array<Level>
}

export interface Level{
    level: number,
    class: Class
}

export interface Class{
    name: string
}