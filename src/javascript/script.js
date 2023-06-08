const getContainer = document.getElementById('container')
getContainer.classList.remove('scale-95')
getContainer.classList.add('scale-100')

const goToPage = (id) => {
    
    if(id === 'home'){
        window.location.href = "/"
    } else if(id === 'contact'){
        window.location.href = '/contact.html'
    } else if(id === 'about'){
        window.location.href = '/about.html'
    } else if(id === 'portfolio'){
        window.location.href = '/portfolio.html'
    }
};

