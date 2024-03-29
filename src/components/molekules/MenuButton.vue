<template>
    <div>
    <input type="radio" name="toggle" id="toggleOpen" value="toggleOpen">
<input type="radio" name="toggle" id="toggleClose" value="toggleClose">
<figure id="welcomeMessage">
  <figcaption>
    <h1>
        <label for="toggleOpen" title="Click to Open"></label>
        <label for="toggleClose" title="Click to Close">✖</label>
      <b>
        <a href="javascript:void(0);" title="Go To Home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <defs>
              <lineargradient id="svgGradient" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00ffc3" />
                <stop offset="0.09090909090909091" stop-color="#00fad9" />
                <stop offset="0.18181818181818182" stop-color="#00f4f0" />
                <stop offset="0.2727272727272727" stop-color="#00eeff" />
                <stop offset="0.36363636363636365" stop-color="#00e6ff" />
                <stop offset="0.4545454545454546" stop-color="#00dcff" />
                <stop offset="0.5454545454545454" stop-color="#00d2ff" />
                <stop offset="0.6363636363636364" stop-color="#00c5ff" />
                <stop offset="0.7272727272727273" stop-color="#00b8ff" />
                <stop offset="0.8181818181818182" stop-color="#6da8ff" />
                <stop offset="0.9090909090909092" stop-color="#9f97ff" />
                <stop offset="1" stop-color="#c285ff" />
              </lineargradient>
            </defs>
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
          </svg>
        </a>
      </b>
      <b>
        J
        <a href="javascript:void(0);" title="Additional Information">
        </a>
      </b>
      <b>
        a
        <a href="javascript:void(0);" title="Go To Shop">
        </a>
      </b>
      <b>
        m
        <a href="javascript:void(0);" title="Send an Email">
        </a>
      </b>
      <b>
        a
        <a href="javascript:void(0);" title="Facebook">
        </a>
      </b>
      <b>
        l
        <a href="javascript:void(0);" title="Instagram">
        </a>
      </b>
      <b>
        
        <a href="javascript:void(0);" title="LinkedIn">
        </a>
      </b>
    </h1>
  </figcaption>
</figure>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Transitions aren't quite as smooth on firefox */
:root {
  --gradient: conic-gradieang="scss" ang="scss" ang="scss" nt(
    from 240deg at 50% 50%,
    #00ffc3,
    #00fad9,
    #00f4f0,
    #00eeff,
    #00e6ff,
    #00dcff,
    #00d2ff,
    #00c5ff,
    #00b8ff,
    #6da8ff,
    #9f97ff,
    #c285ff
  );
}

*
, *::before
, *::after {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body
, html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  font-size: 100%;
  background: black;
  color: white;
  backface-visibility: hidden;
}

input {
  display: none;
}

#welcomeMessage {
  font-size: 130%;
}

#welcomeMessage
, #welcomeMessage
  figcaption
, #welcomeMessage
  figcaption
  h1
, #welcomeMessage
  figcaption
  h1
  b {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
}

#welcomeMessage
figcaption {
  width: auto;
  z-index: 1;
}

#welcomeMessage
figcaption::before
, #welcomeMessage
  figcaption::after {
    position: absolute;
    background: #222;
    width: 0%;
    height: 0%;
    content: "";
    z-index: -1;
}

#welcomeMessage
figcaption::after {
  background: var(--gradient);
  width: calc(100% + 3.1em);
  height: calc(100% + 3.1em);
  z-index: -2;
}

#welcomeMessage
figcaption
h1 {
  text-transform: lowercase;
  background: #555;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625em 1.25em, rgba(0, 0, 0, 0.23) 0px 0.375em 0.375em;
  transition: all 0.1s ease-in-out;
}

#welcomeMessage
figcaption
h1:active {
  transform: scale(0.93);
  transition: all 0.05s ease-in-out;
}

#welcomeMessage
figcaption
h1::before
, #welcomeMessage
  figcaption
  h1::after {
    position: absolute;
    white-space: nowrap;
    font-size: 0.7em;
    font-weight: 200;
    transition: all 0.7s ease-in-out;
}

#welcomeMessage
figcaption
h1::before {
  top: -4.3em;
  right: 2em;
  /* content: "Click to close"; */
  font-weight: 400;
  color: #666;
  opacity: 0;
}

