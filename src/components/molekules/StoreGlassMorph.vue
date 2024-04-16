<!-- MacOS App Store Glassmorphism -->

<script setup lang="js">
//THIS APP IS NOT THE EXACT COPY OF THE APP STORE BUT IS SIMILAR TO IT ;).... and btw inspired by Aysenur Turk's pen (who i follow A LOT).

const side_bar_btns = document.querySelectorAll("#sidebar-btn");

side_bar_btns.forEach((elem) => {
    elem.addEventListener("click", () => {
        for (let index = 0; index < side_bar_btns.length; index++) {
            side_bar_btns[index].classList.remove("active");
        }
        elem.classList.add("active");
    });
});

let min = true;

document.querySelector(".window__close").addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";

    setTimeout(() => {
        window.alert(
            "Oh No! What did you do? Now you have to refresh to open the app again"
        );
    }, 500);
});

document.querySelector(".window__maximize").addEventListener("click", () => {
    if (min == false) {
        min = true;
        console.log(min);
        document.querySelector(".container").style.width = "90%";
        document.querySelector(".container").style.height = "90%";
    } else {
        min = false;
        document.querySelector(".container").style.width = "100%";
        document.querySelector(".container").style.height = "100%";
    }
});

document.querySelector(".window__minimize").addEventListener("click", () => {
    console.log("hello world");

    document.querySelector(".container").style.transform = "scale(0)";

    setTimeout(() => {
        window.alert(
            "The app is minimized but cannot be opened again because the virtual codepen macos crashed!"
        );
    }, 500);
});
</script>

<template>
    <div class="container" id="container">
        <header>
            <section class="window--buttons">
                <div class="window__close"></div>

                <div class="window__minimize"></div>

                <div class="window__maximize"></div>
            </section>
        </header>

        <aside>
            <div>
                <input type="text" placeholder="Search" /><br />

                <button class="active" id="sidebar-btn">Discover</button>
                <button id="sidebar-btn">Arcade</button>
                <button id="sidebar-btn">Create</button>
                <button id="sidebar-btn">Work</button>
                <button id="sidebar-btn">Play</button>
                <button id="sidebar-btn">Develop</button>
                <button id="sidebar-btn">Categories</button>
                <button id="sidebar-btn">Updates</button>
            </div>

            <div class="profile">
                <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg" alt="Profile Pic"
                    class="profile--pic" />

                <h1>Jimmy Donaldson</h1>
            </div>
        </aside>

        <div class="content">
            <div class="ideas">
                <div class="idea">
                    <p>MASTER YOUR MAC</p>
                    <h1>Make a great<br> handoff</h1>
                    <p>Work seamlessly across devices</p>
                </div>

                <div class="idea">
                    <p>GET STARTED</p>
                    <h1>Apps optimised for mac with M1</h1>
                    <p>Work seamlessly across devices</p>
                </div>
            </div>

            <section class="updates">
                <h1>Updates</h1>

                <div class="update update-1">

                    <div class="updt-left">
                        <img src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png"
                            alt="powerpoint icon" />
                        <h1>Microsoft Powerpoint</h1>
                    </div>

                    <div class="buttons">
                        <a href="https://bit.ly/3gdGvT8" target="_warning">
                            <button>Update</button>
                        </a>
                    </div>
                </div>

                <div class="update">

                    <div class="updt-left">
                        <img src="https://img.icons8.com/color/452/microsoft-word-2019--v2.png" alt="word icon" />
                        <h1>Microsoft Word</h1>
                    </div>

                    <div class="buttons">
                        <button style="color: lime;cursor: default">Updated</button>
                    </div>
                </div>

                <div class="update">

                    <div class="updt-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/788px-Adobe_Photoshop_Lightroom_CC_logo.svg.png"
                            alt="lightroom icon" />
                        <h1>Adobe Lightroom</h1>
                    </div>

                    <div class="buttons">
                        <a href="https://bit.ly/3gdGvT8" target="_warning">
                            <button>Update</button>
                        </a>
                    </div>
                </div>

                <div class="update">

                    <div class="updt-left">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png" alt="xcode icon" />
                        <h1>Xcode</h1>
                    </div>

                    <div class="buttons">
                        <a href="https://bit.ly/3gdGvT8" target="_warning">
                            <button>Update</button>
                        </a>
                    </div>
                </div>
            </section>

            <section class="trending">
                <h1>Trending</h1>

                <div class="grid">
                    <span class="grid__app">
                        <h1>Kindle</h1>

                        <button>GET</button>
                    </span>

                    <span class="grid__app">
                        <h1>Slac</h1>

                        <button>GET</button>
                    </span>

                    <span class="grid__app">
                        <h1>Magnet</h1>

                        <button>₹699</button>
                    </span>

                    <span class="grid__app">
                        <h1>CotEditor</h1>

                        <button>GET</button>
                    </span>

                    <span class="grid__app margin">
                        <h1>Twitter</h1>

                        <button>GET</button>
                    </span>

                    <span class="grid__app margin">
                        <h1>Notability</h1>

                        <button>₹799</button>
                    </span>

                    <span class="grid__app margin">
                        <h1>NDTV</h1>

                        <button>GET</button>
                    </span>

                    <span class="grid__app margin">
                        <h1>Rummy</h1>

                        <button>₹179</button>
                    </span>
                </div>
            </section>

            <section class="links">
                <a href="#">Privacy Policy -></a>

                <a href="#">Terms and Conditions -></a>

                <a href="#">Report Error -></a>

                <a href="#">
                    Parent's guide to Mac app store
                </a>
            </section>
        </div>

    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
    margin: 0;
    box-sizing: border-box;
    user-select: none;
}

