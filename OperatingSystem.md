OS : Piece of code
1. Resources Management
2. Memory Management
3. Middle man for underlying resouces - interface for application to communicate with hardware 
4. Hiding complexity
5. Privledge access over hardware
6. Provide isolation & protection to application

1. CPU or Central Processing unit of the system works as the processing unit which transforms raw data (Input) into the processed data(Output), it seems like a function  of the Chef in the restaurant as the chef converts raw ingredients to incredible dishes
2. Main memory or RAM is a device or system that is used to store information for immediate use in a computer or related computer hardware and digital electronic devices. The CPU processes the data which is stored in Main Memory or RAM. It should be matched with the countertop as the food or raw material is placed at the countertop by the chef while  making dishes
3. The Hard Disk stores all the data whether it is in execution or not. This should be matched with the cupboard because in the kitchen all the things are stored in the Cupboard.

Components of Computer : 
1. CPU /GPU
2. Memory 
3. Disk
4. Ethernet
5. USB

* When OS manages resources, it does arbitartion
* OS has privlege access on hardware


Kernel : It has privledge access over underlying hardware (Core of ) - Prcoess management, Memory management, File manager, I/O manager
User space : Application

USER SPACE :
GUI - Graphical User Interface
CLI - COMMAND LINE INTERFACE RUNS IN SHELL
SYSTEM PROGRAMS

Any program that is currently under execution is called process

Monolothic Kernel - when all the process amnagement, io management, memeory manmagement, file manager all are in same file.  - Linux and Unix
Heavy as all the code in 
Problem with one module can crash the entire system 
1. Communication between all the components is easy

Micro Kernel - Memory and process managemnt in kernel - L4 Linux, Symbion OS
All of the modules are different. Differnet code base for different modules
Easy to debug as there are different components
Not easy portability - they are DESIGNED specially for particular hardware
Inter process communication - Continuos switch between file - Performance IS LESSER 

Hybrid : Windows NT(7 and 10), MACOS
Kernel - Device driver, Memory Managemnet, Process management
User space -  File management + Application

Nanokernel and exokernal are two more kernel but not so popular

System Call : You can connect with kernel with a system call that will provide you access to run something on the hardware. 
- Process Control : creating or terminating a process, waiting for certain time
- Information Management
- Device Control
- File managememnt
- Communication Management

Process Control : 
Fork is used for creating new process - a child process is created
exit() - > terminate the process cleanly - terminate child process 
wait()- wait while child process is working

P1 (pid)
exec() -> replace existing code with other code

System calls are implemented in C
kill() - > terminating a process abruptly

File
read()
write()
open()
create()
close()

Security: 
- Ownership : chown()
Permission : chmod()
- Read 
- Write
- Execution

Device Management : Unix provide same system calls for devices 
- CPU + Memory
- File system
- usb
- Keyword

Information Management : Date and time
- How much is the free space?
- Free space on the disk
- process id and parent process id
- getpid()
- getppid()

Communcation Management
pip
smhopen
mmap()
