import { css } from 'styled-components'
import config, { onHover } from '@components/style/config'

export default css`
  position: relative;
  z-index: 2;

  .social-container {
    position: relative;
  }
  
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltiptext {
    visibility: hidden;
    text-align: center;
    background-color: black;
    color: #fff;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    width: 120px;
    bottom: -32px;
    left: -55px;
    width: 85px;
    &:after {
      content: '';
      position: absolute;
      z-index: 3;
      right: 10px;
      bottom: 100%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid black;
      
    }
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  
  .popover-container {
    position: absolute;
    right: -15px;
    top: calc(100% + 10px);
    display: flex;
    align-items: center;
    background: #ffffff;
    z-index: 10;
    box-shadow: 0 0 4px 0 rgba(206, 206, 206, 0.5);
    border-radius: 10px;
    &:after {
      content: '';
      position: absolute;
      z-index: 3;
      right: 20px;
      bottom: 100%;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #fff;
      filter: drop-shadow(0 -1px 2px rgba(206, 206, 206, 1));
    }
    padding: ${config.spacing.mobile + 'px'};
    @media (min-width: 768px) {
      padding: ${config.spacing.tablet + 'px'};
    }
    @media (min-width: 1024px) {
      padding: ${config.spacing.desktop + 'px'};
    }
    > * {
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
    p {
      white-space: nowrap;
    }
  }
  .link-container {
    display: flex;
    > * {
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
  a,
  .icon-svg {
    cursor: pointer;
    transform: translate(0, 0);
    transition: transform 0.17s ease;
    ${onHover(`
    transform: translate(0,-2px);
    transition: transform .17s ease;
  `)}
  }
  img,
  .icon-svg {
    max-width: 30px;
  }
`
