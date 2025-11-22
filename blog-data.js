const blogPosts = [
  {
  id: 'hackphs-2025-winner',
  title: 'Winning HackPHS 2025',
  subtitle: '24 hours, multiple hardware failures, and a first-place finish',
  created: 'Nov 3, 2025',
  updated: 'Nov 3, 2025',
  categories: ['Hardware', 'AI', 'Hackathon'],
  readTime: '4 min read',
  content: `
    <p>The past weekend, Ayan Bindal and I took first place at HackPHS 2025 out of 101 participants. What started as a weather station project turned into something completely different—and honestly, something better.</p>
    
    <h3>When Everything Goes Wrong</h3>
    <p>Saturday, 12 PM. Hacking begins. We had our weather station planned, hardware laid out, and a clear vision of what we wanted to build.</p>
    
    <p>Then our components started failing. One after another. By hour six, we were staring at a pile of dead hardware and reconsidering our entire approach.</p>
    
    <p>We had a microcontroller, some LEDs, and about 18 hours left. That's when we pivoted to the plant monitor.</p>
    
    <h3>Building Without Sensors</h3>
    <p>Here's what makes our plant monitor different—it doesn't use traditional sensors. We measure soil moisture by detecting voltage drop between two electrodes. The RGB LED acts as a spectrogram, analyzing light quality and color (which matters more for plant health than I initially realized).</p>
    
    <p>We added AI-generated care tips, long-term hydration graphs, and built everything to communicate wirelessly. The ESP32 node transmits data to a Raspberry Pi Zero 2W that we converted into a complete desktop display system.</p>
    
    <p>This wasn't our original plan, but it turned out to be the better project.</p>
    
    <h3>The USB Port Problem</h3>
    <p>The Raspberry Pi Zero 2W doesn't have a USB-A port. We needed one for the hard drive. The solution? Harvest a USB-A female connector and solder it onto incredibly small pads.</p>
    
    <p>Ayan handled the soldering while I monitored progress. When the connection finally worked after two hours of careful work, it felt like a major victory.</p>
    
    <h3>All Night Development</h3>
    <p>By 3 AM, I was deep into debugging code where the root cause wasn't clear—software or hardware. It was both, of course.</p>
    
    <p>Ayan was iterating on 3D printed cases, testing fit after fit. I was fighting with CircuitPython libraries I'd never touched before. We were both running on determination and whatever snacks were left from midnight.</p>
    
    <h3>Demo Day</h3>
    <p>Sunday, 9 AM. Submissions close. Looking at what we'd built, I honestly wasn't sure how we'd place. The project worked and it was innovative, but we hadn't finished everything we wanted. The display wasn't fully connected, some features were partially implemented.</p>
    
    <p>During judging, the response seemed positive, but you can never really tell.</p>
    
    <h3>The Announcement</h3>
    <p>Closing ceremony. Third place announced—not us. Second place—not us either. At this point I figured we'd done well but probably didn't place.</p>
    
    <p>Then they announced first place with our names.</p>
    
    <p>I had to process that for a moment. We'd won with the project we pivoted to after our hardware died. With the USB port we manually soldered. With the code I was debugging at 3 AM. First place out of 101 participants.</p>
    
    <h3>What I Learned</h3>
    <p>The technical skills were significant—I went from basic hardware knowledge to implementing key system components in 24 hours. I learned about wireless communication, embedded systems, and the critical importance of testing hardware before events.</p>
    
    <p>But the bigger lesson was about adaptation. When half your hardware fails with 18 hours remaining, you either give up or you build something different. We chose the latter, and it turned out better than our original plan.</p>
    
    <h3>Team Credit</h3>
    <p>Ayan's CAD and soldering skills were exceptional. The USB port modification was technically challenging, and the 3D printed cases came out perfect after multiple iterations. Working with someone who can execute at that level made all the difference.</p>
    
    <p>Thanks to the HackPHS organizers for running an incredible 24-hour event, and to the other participants whose projects were genuinely impressive.</p>
    
    <h3>What's Next</h3>
    <p>We're planning to finish the full implementation—connect the complete display system, improve the node packaging, and turn this into a functional desktop gadget. What started as an emergency pivot is becoming something I'm genuinely proud of.</p>
    
    <p>First place at HackPHS 2025. Out of 101 participants. Still processing it.</p>
  `
},
  {
    id: 'portfolio-update',
    title: 'Portfolio Website Update',
    subtitle: 'Refactored personal site to include skills, projects, achievements, and devlog sections',
    created: 'Nov 21, 2025',
    updated: 'Nov 21, 2025',
    categories: ['Web Development'],
    readTime: '1 min read',
    content: `
      <p>I've completely refactored my personal portfolio website to better showcase my work and provide a more professional presence online.</p>
      
      <h3>New Features</h3>
      <p>The updated site now includes dedicated sections for my skills, projects, achievements, and this devlog. I've implemented a clean, modern design with smooth navigation and responsive layouts that work well on both desktop and mobile devices.</p>
      
      <h3>Technical Details</h3>
      <p>Built with vanilla HTML, CSS, and JavaScript, the site prioritizes performance and simplicity. I've focused on creating a cohesive design system with consistent typography, spacing, and color schemes throughout.</p>
      
      <p>The devlog section is particularly exciting as it gives me a space to document my journey and share what I'm learning as I build new projects.</p>
    `
  },
];