const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const miniLink = document.querySelector('main>a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)

    // УСЛОЖНЕННОЕ ЗАДАНИЕ

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (event) => {
            handleMenu() 
            event.preventDefault(); 

            let href = menuItem.getAttribute('href').substring(1); 
            const scrollTarget = document.getElementById(href) 
            const elementPosition = scrollTarget.getBoundingClientRect().top; 

            window.scrollBy({ 
                top: elementPosition,
                behavior: "smooth"
            })
        })
    });

    miniLink.addEventListener('click', (event) => {  
        const scrollTarget = document.getElementById('service-block')
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        event.preventDefault();

        window.scrollBy({
            top: elementPosition,
            behavior: "smooth"
        })
    })
}

export default menu