#welcomeMessage
figcaption
h1::after {
  bottom: -3em;
  /* content: "Click to continue"; */
  transition: all 0.3s ease-in-out;
}

#welcomeMessage
figcaption
h1
label {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
}

#welcomeMessage
figcaption
h1
label:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  right: 0;
  top: -3em;
  background: transparent;
  color: #666;
  outline: 1px solid #666;
  padding: 5px;
  opacity: 0;
  z-index: 998;
}

#welcomeMessage
figcaption
h1
label:hover {
  cursor: pointer;
}

#welcomeMessage
figcaption
h1
b {
  width: 2em;
  height: 2em;
  background: #555;
  user-select: none;
}

#welcomeMessage
figcaption
h1
b
a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 1;
  transition: all 0.35s ease-in-out;
}

#welcomeMessage
figcaption
h1
b
a:focus::before {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #555;
  border-radius: 0.3em;
  content:"";
  z-index: -1;
}

#welcomeMessage
figcaption
h1
b
a:focus::after {
  position: absolute;
  width: calc(100% + 0.05em);
  height: calc(100% + 0.05em);
  background: var(--gradient);
  border-radius: 0.3em;
  content:"";
  z-index: -2;
  animation: spinny 5s linear infinite;
}

#welcomeMessage
figcaption
h1
b
a:active::after {
  filter: blur(5px);
}

@keyframes spinny {
  0% {
    transform: rotateZ(0deg);
    border-radius: 0.3em;
  }
  50% {
    border-radius: 1em;
  }
  100% {
    transform: rotateZ(360deg);
    border-radius: 0.3em;
  }
}

