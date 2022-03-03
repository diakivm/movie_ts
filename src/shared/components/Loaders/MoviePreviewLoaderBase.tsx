import React, {FC} from "react"
import ContentLoader from "react-content-loader"

const MoviePreviewLoaderBase: FC = (props: any) => (
  <ContentLoader   
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" /> 
  </ContentLoader>
)

export default MoviePreviewLoaderBase