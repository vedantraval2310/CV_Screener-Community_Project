console.log("This is my index.js");

// Data is an Array of Objects whcih contains information about the candidates

const data = [
    {
        name: 'Chirantan Banik',
        aboutMe: 'I am the type of person who enjoys trying new things and taking on new challenges.',
        age: 21,
        city: 'Chabua, Assam',
        programmingLanguages: 'C++, Javascript',
        interests: 'Web Development, Content Creation, Reading Self Growth Books & listening to the Stories of Indian Armed Forces are my interests',
        image: 'photos/ChirantanBanik.png'

    },



    {
       name: 'Srayoshi Mukherjee',
       aboutMe: 'I am a student of Sikkim Manipal Institute of Technology.',
       age: 20,
       city: 'Tinsukia, Assam',
       programmingLanguages: 'C, C++ & Python',
       interests: 'My hobbies include dancing & painting.',
       image: 'photos/Srayoshi.png'

    },


    {
        name: 'Vinayak Gavariya',
        aboutMe: 'I am a web developer who has a keen interest in AI/ML and data science.',
        age: 20,
        city: 'Indore, Madhya Pradesh',
        programmingLanguages: 'C++, C, Python',
        interests: ' Community management is one of my hobbies these days. I do love to create Spotify playlists too.',
        image: 'photos/Vinayak.png'
    
    },

    {
        name: 'Pema Yangzom Dorji',
        aboutMe: 'I am Pema Yangzom Dorji and I like Programming, AI, and Gaming',
        age: 20,
        city: 'Gangtok, Sikkim',
        programmingLanguages: 'C, C++, Java, Python(bit)',
        interests: 'My interest lie in the field of Robotics',
        image: 'photos/Pema.png'
    
    },

    {
        name: 'Dev Raj Bharti',
        aboutMe: 'I am Dev Raj Bharti, a passionate 2nd year Student at SMIT. I like to do coding and be around what makes me better.',
        age: 20,
        city: 'Udampur, Jammu & Kashmir',
        programmingLanguages: 'C, C++, Python and Java',
        interests: 'Entrepreneurship and Cloud Computing are my Interests.',
        image: 'photos/Dev.png'
    
    },

    {
        name: 'Diwas Mundra', 
        age: 21,
        aboutMe: 'I am Diwas Mundra a Student of CSE at Sikkim Manipal Institute of Technology',
        city: 'Gangtok, Sikkim',
        programmingLanguages: 'Python',
        interests: 'Interested in Web Development, Ethical Hacking etc',
        image: 'photos/Diwas.png'
    
    },


    {
        name: 'Adarsh Sharma', 
        age: 20,
        aboutMe: 'I am Adarsh Sharma I am basically a learner. Generally prefer learning new things.',
        city: 'Gangtok, Sikkim',
        programmingLanguages: 'C, C++, Java, Python(Basic)',
        interests: 'Outdoor Activities/Sports and reading books are my interests',
        image: 'photos/Adarsh.png'
    
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
    <li class="list-group-item"> ${CurrentCandidate.interests} </li>
   </ul>`;
    }
    else {
        alert('End of Applications');
        window.location.reload();
    }
}

