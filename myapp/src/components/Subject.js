import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'justifty-start',
        gap: '15px',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const chipData = [
    { avatar: 'F', label: 'Food' },
    { avatar: 'S', label: 'Sports' },
    { avatar: 'M', label: 'Movies' },
    { avatar: 'W', label: 'Work' },
    { avatar: 'T', label: 'Travel' },
    { avatar: 'O', label: 'Other' },
];

const Chips = ({ onClick, values }) => {
    const classes = useStyles();

    const handleClick = (subject) => {
        onClick(subject);
    };

    return (
        <div className={classes.root} style={{ paddingTop: '15px' }}>
            {chipData.map((chip, index) => (
                <Chip 
                    key={index}
                    avatar={<Avatar> {chip.avatar} </Avatar>}
                    label={chip.label}
                    clickable
                    style={
                        values.taskSubject == chip.label
                        ? {backgroundColor: '#333996', color: 'white'} 
                        : {}
                    }
                    onClick={() => handleClick(chip.label)}
                    deleteIcon={<DoneIcon />}
                />
            ))}
        </div>
    );
};

export default Chips;