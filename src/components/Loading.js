import { Blocks } from  'react-loader-spinner'
import styled from 'styled-components/macro'

function Loading() {
  return (
<Spinner>
<Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
</Spinner>
  )
}

const Spinner = styled.div`
  display:flex ;
  flex-direction:column ;
  justify-content:center ;
  align-items:center ;
  height:80vh ;

  .blocks-wrapper{
    width:100%;
    height:80% ;
  }
 
`




export default Loading;