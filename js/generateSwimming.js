// Data for each section
const sections = [
    {
        area: "Район Надежда",
        school: "153 СУ",
        phone: "телефон: 0876 33 05 29",
        teachers: [
            { name: "Петя Парушева", phone: "0899 121 489", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Николай Павлов", phone: "0894 735 254", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Емилия Кирилова", phone: "", image: "/my_website/teacherIcons/IMG_1282.jpg" }
        ]
    },
    {
        area: "Район Триадица",
        school: "22 СУ",
        phone: "телефон: 0876 33 05 09",
        teachers: [
            { name: "Анна Иванова", phone: "0899 321 432", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Иван Петров", phone: "0894 321 254", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Мария Симеонова", phone: "", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Георги Георгиев", phone: "0896 732 654", image: "/my_website/teacherIcons/IMG_1282.jpg" }
        ]
    },
    {
        area: "Район Младост",
        school: "131 СУ(К.Крумова/Т.Сандова)",
        phone: "телефон: 0879 48 72 58",
        teachers: [
            { name: "Марина Димитрова", phone: "0899 543 789", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Кирил Александров", phone: "0894 123 765", image: "/my_website/teacherIcons/IMG_1282.jpg" }
        ]
    },
    {
        area: "",
        school: "144 СУ",
        phone: "телефон: 0876 48 75 63",
        teachers: [
            { name: "Елена Петрова", phone: "0899 987 321", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Петър Стойков", phone: "0894 876 543", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Снежана Иванова", phone: "", image: "/my_website/teacherIcons/IMG_1282.jpg" }
        ]
    },
    {
        area: "",
        school: "145 ОУ",
        phone: "телефон: 0876 33 07 62",
        teachers: [
            { name: "Мариета Павлова", phone: "тел. 0886 522 442", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Ангел Бенински", phone: "тел. 0889 323 008", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Петър Георгиев", phone: "тел. 0988 908 627", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Марина Павлова", phone: "", image: "/my_website/teacherIcons/IMG_1282.jpg" }
        ]
    },
    {
        area: "Район Искър",
        school: "150 ОУ",
        phone: "телефон: 02 9781308 & 0876 33 01 50",
        teachers: [
            { name: "Елка Фичерова", phone: "тел. 0887 256 357", image: "/my_website/teacherIcons/IMG_1282.jpg" },
            { name: "Надя Стоичкова", phone: "тел. 0896 74 71 58", image: "/my_website/teacherIcons/IMG_1282.jpg" }
        ]
    }
];

// Function to generate the HTML for each section
function generateSections() {
    const container = document.getElementById('teacher-sections');
    
    sections.forEach((section, sectionIndex) => {
        // Create section element
        const sectionElement = document.createElement('section');
        sectionElement.classList.add('teacher-section');

        // Add headings with class for area names
        const h2Area = `<h2 class="area-name">${section.area}</h2>`;
        const h2School = section.school ? `<h2>${section.school}</h2>` : "";
        const h2Phone = `<h2>${section.phone}</h2>`;
        
        // Add teacher profiles
        const teacherProfiles = section.teachers.map((teacher, index) => `
            <div class="teacher-profile" style="--profile-index: ${index};">
                <img src="${teacher.image}" alt="${teacher.name}">
                <h3>${teacher.name}</h3>
                ${teacher.phone ? `<div class="phone-box">${teacher.phone}</div>` : ''} <!-- Only show phone box if there's a phone number -->
            </div>
        `).join('');

        // Combine everything into one section HTML
        sectionElement.innerHTML = `
            ${h2Area}
            ${h2School}
            ${h2Phone}
            <div class="teachers">${teacherProfiles}</div>
        `;

        // Append the section to the container
        container.appendChild(sectionElement);
    });

    // Call the function to apply intersection observer for fade-in
    applyFadeInOnScroll();
}

// Call the function to generate the sections
generateSections();

// Function to add fade-in animation on scroll
function applyFadeInOnScroll() {
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add fade-in class
                observer.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    }, observerOptions);

    // Observe all teacher profiles
    document.querySelectorAll('.teacher-profile').forEach(profile => {
        observer.observe(profile);
    });
}
