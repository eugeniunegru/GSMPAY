import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth=false
        this.user={}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth=bool
    }
    setUser(user){
        this.user=user
    }
    get IsAuth(){
        return this._isAuth
    }
    get User(){
        return this.user
    }

}