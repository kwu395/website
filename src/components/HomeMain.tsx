import style from "./HomeMain.module.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HomeMain() {
  return (
    <div>
        <Box className={style.box} sx={{width: 900}}>
            <img className={style.image} src={"dp.jpg"}/>
            <Typography sx={{padding: 3}}>
                Hey there! I'm (Ken) Kenneth Wu. I'm a full-stack developer based in Auckland, New Zealand, passionate about exploring new technologies and implementing
                high-quality software. 
                <br/>
                <br/>
                Recently, I completed the Level 4, 5 and 6 software developer accelerator courses at Mission Ready. I gained practical industry experience at 
                Foodstuffs North Island, where I played a key role in redesigning a highly-used report on SAP Analytics Cloud. This project involved close collaboration with 
                key stakeholders such as, UX designers, data analysts and end-users. 
                <br/>
                <br/>
                I am currently seeking a Junior Developer role where I can apply my skills, continue learning, and contribute to innovative projects in a professional setting.
            </Typography>
        </Box>
    </div>
  )
}
