import MoviePreviewLoader from "../shared/components/Loaders/MoviePreviewLoader"
import MoviePreviewLoaderBase from "../shared/components/Loaders/MoviePreviewLoaderBase"


export default class Loaders {

   static getFakeMoviePreview(count:number, props: any) {
      let fakeArray = [...Array(count)]

      return fakeArray.map((item, index) => {
         return <MoviePreviewLoader key={index} {...props} />
      })
   }

   static getFakeMoviePreviewBase(count:number, props: any) {
      let fakeArray = [...Array(count)]

      return fakeArray.map((item, index) => {
         return <MoviePreviewLoaderBase key={index} {...props} />
      })
   }
}