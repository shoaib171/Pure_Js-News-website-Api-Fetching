console.log("This is tutorials for  Cv screening browse for developers hiring.");

let data=[
    { name: 'Hassan-Ali',
        age: 24,
        city: 'Lahore',
        language: 'Java',
        framework: 'Java ',
        Post:"Andriod-Developer",
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    { name: 'Ahmad-Ali',
        age: 22,
        city: 'Lahore',
        language: 'Javascript',
        framework: 'React-js',
        Post:"Web-Developer",
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    { name: 'Aliena-Max',
        age: 24,
        city: 'Lahore',
        language: 'Kotlin',
        framework: ' Jet pack',
        Post:"Andriod-Developer",
        image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    { name: 'Zeshan-saleh',
        age: 25,
        city: 'Lahore',
        language: 'php',
        framework: 'cake php ',
        Post:"web-Developer",
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    { name: 'Mughees-pervaiz',
        age: 24,
        city: 'Lahore',
        language: 'javascript',
        framework: 'React-js',
        Post:"web-Developer",
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
    }
    ,{ name: 'Kashan',
    age: 24,
    city: 'Lahore',
    language: 'python',
    framework: 'Django',
    Post:"web-Developer",
    image: 'https://randomuser.me/api/portraits/men/56.jpg'
}

]

//make array iterators 

function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}



//For data insert in web fromat 
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item"><strong>Name:</strong> ${currentCandidate.name}</li>
    <li class="list-group-item"><strong>Age:</strong>${currentCandidate.age} years old</li>
    <li class="list-group-item"><strong>Lives in:</strong> ${currentCandidate.city}</li>
    <li class="list-group-item"><strong>Primarily works on</strong> ${currentCandidate.language}</li>
    <li class="list-group-item"><strong>Uses</strong> ${currentCandidate.framework} framework</li>
    <li class="list-group-item"><strong>Designate:</strong> ${currentCandidate.Post} </li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}