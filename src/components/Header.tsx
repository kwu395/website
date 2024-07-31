import Button from '@mui/material/Button';
import style from './Header.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => () => {
        navigate(path);
    };

    return (
        <div>
            <Typography className={style.heading} variant="h2">Hey! I'm Ken.</Typography>   
            <Typography sx={{top: 120}} className={style.heading} variant="subtitle1">(This is a work in progress)</Typography>
            <Box sx={{width: 900, borderTop: 1, borderBottom: 1, borderColor: "lightBlue"}} className={style.box}>
                <Button sx={{width: 200}} className={style.homeButton} onClick={handleNavigation('/')}>HOME</Button>
                <Button sx={{width: 200}} className={style.projectsButton} onClick={handleNavigation('/projects')}>PROJECTS</Button>
                <Button sx={{width: 200}} className={style.blogButton} onClick={handleNavigation('/blog')}>BLOG</Button>
                <Button sx={{width: 200}} className={style.blogButton} onClick={handleNavigation('/contact')}>CONTACT</Button>
            </Box>
        </div>
    )
}
