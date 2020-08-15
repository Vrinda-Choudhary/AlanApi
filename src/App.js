import React,  {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/newsCards/NewsCards';
import useStyles from './styles.js';

const alanKey='aa7a0f8d3ec267c51f1648304a36145e2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =() => {
    const [newsArticles, setNewsArticles]= useState([]);
    const [activeArticle, setActiveArticle] =useState(-1);
    const classes=useStyles(); 
    useEffect(()=> {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles} )=>{
                if(command=== 'newHeadlines'){
                   setNewsArticles(articles);
                   setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle+1 );
                }
                   
            }
        })
    },[] )
    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>

            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    );
}


export default App;