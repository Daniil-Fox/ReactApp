import Article from './Article';
import classes from './Article.module.scss'

import img1 from './../../assets/articles/01.png'
import img2 from './../../assets/articles/02.png'
import img3 from './../../assets/articles/03.png'

const Articles: React.FC = () => {
    return (
        <section className={classes.Articles}>
            <h2 className={'title centered ' + classes.Articles__title}>Check out our latest article</h2>
            <div className={classes.Articles__container}>
                <Article 
                    img={img1} 
                    title='Disease detection, check up in the laboratory'
                    desc='In this case, the role of the health laboratory is very important to do a disease detection...' 
                    link='#'
                />
                <Article 
                    img={img2} 
                    title='Herbal medicines that are safe for consumption'
                    desc='Herbal medicine is very widely used at this time because of its very good for your health...' 
                    link='#'
                />
                <Article 
                    img={img3} 
                    title='Natural care for healthy facial skin'
                    desc='A healthy lifestyle should start from now and also for your skin health. There are some...' 
                    link='#'
                />
            </div>
        </section>
    )
}

export default Articles;