import { createGlobalStyle, css } from 'styled-components';

import 'react-phone-input-2/lib/style.css';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea,
  input {
    outline: none !important;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none !important;
  }

  html {
    visibility: visible;
    opacity: 1;
  }
`;

const fontFamily = css``;

const base = css`
  body {
    background-color: #f7f9fa;
  }

  .ant-modal-content {
    padding: 0 !important;
    background-color: #18191c !important;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    border-radius: 20px !important;
    overflow: hidden;
  }

  .ant-modal .ant-modal-footer {
    margin: 0;
  }

  .upload-image-custom {
    .ant-modal {
      .ant-modal-content {
        padding: 24px !important;
        background-color: #fff !important;
      }
    }
  }

  .ant-notification {
    margin-inline-start: 0 !important;
    top: 100px !important;
    max-width: 400px;
    width: 100%;
    margin: 0;

    .ant-notification-notice {
      background: linear-gradient(45deg, #00c88a, #00f649) !important;
      color: #fff;
      margin: 0 0 20px 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      .ant-notification-notice-close {
        color: #fff !important;
      }
      .ant-notification-notice-content {
        .ant-notification-close-x {
          .ant-notification-close-icon {
            background: #fff;
          }
        }
        .ant-notification-notice-message {
          color: #fff;
          font-weight: 400;
          font-size: 12px;
          margin-bottom: 36px;
          padding-top: 4px;
        }

        .ant-notification-notice-description {
          font-weight: 500;
          font-size: 16px;
          margin-left: 0;
        }
      }
    }
  }

  .ant-popover {
    .ant-popover-content {
      .ant-popover-inner {
        width: 450px;

        .ant-popover-title {
          text-align: center;
          font-weight: 700;
          font-size: 22px;
          padding: 8px 0;
          margin: 0;
        }
      }
    }
  }

  .unset-border-collapse {
    .ant-table-wrapper {
      .ant-spin-nested-loading {
        .ant-spin-container {
          .ant-table {
            .ant-table-container {
              .ant-table-content {
                table {
                  border-collapse: unset !important;
                  border-spacing: 0px !important;
                  box-sizing: border-box;
                  margin-top: 12px;

                  tbody {
                    tr {
                      td {
                        border: 1px solid #b9b5c2;
                        &:nth-child(1) {
                          border-radius: 0 !important;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .spin-loading {
    .ant-spin {
      min-height: 100vh;
      max-height: 100vh;
    }
  }

  .editable-cell-value-wrap {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
`;

const typography = css`
  h1 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 96px;
    line-height: 116px;
    letter-spacing: -1.5px;
  }

  h2 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 60px;
    line-height: 70px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0;
  }

  h4 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 34px;
    line-height: 44px;
    letter-spacing: 0.25px;
  }

  h5 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 24px;
    line-height: 44px;
    letter-spacing: 0;
  }

  h6 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.regular};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }

  body .small {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.regular};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
  }

  .subtitle {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }

  .subtitle2 {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0;
  }

  .caption {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0;
  }

  .overline {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0;
  }

  .tooltip {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0;
  }

  button {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
  }

  button.btn-large {
    font-family: 'Nunito', sans-serif;
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }
`;

const checkbox = css`
  .ant-checkbox-wrapper {
    color: ${({ theme }) => theme?.colors?.other?.text1};
    line-height: 1.35;
  }

  .ant-checkbox-wrapper .ant-checkbox {
    width: 18px;
    height: 18px;
  }

  .ant-checkbox-wrapper .ant-checkbox .ant-checkbox-inner {
    border: 2px solid #7b7583;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    font-weight: 500;
    color: ${({ theme }) => theme?.colors?.textColor};
  }

  .ant-checkbox-wrapper .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover
    .ant-checkbox.ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${({ theme }) => theme?.colors?.primaryColor};
    border-color: ${({ theme }) => theme?.colors?.primaryColor};

    &:hover {
      border: 1px solid red;
    }
  }

  .ant-checkbox-wrapper:hover {
    color: ${({ theme }) => theme?.colors?.primaryColor};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
    border-color: ${({ theme }) => theme?.colors?.primaryColor} !important;
  }

  .ant-checkbox-wrapper .ant-checkbox:after {
    border-color: ${({ theme }) => theme?.colors?.primaryColor} !important;
  }

  .ant-checkbox-wrapper:active {
    color: ${({ theme }) => theme?.colors?.textBoldColor};
  }
`;

const radioButton = css`
  .ant-radio-wrapper .ant-radio {
    width: 18px;
    height: 18px;
  }
  .ant-radio-wrapper .ant-radio .ant-radio-inner {
    border: 2px solid #7b7583;
    width: 18px;
    height: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme?.colors?.textColor};
  }

  .ant-radio-wrapper .ant-radio.ant-radio-checked .ant-radio-inner {
    background-color: ${({ theme }) => theme?.colors?.primaryColor};
    border-color: ${({ theme }) => theme?.colors?.primaryColor};
  }

  .ant-radio-wrapper:hover {
    color: ${({ theme }) => theme?.colors?.primaryColor};
  }

  .ant-radio-wrapper:hover .ant-radio .ant-radio-inner {
    border-color: ${({ theme }) => theme?.colors?.primaryColor};
  }

  .ant-radio-wrapper .ant-radio:active .ant-radio-inner {
    color: ${({ theme }) => theme?.colors?.textBoldColor};
  }
`;

const switchToggle = css`
  button.ant-switch {
    line-height: 16px;
    color: ${({ theme }) => theme?.colors?.textBoldColor};
    background: ${({ theme }) => theme?.colors?.textColor};
    height: 16px;
    width: 24px;
    min-width: 24px;
  }

  button.ant-switch.ant-switch-checked {
    background: ${({ theme }) => theme?.colors?.primaryColor};
  }

  button.ant-switch:hover:not(.ant-switch-disabled) {
    color: #17181a;
    background: ${({ theme }) => theme?.colors?.textColor};
  }

  button.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    color: ${({ theme }) => theme?.colors?.primaryColor};
    background: ${({ theme }) => theme?.colors?.primaryColor};
  }

  .ant-switch .ant-switch-handle {
    width: 10px;
    height: 10px;
    top: 3px;
    inset-inline-start: 4px;
  }

  button.ant-switch.ant-switch-checked .ant-switch-handle {
    inset-inline-start: calc(100% - 14px);
  }
`;

const select = css`
  .ant-select-dropdown {
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme?.colors?.other?.background1};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background: transparent;
      font-weight: ${({ theme }) => theme?.fontWeight?.regular};
    }

    .flag {
      position: relative;

      min-width: 30px;
      max-width: 30px;
      height: 20px;

      img {
        object-fit: cover;
      }
    }
  }
`;

const scrollApp = css`
  /* total width */
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    // background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-track:hover {
    // background-color: #f4f4f4;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #a0a0a5;
    border-radius: 16px;
    z-index: 1000;
    /*     border:5px solid #a0a0a5 */
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
    /*     border:1px solid #a0a0a5 */
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const drawerSidebar = css`
  .ant-drawer {
    .drawer-sidebar {
      .ant-drawer-header {
        padding: 0px;
        border-bottom: none;

        .ant-drawer-close {
          position: absolute;
          top: 10px;
          right: 10px;
          margin-right: 0px;
        }
      }

      .ant-drawer-body {
        padding: 0px;
      }
    }
  }
`;

const custom = css`
  .text-gradient {
    color: transparent;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text !important;
    background: linear-gradient(to right, rgb(0, 254, 52), rgb(4, 212, 131));
  }

  .tree .hide {
    display: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontFamily}
  ${base}
  ${typography}
  ${checkbox}
  ${radioButton}
  ${switchToggle}
  ${select}
  ${scrollApp}
  ${drawerSidebar}
  ${custom}
`;

export default GlobalStyle;
