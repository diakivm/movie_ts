import {IMedia, mediaType, mediaTypes} from "../models/IMedia";

export default class Loaders {

  static isUndefined(obj: any){
     if(obj === undefined){
        return true
     }else{
        return false
     }
  }

  static getString(obj: any[], key: string, separator: string){
     if(this.isUndefined(obj)){
       return
      }else {
         return obj.map(el => el[key]).join(separator)
      }
  }  

  static getArray(length: number){
    const newArray = []
    
    for (let index = 0; index < length; index++)
      newArray.push(index+1)

   return newArray
}

    static getArrayOfMediaWithType (array: IMedia[], type: mediaType) {
      return array.map(item => {
                 return {...item, type: mediaTypes.MOVIE}
             })
    }

}