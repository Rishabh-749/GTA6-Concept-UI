import React , {useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'

function App() {

  const [showContent, setShowContent] = useState(false)

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to('.vi-mask-group',{
      rotate:10,
      ease: 'Power4.easeInOut',
      duration:2,
      transformOrigin: '50% 50%',
    }).to('.vi-mask-group',{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:'expo.inOut',
      transformOrigin: '50% 50%',
      onUpdate: () => {
        if(tl.progress() >= .9){
          document.querySelector('.svg')?.remove()
          setShowContent(true);
          tl.kill()
        }
      }
    })
  })

  useGSAP(()=>{
    const main = document.querySelector('.main')
    if(!showContent) return 

    gsap.to('.main',{
      scale:1,
      rotate:0,
      duration:2,
      delay:-0.5,
      ease: 'expo.inOut'
    })

    gsap.to('.character',{
      bottom : '-90%',
      duration:2,
      delay:'-.8',
      ease:'expo.inOut'
    })

    main?.addEventListener('mousemove',(e)=>{
      const xMove = (e.clientX / window.innerWidth -0.5) * 40
      
      gsap.to('.text-gta',{
        x: xMove * 0.4
      })
      gsap.to('.sky',{
        x: xMove,
      })
      gsap.to('.gta-bg',{
        x: xMove * 1.5,
      })
    })
  },[showContent])
  
  return (
    <>
      <div className='svg flex items-center justify-center z-[10] fixed top-0 left-0 h-screen w-full bg-black overflow-hidden'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {
        showContent && <div className='main w-full scale-[1.7] rotate-[-10deg]'>
          <div className='landingpage  relative w-full h-screen bg-black'>
            <div className='navbar px-6 py-8 w-full h-[50px] absolute top-0 left-0 z-[100] flex gap-4 items-center text-white'>
                <i className="ri-menu-line text-2xl"></i>
                <h1 className='text-3xl'>RockStar</h1>              
            </div>
            <div className='relative overflow-hidden imagesdiv w-full h-screen bg-red-100'>
              <img className='sky scale-[1.1] absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="skybackground" />
              <img className='gta-bg scale-[1.1] absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="background" />
              <div className='text-gta text-9xl leading-none text-white absolute top-0 left-1/2 -translate-x-[50%]'>
                <h1 className='-ml-[40%]'>grand</h1>
                <h1>theft</h1>
                <h1 className='-ml-[40%]'>auto</h1>
              </div>
              <img className='character absolute -bottom-[140%] left-1/2 -translate-x-1/2 object-cover scale-[0.7]' src="./boy.png" alt="boylogo" />
            </div>
            <div className="btmbar w-full absolute bottom-0 left-0 px-10 py-10 bg-gradient-to-t from-black to-transparent">
              <div className='flex items-center gap-2 text-white'>
                  <i className="ri-arrow-down-long-fill text-2xl"></i>
                  <h3 className='text-xl'>Scroll Down</h3>
              </div>
              <img className='absolute bottom-[2%] left-1/2 -translate-x-[50%] h-12' src="./ps5.png" alt="ps5_logo" />
            </div>
          </div>
          <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className="cntainer w-full h-[80%] flex items-center overflow-hidden">
              <div className='left w-1/2 h-full flex items-center justify-center'>
                <img className='h-full scale-[1.3]' src="./imag.png" alt="" />
              </div>
              <div className='right w-1/2 h-full flex flex-col gap-4 justify-center'>
              <div className='Heading'>
                <h1 className='text-7xl text-amber-400' >Still Running,</h1>
                <h1 className='text-7xl text-amber-400' >not Hunting</h1>
              </div>
                <p className='text-white font-sans w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi vitae, adipisci, sint repellat qui tempore sed molestiae dicta incidunt, magni eligendi voluptatum.</p>
                <p className='text-white font-sans w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque neque libero dolor obcaecati, corrupti ratione quibusdam atque.</p>
                <p className='text-white font-sans w-[80%] mt-4'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sunt quidem minima autem cumque alias excepturi fuga deleniti saepe reiciendis quod accusamus repellendus ea voluptatum molestias soluta, suscipit nesciunt! Autem.
                </p>
                <button className='mt-4 rounded shadow shadow-amber-300 px-6 py-4 bg-amber-400 self-start text-2xl'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
      } 
    </>
  )
}

export default App