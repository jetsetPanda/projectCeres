import {Fragment, useState, useEffect} from 'react';
import {ModalLabel, ModalRow, HorderLine} from './Modal';
import styled from "styled-components";

const AccordionToggle = styled.img`
    width: 12px;
    height: 12px;
`
const Accordion = ({label,content}) => {

    const [isOpen, setOpen] = React.useState(false);

    const renderChecklist = categories => {
        return categories.map((category, index) => {
            return (
                <div>
                    <input
                        type="checkbox"
                    />
                    <label
                        key={index}
                        value={category}
                    >
                        {category}
                    </label>
                </div>
            )

        })
    };

    return (
        <Fragment>
            <ModalRow
                onClick={() => setOpen(!isOpen)}
            >
                <ModalLabel>{label}</ModalLabel>
                <AccordionToggle
                    src={ isOpen ? "minus.png" : "plus.png"}
                />
            </ModalRow>
            { isOpen ? renderChecklist(content) : <HorderLine/>}
        </Fragment>

    )
}


export default Accordion