import post1 from "../components/blog-post.1.md" 
import Main from './BlogPosts';
import Box from '@mui/material/Box';
import style from './BlogMain.module.css';

const posts = [post1];

export default function BlogMain() {
  return (
    <>
      <Box className={style.box} sx={{width: 900}}>
        <Main title="Blog Posts" posts={posts} />
      </Box>
    </>
  )
}
