import {useEffect, useState} from 'react';
import styled from "styled-components";

const ModalContainer = styled.div`
    background: #FFFFFF;
    //background: rgba(3,122,85,0.38);
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
const ModalRow = styled.div`
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
    width: 27px;
    height: 27px
`
const HorderLine = styled.hr`
    //...feels like im goin to lose my mind (madonna song)... ugh
    border: 1px solid #F0EDED;
    margin: 2px 0;
`
const ModalLabel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
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
const AccordionToggle = styled.img`
    width: 12px;
    height: 12px;
`

// opacity: ${props => {
//     switch (props.fadeType) {
//         case "in":
//             return "1";
//         default:
//             return "0";
//     }
// }};
// transition: ${props => {
//     switch (props.fadeType) {
//         case "in":
//             return `opacity linear 0.25s;`;
//         case "out":
//             return `opacity linear 0.25s;`;
//         default:
//             return "";
//     }
// }};

function Modal({ onToggleModal }) {

    const [categoryOpen, setCategoryOpen] = useState(false);
    const toggleCategoryOpen = setCategoryOpen(!categoryOpen);

    const [quickshipOpen, setQuickshipOpen] = useState(false);
    const toggleQuickshipOpen = setQuickshipOpen(!quickshipOpen);

    let categories = ['Refrigerators', 'Cooktop', 'Dishwasher', 'Microwave', 'Range', 'Range Hood', 'Wall Oven'];

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

                <ModalLabel>Filter By:</ModalLabel>
                <FilterButtonRow>
                    <FilterButton bg='#FFFFFF'>
                        CLEAR ALL
                    </FilterButton>
                    <FilterButton bg='#F5F5F5'>
                        APPLY
                    </FilterButton>
                </FilterButtonRow>

                <ModalRow>
                    <ModalLabel>Appliance Type</ModalLabel>
                    <AccordionToggle
                        // onClick={toggleCategoryOpen}
                        src={ categoryOpen ? "minus.png" : "plus.png"}
                    />
                </ModalRow>
                { !categoryOpen && <HorderLine/> }
                {/*{ categoryOpen && <h1>OPEN SESAME</h1>*/}
                {/*}*/}

                {/*<ModalRow>*/}
                {/*    <ModalLabel>Delivery Type</ModalLabel>*/}
                {/*    <AccordionToggle*/}
                {/*        onClick={toggleQuickshipOpen}*/}
                {/*        src={ quickshipOpen ? "minus.png" : "plus.png"}*/}
                {/*    />*/}
                {/*</ModalRow>*/}
                {/*{ !quickshipOpen && <HorderLine/>}*/}
                {/*{ quickshipOpen && <h1>QUICKSHIP MEEE</h1>}*/}

            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal

//
// (
//     categories.map((category, index) => {
//         return (
//             <React.Fragment>
//                 <input
//                     type="checkbox"
//                 />
//                 <label
//                     key={index}
//                     value={category}
//                 >
//                     {category}
//                 </label>
//             </React.Fragment>
//         )
//     })
// )