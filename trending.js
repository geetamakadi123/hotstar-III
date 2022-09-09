

    const img_url = `https://image.tmdb.org/t/p/w500`;

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=3c8f99e89fc4adcb9c3a60cb9074b8e1`;

    fetch(url)
        .then((res) => (res.json()))
        .then((res) => {
            console.log(res.results);
            appendData(res.results);
        })
        .catch((err) => {
            console.log(err);
        })

    let arr = [];
    let count = 0;


    const appendData = (data) => {
        console.log('data:', data)

        data.forEach((el) => {
            let box = document.createElement("div");
            box.setAttribute("id", "movieBox")

            let img = document.createElement("img");
            img.setAttribute("id", "img")
            img.src = `${img_url}${el.poster_path}`;

            let para = document.createElement("div");
            para.setAttribute("id", "para");

            let name = document.createElement("p");
            name.setAttribute("id", "movieName");
            name.textContent = el.title;
            name.style.fontWeight = "bold";

            let releaseDate = document.createElement("p");
            releaseDate.textContent = `Released: ${el.release_date}`;

            para.append(name, releaseDate)
            box.append(img, para);
            document.getElementById("container").append(box)

            if (count <= 4) {
                count++;
                arr.push(el)
            }
        });
        localStorage.setItem("trending", JSON.stringify(arr));

    }



