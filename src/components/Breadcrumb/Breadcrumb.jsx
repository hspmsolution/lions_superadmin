import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from './Styles';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div role="presentation" onClick={handleClick} className={classes.breadcrumbCont}>
            <Typography variant='h4'>Member Directory</Typography>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
                <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                    onClick={() => navigate('/')}
                />
                <StyledBreadcrumb component="a" href="#" label="Membership" />
                <StyledBreadcrumb component="a" href="#" label="Member Directory" />
            </Breadcrumbs>
        </div>
    );
}