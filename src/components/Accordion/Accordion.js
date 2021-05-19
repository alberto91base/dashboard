import { useState } from 'react';

import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        borderRadius: '30px 0px 30px 0',
        marginBottom: 20,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
    },
    expanded: {},
})(MuiAccordion);

const NewAccordion = ({ index, children, defaultExpanded }) => {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <Accordion
                className="accordion-eeeeeh"
                expanded={visible}
                onChange={() => setVisible(!visible)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-content${index}`}
                    id={`panel-content${index}`}
                >
                    Tramo {index + 1}
                </AccordionSummary>

                <AccordionDetails>{children}</AccordionDetails>
                {/* <AccordionActions>
                    <Button size="small" color="primary" onClick={() => setVisible(false)}>
                        Guardar
                    </Button>
                </AccordionActions> */}
            </Accordion>
        </div>
    );
};

export default NewAccordion;