html {
    font-size: 62.5%;
}

:root {
    --container-height: 90%;
    --container-width: 90%;
    --component-background: rgba(0, 0, 0, 0.45);
}

body {
    background: url("https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-3840x2160-1432.jpg");
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Poppins", sans-serif;
}

.container {
    background: rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
    backdrop-filter: blur(30px);
    border-radius: 15px;
    width: var(--container-width);
    height: var(--container-height);
    position: relative;
}

header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    position: relative;
}

section.window--buttons {
    position: absolute;
    top: 15px;
    left: 15px;
}

.window__close {
    width: 1.5rem;
    height: 1.5rem;
    background: #f00;
    display: inline-block;
    border-radius: 50%;
    transition: 0.3s ease;
}

.window__close:hover {
    transform: scale(1.2);
}

.window__minimize {
    margin-left: 5px;
    width: 1.5rem;
    height: 1.5rem;
    background: #f57c00;
    display: inline-block;
    border-radius: 50%;
    transition: 0.3s ease;
}

.window__minimize:hover {
    transform: scale(1.2);
}

.window__maximize {
    margin-left: 5px;
    width: 1.5rem;
    height: 1.5rem;
    background: #4caf50;
    display: inline-block;
    border-radius: 50%;
    transition: 0.3s ease;
}

.window__maximize:hover {
    transform: scale(1.2);
}

aside {
    overflow: scroll;
    height: 90%;
    margin-top: 20px;
    float: left;
    width: 200px;
    position: sticky;
    top: 0;
}

button {
    display: block;
    margin-top: 7px;
    margin-left: 15px;
    padding: 0.7rem 4rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    background: none;
    width: 170px;
    border-radius: 10px;
    border: 0;
    color: white;
    transition: 0.2s ease;
    cursor: pointer;
}

button:hover,
button.active {
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(20px);
}

input[type="text"] {
    font-size: 1.5rem;
    width: 170px;
    margin-left: 15px;
    padding: 0.9rem;
    border-radius: 10px;
    background: #000;
    color: #fff;
    font-family: "Poppins", sans-serif;
    border: 0;
    outline: 0;
    text-align: center;
    transition: 0.3s ease;
    background: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

input[type="text"]::placeholder {
    text-align: center;
}

.profile {
    position: absolute;
    left: 15px;
    display: flex;
    bottom: 15px;
    align-items: center;
}

.profile--pic {
    width: 4rem;
    border-radius: 50%;
}

h1 {
    color: #fff;
    font-weight: 400;
    margin-left: 10px;
    font-size: 1.3rem;
}

.content {
    color: white;
    padding: 15px;
    border-radius: 30px;
    height: 90%;
    margin-right: 20px;
    overflow: scroll;
}

.ideas {
    display: flex;
}

.idea {
    background: var(--component-background);
    width: 50%;
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    transition: 0.3s ease;
}

.idea:nth-of-type(2) {
    margin-left: 15px;
}

.idea p {
    color: gray;
    font-size: 1.2rem;
}

.idea:hover {
    transform: scale(1.06);
}

.updates {
    margin-top: 20px;
}

.updates h1:first-of-type {
    font-size: 2.2rem;
}

.update {
    width: 100%;
    background: var(--component-background);
    padding: 1.3rem 0.7rem;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s ease;
}

.update:hover {
    transform: scale(1.03);
}

.updt-left h1 {
    font-size: 1.7rem;
    margin-left: 10px;
}

.updt-left img {
    width: 35px;
}

.buttons button {
    background: none;
    color: dodgerblue;
    border: 0;
    font-size: 1.6rem;
    transition: 0.2s ease;
    cursor: pointer;
}

.buttons button:hover {
    color: blue;
}

.trending {
    margin-top: 20px;
}

.trending h1:last-of-type {
    font-size: 2.2rem;
}

.grid {
    display: grid;
    grid-template-rows: repeat(4, 25%);
    grid-template-columns: repeat(4, 25%);
    margin-top: 10px;
    gap: 5px;
}

.grid__app {
    background: var(--component-background);
    padding: 13px;
    display: inline-block;
    display: flex;
    height: fit-content;
    border-radius: 10px;
    justify-content: space-between;
}

.grid__app.margin {
    margin-top: 20px;
}

.grid__app h1 {
    font-size: 1.7rem;
}

.grid__app button {
    background: dodgerblue;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 30px;
    width: 30%;
    cursor: pointer;
}

.links {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
}

.links a {
    text-align: center;
    color: #fff;
    font-size: 1.4rem;
}

.links a:nth-of-type(3),
.links a:nth-of-type(4) {
    margin-top: 7px;
}

@media (max-width: 768px) {
    .content .trending .grid {
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(4, 25%);
    }

    aside {
        display: none;
    }

    .links {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
    }
}
</style>
