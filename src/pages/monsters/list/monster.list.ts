import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MonsterProvider, Monster } from '../../../providers/monsterProvider';

@Component({
  selector: 'page-monsterList',
  templateUrl: 'monster.list.html'
})
export class MonsterListPage {

    //public monsters: Array<Monster> = [];

    public monsters = [];

    constructor(private provider:MonsterProvider){
        this.refreshMonsterList();
    }

    public refreshMonsterList(){
        this.provider.getAll().then(res => this.monsters = res);
    }

}