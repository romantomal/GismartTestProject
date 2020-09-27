import style from 'styled-components';

export const LoaderContainer = style.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const LoaderData = style.div`
  box-sizing: border-box;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  border: 20px double #6fb7ff;
  animation: bubble-turn 0.9s linear infinite;
  
:before,
:after {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    background: #050334;
    border-radius: 50%;
    bottom: 0;
    right: 40px;
}

:after {
    left: 40px;
    top: 0;
}

@keyframes bubble-turn {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
