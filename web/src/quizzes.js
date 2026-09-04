// Per-lesson quizzes, keyed by "${module}-${lesson}" (e.g. "4-5").
// Pass threshold is >= half the questions (computed in QuizCard).
export const QUIZZES = {
  // ---------- Module 1 ----------
  "1-1": [
    { q: "What does the Linux kernel act like inside the operating system?", o: ["A web browser", "The control center that handles hardware↔resource communication", "A database engine", "The file format"], a: 1 },
    { q: "What does the kernel + supporting software packages/tools together form?", o: ["A device driver", "A compiler", "A Linux distribution", "A shell utility"], a: 2 },
    { q: "Which is true of Linux distributions?", o: ["They are all identical", "They come in flavors tailored to use cases", "They ship without a kernel", "They only run on phones"], a: 1 },
  ],
  "1-2": [
    { q: "What is the Linux kernel's core role?", o: ["Managing web traffic", "Interfacing between computer hardware and processes", "Rendering graphics", "Compiling applications"], a: 1 },
    { q: "Where does the kernel's name come from?", o: ["A type of fruit", "Like a seed inside a hard shell", "A military term", "A mountain"], a: 1 },
    { q: "Which devices can run the Linux kernel?", o: ["Phones only", "Laptops only", "Phones, laptops, servers and more", "Servers only"], a: 2 },
  ],
  "1-3": [
    { q: "Which of these is NOT one of the kernel's four primary roles?", o: ["Memory management", "Process management", "Device drivers", "Packet routing"], a: 3 },
    { q: "Where does the kernel operate when implemented properly?", o: ["User space", "Kernel space", "In the file system", "In the browser"], a: 1 },
    { q: "How do applications in user space talk to the kernel?", o: ["Via the system call interface (SCI)", "By direct hardware access", "Through CSS", "They don't communicate"], a: 0 },
  ],
  "1-4": [
    { q: "How is Linux different from Microsoft Windows in development?", o: ["It's developed by one company", "Different parts are developed by different organizations", "It has no kernel", "It can't be customized"], a: 1 },
    { q: "Which components are developed separately in the Linux ecosystem?", o: ["Kernel, shell utilities, X server, graphical programs", "Only the kernel", "Only the GUI", "Only drivers"], a: 0 },
    { q: "Why would a user assemble components themselves?", o: ["To create custom distributions for their needs", "It's the only way to install Linux", "They cannot", "To avoid the kernel"], a: 0 },
  ],
  "1-5": [
    { q: "What is an Operating System's role?", o: ["Interface between the user and computer hardware", "A type of printer driver", "A game engine", "A markup language"], a: 0 },
    { q: "Which component encapsulates the core functions of the OS?", o: ["The kernel", "The taskbar", "The bootloader shell", "The window manager"], a: 0 },
    { q: "Which of these is NOT listed as an OS?", o: ["Windows", "Linux", "OS/400", "MySQL"], a: 3 },
  ],
  "1-6": [
    { q: "What is the first step to contribute to the roadmap?", o: ["Send an email to the kernel team", "Fork the repository on GitHub", "Rewrite the kernel", "Buy a license"], a: 1 },
    { q: "Where should a new lesson file be placed?", o: ["In the root folder", "Under the appropriate module directory under Lessons/", "In the README", "Nowhere"], a: 1 },
    { q: "What do you do after committing the new lesson?", o: ["Delete the repo", "Push the branch to your fork and open a Pull Request", "Do nothing", "Merge directly to main"], a: 1 },
  ],
  "1-7": [
    { q: "Which tools help you navigate kernel source?", o: ["cscope/ctags or an IDE", "Excel", "Photoshop", "Docker only"], a: 0 },
    { q: "Which directories are good starting points to explore?", o: ["kernel/, mm/, drivers/", "js/, css/, html/", "public/media", "doc/translations"], a: 0 },
    { q: "What exercise is suggested?", o: ["Trace a syscall from the syscall table to its handler", "Compile the full GUI stack", "Write a browser", "Rebuild all distros"], a: 0 },
  ],

  // ---------- Module 2 ----------
  "2-1": [
    { q: "Which component is the core of the OS managing CPU, memory and I/O?", o: ["Kernel", "File system", "UI", "Device drivers"], a: 0 },
    { q: "How does the User Interface allow interaction?", o: ["GUI or CLI", "Only GUI", "Only CLI", "Voice only"], a: 0 },
    { q: "What do device drivers do?", o: ["Interface between hardware devices and the OS", "Format text documents", "Render 3D scenes", "Manage user accounts only"], a: 0 },
  ],
  "2-2": [
    { q: "What is a process?", o: ["A program in execution with its own memory space", "A file on disk", "A scheduled timer", "A network packet"], a: 0 },
    { q: "What is the smallest schedulable unit of processing?", o: ["Thread", "Kernel", "File", "System call"], a: 0 },
    { q: "Why do threads in a process share a memory space?", o: ["Allowed more efficient execution", "To make them slower", "They cannot share", "For security only"], a: 0 },
  ],
  "2-3": [
    { q: "Which technique divides memory into manageable sections reducing fragmentation?", o: ["Paging and segmentation", "Swapping the monitor", "Caching browsers", "Compression"], a: 0 },
    { q: "What does virtual memory use to extend apparent memory?", o: ["Disk space", "More CPU cores", "Larger screens", "More GBUs"], a: 0 },
    { q: "What is garbage collection?", o: ["Automatic reclamation of unused memory", "Deleting files from /tmp", "Defragmenting disks", "A backup process"], a: 0 },
  ],
  "2-4": [
    { q: "Which file system is common on Linux?", o: ["ext4", "EXIF", "APFS only", "HPFS"], a: 0 },
    { q: "What technique keeps track of changes to prevent data loss?", o: ["Journaling", "Defragmenting", "Compression", "Encryption"], a: 0 },
    { q: "What is a key function of a file system?", o: ["Storing and organizing data into files and directories", "Compiling code", "Managing GPU memory", "Printing documents"], a: 0 },
  ],
  "2-5": [
    { q: "Which IPC mechanism is unidirectional?", o: ["Pipes", "Shared memory", "Sockets", "Message queues"], a: 0 },
    { q: "Which IPC mechanism allows processes to access a common memory space?", o: ["Shared memory", "Signals", "Files", "Sockets"], a: 0 },
    { q: "How does IPC help prevent race conditions?", o: ["Via synchronization", "By slowing the CPU", "By using more threads", "It doesn't"], a: 0 },
  ],
  "2-6": [
    { q: "What do device drivers do?", o: ["Translate OS instructions into device-specific commands", "Compile kernels", "Design icon packs", "Manage DNS records"], a: 0 },
    { q: "Which driver type runs in kernel space with high privileges?", o: ["Kernel-mode drivers", "User-mode drivers", "Virtual drivers", "Sandbox drivers"], a: 0 },
    { q: "What's an advantage of user-mode drivers?", o: ["Extra security and stability layer", "Faster CPU", "Smaller files", "Better colors"], a: 0 },
  ],
  "2-7": [
    { q: "What does the scheduling exercise ask you to simulate?", o: ["Round-robin scheduling with configurable time quantum", "A web server", "A text editor", "A file compressor"], a: 0 },
    { q: "Which topic is NOT one of the exercises?", o: ["Comparing process vs thread context switching", "Simulating round-robin", "Summarizing file system types", "Writing a kernel proc scheduler"], a: 3 },
    { q: "What's a prerequisite for these exercises?", o: ["Module 2 knowledge (L2.1–L2.6)", "A GPU", "Windows XP", "A printed textbook"], a: 0 },
  ],

  // ---------- Module 3 ----------
  "3-1": [
    { q: "How does Rust ensure memory safety?", o: ["Through an ownership model without a garbage collector", "By always copying memory", "Using JavaScript", "By disabling pointers"], a: 0 },
    { q: "What is Rust's package manager called?", o: ["Cargo", "Npm", "Pip", "Brew"], a: 0 },
    { q: "How do you install Rust and manage toolchains/versions?", o: ["Via rustup", "Via apt only", "By compiling source manually only", "Via Docker compose"], a: 0 },
  ],
  "3-2": [
    { q: "How many owners can a piece of data have at a time in Rust?", o: ["Exactly one", "Two", "As many as readable CPUs", "Unlimited"], a: 0 },
    { q: "What happens when the owner goes out of scope?", o: ["Memory is automatically deallocated", "Memory leaks", "Nothing", "A warning writes to disk"], a: 0 },
    { q: "Why can only one mutable reference exist at a time?", o: ["To prevent data races", "To speed up compilation", "Because of GPU", "By language tradition"], a: 0 },
  ],
  "3-3": [
    { q: "How do you spawn a new thread in Rust's standard library?", o: ["thread::spawn", "fork()", "start_thread()", "new Worker()"], a: 0 },
    { q: "Which module supports safe message passing between threads?", o: ["std::sync::mpsc", "std::fs", "std::net::IpAddr", "core::fmt"], a: 0 },
    { q: "What does 'fearless concurrency' mean?", o: ["Writing concurrent code safely via the type system and ownership", "Avoiding concurrent code entirely", "Using only one thread", "Ignoring data races"], a: 0 },
  ],
  "3-4": [
    { q: "What is a crate in Rust?", o: ["A package of reusable Rust code", "A text file", "A web framework", "A database"], a: 0 },
    { q: "What does Cargo provide?", o: ["Dependency management and project tooling", "A GUI editor", "A media player", "A file manager"], a: 0 },
    { q: "How do you create a new crate?", o: ["cargo new my_crate", "make my_crate", "npm init", "rustc --create"], a: 0 },
  ],
  "3-5": [
    { q: "Which practice minimizes unnecessary copies of data?", o: ["Borrowing instead of moving/cloning", "Cloning everything", "Using heap only", "Disabling the optimizer"], a: 0 },
    { q: "Which is a way to avoid expensive cloning of large structures?", o: ["Use references", "Duplicate the data", "Serialize to JSON", "Copy twice"], a: 0 },
    { q: "What tool helps benchmark Rust code?", o: ["cargo bench (and perf)", "Notepad", "Registry cleaner", "ImageMagick"], a: 0 },
  ],
  "3-6": [
    { q: "What is the idiomatic Rust type for fallible functions?", o: ["Result<T, E>", "Option always", "try/catch", "Exception"], a: 0 },
    { q: "What does the '?' operator do?", o: ["Early-returns Err and converts via From", "Panics on error", "Logs and continues", "Ignores the error"], a: 0 },
    { q: "When would you prefer 'anyhow' over 'thiserror'?", o: ["In binaries/applications for simple error handling", "In libraries with rich error types", "Never", "Only in C"], a: 0 },
  ],
  "3-7": [
    { q: "Which of these requires 'unsafe' in Rust?", o: ["Dereferencing raw pointers", "String formatting", "Vec iteration", "Closures"], a: 0 },
    { q: "Which tool generates Rust bindings from C headers?", o: ["bindgen", "cargo doc", "clippy", "cargo clippy"], a: 0 },
    { q: "What's the recommended approach with unsafe blocks?", o: ["Minimize them and wrap in safe abstractions", "Use them everywhere", "Never document them", "Always inline them in loops"], a: 0 },
  ],

  // ---------- Module 4 ----------
  "4-1": [
    { q: "Which methods are covered for installing Linux?", o: ["Bootable USB, virtual machines, dual-boot", "Only CD-ROM", "Only network boot from a printer", "None"], a: 0 },
    { q: "Which distributions are mentioned as examples?", o: ["Ubuntu and Fedora", "Windows and macOS", "iOS and Android", "Android and ChromeOS"], a: 0 },
    { q: "Why use a virtual machine to install Linux?", o: ["Test Linux without affecting your main OS", "It makes Linux faster", "It's the only way", "To overclock"], a: 0 },
  ],
  "4-2": [
    { q: "Which commands let you navigate the file system?", o: ["ls and cd", "strlen and strlen", "printf only", "sort"], a: 0 },
    { q: "Which command copies files?", o: ["cp", "mv", "rm", "pwd"], a: 0 },
    { q: "What is a common task covered by these commands?", o: ["Managing processes and files", "Rendering photos", "Playing video", "Word counting"], a: 0 },
  ],
  "4-3": [
    { q: "Which directory typically holds user home directories?", o: ["/home", "/etc", "/var", "/tmp"], a: 0 },
    { q: "Where do system configuration files usually live?", o: ["/etc", "/usr", "/boot", "/swap"], a: 0 },
    { q: "Which standard defines the Linux file structure?", o: ["Filesystem Hierarchy Standard", "IEEE 802.3", "POSIX signal names", "ANSI C99"], a: 0 },
  ],
  "4-4": [
    { q: "Which package manager is common on Debian/Ubuntu?", o: ["apt", "npm", "pip", "Emerald"], a: 0 },
    { q: "Which are package managers mentioned for RPM-based systems?", o: ["yum and dnf", "brew and choco", "pacman and hal", "gem"], a: 0 },
    { q: "What problem do dependency checks solve?", o: ["Ensuring required libraries are installed", "Speeding up the network", "Cleaning the display", "Managing passwords"], a: 0 },
  ],
  "4-5": [
    { q: "What command changes file permissions?", o: ["chmod", "ls", "find", "cat"], a: 0 },
    { q: "Which concept separates basic users from privileged administrators?", o: ["Users, groups, and sudo elevation", "Tabs and spaces", "Nominal vs ordinal", "Cores and threads"], a: 0 },
    { q: "What command changes file ownership?", o: ["chown", "touch", "ln", "df"], a: 0 },
  ],

  // ---------- Module 5 ----------
  "5-1": [
    { q: "What does system programming involve?", o: ["Code interacting directly with the kernel", "Building UI mockups", "Managing social media", "Designing icons"], a: 0 },
    { q: "Which areas does system programming typically cover?", o: ["File manipulation, process control, communication", "CSS grid layouts", "Video encoding only", "Email templates"], a: 0 },
    { q: "Where does system programming's code run relative to the kernel?", o: ["Close to the kernel using its interfaces", "Inside web browsers", "On GPUs only", "Far from the kernel"], a: 0 },
  ],
  "5-2": [
    { q: "What are system calls?", o: ["The interface between user applications and the kernel", "Phone calls on Linux", "Interrupts from the fan", "Debug logs"], a: 0 },
    { q: "Which of these is a file system call?", o: ["open()", "fork() only", "wait()", "kill()"], a: 0 },
    { q: "Which syscall reads data from a file descriptor?", o: ["read()", "chdir()", "mount()", "sigaction()"], a: 0 },
  ],
  "5-3": [
    { q: "What do signals allow?", o: ["Asynchronous communication between processes", "Synchronous disk writes only", "Graphical rendering", "Package management"], a: 0 },
    { q: "Signals are commonly used to:", o: ["Manage, terminate, or notify processes of events", "Create files", "Set IP addresses", "Compile code"], a: 0 },
    { q: "Is signal delivery synchronous or asynchronous?", o: ["Asynchronous", "Synchronous", "Both always", "Neither"], a: 0 },
  ],
  "5-4": [
    { q: "What is memory mapping used for in Linux?", o: ["Efficient file access and sharing memory between processes", "Compressing images", "Faster font loading only", "Hardware cooling"], a: 0 },
    { q: "Which system call is typically used to map files into memory?", o: ["mmap()", "readdir()", "socket()", "chmod()"], a: 0 },
    { q: "What does mapping a file allow?", o: ["Accessing file bytes via memory instead of repeated reads", "Deleting the file", "Renaming directories", "Enabling WiFi"], a: 0 },
  ],

  // ---------- Module 6 ----------
  "6-1": [
    { q: "Which layer is NOT part of the kernel's layered architecture?", o: ["System call layer", "Core kernel", "Subsystems", "BIOS UI"], a: 3 },
    { q: "What is included in the kernel's high-level architecture?", o: ["System call layer, core kernel, subsystems, drivers", "Just the scheduler", "Just the VFS", "Only device trees"], a: 0 },
    { q: "What's a suggested exercise?", o: ["Map a subsystem (e.g. memory) across its directory tree and key files", "Rebuild all of /usr", "Write a compiler", "No exercise"], a: 0 },
  ],
  "6-2": [
    { q: "What is the process lifecycle role of the scheduler?", o: ["Managing process states and CPU allocation", "Managing file permissions", "Compiling modules", "Routing packets"], a: 0 },
    { q: "Which syscalls are mentioned for creating processes?", o: ["sys_clone / fork", "sys_read", "sys_stat", "sys_reboot"], a: 0 },
    { q: "Where should you look for scheduler code?", o: ["In the kernel source process/scheduler subsystem", "In the GUI toolkit", "In /etc/fstab", "In userspace libc only"], a: 0 },
  ],
  "6-3": [
    { q: "Which concepts are introduced in this lesson?", o: ["Paging, virtual memory, kernel memory allocators", "Ethernet speed", "Font rasterization", "Bitcoin mining"], a: 0 },
    { q: "Which directory holds memory management code?", o: ["mm/", "drivers/", "sound/", "crypto/"], a: 0 },
    { q: "What's the suggested exercise?", o: ["Follow the path of a page fault from trap to handler", "Write a page-rank bot", "Design a GUI", "Scan disks"], a: 0 },
  ],
  "6-4": [
    { q: "What does the I/O stack handle?", o: ["Kernel handling of I/O requests from devices", "Text file fonts", "User login forms", "DNS queries"], a: 0 },
    { q: "Which categories of devices are mentioned?", o: ["Block and character devices", "Optical and plastic devices", "Logical only", "Virtual only"], a: 0 },
    { q: "What's a suggested exercise?", o: ["Find where a block request is formed and dispatched", "Compress a video", "Build a printer queue", "Trace a pointer"], a: 0 },
  ],
  "6-5": [
    { q: "What abstraction does the kernel use to support many file systems?", o: ["VFS (Virtual File System)", "One giant table", "WinFS", "inotify"], a: 0 },
    { q: "Which concepts are introduced?", o: ["Mounts, superblocks, and inodes", "Only FAT tables", "Only symlinks", "Journaling only"], a: 0 },
    { q: "What's the suggested exercise?", o: ["Trace a file read from VFS down to the filesystem-specific implementation", "Format all drives", "Write a PDF parser", "Delete inodes"], a: 0 },
  ],

  // ---------- Module 7 ----------
  "7-1": [
    { q: "Which compilers are covered for kernel development?", o: ["GCC and Clang", "JavaC only", "MSVC only", "None"], a: 0 },
    { q: "Which build tools are mentioned?", o: ["Make, CMake", "Webpack", "Metro", "Gradle only"], a: 0 },
    { q: "Why do you need Git for kernel development?", o: ["To manage source code — clone, commit, branch", "To run benchmarks", "To host websites", "To edit images"], a: 0 },
  ],
  "7-2": [
    { q: "Which debugging tools are configured in this lesson?", o: ["GDB, KGDB", "Paint", "Calc", "Bash aliases only"], a: 0 },
    { q: "Which environment variables affect kernel builds?", o: ["PATH and ARCH", "HOSTNAME and TERM only", "DISPLAY and LANG", "HOME and SHELL"], a: 0 },
    { q: "Which editors are recommended?", o: ["Vim and VSCode", "Word and Notepad", "Only nano manually", "Emacs only"], a: 0 },
  ],
  "7-3": [
    { q: "Where do you obtain the Linux kernel source?", o: ["kernel.org or Git", "GitHub releases only", "Microsoft Store", "npm"], a: 0 },
    { q: "Which command configures the kernel build interactively?", o: ["make menuconfig", "make install Toaster", "make clean only", "configure --gui"], a: 0 },
    { q: "What does this lesson end with?", o: ["A functional kernel build on your machine", "A static website", "A Docker image", "A test suite only"], a: 0 },
  ],

  // ---------- Module 8 ----------
  "8-1": [
    { q: "Which resources can list good first issues?", o: ["GitHub and the kernel Bugzilla", "Instagram", "Amazon", "StackOverflow answers only"], a: 0 },
    { q: "What should guide your issue selection?", o: ["Criteria matching your skills and experience", "The largest issue", "Issue age", "The most starred repo"], a: 0 },
    { q: "What does approaching an issue involve?", o: ["Understanding requirements and setting up a local test environment", "Only reading it", "Deleting it", "Auto-assigning"], a: 0 },
  ],
  "8-2": [
    { q: "What roles exist in the kernel community?", o: ["Maintainers and contributors", "Only Linus", "Only testers", "Only CI bots"], a: 0 },
    { q: "Which channels are used for kernel discussions?", o: ["Mailing lists, IRC, forums", "Only direct message spam", "TikTok", "Phone calls"], a: 0 },
    { q: "Why does etiquette matter?", o: ["For respectful, productive collaboration", "To earn badges", "To avoid moderation", "For marketing"], a: 0 },
  ],
  "8-3": [
    { q: "What does kernel coding style enforce?", o: ["Indentation, bracket use, spacing conventions", "Color schemes", "Font choices", "Line count minimums"], a: 0 },
    { q: "What's a best practice mentioned?", o: ["Following guidelines on function size and readability", "Making functions as long as possible", "Ignoring naming", "Using 4-space indentation everywhere"], a: 0 },
    { q: "Why follow these standards?", o: ["So contributions are easier to review and consistent", "To look professional", "To reduce compile time", "To pass CI"], a: 0 },
  ],
  "8-4": [
    { q: "What must patches follow?", o: ["Guidelines for line length and content structure", "Only commit dates", "Release version only", "No rules"], a: 0 },
    { q: "How should commit messages be written?", o: ["Concise and descriptive", "Very long with random text", "One word", "In binary"], a: 0 },
    { q: "Which Git features are used to submit patches?", o: ["Creating patches and adding sign-offs", "Just push to any repo", "git stash", "git cherry"], a: 0 },
  ],

  // ---------- Module 9 ----------
  "9-1": [
    { q: "Which command monitors kernel logs?", o: ["dmesg", "uptime", "whoami", "free"], a: 0 },
    { q: "Which tracing tool is named in the lesson?", o: ["ftrace", "wireshark", "lsof", "ncdu"], a: 0 },
    { q: "Which tools help debug the kernel?", o: ["GDB, KGDB, KDB", "SQLite", "Photoshop", "Defrag"], a: 0 },
  ],
  "9-2": [
    { q: "What is the standard anatomy of a kernel module?", o: ["init and exit functions", "main and loop", "constructor and destructor only", "None"], a: 0 },
    { q: "What does a module let you do?", o: ["Extend kernel functionality without altering core kernel", "Change CSS", "Provide fonts", "Manage cookies"], a: 0 },
    { q: "Which phase is part of the module lifecycle in the lesson?", o: ["Compile, load, test/unload/debug", "Only unload", "Only compile", "Only testing"], a: 0 },
  ],
  "9-3": [
    { q: "What does a driver's key components include?", o: ["Initialization, cleanup, device-specific functions", "Only a banner", "Only logging", "Only RGB lighting"], a: 0 },
    { q: "What does device file management cover?", o: ["File descriptors, device nodes, user-space communication", "Font rendering", "Password storing", "Web scraping"], a: 0 },
    { q: "What's a testing strategy mentioned?", o: ["Emulating hardware when needed", "Deleting test files", "Only using real hardware", "Skipping tests"], a: 0 },
  ],
  "9-4": [
    { q: "What does the kernel configure for hardware events?", o: ["Interrupt handling", "Font kerning", "Audio volumes", "Screen colors"], a: 0 },
    { q: "What does DMA stand for in context?", o: ["Direct Memory Access", "Digital Media App", "Dynamic Map Archive", "Data Min Age"], a: 0 },
    { q: "How does the kernel provide standardized hardware access?", o: ["Through kernel APIs", "Via CSS classes", "By direct SQL", "Through DNS"], a: 0 },
  ],
  "9-5": [
    { q: "What does the kernel networking stack include?", o: ["Networking architecture and layers", "Rendering pipeline", "Database indexes", "UI components"], a: 0 },
    { q: "Which protocols are mentioned?", o: ["TCP/IP", "POP3X only", "IPX only", "Bluetooth 6.0"], a: 0 },
    { q: "What is covered under socket programming?", o: ["Kernel socket programming and network interface management", "Web fonts", "Image filters", "Cursor control"], a: 0 },
  ],
  "9-6": [
    { q: "Which structure is central to packet handling in the kernel?", o: ["sk_buff", "dentry", "inode list", "page cache"], a: 0 },
    { q: "Where is IPv4 protocol code located?", o: ["net/ipv4", "drivers/gpu", "sound/pci", "fs/xfs"], a: 0 },
    { q: "What are netfilter hooks used for?", o: ["Packet processing/filtering in the network stack", "Filtering fonts", "Cleaning caches", "Managing users"], a: 0 },
  ],

  // ---------- Module 10 ----------
  "10-1": [
    { q: "What advantage does Rust bring to kernel development?", o: ["Memory safety and concurrency", "Faster rendering", "Smaller logos", "Higher-level UI APIs"], a: 0 },
    { q: "How does Rust relate to the existing C-based kernel?", o: ["It integrates with C gradually", "It replaces C overnight", "It can't coexist", "It compiles C automatically"], a: 0 },
    { q: "Why is Rust considered suitable for kernel code?", o: ["Safety at low level", "Largest community", "Built-in GUI", "Dynamic typing"], a: 0 },
  ],
  "10-2": [
    { q: "What differs when writing kernel modules in Rust vs C?", o: ["Module structure with Rust setup/teardown conventions", "Nothing at all", "Fonts", "Color depth"], a: 0 },
    { q: "How does Rust interact with C kernel components?", o: ["Via FFI/interop bindings", "By recompiling the kernel", "Through web hooks", "Using bash"], a: 0 },
    { q: "What must you consider when building Rust modules?", o: ["Build integration and no_std constraints", "Only story length", "Only package size", "Nothing"], a: 0 },
  ],
  "10-3": [
    { q: "Why use Rust for device drivers?", o: ["Secure, efficient code with memory safety", "Better color grading", "Smaller installers", "Prettier logs"], a: 0 },
    { q: "What does hardware access in Rust leverage?", o: ["Rust's safety features", "SQL queries", "CSS selectors", "Machine learning"], a: 0 },
    { q: "What's covered about testing?", o: ["Techniques for testing/debugging Rust-based drivers", "No testing", "Only production", "Only fuzz URLs"], a: 0 },
  ],
  "10-4": [
    { q: "What must Rust kernel patches follow?", o: ["Rust and kernel standards", "No standards", "Frontend lint rules", "PEP8"], a: 0 },
    { q: "How are patches submitted?", o: ["Using Git to format, sign, submit for review", "Emailing zip files", "Using FTP only", "Committing to main"], a: 0 },
    { q: "Why engage with Linux and Rust communities?", o: ["For feedback and collaboration", "For job perks", "It's mandatory", "No reason"], a: 0 },
  ],
  "10-5": [
    { q: "Where is Rust allowed in the kernel tree?", o: ["In specific subsystems/areas, with current limitations", "Everywhere immediately", "Nowhere", "Only in documentation"], a: 0 },
    { q: "Which tooling is mentioned?", o: ["cargo, bindgen, kernel build integration", "webpack alone", "Visual Studio only", "no tools"], a: 0 },
    { q: "What's a suggested exercise?", o: ["Find a Rust kernel module example and read its integration points", "Rewrite the scheduler in Python", "Design RAM timings", "Benchmark GPUs"], a: 0 },
  ],
  "10-6": [
    { q: "What constraint do kernel modules typically face in Rust?", o: ["no_std (no standard library)", "No variables", "No functions", "No comments"], a: 0 },
    { q: "What must you handle carefully?", o: ["Memory safety and safe wrappers", "Elastic retry logic", "SQL caching", "Image aspect ratio"], a: 0 },
    { q: "What's the suggested exercise?", o: ["Create a minimal module exporting a function callable from C", "Write a blog post", "Draw a logo", "Build a dashboard"], a: 0 },
  ],
  "10-7": [
    { q: "What patterns are introduced for Rust drivers?", o: ["FFI patterns and minimal driver examples", "MVP web patterns", "Singleton CSS", "Observer threads only"], a: 0 },
    { q: "What must a driver author be careful with?", o: ["Memory and concurrency considerations", "Logo licensing", "Character encoding", "Domain naming"], a: 0 },
    { q: "What's the exercise?", o: ["Sketch a simple character driver in Rust and explain exposing it to the kernel", "None", "Deploy a webserver", "Format a disk"], a: 0 },
  ],
  "10-8": [
    { q: "What does submitting Rust patches require?", o: ["Preparing patch/PR with sign-off, style, reproducible tests", "Just pushing to main", "Only zip upload", "Only a changelog"], a: 0 },
    { q: "What should you discuss in reviews?", o: ["Maintainers, patch formatting, testing expectations", "URL shortening", "Logo colors", "None"], a: 0 },
    { q: "What's the exercise?", o: ["Prepare a sample PR with a small documentation change", "Rebuild the kernel", "Fork the world", "Delete git"], a: 0 },
  ],

  // ---------- Module 11 ----------
  "11-1": [
    { q: "How do you stay updated in the kernel community?", o: ["Mailing lists and forums", "Only social news", "Private chats only", "Magazines"], a: 0 },
    { q: "What is needed for professional collaboration?", o: ["Following etiquette and guidelines", "Being loud", "Using informal names", "Copying code"], a: 0 },
    { q: "What opportunities exist for mentorship?", o: ["Mentorship programs", "None", "Only paid bootcamps", "Only unmoderated"], a: 0 },
  ],
  "11-2": [
    { q: "What's the value of reviewing others' patches?", o: ["Providing helpful feedback and improving quality", "Blocking them", "Copying them", "Deleting them"], a: 0 },
    { q: "What does the testing process involve?", o: ["Testing patches and validating functionality", "Skipping", "Only unit counts", "Only style checks"], a: 0 },
    { q: "What does QA ensure?", o: ["Patches meet project standards without regressions", "All files are large", "No one reviews", "Code never changes"], a: 0 },
  ],
  "11-3": [
    { q: "What are a maintainer's key responsibilities?", o: ["Reviewing patches and managing contributions", "Only merging without review", "Only writing blog posts", "Managing the website"], a: 0 },
    { q: "What do maintainer workflows involve?", o: ["Tools and practices for efficient management", "Avoiding tools", "Secret processes", "Manual printing"], a: 0 },
    { q: "Why is documentation and communication important for maintainers?", o: ["Transparency and effective collaboration", "Looks good on resumes", "It speeds up the fan", "No reason"], a: 0 },
  ],

  // ---------- Module 12 ----------
  "12-1": [
    { q: "Which is a kernel vulnerability type mentioned?", o: ["Buffer overflows and race conditions", "SQL bloats", "Cookie theft", "Famous CSS bugs"], a: 0 },
    { q: "What can serious kernel vulnerabilities lead to?", o: ["Privilege escalation and security breaches", "Color shifts", "Font loading", "Reordered bookmarks"], a: 0 },
    { q: "Why study the real-world impact of vulnerabilities?", o: ["To understand consequences and mitigation", "For dramatic effect", "To write news", "For game design"], a: 0 },
  ],
  "12-2": [
    { q: "Which access control mechanisms are mentioned?", o: ["SELinux and AppArmor", "Only passwords", "Firewalls only", "Captchas"], a: 0 },
    { q: "What framework supports custom security policies?", o: ["LSM (Linux Security Module)", "Active Directory", "Kubernetes", "Journald"], a: 0 },
    { q: "What does hardening the kernel involve?", o: ["Config options to reduce attack surface", "Adding features", "Faster boot only", "More logging only"], a: 0 },
  ],
  "12-3": [
    { q: "Which technique randomizes memory addresses?", o: ["ASLR", "MAC", "CFI", "Seccomp"], a: 0 },
    { q: "Which technique restricts system calls a process can make?", o: ["Seccomp", "Stack canaries", "KASLR", "Journaling"], a: 0 },
    { q: "What do stack canaries detect?", o: ["Stack buffer overflow attacks", "CPU overheating", "Disk full", "Disk latency"], a: 0 },
    { q: "What verifies the integrity of modules before loading?", o: ["Module signing", "grep", "chmod", "umask"], a: 0 },
  ],
  "12-4": [
    { q: "Which config option relates to kernel address randomization?", o: ["KASLR", "CONFIG_STRICT_BREAKFAST", "SKIP_REDUNDANT", "MAX_JOBS"], a: 0 },
    { q: "Which CPU mitigation prevents executing data as code?", o: ["SMEP/SMAP", "SME", "SMP", "SMB"], a: 0 },
    { q: "What hardening technique is mentioned via GCC flags?", o: ["-fstack-protector-strong", "-O3 only", "-Wall", "-fopenmp"], a: 0 },
  ],
};