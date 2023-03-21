import React from 'react'
import './Projects.css'
import {SiGithub,SiMedium} from 'react-icons/si'
import {BiLinkExternal} from 'react-icons/bi'
const Projects = () => {
  return (
    <div className='projs '>
      <div className='templatesgrid'></div>


    

      <div className='projs-body'>

     
     
          <h1 className='h1-m'>Projects</h1> 
     
           </div>
              <div className='templatesgrid'>
                  <div className='project'>
                      <h1 className='h1-n'> A Language Model</h1>
                      {/* <img src='https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg' alt='img' className='images'></img> */}
                      <div className='abstr'>
                              <h2 className='h2-abstr'>Abstract</h2>
                             
                        </div>
                        <p className='para-abstr'> Transformers, even though Recurrent Neural Networks work wonders with text data,
                        when tasked with context challenges in sequential data Transformers perform way better. So, to understand and implement
                        it better this project was done.
                              </p>

                        <div className='abstr'>
                              <h2 className='h2-abstr'>Challenges:</h2>
                              
                        </div>
                        <div className='icondiv'>
                        <Icons icons={<SiGithub />}/>
                        <Icons icons={<SiMedium />}/>
                        <Icons icons={<BiLinkExternal />}/>
                        


                        </div>

                  </div>
                  
                  <div className='project'>
                      <h1 className='h1-n'> Writing the Permanent of a Matrix in terms of a Determinant</h1>
                        
                      <div className='abstr'>
                              <h2 className='h2-abstr'>Abstract: </h2>
                             
                        </div>
                        <p className='para-abstr'>The challenge of computing the Permanent of a Matrix is in the subset of problems
                                that are really tough to solve. It is called as a NP problem.
                                ofcourse that doesn't stop us from pursing it to solve it, we need to have a really 
                                new and novel idea / approach
                              </p>
                        <div className='abstr'>
                              <h2 className='h2-abstr'>Challenges:</h2>
                              
                        </div>
                        <p className='para-abstr'>Computationally Intensive, and there is no algorithm to reduce it.
                              </p>                       
                        <div className='icondiv'>
                        <Icons icons={<SiGithub />}/>
                        <Icons icons={<SiMedium />}/>
                        <Icons icons={<BiLinkExternal />}/>
                       




                        </div>

                  </div>
                  
                  
                  <div className='project'>
                      <h1 className='h1-n'> Image Classification using Convolutional Neural Networks </h1>
                      <div className='abstr'>
                              <h2 className='h2-abstr'>Abstract</h2>
                              
                        </div>
                        <p className='para-abstr'> Extraction of features is really different for images and Convolutional Neural 
                        Networks really work well with images rather than ANN or other Neural Network Architectures.
                              </p>
                              <div className='abstr'>
                              <h2 className='h2-abstr'>Challenges:</h2>
                              
                        </div>
                        
                        <div className='icondiv'>
                        <Icons icons={<SiGithub />}/>
                        <Icons icons={<SiMedium />}/>                    
                        <Icons icons={<BiLinkExternal />}/>

                        </div>
                      

                  </div>
                  
                  
                  <div className='project'>
                      <h1 className='h1-n'> Sentiment Analysis </h1>
                       
                       
                        <div className='abstr'>
                              <h2 className='h2-abstr'>Abstract</h2>
                              
                        </div>
                        <p className='para-abstr'>One of the most simple algorithm used for sentiment analysis is Bayes Theorem, 
                        though it works with high accuracy when there is less data. One of the most important step in Natural Language 
                        Processing is the pre-processing of data.
                          </p>
                          <div className='abstr'>
                              <h2 className='h2-abstr'>Challenges:</h2>
                              
                        </div>
                        
                        <div className='icondiv'>
                        <Icons icons={<SiGithub />}/>
                        <Icons icons={<SiMedium />}/>
                        <Icons icons={<BiLinkExternal />}/>



                        

                        </div>

                  </div>
                  
                  
                  
                  

            </div>
      </div>
  )
}

const Icons = ({icons})=> {
  return (
    <div>
      <button className='butn'>{icons}</button>
   
      {/* <button><SiPytorch/></button>
       <button><SiTensorflow/></button>  */}
    </div>
    ) 
  }


export default Projects