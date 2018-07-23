import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonsterDetailPage } from '../detail/monster.detail';
import { MonsterProvider, Monster } from '../../../providers/monsterProvider';

@Component({
  selector: 'page-monsterList',
  templateUrl: 'monster.list.html'
})
export class MonsterListPage {

    public monsters: Array<Monster> = [];

    constructor(private provider:MonsterProvider, private navCtrl:NavController){
        console.log(provider);
        this.getMonsters();
    }

    public getMonsters(ev?: any){
        const val = ev ? ev.target.value : undefined;
        this.provider.getList(val).then(res => this.monsters = res);
    }

    public open(id:number){
        this.navCtrl.push(MonsterDetailPage, {monsterId: id})
    }

}