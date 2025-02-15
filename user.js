function fetchUser() {
    showSpin();
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
            hideSpin();
            displayUser(data.results[0]);
        });
}
function displayUser(user) {
    const userInfo = document.querySelector('.info-box');
    if (user.gender === 'male') {
        document.body.style.backgroundColor = '#b5eaff';
    } else {
        document.body.style.backgroundColor = '#ffedfd'; 
    }

    userInfo.innerHTML = `
     <div class="img-div"><img src="${user.picture.large}" alt=""></div>
            <div class="info-div">
                <span><strong class="label">Name: </strong> <span class="input">${user.name.first} ${user.name.last}</span></span>
                <span><strong class="label">Email: </strong> <span class="input">${user.email}</span></span>
                <span><strong class="label">Location: </strong> <span class="input">${user.location.country} ${user.location.city}</span></span>
                <span><strong class="label">Age: </strong> <span class="input">${user.dob.age}</span></span>
                <span><strong class="label">Phone: </strong> <span class="input">${user.phone}</span></span>
            </div>`;
}

document.querySelector('.generate').addEventListener('click', fetchUser);

function showSpin() {
    document.querySelector('.spinner').style.display = 'block';
}
function hideSpin() {
    document.querySelector('.spinner').style.display = 'none';
}
fetchUser();   