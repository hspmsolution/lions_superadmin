import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    footer: {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'
    },
    socialIcons: {
        '& a': {
            color: '#fff',
            margin: '10px'
        }
    }
}))