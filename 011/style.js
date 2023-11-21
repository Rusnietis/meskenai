body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: monospace;
    font-size: 20px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
}

[type="radio"] {
    display: none;
}

.block {
    width: 500px;
    position: relative;
}
.block label {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    user-select: none;
}

.a {
    color: skyblue;
    font-size: 30px;
    overflow: hidden;
    max-height: 0;
    margin: 0;
    transition: max-height .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

[type="radio"] + label + label {
    display: none;
}

[type="radio"]:checked + label + label {
    display: block;
}

[type="radio"]:checked + label {
    display: none;
}

[type="radio"]:checked + label + label + .a {
    max-height: 100px;
}

.img-container {
    width: 600px;
    padding: 10px;
    border: 1px solid #ccc;
    position: relative;
    overflow: hidden;
}

.img-block1 {
    position: absolute;
    left: 0;
    animation-name: go;
    animation-duration: 24s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 5;
    top: 150px;
    opacity: 0.8;
}
.img-block2 {
    position: relative;
    left: 0;
    animation-name: go;
    animation-duration: 24s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction:reverse;
}



@keyframes go {
    0% {
        left: -200px;
    }
    20% {
        left: 100px;
    }
    40% {
        left: 200px;
    }
    60% {
        left: 300px;
    }
    80% {
        left: 300px;
    }
    100% {
        left: 600px;
    }

  }