import { useState } from 'react'
import './App.css'
import images  from "./assets/json/pictures.json";

function App() {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
    <div className="container">
      {/*header  */}
      <div className="header">
        <img  className="left-header-part" src={images.pictures[0].url} alt="picture" />
        <div className="right-header-part">
          <nav className='navigation'>
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </div>
      </div>
       {/*header mobile */}
      <div className="header-mobile">
       <img  className="left-header-part-mobile" src={images.pictures[0].url} alt="picture" />
          {menuClick ? 
          (
          <div className="header-hide">
            <div className="header-hide-content">
                          <ul className='header-hide-left'>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
            <img src={images.pictures[1].url} className='crestik' alt="krestic" onClick={() => setMenuClick(!menuClick)}/>
            </div>
      </div>) :
      (<div></div>)
       }
        <div className="right-header-part-mobile">
          <img src={images.pictures[2].url} onClick={() => setMenuClick(!menuClick)} alt="button mobile" />
        </div>
      </div>
      {/*main   */}
      <div className="main">
        <div className="picture-block">   
                        <picture>
        <source media="(max-width: 479px)" srcSet={images.pictures[7].url} />
        <img className='picture' src={images.pictures[6].url} alt="pic" />
    </picture>
          {/*text block */}
           <div className="text">
      <div className="text-left">The Bright Future of Web 3.0?</div>
      <div className="text-right">
        <div className="text-right-small">
          <p>We dive into the next evolution of  the web that </p>
          <p>claims to put the power of the platforms back</p>
          <p>into the hands of the people. But is it really</p>
          <p>fulfilling its promise?</p>
        </div>
        <button className='read-more'>Read More</button>
      </div>
    </div></div>
    <div className="text-new">
      <div className="text-new-content">
        <div className="text-new-header">New</div>
        <div className="text-new-block">
          <div className="new-block-header">Hydrogen VS Electric Cars</div>
          <div className="new-block-content">Will hydrogen-fueled cars ever catch up to <br/>EVs?</div>
        </div>
        <div className="text-new-block">
          <div className="new-block-header">The Donwside of Ai Artistry</div>
          <div className="new-block-content">What are the possible adverse effects of<br/> on-demand AI image generation?</div>
        </div>
              <div className="text-new-block">
          <div className="new-block-header">Is VC Funding Drying Up?</div>
          <div className="new-block-content">Private funding by VC firms is down 50%<br/>YOY. We take a look at  what that means</div>
        </div>
      </div>
    </div>
    <div className="boxes">
      <div className="box">
        <img className='box-left' src={images.pictures[4].url} alt="box left" />
        <div className="box-right">
          <div className="box-right-id">01</div>
          <div className="box-right-header">Reviving Retro PCs</div>
          <div className="box-right-text">What happens when old PCs<br/> 
          are given modern updates?</div>
        </div>
      </div>
      <div className="box">
        <img className='box-left' src={images.pictures[5].url} alt="box left" />
        <div className="box-right">
          <div className="box-right-id">02</div>
          <div className="box-right-header">Top 10 Laptops of 2022</div>
          <div className="box-right-text">Our best picks for various<br/> 
          needs and budgets.</div>
        </div>
      </div>
      <div className="box">
        <img className='box-left' src={images.pictures[3].url} alt="box left" />
        <div className="box-right">
          <div className="box-right-id">03</div>
          <div className="box-right-header">The Growth of Gaming</div>
          <div className="box-right-text">How the pandemic has sparked<br/> 
          fresh opportunities.</div>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default App
