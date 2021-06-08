import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        <h2>Knowledgebase</h2>
        <br />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Fundamental Concepts</Typography>
          <Typography className={classes.secondaryHeading}>HTML, CSS, Terminal, JavaScript, JQuery, APIs, JSON, AJAX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Creating webpages from scratch using HTML, CSS Styling, JavaScript and JQuery.
            Using the terminal to push, pull and update github repositories and deploying pages via github.
            Consuming APIs and parsing JSON data to extract data.
            Updating website data using AJAX without having to hit the refresh button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>FullStack Engineering</Typography>
          <Typography className={classes.secondaryHeading}>Node.js, Node.Express, Inquirer, NPM, MySQL, MVC
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Working with servers, databases, and other back end technologies.
            Writing server-side JavaScript code with Node.js and serving static webpages.
            Querying large amounts of data and answering questions from a MySQL database.
            Understanding and using Joins, Wheres, and Counts strategically.
            Connecting the back end to the front end.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Improving Performance	</Typography>
          <Typography className={classes.secondaryHeading}>NoSQL, PWA's, React, MERN
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Utilising NoSQL databases, such as MongoDB, as an alternative to MySQL.
            Improving the performance of applications.
            Converting traditional applications into progressive web applications (PWAs)
            Creating single-page applications with React.
            Computer Science applied to JavaScript. (data structures, algorithms)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
