


var button = document.getElementById("login");
button.addEventListener("click", ()=>{
    document.getElementById("right").style.width = "100vw"
    document.getElementById("right").style.height = "100vh"
    document.getElementById("left").style.width = "0vw"
    document.getElementById("left").style.height = "0vh"
    // document.getElementById("dad").style.width = "100vw"
    // document.getElementById("dad").style.height = "100vh"
    setTimeout(()=>{
        document.body.innerHTML = `<header class="opencode-header">
        <img src="logo.jpg" alt="OpenCode Logo" class="opencode-logo">
        <p id="bb">
            <h1 id="ocd"><span class="blue">Open</span><span class="blue">C<font color="green">o</font>de</span></h1>
        <p class="subtitle">DEVELOPERS SOCIETY</p>
        </p>
    </header>
    


    <div id="dad">
        <div id="left2">
            <h1 id="welcome">New Here..?</h1>
            <h3>Create an account</h3>
            <button type="submit" id="login">Register</button>
            
        </div>
        <div id="right2">
            <h1 id="reg">Login</h1>
            <input type="text" name="username" placeholder="Username" id="user" class="input">
            <!-- <input type="email" name="email" placeholder="Email" id="email" class="input"> -->
            <input type="password" name="password" placeholder="Password" id="pass" class="input">
            <button type="login" id="submit">Login</button> 
        </div>
    </div>

    <script src="project8.js"></script>`
    },120)
    
    

})

