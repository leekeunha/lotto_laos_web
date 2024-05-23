import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

export function FaqAccodians({ items }) {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {items &&
                items.map(({ question, answer }, index) => (
                    <Accordion key={index} open={open === index + 1}>
                        <AccordionHeader onClick={() => handleOpen(index + 1)} className="text-xs">
                            Q. {question}
                        </AccordionHeader>
                        <AccordionBody className="text-xs">A. {answer}</AccordionBody>
                    </Accordion>
                ))}
        </>
    );
}
