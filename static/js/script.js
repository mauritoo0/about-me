const toolDescriptions = {
    html: `HTML, just like CSS and JavaScript, were my first steps on this long journey to becoming a programmer. At the beginning, everything felt easy, and that initial “takeoff” —contrary to the impostor syndrome that would come later— makes all of us believe that programming is simple`,
    css: `CSS, just like HTML and JavaScript, were my first steps on this long journey to becoming a programmer. At the beginning, everything felt easy, and that initial “takeoff” —contrary to the impostor syndrome that would come later— makes all of us believe that programming is simple`,
    js: `JS, just like CSS and JavaScript, were my first steps on this long journey to becoming a programmer. At the beginning, everything felt easy, and that initial “takeoff” —contrary to the impostor syndrome that would come later— makes all of us believe that programming is simple`,
    sql: `I’m familiar with SQL and have worked with MySQL and SQLite. I’ve used them to design databases, manage data, and run queries, which has helped me understand how backend systems really work`,
    python: `It’s the first language I ever tackled and the one I feel most comfortable with. Thanks to its simple syntax, it’s helped me learn logic, algorithms, and data structures without losing motivation, always seeing the light at the end of the tunnel. I know it’s not very complex, but that’s exactly what I needed to avoid falling into impostor syndrome too quickly`,
    dj: `When it came to advancing with Python, it was necessary to know which frameworks were needed to build a solid backend, interact with servers, and create dynamic templates. I was always recommended Django and Django Rest Framework, so I went for it, and it’s worked wonderfully for me from the start.`,
    djr: `I know it makes things a lot easier when working with Python and Django, but I’ve always preferred designing forms and doing CRUDs manually to better understand how everything works behind the scenes. After that, Rest Framework worked much better for me.`,
    fstapi: `Another approach for working with CRUDs that I really liked. Simple and precise. I need to work more with it`,
    react: `Currently studying React and React Native. Gradually improving in a language that’s fundamental for the backend`,
    
};

const labDescriptions = {
    country_game: `This is a game where the user has to guess which flag is displayed on the screen. It uses the pycountry library and the restcountries API: pycountry randomly selects a country, and then the API is queried using its alpha code to retrieve the image and necessary data for each country. <br><br>The game has three difficulty levels: easy, intermediate, and hard, determined by the population of each country (this was the only way to automatically separate them by difficulty).The player has 3 attempts and earns 1 point for each correct guess. If they reach the top 10, their score is displayed on the main page. If they make a mistake, they can refresh the flag to see a different one if they don’t know the current one. The application can sometimes be slow because the API is free and does not always work perfectly. <br><br>See it live: <a href="https://flag-guesser.onrender.com" target="_blank">here</a> or on my GitHub: <a href="https://github.com/mauritoo0/countrygame" target="_blank">here</a>.`,
    glow_up: `This is a website to promote nightclubs in Barcelona. On the main page, depending on the day of the week, it shows the nightclubs that are open tonight. By clicking on each one, you can access its information, photos, and an external link to buy tickets. You can also select another day of the week to see which nightclubs are open on that day.<br><br>
    There is a section called “Nightclubs” that displays all associated nightclubs. You can click on each one to see more information and also get tickets for the next available date.<br><br>See it live: <a href="https://maurofavieri.pythonanywhere.com/" target="_blank">here</a> or on my GitHub: <a href="https://github.com/mauritoo0/glowup" target="_blank">here</a>.`,
    nix: `This is an internal management system for a nightclub promoters company. Users can log in, which automatically creates them as “promoters,” although they can also be added manually and can only be edited/deleted by themselves or a superuser. The same applies to clients, tables, and reservations. They can also edit their own profile, changing their name and password. <br><br>See it live: <a href="https://nixmanager.onrender.com" target="_blank">here</a> or on my GitHub: <a href="https://github.com/mauritoo0/nixmanager" target="_blank">here</a>.`, 
    
};

const span_details = document.querySelector('.tool-span');
const span_text = document.querySelector('.span-text');
const tool_icons = document.querySelectorAll('.tool-item');

const lab_details = document.querySelector('.lab-span');
const lab_text = document.querySelector('.lab-text');
const project_icon = document.querySelectorAll('.project');

function scrollToElement(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
}

// Tools
tool_icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const i_element = icon.querySelector('i');
        const id = i_element.id;

        const isOpen = (span_text.textContent === toolDescriptions[id] && span_details.classList.contains('show'));

        if(isOpen){
            span_details.classList.remove('show');
        } else {
            span_text.textContent = toolDescriptions[id];
            span_details.classList.add('show');

            setTimeout(() => scrollToElement(span_details), 100);
        }
    });
});

// Labs / Projects
project_icon.forEach(icon => {
    icon.addEventListener('click', () => {
        const img_element = icon.querySelector('img');
        const id = img_element.id;

        const isOpen = (lab_text.innerHTML === labDescriptions[id] && lab_details.classList.contains('show'));

        if(isOpen){
            lab_details.classList.remove('show');
        } else {
            lab_text.innerHTML = labDescriptions[id];
            lab_details.classList.add('show');

            setTimeout(() => scrollToElement(lab_details), 100);
        }
    });
});