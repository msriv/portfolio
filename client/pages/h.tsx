// import React from 'react'
// import { useSpring, animated } from 'react-spring'

// // Import Styled Components
// import { HomeSection, HomeContent, HomeStats, Stat } from '../../StyledComponents'

// export default function Landing() {

//     const majorProjects = useSpring({to:{number: 10}, from: {number:0}, config: {duration: 1500}})
//     const minorProjects = useSpring({to:{number: 9}, from: {number:0}, config: {duration: 1500}})
//     const researchProject = useSpring({to:{number: 1}, from: {number:0}, config: {duration: 1500}})
//     const startup = useSpring({to:{number: 1}, from: {number:0}, config: {duration: 1500}})
//     return (
//         <HomeSection>
//             <HomeContent>
//                 <h3>Hello Everyone!</h3>
//                 <br/>
//                 I'm Mihir Srivastava. A Computer Science Engineer. I believe in learning by doing. I have worked on,
//                 <br/><br/>
//                 <HomeStats>
//                     <Stat>
//                         <h2 style={{"margin": 0}}><animated.span>{majorProjects.number.interpolate(x => x.toFixed(0))}</animated.span></h2>
//                         <span style={{"fontSize": "0.7em"}}>Major Projects</span>
//                     </Stat>
//                     <Stat>
//                         <h2 style={{"margin": 0}}><animated.span>{minorProjects.number.interpolate(x => x.toFixed(0))}</animated.span></h2>
//                         <span style={{"fontSize": "0.7em"}}>Minor Projects</span>
//                     </Stat>
//                     <Stat>
//                         <h2 style={{"margin": 0}}><animated.span>{researchProject.number.interpolate(x => x.toFixed(0))}</animated.span></h2>
//                         <span style={{"fontSize": "0.7em"}}>Research Projects</span>
//                     </Stat>
//                     <Stat>
//                         <h2 style={{"margin": 0}}><animated.span>{startup.number.interpolate(x => x.toFixed(0))}</animated.span></h2>
//                         <span style={{"fontSize": "0.7em"}}>Startups</span>
//                     </Stat>
//                 </HomeStats>
//                 <br/>
//                 Currently studing at Avantika University. Always curious to learn about new technologies and how it helps people by creating an impact in their lives.
//                 <br/><br/>
//             </HomeContent>
//             <img src={process.env.PUBLIC_URL+'/assets/images/home.png'} alt="Home" style={{"width":"40%", height: "65%"}}/>
//         </HomeSection>
//     )
// }
