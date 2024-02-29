export class GetAssetsUrl {

    VaildUrlType(name:any,type:any){
        switch (type){
            case 'jpg': this.GetJpgUrl(name)
            break;
            case 'png':this.GetPngUrl(name)
            break;
        }
    }


    GetJpgUrl(name: any) {
        return new URL(`../images/${name}.jpg`, import.meta.url).href
    }
    GetPngUrl(name: any) {
        return new URL(`../images/${name}.png`, import.meta.url).href
    }
}