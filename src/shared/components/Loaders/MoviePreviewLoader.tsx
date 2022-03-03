import React, {FC} from "react"
import ContentLoader from "react-content-loader"

const MoviePreviewLoader: FC = (props: any) => (
  <ContentLoader   
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="80%" /> 
    <rect x="0" y="83%" rx="2" ry="2" width="100%" height="7%" /> 
    <rect x="0" y="92%" rx="2" ry="2" width="43%" height="5%" />
  </ContentLoader>
)

export default MoviePreviewLoader