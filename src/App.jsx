import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Amazon from './assets/amazon.png'
import Sirio from './assets/sirio.png'
import VnW from './assets/vainaweb.png'
import createGlobalStyle from 'styled-components'

const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
margin: 0;
padding: 0;
`

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
`

const Informacao = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Patrocinadores = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

const VnWImg = styled.img`
width: 150px;
height: 150px;
`

const AmazonImg = styled.img`
width: 150px;
height: 150px;
`

const SirioImg = styled.img`
width: 150px;
height: 150px;
`

function App() {

  const [marca, setMarca] = useState(VnW)
  
  useEffect(()=>{
    if(marca === Amazon){
      document.querySelector("div").style.backgroundColor = "#F79400"
    } else if (marca === VnW){
      document.querySelector("div").style.backgroundColor = "#FEB100"
    }else if (marca === Sirio){
      document.querySelector("div").style.backgroundColor = "#F7F7F7"
    }
  })
  
  return (
    <Section>
      <GlobalStyle/>

      <Informacao>
        <VnWImg src={marca} alt="Logo Vai na Web" />
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'</h2>
      </Informacao>
      <Patrocinadores>
        <AmazonImg src={Amazon} alt="Logo Amazon" onClick={()=>{setMarca(Amazon)}}/>
        <VnWImg src={VnW} alt="Logo Vai na Web" onClick={()=>{setMarca (VnW)}}/>
        <SirioImg src={Sirio} alt="Logo Sírio Libanês" onClick={()=>{setMarca (Sirio)}} />
      </Patrocinadores>
    </Section>
  )
}

export default App
