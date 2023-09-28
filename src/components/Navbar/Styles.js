import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainNav: {
        position: 'fixed',
        '& .MuiToolbar-root': {
            backgroundColor: '#fff',
            '& .MuiBox-root': {
                '& button': {
                    color: '#565656'
                }
            }
        }
    },
    clubLogo: {
        borderRadius: '0%'
    }
}))