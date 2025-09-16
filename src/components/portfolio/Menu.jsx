import Work1 from "../../assets/xv6.png"
import Work2 from "../../assets/OoOCPU.png"
import Work3 from "../../assets/portfolio.png"
import Work4 from "../../assets/bufferoverflow.png"
import Work5 from "../../assets/Cache.jpg"
import Work6 from "../../assets/adventure.png"

const Menu = [
    {
      id: 1,
      image: Work1,
      title: "XV6 Operating System Modules",
      dates: "August 2024 - December 2024",
      category: "Systems",
      description: [
        '\tThese modules were compromised of four different projects varying in size and complexity. The first project was to create a backtrace function that would show all previously called functions on the stack up till just before backtrace was called. I also implemented a system to allow for a dynamic amount of RAM to be detected because previously in XV6 you could only have a static 8mb of memory. The new detection system can support up to 4GB because XV6 is a 32bit OS. I did this by reading in the memory records passed to the bootloader by the memory controller.\n', 
        '\tThe second project was a virtual memory optimization. I implemented a copy-on-write writing policy, where child processes share the entire memory space of their parent until attempting to write to memory. Upon writing to a shared page the child process would copy all of its contents and update its page table. I also implemented a lazy zeroing policy, where upon requesting a blank page from memory instead of zeroing a page out and giving that, all processes share a single zero page and only on writing to the zero page will it clear a page for the process.\n',
        '\tThe third project was a beast because I had to implement a scheduler, kernel level threads and a user level threading library. For the scheduler I implemented first-in-first-out and round robin scehduling polices. Kernel level threads are built by the clone system call which is very similar to the fork system call except it spawns a copy of a process with its own stack. One of the biggest challenges of this part was fixing all the pointers in the new stack to prevent the threads from touching one anothers state. Next I implemented the park, setpark, and unpark system calls. These syscalls are for waking up and putting idle threads to sleep. You need setpark to prevent the lost wakeup problem where a thread is going to sleep even after it has been woken up. The last part of the project was the user level threading library where I had to implement spinlocks, mutexes, and condition variables.\n',
        '\tThe fourth and final project was to implement access control in the file system of XV6. I implemented the setuid and getuid systems calls which return the int value that corresponds to the logged in or change the uid of the current user. The next part was to implement chown allows a files owner to be modified only by  the root or current owner and chmod which allows the root or owner to change read, write, and execute privileges of a file. Next I implemented a login system where a user would input a username and password. For security reasons would do not directly store the password of a user instead we compute a salted hash and that we compare against during login. Finally I implemented support for large files by adding addition levels of indirect to the inode and dinode data structures.'
      ], 
    },
    {
      id: 2,
      image: Work2,
      title: "Out of Order CPU simulator",
      dates: "October 1st 2024 - October 30th 2024",
      category: "Systems",
      description: [
        `\tThis project was a part of my Advanced Computer Architecture course and was done in C++. The goal was to develop a trace driven simulator that could accurately measure the instructions per clock cycle of an ISA. I had to create data structure for the Reorder buffer (ROB) which tracked the state of instructions in or preparing for execution and the Register Alias Table (RAT) which tracks the renaming of registers to tags in the ROB. I also had to implement the issue stage which prepares RAT and ROB entries for an instruction, schedule stage which finds the most revelent ROB entry and marks it ready to execute, writeback stage which broads casts the completion of instructions to update ROB entries, and the commit stages which marks an instruction as completed and clears its destination register from the RAT. I also had to make the simulator superscalar and be able to support a two wide pipline.`
      ],
    },

    /* TODO: Fix Image for this one*/
    {
      id: 3,
      image: Work3,
      title: "React Portfolio Website",
      dates: "July 2024 - Present",
      category: "Frontend",
      description: [
        `\tThis was a personal project of mine. I wanted to learn some frontend and web development skills because I had not dipped my toes in that world yet. I decided to use react as my framework because theres a lot of resources on it and it seemed relevantively easy to pick up. I followed a few YouTube tutorials and consulted forums and chatgpt when I got stuck or needed to learn something. All and all I'm pretty proud of this website and am hoping to keep it updated with new features and projects.`
      ],
      link: "https://youtu.be/9wdErl1gA4E?si=49cOlxqY0Ry3h2CS",
      linkDesc: "Link to Tutorial",
    },
    {
      id: 4,
      image: Work4,
      title: "Cybersecurity Attacks and Defenses",
      dates: "August 2024 - December 2024",
      category: "Systems",
      description: [`\tI dedicated this section to all of the projects I did in my Intro to Information Security class. There were five projects each covering a different field of information security. The first project covered application security and was primarily about buffer overflow and overcoming buffer overflow defenses. I had to implement python scripts which bypass these defenses and open a shell. I had to overcome Data Execution Protection (DEP), Address space layout randomization (ASLR), and use Return Ortiented Programming (ROP) gadgets to spawn the shell. The second project focused on cryptography where I had to implement a length extension attack on sha256 hashes, hash collisions on MD5 hashes, padding oracle attack, and RSA signature forgery. The third project focused on web security where I had to implement several SQL injection attacks with varying degrees of security, Cross site scripting with different levels of text filering and Cross-site request forgery. The fourth project was a network security project where I had to identify suspicous network behavior in wireshark, establish a connection to a DNS resolver and make an any type DNS request and display the results and finally create a time based one time password system ontop of a HMAC based one time password system.`],
                    
    },
    {
      id: 5,
      image: Work5,
      title: "Multileveled Cache Simulator",
      dates: "October 2024 - November 2024",
      category: "Systems",
      description: [`\tThis was a project from my Advanced Computer Architecture course and was done in C++. The goal was to develop a trace drive cache simulator that would measure the instructions per clock cycle of a caches and dram with different polices. I had to create a cache data structure which was composed of vectors of cache lines for each cache set. I also created a dram data structure which was composed of a number of banks and each bank would have a row buffer. Then I developed the memory system that would access memory going down the hierarchy and would measure the delay incurred based on hits and misses. DRAM also had two different polices that could be set in the command line. An open page in which the row buffer would stay open leading to a less costly delay on a dram hit, but a more costly delay on a dram miss and a closed page policy where hits and misses would incurr the same delay.`],
    },
    {
      id: 6,
      image: Work6,
      title: "Ævintýri",
      dates: "January 2024 - May 2024",
      category: "Backend",
      description: [`\tI did the project in collaboration with the Georgia Tech Vertically Integrated Project (VIP) program. Ævintýri means adventure in icelandic and is a text adventure game in the style of old school multiuser dungeon (MUD) DOS games. I worked on a script parser that could take in our custom .script file format and generate a playable map and story. I also created a help command that would display helpful information about how to interact with the game and other useful commands. Finally, I wrote a custom test script and story to be generated by the script parser.`],
    },
  ];
  

export default Menu