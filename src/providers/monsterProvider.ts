import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class MonsterProvider{

    constructor(private http: HttpClient){}

    private getAll():Promise<Array<Monster>>{
        return new Promise(resolve => {
            this.http.get('assets/json/monsters.json').toPromise()
            .then((res: Array<Monster>) => {
                resolve(res);
            });
        });
    }

    public getList(searchVal:string):Promise<Array<Monster>>{
        return new Promise(resolve => {
            this.getAll().then((res: Array<Monster>) => {
                
                // if the value is an empty string don't filter the items
                if (searchVal && searchVal.trim() != '') {
                    res = res.filter((monster) => {
                        let name: string = monster.name+monster.creatureName;
                        return ( name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1);
                    });
                }
                resolve(res);
            });
        });
    }

    public get(id:number):Promise<Monster>{
        return new Promise(resolve => {
            this.getAll().then((res: Array<Monster>) => {
                let list = res.filter((item) => {
                    return (item.id === id);
                });
                resolve(list ? list[0] : undefined);
            });
        });
    }
}

export interface Monster{
    id: number,
    name?:string, 
    creatureName: string, //Acolyte 
    basic: string, //"Medium humanoid (any race), any alignment"
    ac: number, //10 
    hp: number, //9 
    hitDices: string, //Acolyte 
    spd: string, //"30 ft."
    str: string, //"10(+0)" 
    dex: string, //"10(+0)" 
    con: string, //"10(+0)" 
    int: string, //"10(+0)" 
    wis: string, //"14(+2)" 
    cha: string, //"10(+0)"
    skills: string, //"Medicine +4, Religion +2"
    perception: number, //10
    senses: string, //"passive Perseption 10"
    cr: string, //"1/4"
    xp: number, //50
    specialAbilities: [
        { 
            name: string, //"Spellcasting" 
            description: string //"The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks)." 
        }
    ],
    preparedSpells: [
        {
            level: string, //"Cantrips (at will)"
            spells: string //"light, sacred flame, thaumaturgy"
        }
    ],
    actions: [
        {
            name: string, //"Cantrips (at will)" 
            description: string //"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
        }
    ],
    reactions: [
        {
            name: string, //"Cantrips (at will)" 
            description: string //"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
        }
    ],
    info?: [
        string //"<b>Acolytes</b> are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities."
    ],
    equipment?: [
        { 
            type: string, //"weapon" 
            name: string //"Club" 
        }
    ]
}