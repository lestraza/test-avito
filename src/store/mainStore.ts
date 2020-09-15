import { IImage } from "./mainStore.interface";
import { observable, action } from "mobx";
import { getImagesReq, loadImageReq } from "../request";

class MainStore {
    @observable
    public dataImages: IImage[] = [];

    @observable
    public currentImage?: IImage;

    @observable
    public error: string = ''

    @observable
    public isLoading: boolean = false

    constructor(props: MainStore) {
        this.getImages();
    }

    @action.bound
    public getImages() {
        this.isLoading = true
        getImagesReq().then((res) => {
            this.dataImages = res.data
            console.log(this.dataImages[0].url);
        })
        .catch(err => {
            this.error = err.data.error
        })
        .finally(() => {
            this.isLoading = false
        })
    }

    @action.bound
    private loadImages(url:string) {
        loadImageReq(url)
    }
}
export default MainStore;
