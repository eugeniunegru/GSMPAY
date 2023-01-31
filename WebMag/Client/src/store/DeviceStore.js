import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types=[]
        this._brands=[]
        this._basket=[]
        this._devices=[{}]
        this._selectedType={}
        this._selectedBrand={}
        this._page=1
        this._totalCount=0
        this._limit=3
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types=types
    }
    setBrands(brands){
        this._brands=brands
    }
    setDevices(devices){
        this._devices=devices
    }
    setBasket(basket){
        this._basket=basket
    }
    setSelectedType(selectType){
        this._selectedType=selectType
    }
    setSelectedBrand(selectBrand){
        this._selectedBrand=selectBrand
    }
    setPage(page){
        this._page=page
    }
    setTotalCount(total){
        this._totalCount=total
    }
    get Types(){
        return this._types
    }
    get Brands(){
        return this._brands
    }
    get Devices(){
        return this._devices
    }
    get Basket(){
        return this._basket
    }
    get SelectedType(){
        this.setPage(1)
        return this._selectedType
    }
    get SelectedBrand(){
        this.setPage(1)
        return this._selectedBrand
    }
    get totalCount(){
        return this._totalCount
    }
    get limit(){
        return this._limit
    }
    get page(){
        return this._page
    }

}