import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { MonsterProvider, Monster } from '../../../providers/monsterProvider';

@Component({
  selector: 'page-monsterDetail',
  templateUrl: 'monster.detail.html'
})
export class MonsterDetailPage {

    public monsters: Monster;

    constructor(private params:NavParams, private provider:MonsterProvider){
        let monsterId = params.get('monsterId');
        if(monsterId){
            provider.get(monsterId).then(res => {
                this.monsters = res;
                console.log('monster', this.monsters);
            });
        }
    }

}