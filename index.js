console.log("This is my index.js");

// Data is an Array of Objects whcih contains information about the candidates

const data = [
    {
        name: 'Chirantan Banik',
        aboutMe: 'I am currently a second-year B.Tech(CSE) student at Sikkim Manipal Institute of Technology. Im the type of person who enjoys trying new things and taking on new challenges. Im always on the lookout for the right opportunities',
        age: 21,
        city: 'Chabua',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'photos/ChirantanBanik.png'

    },



    {
       name: 'Srayoshi Mukherjee',
       age: 20,
       city: 'Tinsukia',
       programmingLanguages: 'C++, javascript',
       framework: 'Nodejs, Express',
       image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'

    },

    {
        name: 'Harshit Aditya',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    },

    {
        name: 'Vinayak Gavariya',
        age: 20,
        city: 'Indore',
        programmingLanguages: 'C++, C, Python',
        framework: 'Reactjs',
        image: 'photos/Vinayak.JPG'
    
    },

    {
        name: 'Pema Yangzom Dorgi',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    },

    {
        name: 'Diwas Mundra',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    },

    {
        name: 'Pulak Trivadi',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    },

    {
        name: 'Dev Raj Bharti',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    },

    {
        name: 'Ashish Kumar Adarsh',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    },

    {
        name: 'Adarsh Sharma',
        age: 20,
        city: 'Tinsukia',
        programmingLanguages: 'C++, javascript',
        framework: 'Nodejs, Express',
        image: 'https://drive.google.com/file/d/1U_fBSXbsnlnQyVMFYWzRdbkiyOk15zB9/view?usp=sharing'
    
    }

]

// CV Iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true} 
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button Listener for next Button

const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate != undefined){
    image.innerHTML = `<img src='${CurrentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${CurrentCandidate.name}</li>
    <li class="list-group-item">About Me: ${CurrentCandidate.aboutMe}</li>
    <li class="list-group-item">${CurrentCandidate.age} years old</li>
    <li class="list-group-item">Lives in: ${CurrentCandidate.city}</li>
    <li class="list-group-item">Languages known: ${CurrentCandidate.programmingLanguages}</li>
    <li class="list-group-item">Works with: ${CurrentCandidate.framework} frameworks</li>
    
    </ul>`;
    }
    else {
        alert('End of Applications');
        window.location.reload();
    }

}

