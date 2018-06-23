import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class CharacterProvider{

    private map: Array<Character> = [
        {id:1, campaignId: 1, player: "Pedro", name:"Ronrik Wizley Willhem", race: "Gnome", class: "Wizard"},
        {id:2, campaignId: 2, player: "Adolfo", name:"Aust", race: "Wood Elf", class: "Ranger"},
    ];

    constructor(private http: HttpClient){}

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

export interface Character{
    id: Number,
    player: String,
    name: String,
    race: String,
    class: String,
    campaignId: Number
}