#welcomeMessage
figcaption
h1
b
a
svg {
  position: relative;
  width: 55%;
  height: auto;
  fill: url(#svgGradient);
  filter: grayscale(100%) brightness(1.2);
  transform: rotateY(-180deg);
  transition: all 200ms linear;
}

#welcomeMessage
figcaption
h1
b
a:hover
svg {
  filter: grayscale(0%) brightness(1);
  transition: all 200ms ease-in-out;
}

#welcomeMessage
figcaption
h1
b
a:focus
svg {
  filter: grayscale(0%) brightness(1);
  transform: rotateY(-180deg) scale(0.9);
  transition: all 70ms linear;
}

#toggleOpen:checked
  ~ #welcomeMessage {
      font-size: 100%;    
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption::before {
    width: calc(100% + 3em);
    height: calc(100% + 3em);
    border-radius: 0.7em;
    transition: all 0.7s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption::after {
    width: calc(100% + 6em);
    height: calc(100% + 6em);
    border-radius: 1em;
    transition: all 0.7s ease-in-out;
}

#toggleClose:checked
  ~ #welcomeMessage
  figcaption::before
  , #toggleClose:checked
    ~ #welcomeMessage
    figcaption::after {
      transition: all 0.7s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1 {
    background: transparent;
    box-shadow: none;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1:active {
    transform: none;
}

#toggleClose:checked
  ~ #welcomeMessage
  figcaption
  h1 {
    background: transparent;
    transition: all 0.05s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1::before {
    opacity: 1;
    transition: all 0.7s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1::after {
    opacity: 0;
    transition: all 0.7s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  label:first-of-type {
    display: none;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  label:last-of-type {
    z-index: 999;
    opacity: 1;
    transition: all 0.7s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  b {
    color: #555;
    border-radius: 0.3em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625em 1.25em, rgba(0, 0, 0, 0.23) 0px 0.375em 0.375em;
    transition: all 0.35s ease-in-out;
}

#toggleClose:checked
  ~ #welcomeMessage
  figcaption
  h1
  b {
    transition: all 0.35s ease-in-out;
    transition-delay: 0.35s;
    animation: welcomeClose 0.7s ease-in-out 1;
    animation-fill-mode: forwards;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  b:not(:first-of-type, :last-of-type) {
    animation: welcome 0.7s ease-in-out 1;
    animation-fill-mode: forwards;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  b:first-of-type {
    animation: welcomeFirst 0.7s ease-in-out 1;
    animation-fill-mode: forwards;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  b:last-of-type {
    animation: welcomeLast 0.7s ease-in-out 1;
    animation-fill-mode: forwards;
}

#toggleClose:checked
  ~ #welcomeMessage
  figcaption
  h1
  b:first-of-type {
    animation: welcomeCloseFirst 0.7s ease-in-out 1;
    animation-fill-mode: forwards;
}

#toggleClose:checked
  ~ #welcomeMessage
  figcaption
  h1
  b:last-of-type {
    animation: welcomeCloseLast 0.7s ease-in-out 1;
    animation-fill-mode: forwards;
}

#toggleClose:checked
  ~ #welcomeMessage
  figcaption
  h1
  b::after {
    opacity: 0;
    transition: all 0.35s ease-in-out;
}

#toggleOpen:checked
  ~ #welcomeMessage
  figcaption
  h1
  b
  a {
    opacity: 1;
    transition: all 0.35s ease-in-out;
    transition-delay: 0.35s;
}

@keyframes welcome {
  0% {
    margin: 0 0;
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  20% {
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  80% {
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  100% {
    margin: 0 1.5em;
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
}

@keyframes welcomeFirst {
  0% {
    margin: 0 0;
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  20% {
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  80% {
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  100% {
    margin: 0 1.5em 0 0;
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
}

@keyframes welcomeLast {
  0% {
    margin: 0 0;
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  20% {
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  80% {
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  100% {
    margin: 0 0 0 1.5em;
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
}

@keyframes welcomeClose {
  0% {
    margin: 0 1.5em;
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  20% {
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  80% {
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  100% {
    margin: 0 0;
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
}

@keyframes welcomeCloseFirst {
  0% {
    margin: 0 1.5em 0 0;
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  20% {
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  80% {
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  100% {
    margin: 0 0;
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
}

@keyframes welcomeCloseLast {
  0% {
    margin: 0 0 0 1.5em;
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  20% {
    transform: rotateY(180deg);
    width: 3em;
    height: 3em;
  }
  80% {
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
  100% {
    margin: 0 0;
    transform: rotateY(0deg);
    width: 2em;
    height: 2em;
  }
}

@media (max-width: 1270px) {
  #toggleOpen:checked
    ~ #welcomeMessage {
        font-size: 80%;
  }
}

@media (max-width: 1000px) { 
  #toggleOpen:checked
    ~ #welcomeMessage {
        font-size: 60%;
  } 
}

@media (max-width: 800px) {
  body {
    height: auto;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    align-items: flex-start;
  }
  
  #welcomeMessage {
    margin-top: 10em;
  }
  
  #toggleOpen:checked
    ~ #welcomeMessage {
        margin-top: 8em;
        font-size: 100%;
  }
  
  #toggleOpen:checked
    ~ #welcomeMessage
    figcaption
    h1 {
      flex-direction: column;
  }
  
  #welcomeMessage figcaption h1::before {
    content: "Close";
  }
  
  @keyframes welcome {
    0% {
      margin: 0 0;
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    20% {
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    80% {
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    100% {
      margin: 1em 0;
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
  }

  @keyframes welcomeFirst {
    0% {
      margin: 0 0;
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    20% {
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    80% {
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    100% {
      margin: 0 0 1em 0;
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
  }

  @keyframes welcomeLast {
    0% {
      margin: 0 0;
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    20% {
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    80% {
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    100% {
      margin: 1em 0 0 0;
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
  }

  @keyframes welcomeClose {
    0% {
      margin: 1em 0em;
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    20% {
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    80% {
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    100% {
      margin: 0 0;
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
  }

  @keyframes welcomeCloseFirst {
    0% {
      margin: 0 0 1em 0 !important;
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    20% {
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    80% {
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    100% {
      margin: 0 0;
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
  }

  @keyframes welcomeCloseLast {
    0% {
      margin: 1em 0 0 0 !important;
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    20% {
      transform: rotateY(180deg);
      width: 3em;
      height: 3em;
    }
    80% {
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
    100% {
      margin: 0 0;
      transform: rotateY(0deg);
      width: 2em;
      height: 2em;
    }
  }
}

@media (max-width: 650px) { 
  #welcomeMessage {
    font-size: 100%;
  }
}

@media (max-width: 500px) { 
  #welcomeMessage {
    font-size: 80%;
  }
  
  #toggleOpen:checked 
    ~ #welcomeMessage {
        font-size: 100%;
  }
}

@media (max-width: 400px) {
  #welcomeMessage {
    font-size: 65%;
  }
}
</style>