import styled from "styled-components";
import Accordion from "./Accordion";

const ModalContainer = styled.div`
    background: #FFFFFF;
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1
`

const ModalWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    height: 95vh;
    background: #FFFFFF;
    //background: coral
`
export const ModalRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1 {
      font-size: 25px;
      line-height: 29px;
      color: #222222
    }
`
const CloseButton = styled.img`
    width: 25px;
    height: 25px
`

export const ModalLabel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
`
const Select =styled.select`
  width: 300px;
  height: 45px
`
const FilterButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const FilterButton = styled.button`
    width: 156px;
    height: 45px;
    border: 1px solid #9B9B9B;
    background: ${props => props.bg};
    color: #3B8448;
    font-size: 15px;
    font-weight: 700;
    padding: 0;
    margin: 0;
`

export const HorderLine = styled.hr`
    //...feels like im goin to lose my mind (madonna song)... ugh
    border: 1px solid #F0EDED;
    margin: 2px 0;
`
const categories = ['Refrigerators', 'Cooktop', 'Dishwasher', 'Microwave', 'Range', 'Range Hood', 'Wall Oven'];

const Modal = ({ onToggleModal }) => {
    return(
        <ModalContainer>
            <ModalWrapper>
                <ModalRow>
                    <h1>Sort & Filter</h1>
                    <CloseButton
                        src="close.png"
                        onClick={onToggleModal}
                    />
                </ModalRow>
                <HorderLine/>

                <ModalLabel>Sort By:</ModalLabel>
                <Select>
                    <option>Highest Price</option>
                    <option>Lowest Price</option>
                </Select>
                <ModalLabel>Filter By:</ModalLabel>
                <FilterButtonRow>
                    <FilterButton bg='#FFFFFF'>
                        CLEAR ALL
                    </FilterButton>
                    <FilterButton bg='#F5F5F5'>
                        APPLY
                    </FilterButton>
                </FilterButtonRow>

                <Accordion
                    label="Appliance Type"
                    content={categories}
                />

                <Accordion
                    label="Delivery Type"
                    content={['Quick Ship']}
                />

            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal
