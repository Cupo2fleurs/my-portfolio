import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Button,Container,Tabs,Text,Image,MantineProvider,List,ColorSwatch,Avatar,Timeline,Center,TextInput,Textarea,SimpleGrid} from '@mantine/core';
import {IconDownload} from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function App() {
  const Click = () => {
      const pdfUrl = "./image/cv/CV_Axel_Guesdon.pdf";
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "CV_Axel_Guesdon.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
  }
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
  <MantineProvider>{
    <div className="style">
      <title>Axel Guesdon Portfolio</title>
      <nav className="navbar">
        <Avatar variant="filled" radius="xs" size="lg" src="image/logo/MyLogo2.png" id="MyLogo" />
        <Container className="containTravel" bg="var(--mantine-color-yellow-light)">
          <div className='Travel'><Button variant="subtle" color="white" size="md" radius="md" onClick={() => scrollToSection('Profile')}>Profile</Button></div>
          <div className="Travel"><Button variant="subtle" color="white" size="md" radius="md" onClick={() => scrollToSection('Work')}>Work</Button></div>
          <div className='Travel'><Button variant="subtle" color="white" size="md" radius="md" onClick={() => scrollToSection('Contact')}>Contact</Button></div>
        </Container>
      </nav>
      


     
      <div className="space"></div>
        <h1 className="i1">Axel Guesdon Presentation</h1>
        <Container id="contain" size="xl" bg="var(--mantine-color-yellow-light)">
          <div id="text">
          <section id="Profile">
          <Container id="contain2" size="xxs">
          <Text td="underline"><h2 id="name">Computer Engineers Bac+1</h2> </Text> 
          <ColorSwatch className="circle" size="20px" color="var(--mantine-color-blue-5)"/>
          <Text>Currently in internship at Netapp</Text>
          </Container>

          <Timeline className='school' color="yellow" active={1} bulletSize={27}>
            <Timeline.Item>
              <Text c="white" size="lm" >Baccalaureate</Text>
              <Text c="dimmed" size="sm" >With honors</Text>
            </Timeline.Item>
            <Timeline.Item lineVariant='dashed'>
            <Text c="white" size="lm" >Integrated prep in Cytech</Text>
            <Text c="dimmed" size="sm">Validation in 2 years</Text>
            </Timeline.Item>
            <Timeline.Item>
            <Text c="white" size="lm" >Engineering school in Cytech</Text>
              
            <Text c="dimmed" size="sm">In progress during 3 years</Text>
            </Timeline.Item>
          </Timeline>
          <List withPadding>
          <h3>My little Work:</h3>
          <List.Item>1 month in catering to prepare food and clean dishes</List.Item>
            <List.Item>1 month in summer camp with childs between 4 and 11 years old</List.Item>
            <List.Item>Validation theoretical, practical and thorough for my BAFA </List.Item>
            </List>

          <List withPadding>
          <h3>My hobbies:</h3>
            <List.Item>Playing Badminton, run and do competition</List.Item>
            <List.Item>Go hiking and take a long bike trip.</List.Item>
            <List.Item>I listen to a lot of music and try to learn piano by myself</List.Item>
          </List>
          </section>
          </div>


          <div id="img">
          <Image radius="xl" h={500} w="auto" fit="contain" src="./image/image6.jpg"/>
          </div>
          
      </Container>
      <div className="info">

            <Button variant="outline" color="yellow" size="md" radius="xl" id="Cv" rightSection={<IconDownload size={14} />}  onClick={Click}>Cv</Button>

            <a href="https://www.linkedin.com/in/axelguesdon/" target="_blank">
            <Button  color="blue" size="md" radius="xl" id="Linkedin">Linkedin<Avatar src="./image/logo/Linkedin.png" alt="L"></Avatar></Button>
            </a>
        </div>
    
        <section id="Work">
        <div className="space"></div>

        <h1 className="i1">My highlights projects</h1>



        <Carousel slideSize="60%" height={600} slideGap="xl" emblaOptions={{ loop: true, dragFree: false,align: 'center'}} controlSize={40}>
        <Carousel.Slide>
        <Container id="contain2" size="xxs">
          <Text className='littleSpace' size="xl">LogiCym</Text> 
          <ColorSwatch className="circle" size="20px" color="var(--mantine-color-green-5)"/>
          <Text>Objective: Create an interface like Logism to create a logic circuit Tool use: Java </Text>
          </Container>
          <Image radius="xl" h={450} w="auto" fit="contain" className="ImageCarousel" src="./image/projet/LogiCym.PNG"/>
          <a href="https://github.com/ShadowoftheRedFox/LogiCYm" target="_blank">
          <Button color="yellow" variant="outline" size="md" radius="xl" id="Github2">Github<Avatar src="./image/logo/Github2.png" alt="L" id="Github"></Avatar></Button>
          </a>
      </Carousel.Slide>



      <Carousel.Slide style={{ width: '450px', height: '250px' }} >
        <Container id="contain2" size="xxs">
          <Text size="xl">CyHome</Text> 
          <ColorSwatch className="circle" size="20px" color="var(--mantine-color-green-5)"/>
          <Text>Objective: Create a website for a connected house with possibility of object gestion <br></br>Tools use: Html/CSS, PHP and Vue.js</Text>
          </Container>

          
          <Carousel heignt={450} slideGap="xl"slideSize="20%" emblaOptions={{ loop: true, dragFree: false,align: 'center'}}>
            <Carousel.Slide>
              <Image radius="xl" h={400} w="auto" fit="contain" src="./image/projet/Accueil.PNG"/>
            </Carousel.Slide>
            <Carousel.Slide>
            <Image radius="xl" h={400} w="auto" fit="contain" src="./image/projet/Gestion.PNG" />
            </Carousel.Slide>
            <Carousel.Slide>
            <Image radius="xl" h={400} w="auto" fit="contain" src="./image/projet/Modification.PNG"/>
            </Carousel.Slide>
          </Carousel>
          
          <a href="https://github.com/Cupo2fleurs/Projet-ING1-Dev" target="_blank">
          <Button color="yellow" variant="outline" size="md" radius="xl" id="Github3">Github<Avatar src="./image/logo/Github2.png" alt="L" id="Github"></Avatar></Button>
          </a>  
      </Carousel.Slide>
        <Carousel.Slide style={{ width: '450px', height: '250px' }} >
          <Container id="contain2" size="xxs">
          <Text size="xl">CyTruck</Text> 
          <ColorSwatch className="circle" size="20px" color="var(--mantine-color-green-5)"/>
          <Text>Objective: Read a large quantity of CSV data then process them to create a graph Tools use: Shell and C</Text>
          </Container>

          <Carousel heignt={450} slideGap="xl"slideSize="20%" emblaOptions={{ loop: true, dragFree: false,align: 'center'}}>
            <Carousel.Slide>
              <Image radius="xl" h={400} w="auto" fit="contain" src="./image/projet/CyTruck.PNG"/>
            </Carousel.Slide>
            <Carousel.Slide>
            <Image radius="xl" h={400} w="auto" fit="contain" src="./image/projet/Cytruckstat.png" />
            </Carousel.Slide>
            <Carousel.Slide>
            <Image radius="xl" h={400} w="auto" fit="contain" src="./image/projet/CyTruckstat2.png" />
            </Carousel.Slide>
          </Carousel>
          <a href="https://github.com/Lorichag/pouet-pouet" target="_blank">
          <Button color="yellow" variant="outline" size="md" radius="xl" id="Github3">Github<Avatar src="./image/logo/Github2.png" alt="L" id="Github"></Avatar></Button>
          </a>  
          </Carousel.Slide>

          <Carousel.Slide>
          <Container id="contain2" size="xxs">
          <Text size="xl">Cy-Memory</Text> 
          <ColorSwatch className="circle" size="20px" color="var(--mantine-color-green-5)"/>
          <Text>Objective: Create a little game memory in C on the terminal Toll use: C</Text>
          </Container>
          <Image radius="xl" h={400} w="auto" fit="contain" className="ImageCarousel" src="./image/projet/CyMemory.PNG"/>
          <a href="https://github.com/Lorichag/Cy-memory" target="_blank">
          <Button color="yellow" variant="outline" size="md" radius="xl" id="Github2">Github<Avatar src="./image/logo/Github2.png" alt="L" id="Github"></Avatar></Button>
          </a>  
          </Carousel.Slide>
    </Carousel>
    <Center><h2 id="t">Essential Tools I use</h2></Center>
    
        <Container id="containTools" size="lg">
          <div className="step">
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar src="./image/logo/html.png" alt="L" ></Avatar><div className="TextTools"><Text c="white" fw={700}>Html / CSS</Text><Text size="sm">Dev Web and Design</Text></div></Button>
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar radius="0%" src="./image/logo/react.png" alt="L"></Avatar><div className="TextTools"><Text c="white" fw={700}>React / Mantine</Text><Text size="sm">Framework</Text></div></Button>
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar radius="0%" src="./image/logo/java.png" alt="L"></Avatar><div className="TextTools"><Text c="white" fw={700}>Java</Text><Text size="sm">Class language</Text></div></Button>
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar src="./image/logo/C.png" alt="L"></Avatar><div className="TextTools"><Text c="white" fw={700}>C</Text><Text size="sm">Low level language</Text></div></Button>
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar radius="0%" src="./image/logo/python.png" alt="L"></Avatar><div className="TextTools"><Text c="white" fw={700}>Python</Text><Text size="sm">Interpreted Programming</Text></div></Button>
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar src="./image/logo/sql.png" alt="L"></Avatar><div className="TextTools"><Text c="white" fw={700}>SQL</Text><Text size="sm">Storing and Processing</Text><Text Text size="sm"> in Data base</Text></div></Button>
            <Button className="Tools" variant="outline" color="gray" size="xl" radius="md"><Avatar src="./image/logo/PHP.png" alt="L"></Avatar><div className="TextTools"><Text c="white" fw={700}>PHP</Text><Text size="sm">Server side Scripting</Text></div></Button>
          </div>
        </Container>
        <div className='space'></div>
        </section>
        <section id="Contact">
      <div id="Communication">
        <div className="Com">
        <div className="explain">
            <h1>Contact me for collaboration</h1>
            <Text> If my profil interest you, send a message here.</Text>
            <Text> Or you can contact me on Linkedin and on my phone number 07 60 41 85 57.</Text>
          </div>
        <div id="contain_social">
                <a href='https://github.com/Cupo2fleurs' target="_blank"></a>
                <Button className="social_media" variant="outline" color="yellow" size="lg" radius="md"><Avatar src="./image/logo/Github2.png" alt="L" ></Avatar></Button>
                <a href="https://www.linkedin.com/in/axelguesdon/" target="_blank">
                <Button className="social_media" variant="outline" color="yellow" size="lg" radius="md"><Avatar radius="0%" src="./image/logo/linkedin2.png" alt="L"></Avatar></Button>
                </a>
        </div>
        <div className="explain">
          <Text>Thanks for having visited my Portfolio Website. I build it for learn React and Mantine</Text>
          <Text>for my internship project in Netapp. Let's start a new project Now !</Text>
        </div>
        </div>
      <div className="Com">
      <form action="https://getform.io/f/axoyryyb" method="POST" id="form">
       <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput radius="md" label="Name" placeholder="Your Name" name="name" variant="filled" styles={{input: {width: 190,backgroundColor:'#393221',borderColor:'gray' ,color:"white"},}}/>
        <TextInput radius="md" label="Email" placeholder="your@email.com" name="email" variant="filled" styles={{input: {width: 190,backgroundColor:'#393221',borderColor:'gray',color:"white"},}}/>
        </SimpleGrid>
        <Textarea radius="md" label="Message" name="message" mb="sm" placeholder="Message" styles={{input: {width: 400,height:200,backgroundColor:'#393221',borderColor:'gray',color:"white"},}}/>
        <div id="submit"><Button color="yellow" variant="outline" type="submit" >Submit</Button></div>
      </form>
      </div>
      </div>
      </section>
      <div className="space"></div>
    </div>
    }</MantineProvider>
  );
}
