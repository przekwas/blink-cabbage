fetch('http://student-fun-api.herokuapp.com/api/hiphop')
    .then((response) => {
        return response.json()
    })
    .then((albums) => {
        albums.forEach(album => {
            $('.row').append(`
                <div class="col-md-4">
                    <div class="card shadow my-2">
                        <img class="card-img-top" alt="album art" src="${album.image}" />
                        <div class="card-body text-center">
                            <h4 class="card-title">${album.title}</h4>
                            <p class="card-text">by ${album.artist}</p>
                            <a class="btn btn-success" target="_blank" href="${album.url}">Buy on Amazon</a>
                        </div>
                    </div>
                </div>
            `);
        });
    })
    .catch(e => console.log(e.message))