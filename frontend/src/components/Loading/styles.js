import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Backgroud = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Content = styled.div`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .scene {
    display: flex;
  }
  /** Wizard CSS & Animations */
  .wizard {
    position: relative;
    width: 190px;
    height: 240px;
  }
  .body {
    position: absolute;
    bottom: 0;
    left: 68px;
    height: 100px;
    width: 60px;
    background: #219653;
  }
  .body::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20px;
    height: 100px;
    width: 60px;
    background: #219653;
    transform: skewX(14deg);
  }
  .right-arm {
    position: absolute;
    bottom: 74px;
    left: 110px;
    height: 44px;
    width: 90px;
    background: #219653;
    border-radius: 22px;
    /** animation */
    transform-origin: 16px 22px;
    transform: rotate(70deg);
    animation: right_arm 10s ease-in-out infinite;
  }
  .right-arm .right-hand {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f1c5b4;
    /** animation */
    transform-origin: center center;
    transform: rotate(-40deg);
    animation: right_hand 10s ease-in-out infinite;
  }
  .right-arm .right-hand::after {
    content: '';
    position: absolute;
    right: 0px;
    top: -8px;
    width: 15px;
    height: 30px;
    border-radius: 10px;
    background: #f1c5b4;
    /** Animation */
    transform: translateY(16px);
    animation: right_finger 10s ease-in-out infinite;
  }
  .left-arm {
    position: absolute;
    bottom: 74px;
    left: 26px;
    height: 44px;
    width: 70px;
    background: #219653;
    border-bottom-left-radius: 8px;
    /** animation */
    transform-origin: 60px 26px;
    transform: rotate(-70deg);
    animation: left_arm 10s ease-in-out infinite;
  }
  .left-arm .left-hand {
    position: absolute;
    left: -18px;
    top: 0;
    width: 18px;
    height: 30px;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    background: #f1c5b4;
  }
  .left-arm .left-hand::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 15px;
    border-radius: 20px;
    background: #f1c5b4;
    /** Animation */
    transform-origin: right bottom;
    transform: scaleX(0);
    animation: left_finger 10s ease-in-out infinite;
  }
  .head {
    position: absolute;
    top: 0;
    left: 14px;
    width: 160px;
    height: 210px;
    /** Animation */
    transform-origin: center center;
    transform: rotate(-3deg);
    animation: head 10s ease-in-out infinite;
  }
  .head .beard {
    position: absolute;
    bottom: 0;
    left: 38px;
    height: 106px;
    width: 80px;
    border-bottom-right-radius: 55%;
    background: #fff;
  }
  .head .beard::after {
    content: '';
    position: absolute;
    top: 16px;
    left: -10px;
    width: 40px;
    height: 20px;
    border-radius: 20px;
    background: #fff;
  }
  .head .face {
    position: absolute;
    bottom: 76px;
    left: 38px;
    height: 30px;
    width: 60px;
    background: #f1c5b4;
  }
  .head .face::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 40px;
    width: 20px;
    height: 40px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #f1c5b4;
  }
  .head .face::after {
    content: '';
    position: absolute;
    top: 16px;
    left: -10px;
    width: 50px;
    height: 20px;
    border-radius: 20px;
    border-bottom-right-radius: 0px;
    background: #fff;
  }
  .head .face .adds {
    /** Nose */
    position: absolute;
    top: 0px;
    left: -10px;
    width: 40px;
    height: 20px;
    border-radius: 20px;
    background: #f1c5b4;
  }
  .head .face .adds::after {
    /** Ear */
    content: '';
    position: absolute;
    top: 5px;
    left: 80px;
    width: 15px;
    height: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    background: #f1c5b4;
  }
  .head .hat {
    position: absolute;
    bottom: 106px;
    left: 0;
    width: 160px;
    height: 20px;
    border-radius: 20px;
    background: #219653;
  }
  .head .hat::before {
    content: '';
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translatex(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 34px 70px 50px;
    border-color: transparent transparent #219653 transparent;
  }
  .head .hat::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 20px;
    background: #219653;
    border-radius: 20px;
  }
  .head .hat .hat-of-the-hat {
    position: absolute;
    bottom: 78px;
    left: 79px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 25px 25px 19px;
    border-color: transparent transparent #219653 transparent;
  }
  .head .hat .hat-of-the-hat::after {
    content: '';
    position: absolute;
    top: 6px;
    left: -4px;
    width: 35px;
    height: 10px;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    background: #219653;
    transform: rotate(40deg);
  }
  .head .hat .four-point-star {
    position: absolute;
    width: 12px;
    height: 12px;
  }
  .head .hat .four-point-star::after,
  .head .hat .four-point-star::before {
    content: '';
    position: absolute;
    background: #fff;
    display: block;
    left: 0;
    width: 141.4213%;
    /* 100% * √2 */
    top: 0;
    bottom: 0;
    border-radius: 10%;
    transform: rotate(66.66deg) skewX(45deg);
  }
  .head .hat .four-point-star::after {
    transform: rotate(156.66deg) skew(45deg);
  }
  .head .hat .four-point-star.--first {
    bottom: 28px;
    left: 46px;
  }
  .head .hat .four-point-star.--second {
    bottom: 40px;
    left: 80px;
  }
  .head .hat .four-point-star.--third {
    bottom: 15px;
    left: 108px;
  }
  /** 10s animation - 10% = 1s */
  @keyframes right_arm {
    0% {
      transform: rotate(70deg);
    }
    10% {
      transform: rotate(8deg);
    }
    15% {
      transform: rotate(20deg);
    }
    20% {
      transform: rotate(10deg);
    }
    25% {
      transform: rotate(26deg);
    }
    30% {
      transform: rotate(10deg);
    }
    35% {
      transform: rotate(28deg);
    }
    40% {
      transform: rotate(9deg);
    }
    45% {
      transform: rotate(28deg);
    }
    50% {
      transform: rotate(8deg);
    }
    58% {
      transform: rotate(74deg);
    }
    62% {
      transform: rotate(70deg);
    }
  }
  @keyframes left_arm {
    0% {
      transform: rotate(-70deg);
    }
    10% {
      transform: rotate(6deg);
    }
    15% {
      transform: rotate(-18deg);
    }
    20% {
      transform: rotate(5deg);
    }
    25% {
      transform: rotate(-18deg);
    }
    30% {
      transform: rotate(5deg);
    }
    35% {
      transform: rotate(-17deg);
    }
    40% {
      transform: rotate(5deg);
    }
    45% {
      transform: rotate(-18deg);
    }
    50% {
      transform: rotate(6deg);
    }
    58% {
      transform: rotate(-74deg);
    }
    62% {
      transform: rotate(-70deg);
    }
  }
  @keyframes right_hand {
    0% {
      transform: rotate(-40deg);
    }
    10% {
      transform: rotate(-20deg);
    }
    15% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(-60deg);
    }
    25% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-60deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-40deg);
    }
    45% {
      transform: rotate(-60deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(-40deg);
    }
  }
  @keyframes right_finger {
    0% {
      transform: translateY(16px);
    }
    10% {
      transform: none;
    }
    50% {
      transform: none;
    }
    60% {
      transform: translateY(16px);
    }
  }
  @keyframes left_finger {
    0% {
      transform: scaleX(0);
    }
    10% {
      transform: scaleX(1) rotate(6deg);
    }
    15% {
      transform: scaleX(1) rotate(0deg);
    }
    20% {
      transform: scaleX(1) rotate(8deg);
    }
    25% {
      transform: scaleX(1) rotate(0deg);
    }
    30% {
      transform: scaleX(1) rotate(7deg);
    }
    35% {
      transform: scaleX(1) rotate(0deg);
    }
    40% {
      transform: scaleX(1) rotate(5deg);
    }
    45% {
      transform: scaleX(1) rotate(0deg);
    }
    50% {
      transform: scaleX(1) rotate(6deg);
    }
    58% {
      transform: scaleX(0);
    }
  }
  @keyframes head {
    0% {
      transform: rotate(-3deg);
    }
    10% {
      transform: translatex(10px) rotate(7deg);
    }
    50% {
      transform: translatex(0px) rotate(0deg);
    }
    56% {
      transform: rotate(-3deg);
    }
  }
  /** Objects CSS & Animations */
  .objects {
    position: relative;
    width: 200px;
    height: 240px;
  }
  .square {
    position: absolute;
    bottom: -60px;
    left: -5px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    /** Animation */
    transform: rotate(-360deg);
    animation: path_square 10s ease-in-out infinite;
  }
  .square::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 50px;
    height: 50px;
    background: #382196;
  }
  .circle {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /** Animation */
    transform: rotate(-360deg);
    animation: path_circle 10s ease-in-out infinite;
  }
  .circle::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #962121;
  }
  .triangle {
    position: absolute;
    bottom: -62px;
    left: -10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    /** Animation */
    transform: rotate(-360deg);
    animation: path_triangle 10s ease-in-out infinite;
  }
  .triangle::after {
    content: '';
    position: absolute;
    top: 0;
    right: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 28px 48px 28px;
    border-color: transparent transparent #219653 transparent;
  }
  /** 10s animation - 10% = 1s */
  @keyframes path_circle {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-100px) rotate(-5deg);
    }
    55% {
      transform: translateY(-100px) rotate(-360deg);
    }
    58% {
      transform: translateY(-100px) rotate(-360deg);
    }
    63% {
      transform: rotate(-360deg);
    }
  }
  @keyframes path_square {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-155px) translatex(-15px) rotate(10deg);
    }
    55% {
      transform: translateY(-155px) translatex(-15px) rotate(-350deg);
    }
    57% {
      transform: translateY(-155px) translatex(-15px) rotate(-350deg);
    }
    63% {
      transform: rotate(-360deg);
    }
  }
  @keyframes path_triangle {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-172px) translatex(10px) rotate(-10deg);
    }
    55% {
      transform: translateY(-172px) translatex(10px) rotate(-365deg);
    }
    58% {
      transform: translateY(-172px) translatex(10px) rotate(-365deg);
    }
    63% {
      transform: rotate(-360deg);
    }
  }
  .progress {
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 20px;
    background: #eee;
  }
  .progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #969121;
    animation: progress 20s linear infinite;
    border-radius: 10px 0 0 10px;
  }
  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .noise {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
`;
