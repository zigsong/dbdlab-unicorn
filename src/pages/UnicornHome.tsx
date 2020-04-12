import React from "react";
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import UnicornFlexLayout from "../layouts/UnicornFlexLayout";
import styled from 'styled-components';
import unicornLogo from "../assets/imges-01.png";
import downArrow from "../assets/combined-shape.png";
import imgIndex from "../assets/img_index_bg.png";
import dbdLogo from "../assets/img_dbd_ci.png";

function UnicornHome(props: RouteChildrenProps) {
  const onStart = () => {
    const { history } = props;
    history.push("/entry");
  }

  const LogoImage = styled.img`
    margin-top: 81px;
    margin-bottom: 27px;
    width: 250px;
    height: 203px;
  `

  const UnicornTextRegular = styled.text`
    display: inline-block;
    font-family: 'NanumSquare Regular';
  `

  const UnicornTextBold = styled.text`
    display: inline-block;
    font-family: 'NanumSquare Bold';
  `

  const UnicornButton = styled.button`
    width: 270px;
    height: 54px;
    display: inline-block;
    position: relative;
    margin-bottom: 121px;
    background-color: #7986cb;
    font-family: 'NanumSquare Bold';
    color: #ffffff;
  `

  const ButtonDeco = styled.svg`
    position: absolute;
    &.deco-1 {
      left: -5px;
      bottom: -13px;
    }
    &.deco-2 {
      right: -12px;
      top: -9px;
    }
  `

  const InfoText = styled.text`
    font-size: 12px;
    font-family: 'NanumSquare Regular';
    color: #646464;
    &.bold {
      font-family: 'NanumSquare Bold';
    }
    &.light {
      color: #9b9b9b;
    }
  `

  const DownArrow = styled.img`
    width: 8px;
    height: 9px;
  `

  const UnicornLink = styled.a`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 70px;
    margin: 1px 1px 1px 1px;
    color: #696969;
    font-size: 13px;
    verical-align: middle;
    padding-left: 29px;
  `

  return (

      <div style={{ overflow: 'scroll' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '-webkit-fill-available' }}>
          <LogoImage src={unicornLogo} alt="logo" />

          <svg xmlns="http://www.w3.org/2000/svg" width="260" height="29" viewBox="0 0 260 29" style={{ marginBottom: '16px' }}>
              <g fill="none">
                  <path fill="#282828" d="M1.93 13.974c.15.045.302.086.453.12l.227.05c.226.045.442.113.646.204 1.858.657 3.74 1.043 5.644 1.156 1.904.113 3.83.113 5.78 0 .166-.015.325-.035.476-.06l.22-.042c.216-.045.448-.08.698-.102.793-.068 1.428.023 1.904.272.476.25.872.703 1.19 1.36.362.725.39 1.366.085 1.921-.306.555-.89.901-1.751 1.037-.59.09-1.168.142-1.734.153-.567.011-1.145.04-1.734.085-.544.045-.907.147-1.088.306-.182.159-.295.487-.34.986-.046.385-.074.765-.085 1.139-.012.374-.029.754-.051 1.139l-.068.731c-.023.238-.068.47-.136.697-.182.521-.493.856-.935 1.003-.442.147-.924.062-1.445-.255-.454-.272-.839-.59-1.156-.952-.318-.363-.533-.805-.646-1.326-.114-.499-.182-.986-.204-1.462-.023-.476-.034-.963-.034-1.462 0-.453-.261-.748-.782-.884l-.782-.174-.782-.183c-.522-.125-1.043-.244-1.564-.357-1.36-.363-2.494-1.054-3.4-2.074-.703-.861-.714-1.689-.034-2.482.385-.453.861-.635 1.428-.544zm11.798-5.168c0 .93-.148 1.745-.442 2.448-.295.703-.828 1.292-1.598 1.768-1.27.793-2.505.77-3.706-.068-.703-.521-1.258-1.133-1.666-1.836-.408-.703-.59-1.507-.544-2.414.022-.68.181-1.309.476-1.887.294-.578.668-1.128 1.122-1.649.06-.076.126-.141.196-.196l.11-.076c.113-.068.215-.159.306-.272.544-.567 1.099-.912 1.666-1.037.566-.125 1.093-.085 1.58.119.488.204.924.538 1.31 1.003.385.465.657.98.816 1.547.136.453.232.895.289 1.326.056.43.085.839.085 1.224zm-2.754-2.958c-.703.499-1.196 1.077-1.48 1.734-.283.657-.402 1.383-.356 2.176.022.159.13.283.323.374.192.09.357.113.493.068.317-.113.578-.283.782-.51.204-.227.362-.487.476-.782.204-.521.294-1.031.272-1.53-.023-.499-.193-1.009-.51-1.53zm25.296 6.324c-.023-.453-.097-.89-.221-1.309-.125-.42-.482-.788-1.071-1.105-.272-.113-.46-.283-.561-.51-.102-.227-.187-.453-.255-.68-.114-.317-.034-.606.238-.867.272-.26.634-.391 1.088-.391.544-.023 1.054.023 1.53.136.476.113.929.317 1.36.612.884.59 1.552 1.241 2.006 1.955.453.714.748 1.49.884 2.329.34 2.199.408 4.397.204 6.596-.046.544-.08 1.1-.102 1.666-.02.472-.117.937-.293 1.393l-.115.273c-.227.59-.737.963-1.53 1.122-.34.068-.68.08-1.02.034-.34-.045-.658-.136-.952-.272-.295-.136-.544-.306-.748-.51-.204-.204-.34-.43-.408-.68-.046-.181-.063-.374-.051-.578.011-.204.017-.408.017-.612-.023-.703-.029-1.405-.017-2.108.011-.703.017-1.405.017-2.108v-4.386zm-10.778-1.734l.639-.005c.299-.006.568-.015.806-.029.297-.017.585-.015.863.006l.276.028c1.246.09 2.006.77 2.278 2.04.226 1.065.238 2.165.034 3.298-.159.861-.47 1.519-.935 1.972-.465.453-1.128.703-1.99.748-.52.023-1.042.062-1.563.119-.522.057-1.043.017-1.564-.119-.182-.045-.363-.045-.544 0-.272.068-.386.26-.34.578.068.295.249.533.544.714.476.317.997.487 1.564.51.181.03.362.05.544.06l.272.008c.181 0 .362.01.544.03l.272.038c.43.045.725.232.884.561.158.329.147.686-.034 1.071-.136.25-.3.436-.493.561-.193.125-.403.232-.63.323-.43.181-.878.283-1.342.306-.465.023-.93-.017-1.394-.119-.465-.102-.901-.266-1.31-.493-.407-.227-.759-.51-1.053-.85-.748-.884-1.179-1.938-1.292-3.162-.064-.8.225-1.443.866-1.93l.154-.11c.544-.408 1.167-.646 1.87-.714.453-.045.906-.102 1.36-.17l1.36-.204c.226-.045.442-.108.646-.187.204-.08.362-.21.476-.391.113-.227.17-.465.17-.714-.046-.25-.216-.397-.51-.442h-.935c-.306 0-.618-.011-.935-.034-.612 0-1.224-.034-1.836-.102-.771-.09-1.27-.555-1.496-1.394-.114-.43-.085-.788.085-1.071.17-.283.481-.448.935-.493.521-.09 1.031-.147 1.53-.17l.68-.034c.204-.011.385-.023.544-.034zm20.652 11.465l-.024-.501-.007-.101c-.012-.147.005-.312.05-.493.091-.453.295-.822.613-1.105.317-.283.702-.436 1.156-.459.453-.045.9.045 1.343.272.442.227.753.521.935.884.06.12.11.25.15.385l.054.21c.045.215.102.425.17.629.249.748.612 1.28 1.088 1.598.476.317 1.212.521 2.21.612.257.03.516.05.778.06l.395.008c.396 0 .787.023 1.173.068.974.136 1.462.623 1.462 1.462.022 1.383-.805 2.221-2.482 2.516-1.27.204-2.562.113-3.876-.272-1.7-.521-2.981-1.27-3.842-2.244-.804-.91-1.253-2.086-1.346-3.529zm6.174-4.257c-1.156-.045-2.301-.125-3.434-.238-1.134-.113-2.244-.34-3.332-.68-1.315-.43-2.222-1.19-2.72-2.278-.136-.295-.193-.578-.17-.85.022-.272.113-.504.272-.697.158-.193.374-.334.646-.425.272-.09.589-.125.952-.102.317.045.612.113.884.204 1.133.385 2.278.629 3.434.731 1.156.102 2.334.142 3.536.119.929 0 1.847.006 2.754.017.725.01 1.45-.036 2.176-.136l.544-.085c.77-.136 1.4-.006 1.887.391.487.397.753.958.799 1.683.045.635-.261 1.133-.918 1.496-.408.204-.828.368-1.258.493-.431.125-.873.221-1.326.289-.794.113-1.581.181-2.363.204-.782.023-1.57-.023-2.363-.136zM46.062 4.692c.022-.068.028-.187.017-.357-.012-.17.005-.346.05-.527.069-.521.261-.94.579-1.258.317-.317.668-.487 1.054-.51.43-.045.838.108 1.224.459.385.351.668.72.85 1.105.09.227.158.453.204.68l.136.68c.249.839.685 1.428 1.309 1.768.623.34 1.41.567 2.363.68.241.03.483.05.725.06l.363.008c.272 0 .544.02.816.057l.272.045c.476.068.878.232 1.207.493.328.26.493.618.493 1.071.022.793-.199 1.377-.663 1.751-.465.374-1.117.652-1.955.833-.612.136-1.264.181-1.955.136-.692-.045-1.332-.17-1.921-.374-1.61-.59-2.862-1.428-3.757-2.516-.896-1.088-1.366-2.516-1.411-4.284zM82.17 15.81c-.023.997-.187 1.876-.493 2.635-.306.76-.879 1.4-1.717 1.921-.68.408-1.366.612-2.057.612-.692 0-1.343-.227-1.955-.68-.771-.567-1.377-1.23-1.82-1.989-.441-.76-.64-1.638-.594-2.635.045-.725.226-1.405.544-2.04.317-.635.714-1.224 1.19-1.768.075-.076.15-.146.226-.212l.114-.094c.113-.09.226-.193.34-.306.566-.612 1.156-.98 1.768-1.105.612-.125 1.19-.074 1.734.153.544.227 1.02.59 1.428 1.088.35.427.616.896.799 1.407l.085.259c.158.476.26.946.306 1.411.045.465.079.912.102 1.343zm-2.992-3.196c-.771.521-1.31 1.139-1.615 1.853-.306.714-.425 1.502-.357 2.363.022.159.136.289.34.391.204.102.385.13.544.085.34-.136.617-.323.833-.561.215-.238.39-.516.527-.833.226-.567.323-1.116.289-1.649-.034-.533-.221-1.082-.561-1.649zm15.776 2.516c.045.612.05 1.224.017 1.836-.034.612-.074 1.224-.12 1.836-.067.884-.294 1.734-.68 2.55-.249.544-.64.878-1.172 1.003-.533.125-1.037.017-1.513-.323-.499-.363-.884-.788-1.156-1.275-.272-.487-.397-1.071-.374-1.751l.037-.438.014-.208c.011-.204.017-.397.017-.578-.023-.34-.091-.578-.204-.714-.114-.136-.318-.193-.612-.17l-.302.026c-.088.005-.163.008-.225.008-.125 0-.244-.011-.357-.034l-.175-.038-.182-.047c-.125-.034-.3-.074-.527-.119-.386-.113-.726-.272-1.02-.476-.295-.204-.544-.499-.748-.884-.318-.567-.363-1.105-.136-1.615.226-.51.646-.788 1.258-.833.22-.017.416-.028.586-.032l.162-.002c.136 0 .267-.003.393-.008l.185-.009c.12-.008.246-.013.377-.015l.2-.002c.205 0 .454-.011.749-.034.317-.023.538-.119.663-.289.124-.17.21-.448.255-.833.022-.499 0-.98-.068-1.445-.057-.387-.185-.763-.383-1.126l-.127-.217c-.227-.363-.363-.731-.408-1.105-.046-.374.09-.754.408-1.139.272-.34.572-.516.9-.527.33-.011.766.142 1.31.459 1.02.567 1.745 1.315 2.176 2.244.43.93.691 1.972.782 3.128.045.521.056 1.054.034 1.598-.023.544-.034 1.077-.034 1.598zm14.892 4.08l-.003-.082-.014-.224c-.012-.159.005-.329.05-.51.091-.453.301-.822.63-1.105.328-.283.708-.436 1.139-.459.453-.023.9.074 1.343.289.442.215.753.504.935.867.09.204.158.408.204.612.045.204.102.408.17.612.249.748.612 1.28 1.088 1.598.476.317 1.212.521 2.21.612.257.03.516.05.778.06l.395.008c.396 0 .787.023 1.173.068.974.159 1.462.657 1.462 1.496.022.703-.17 1.252-.578 1.649-.408.397-1.054.674-1.938.833-1.27.227-2.539.136-3.808-.272-1.723-.521-3.015-1.27-3.876-2.244-.862-.975-1.315-2.244-1.36-3.808zm-13.838-7.344c.045-.499.147-1.02.306-1.564.158-.544.464-1.043.918-1.496.385-.363.793-.646 1.224-.85.43-.204.918-.283 1.462-.238.453.023.9.034 1.343.034.442 0 .878.068 1.309.204.77.227 1.144.612 1.122 1.156 0 .59-.34.986-1.02 1.19-.272.09-.55.164-.833.221-.284.057-.573.108-.867.153-.076.015-.157.023-.242.023l-.132-.006c-.136-.011-.272-.006-.408.017-.34.068-.618.193-.833.374-.216.181-.346.408-.391.68-.046.272.011.533.17.782.158.25.396.43.714.544.113.068.232.113.357.136l.39.068c.182.023.363.034.545.034.181 0 .362.023.544.068.861.181 1.292.691 1.292 1.53 0 .136-.012.266-.034.391l-.068.391c-.091.567-.431.907-1.02 1.02-1.156.227-2.222.057-3.196-.51-.794-.476-1.428-1.054-1.904-1.734-.476-.68-.726-1.553-.748-2.618zm7.038 0c.045-.499.147-1.02.306-1.564.158-.544.476-1.043.952-1.496.362-.363.759-.646 1.19-.85.43-.204.918-.283 1.462-.238.453.023.9.034 1.343.034.442 0 .878.068 1.309.204.748.227 1.122.612 1.122 1.156 0 .59-.34.986-1.02 1.19-.272.09-.55.164-.833.221-.284.057-.573.108-.867.153-.091.015-.18.023-.265.023l-.126-.006c-.125-.011-.255-.006-.391.017-.34.068-.618.193-.833.374-.216.181-.346.408-.391.68-.046.272.011.533.17.782.158.25.396.43.714.544.113.068.232.113.357.136l.39.068c.182.023.363.034.545.034.181 0 .362.023.544.068.861.181 1.292.691 1.292 1.53 0 .136-.012.266-.034.391l-.068.391c-.114.59-.454.93-1.02 1.02-1.156.227-2.222.057-3.196-.51-.794-.476-1.428-1.054-1.904-1.734-.476-.68-.726-1.553-.748-2.618zm18.836-.068c.045.612.045 1.224 0 1.836l-.136 1.836c-.023.453-.097.895-.221 1.326-.125.43-.278.839-.46 1.224-.249.544-.64.878-1.172 1.003-.533.125-1.026.028-1.48-.289-.498-.385-.889-.822-1.172-1.309-.284-.487-.403-1.071-.357-1.751.022-.204.034-.408.034-.612v-.612c0-.34-.057-.578-.17-.714-.114-.136-.329-.193-.646-.17l-.302.025c-.088.006-.163.009-.225.009-.125 0-.238-.006-.34-.017-.102-.011-.216-.034-.34-.068l-.527-.153c-.386-.09-.731-.238-1.037-.442-.306-.204-.561-.499-.765-.884-.318-.59-.357-1.139-.12-1.649.239-.51.652-.788 1.242-.833.294-.023.544-.034.748-.034h1.173l.327-.008c.122-.006.256-.015.404-.026.34-.045.572-.147.697-.306.124-.159.198-.43.22-.816.046-.499.035-.98-.033-1.445-.068-.465-.238-.924-.51-1.377-.227-.363-.369-.731-.425-1.105-.057-.374.073-.754.39-1.139.295-.34.607-.51.936-.51.328 0 .765.147 1.309.442 1.02.59 1.74 1.349 2.159 2.278.419.93.674 1.972.765 3.128.045.521.062 1.048.05 1.581-.01.533-.016 1.06-.016 1.581z"/>
                  <path fill="#C7C8F3" d="M148.436 9.146c0 .93-.148 1.745-.442 2.448-.295.703-.828 1.292-1.598 1.768-1.27.793-2.505.77-3.706-.068-.703-.521-1.258-1.133-1.666-1.836-.408-.703-.59-1.507-.544-2.414.022-.68.181-1.309.476-1.887.294-.578.668-1.128 1.122-1.649.06-.076.126-.141.196-.196l.11-.076c.113-.068.215-.159.306-.272.544-.567 1.099-.912 1.666-1.037.566-.125 1.093-.085 1.58.119.488.204.924.538 1.31 1.003.385.465.657.98.816 1.547.136.453.232.895.289 1.326.056.43.085.839.085 1.224zm-2.754-2.958c-.703.499-1.196 1.077-1.48 1.734-.283.657-.402 1.383-.356 2.176.022.159.13.283.323.374.192.09.357.113.493.068.317-.113.578-.283.782-.51.204-.227.362-.487.476-.782.204-.521.294-1.031.272-1.53-.023-.499-.193-1.009-.51-1.53zm-1.394 9.384c.612 0 1.167-.017 1.666-.051l2.924-.204c.399-.027.841-.044 1.327-.049l1.223-.002c.272 0 .544.023.816.068.521.09.935.334 1.24.731.307.397.482.89.528 1.479.068.725-.148 1.27-.646 1.632-.204.136-.414.26-.63.374-.215.113-.436.204-.662.272-.59.227-.884.703-.884 1.428l.037.892.014.434c.011.43-.074.873-.255 1.326-.204.567-.539.924-1.003 1.071-.465.147-.913.028-1.343-.357-.25-.227-.465-.482-.646-.765-.145-.227-.247-.486-.305-.778l-.035-.225c-.03-.181-.056-.363-.076-.544l-.026-.272c-.015-.181-.036-.358-.06-.529l-.042-.253c-.068-.476-.159-.782-.272-.918-.098-.117-.295-.192-.592-.225l-.156-.013c-.25-.023-.488-.034-.714-.034h-.714c-.522.023-.873.113-1.054.272-.182.159-.306.51-.374 1.054-.03.212-.05.423-.06.635l-.008.317c0 .317-.023.635-.068.952-.046.385-.114.737-.204 1.054-.182.499-.454.81-.816.935-.363.125-.737.028-1.122-.289-.408-.363-.76-.77-1.054-1.224-.295-.453-.442-1.009-.442-1.666v-.68c0-.227-.012-.453-.034-.68-.023-.363-.216-.6-.578-.714-.318-.09-.63-.176-.935-.255-.306-.08-.618-.153-.935-.221-.363-.09-.697-.232-1.003-.425-.306-.193-.595-.425-.867-.697-.295-.272-.482-.612-.561-1.02-.08-.408-.04-.805.119-1.19.272-.725.782-1.088 1.53-1.088 1.015 0 2.045.047 3.09.141l.786.08c1.314.147 2.606.221 3.876.221zm26.316-3.23c0-.453-.068-.89-.204-1.309-.136-.42-.499-.776-1.088-1.071-.25-.136-.431-.312-.544-.527-.114-.215-.204-.436-.272-.663-.114-.317-.034-.606.238-.867.238-.228.545-.356.922-.385l.166-.006c1.088-.068 2.062.181 2.924.748.861.59 1.518 1.241 1.972 1.955.453.714.748 1.49.884 2.329.385 2.176.453 4.363.204 6.562-.046.567-.08 1.133-.102 1.7-.023.567-.148 1.122-.374 1.666-.272.59-.794.963-1.564 1.122-.34.068-.68.074-1.02.017-.34-.057-.652-.147-.935-.272-.284-.125-.533-.289-.748-.493-.216-.204-.357-.43-.425-.68-.046-.204-.063-.402-.051-.595.011-.193.017-.391.017-.595v-8.636zm-15.538 1.7v-.323c0-.17.011-.357.034-.561.09-.499.289-.907.595-1.224.306-.317.663-.487 1.07-.51.409-.045.811.102 1.208.442.396.34.685.714.867 1.122.09.227.153.453.187.68.034.227.085.453.153.68.249.839.685 1.428 1.309 1.768.623.34 1.4.567 2.329.68.257.03.508.05.755.06l.367.008c.362 0 .725.023 1.088.068.453.09.85.266 1.19.527.34.26.51.618.51 1.071.022.793-.204 1.377-.68 1.751-.476.374-1.122.652-1.938.833-.612.136-1.264.181-1.955.136-.692-.045-1.332-.181-1.921-.408-1.61-.59-2.862-1.428-3.757-2.516-.896-1.088-1.366-2.516-1.411-4.284zm33.28 13.43c-1.241.045-2.323-.136-3.241-.544-.918-.408-1.729-.997-2.431-1.768-.726-.816-1.145-1.706-1.258-2.669-.114-.963-.034-1.955.238-2.975.181-.612.544-.963 1.088-1.054.544-.09 1.042.09 1.496.544.34.34.589.725.748 1.156.158.43.272.873.34 1.326.181.952.736 1.496 1.666 1.632l1.496.204c.498.068.997.147 1.496.238.272.068.51.193.714.374.204.181.351.391.442.629.09.238.124.493.102.765-.023.272-.114.533-.272.782-.25.363-.533.663-.85.901-.318.238-.714.368-1.19.391l-.295.038-.288.03zm-5.808-14.246c.116-.078.191-.247.224-.508l.014-.138c.022-.34.124-.782.306-1.326.294-.907.759-1.36 1.394-1.36.816 0 1.371.442 1.666 1.326.056.151.109.373.158.666l.08.54.055.418.013.11c0 .272.232.448.697.527.406.07.947.1 1.623.091l.298-.006c.255 0 .503-.02.746-.057l.24-.045c.317-.068.646-.113.986-.136l.612-.068c.204-.023.408-.034.612-.034.453-.045.85.017 1.19.187.34.17.634.414.884.731.181.227.306.487.374.782.068.295.079.578.034.85-.046.272-.153.527-.323.765s-.391.425-.663.561c-.204.113-.42.193-.646.238l-.68.136c-1.383.25-2.771.391-4.165.425-1.394.034-2.794-.017-4.2-.153-.52-.045-1.065-.13-1.631-.255-.567-.125-1.128-.272-1.683-.442-.556-.17-1.088-.374-1.598-.612s-.97-.504-1.377-.799c-.295-.227-.505-.595-.63-1.105-.124-.51-.164-.924-.118-1.241.045-.453.232-.788.56-1.003.33-.215.743-.266 1.242-.153.204.045.396.108.578.187.181.08.362.164.544.255.226.09.442.181.646.272.204.09.419.17.646.238.249.068.498.13.748.187.249.057.43.04.544-.051zm9.35-3.876l-.136.969c-.046.329-.125.652-.238.969-.136.317-.312.567-.527.748-.216.181-.442.317-.68.408-.238.09-.476.153-.714.187s-.46.051-.663.051c-.114 0-.261-.034-.442-.102-.182-.068-.352-.17-.51-.306-.159-.136-.295-.312-.408-.527-.114-.215-.159-.459-.136-.731l.002-.169.015-.375c.011-.25-.006-.476-.051-.68l-.051-.093-.085-.145c-.055-.09-.153-.152-.294-.185l-.446-.076c-.182-.03-.39-.062-.62-.096l-.364-.047c-.33-.038-.73-.074-1.2-.106l-.306-.008c-.114-.006-.238-.015-.374-.026-.272-.023-.55-.051-.833-.085l-.544-.068-.255-.034c-.25-.034-.454-.074-.612-.119-.25-.068-.505-.153-.765-.255-.261-.102-.46-.198-.595-.289-.386-.272-.527-.64-.425-1.105.102-.465.368-.822.799-1.071.136-.09.39-.147.765-.17.374-.023.799-.028 1.275-.017.317.008.644.023.982.045l2.487.2c.16.013.308.027.446.04l.62.063c.075.006.127.009.157.009.181-.023.323-.142.425-.357.102-.215.13-.448.085-.697-.046-.181-.125-.323-.238-.425-.114-.102-.397-.21-.85-.323l-.697-.102-.627-.098-.325-.055c-.329-.057-.646-.113-.952-.17l-.327-.065c-.143-.032-.255-.06-.336-.088-.318-.113-.675-.227-1.071-.34-.397-.113-.686-.283-.867-.51-.182-.25-.261-.538-.238-.867.022-.329.119-.635.289-.918.17-.283.396-.533.68-.748.283-.215.595-.323.935-.323.725-.023 1.462-.028 2.21-.017s1.45.13 2.108.357c1.292.453 2.3 1.094 3.026 1.921.725.827 1.19 1.819 1.394 2.975.136.703.21 1.371.22 2.006.012.635-.028 1.315-.118 2.04z"/>
                  <path fill="#282828" d="M208.82 16.456c.23.027.493.052.785.075l.626.044c.555.034 1.127.096 1.717.187.453.068.878.204 1.275.408.396.204.72.533.969.986.113.204.21.408.289.612.079.204.13.43.153.68.068 1.02-.148 2.029-.646 3.026-.363.68-.918 1.1-1.666 1.258-.862.181-1.734.317-2.618.408-.737.076-1.474.08-2.21.014l-.956-.1-.268-.033c-.272-.034-.533-.006-.782.085-.03.015-.058.038-.083.068l-.036.051c-.034.057-.074.108-.12.153-.09.113-.056.215.103.306.385.295.782.459 1.19.493.408.034.827.051 1.258.051l.845-.03.838-.021c.555-.011 1.105-.028 1.649-.051.362-.045.646.023.85.204.204.181.374.42.51.714.113.295.124.55.034.765-.091.215-.227.436-.408.663-.318.385-.692.646-1.122.782-1.27.363-2.5.493-3.69.391-1.19-.102-2.351-.527-3.484-1.275-.59-.385-1.026-.856-1.31-1.411-.283-.555-.368-1.207-.254-1.955.068-.499.294-.873.68-1.122.385-.272.782-.504 1.19-.697.408-.193.85-.3 1.326-.323.974-.068 1.949-.102 2.924-.102.317-.023.617-.051.9-.085.284-.034.562-.108.834-.221.249-.09.396-.295.442-.612 0-.295-.159-.465-.476-.51-.544-.068-1.094-.13-1.65-.187-.555-.057-1.116-.108-1.682-.153-.907-.068-1.678-.374-2.312-.918-.272-.227-.454-.499-.544-.816-.091-.317-.08-.612.034-.884.097-.233.26-.408.49-.525l.122-.053c.453-.227.963-.34 1.53-.34h2.754zm3.57-9.554c0-.453-.068-.89-.204-1.309-.136-.42-.499-.788-1.088-1.105-.25-.136-.431-.312-.544-.527-.114-.215-.204-.436-.272-.663-.114-.317-.034-.6.238-.85s.634-.385 1.088-.408c.544-.023 1.054.023 1.53.136.476.113.94.317 1.394.612.861.59 1.518 1.241 1.972 1.955.453.714.748 1.49.884 2.329l.22 1.377c.057.374.091.725.103 1.054.011.329.011.68 0 1.054l-.021.402c-.02.287-.053.612-.098.975-.046.567-.08 1.133-.102 1.7-.023.567-.148 1.122-.374 1.666-.25.59-.771.963-1.564 1.122-.34.068-.68.074-1.02.017-.34-.057-.658-.147-.952-.272-.295-.125-.544-.289-.748-.493-.204-.204-.34-.43-.408-.68-.046-.204-.063-.402-.051-.595.011-.193.017-.391.017-.595V6.902zm-8.602 5.814c0 .907-.148 1.717-.442 2.431-.295.714-.816 1.298-1.564 1.751-.635.385-1.27.578-1.904.578-.635 0-1.247-.215-1.836-.646-.703-.521-1.258-1.133-1.666-1.836-.408-.703-.59-1.507-.544-2.414.045-.68.21-1.303.493-1.87.283-.567.651-1.11 1.105-1.632.113-.113.22-.21.323-.289.102-.08.198-.176.289-.289.544-.567 1.099-.907 1.666-1.02.566-.113 1.099-.068 1.598.136.498.204.935.538 1.309 1.003.374.465.651.98.833 1.547.113.43.198.867.255 1.309.056.442.085.856.085 1.241zm-2.754-2.958c-.703.499-1.196 1.071-1.48 1.717-.283.646-.39 1.377-.322 2.193 0 .136.096.255.289.357.192.102.357.119.493.051.577-.206.976-.58 1.197-1.124l.06-.168c.431-1.043.352-2.051-.237-3.026zm20.468-1.87c.657.023 1.218.09 1.683.204.464.113.867.3 1.207.561.34.26.634.612.884 1.054.249.442.487.98.714 1.615.181.521.283 1.031.306 1.53.022.499-.068 1.009-.272 1.53-.295.793-.624 1.541-.986 2.244-.363.703-.873 1.315-1.53 1.836-.272.204-.578.34-.918.408-.34.068-.686.074-1.037.017-.352-.057-.68-.181-.986-.374-.306-.193-.561-.436-.765-.731-.136-.204-.17-.465-.102-.782.09-.272.198-.521.323-.748.093-.17.209-.327.347-.472l.146-.14c.249-.227.47-.47.663-.731.192-.26.38-.55.56-.867.25-.43.409-.884.477-1.36.045-.363.022-.635-.068-.816-.091-.181-.295-.329-.612-.442-.25-.09-.51-.176-.782-.255-.182-.053-.363-.113-.544-.181l-.272-.108c-.136-.045-.272-.113-.408-.204-.136-.09-.261-.193-.374-.306-.318-.25-.454-.584-.408-1.003.045-.42.226-.731.544-.935.385-.25.765-.402 1.139-.459.374-.057.73-.085 1.07-.085zm6.8 0c.657.023 1.218.09 1.683.204.464.113.867.3 1.207.561.34.26.64.612.9 1.054.261.442.505.98.732 1.615.181.521.283 1.031.306 1.53.022.499-.068 1.009-.272 1.53-.295.793-.624 1.541-.986 2.244-.363.703-.873 1.315-1.53 1.836-.272.204-.578.34-.918.408-.34.068-.686.074-1.037.017-.352-.057-.68-.181-.986-.374-.245-.154-.457-.34-.637-.56l-.128-.171c-.182-.204-.216-.465-.102-.782.09-.272.198-.521.323-.748.093-.17.209-.327.347-.472l.146-.14c.249-.227.47-.47.663-.731.192-.26.38-.55.56-.867.25-.43.409-.884.477-1.36.045-.363.022-.635-.068-.816-.091-.181-.295-.329-.612-.442-.272-.09-.539-.176-.8-.255-.26-.08-.526-.176-.798-.289-.159-.045-.306-.113-.442-.204-.091-.06-.177-.126-.257-.196l-.117-.11c-.295-.25-.42-.584-.374-1.003.045-.42.226-.731.544-.935.385-.25.765-.402 1.139-.459.374-.057.72-.085 1.037-.085zm9.724 6.562c-.046-.839-.074-1.672-.085-2.499-.012-.827-.097-1.649-.255-2.465-.114-.521-.278-.975-.493-1.36-.189-.337-.494-.648-.917-.933l-.188-.121c-.386-.227-.635-.487-.748-.782-.114-.295-.114-.567 0-.816.181-.34.493-.595.935-.765.442-.17.89-.221 1.343-.153 2.13.34 3.57 1.36 4.318 3.06.136.317.255.646.357.986.102.34.21.68.323 1.02.136.408.277.657.425.748.147.09.481.125 1.003.102l.377-.045.2-.023c.205-.023.397-.034.579-.034.861.045 1.382.442 1.564 1.19.113.521.045 1.003-.204 1.445-.222.393-.587.656-1.095.79l-.197.043c-.998.204-1.644.55-1.938 1.037-.262.433-.38.978-.356 1.635l.016.252c.045.453.017.895-.085 1.326-.102.43-.187.873-.255 1.326-.023.25-.136.465-.34.646-.204.181-.442.317-.714.408-.272.09-.561.142-.867.153-.306.011-.561-.04-.765-.153-.612-.295-1.1-.64-1.462-1.037-.363-.397-.533-.912-.51-1.547.045-.59.062-1.167.05-1.734-.01-.567-.016-1.133-.016-1.7zM252.102 0c1.405.181 2.64.567 3.706 1.156 1.065.59 1.904 1.564 2.516 2.924.816 1.813 1.06 3.508.73 5.083-.328 1.575-1.127 3.077-2.396 4.505-.34.391-.696.772-1.068 1.144l-.377.369c-.51.487-.992.992-1.445 1.513-.318.363-.686.595-1.105.697-.42.102-.879.051-1.377-.153-.499-.204-.907-.493-1.224-.867-.318-.374-.539-.776-.663-1.207-.125-.43-.13-.884-.017-1.36.113-.476.34-.918.68-1.326.43-.499.855-.98 1.275-1.445l1.275-1.411c.317-.34.521-.708.612-1.105.09-.397.158-.822.204-1.275.022-.408-.012-.788-.102-1.139-.091-.351-.255-.646-.493-.884s-.544-.397-.918-.476c-.32-.068-.687-.057-1.1.033l-.21.052c-.838.227-1.456.272-1.852.136-.397-.136-.652-.43-.765-.884-.114-.363-.148-.737-.102-1.122.045-.385.141-.748.289-1.088.147-.34.345-.64.595-.901.249-.26.532-.436.85-.527.408-.136.827-.227 1.258-.272.43-.045.838-.102 1.224-.17zm2.049 22.75l-.01.234c0 .544-.096 1.014-.288 1.411-.193.397-.527.697-1.003.901-.431.204-.845.244-1.241.119-.397-.125-.765-.323-1.105-.595-.227-.181-.442-.368-.646-.561-.204-.193-.386-.397-.544-.612-.159-.215-.272-.459-.34-.731-.068-.272-.08-.59-.034-.952.068-.408.21-.776.425-1.105.215-.329.487-.59.816-.782.328-.193.685-.289 1.07-.289.386 0 .771.125 1.157.374.634.385 1.093.793 1.377 1.224.248.377.37.832.366 1.365z"/>
              </g>
          </svg>
        
          <UnicornTextRegular style={{ fontSize: '12px', color: '#646464', lineHeight: '18px', textAlign: 'center', marginBottom: '38px', width: '239px', height: '36px' }}>
            우리 제품/서비스의 사용자 경험 유형을 검사하고 우리가 어떤 유니콘인지 알아보세요.
          </UnicornTextRegular>

          <UnicornButton onClick={onStart}>
            <ButtonDeco className="deco-1" xmlns="http://www.w3.org/2000/svg" width="36" height="51" viewBox="0 0 36 51">
                <path fill="#FDCFF3" fill-rule="evenodd" d="M40 446L44.722 497 76 487.386z" transform="translate(-40 -446)"/>
            </ButtonDeco>
            검사 시작하기
            <ButtonDeco className="deco-2" xmlns="http://www.w3.org/2000/svg" width="33" height="42" viewBox="0 0 33 42" style={{ }}>
                <g fill="none" fill-rule="evenodd">
                    <path fill="#B9EAF3" d="M19.263 0L0 11.122 32.488 31.625z"/>
                    <path fill="#F8FDD5" d="M21.01 12.283L0 25.283 10.505 41.283z"/>
                </g>
            </ButtonDeco>
          </UnicornButton>     
          <div className="info-scroll" style={{ display: 'inline-block', marginBottom: '13px' }}>
            <InfoText>what is </InfoText>
            <InfoText className="bold">whonicorn? </InfoText>
            <InfoText className="light">scroll down </InfoText>
            <DownArrow src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div>
          <img src={imgIndex} alt="img-index" width='100%' height='100%' style={{ marginBottom: '49px' }}/>
        </div>
      
        <div style={{ marginLeft: '33px' }}>
          <UnicornTextBold style={{ fontSize: '20px', color: '#82a0d7', marginBottom: '23px' }}>후니콘 제작자의 여러마디..</UnicornTextBold>
          <UnicornTextBold style={{ fontSize: '14px', color: '#7986cb', marginBottom: '3px' }}>UX(User Experience, 사용자 경험)</UnicornTextBold>
          <UnicornTextRegular style={{ width: '294px', height: '437px', fontSize: '14px', lineHeight: '23px', marginBottom: '21px' }}>
            '경험'이라는 말은 참 어렵습니다.<br />
            사람이 한명 한명 모두 다른데,<br />
            어떻게 모두에게 '좋은 경험'을 제공할 수 있을까요?<br />
            대부분 기업의 고민일거예요.<br />
            우리는 이런 어렵고도 매력적인 UX를<br /> 
            깊이 연구하기 위해 모였습니다.<br />
            UX는 제품/서비스를 발견하고,<br /> 
            이용하는 모든 과정에서 느낀 것, 본 것,<br /> 
            행동한 것을 종합한 결과죠.<br /><br />

            "우리가 이 결과를 분류할 수 있지 않을까?"<br />
            라는 질문에서 Whonicorn은 시작되었습니다. <br /><br />

            유니콘은 사용자가 제품/서비스를<br /> 
            인식하는 유형(즐거움/유용함)과 의사결정의 경험이 주로 누구에게 있는지의 기준으로 설정됩니다.<br /> 
            그래서 후니콘중에서 더 좋은 유니콘,<br /> 
            더 나쁜 유니콘은 없습니다.<br /> 
            어떤 유니콘이 되고 싶은지가 중요하죠.
          </UnicornTextRegular>
          <UnicornTextBold style={{ fontSize: '15px', color: '#7986cb', marginBottom: '77px' }}>
            당신의 비즈니스에는<br />
            어떤 유니콘이 가장 잘 어울릴까요?
          </UnicornTextBold>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#efefef', width: '100%', height: '482px' }}>
          <img src={dbdLogo} alt="dbd-logo" width='148px' height='50px' style={{ marginTop: '42px', marginBottom: '10px' }}/>
          <UnicornTextRegular style={{ fontSize: '11px', color: '#4a4a4a', lineHeight: '18px', textAlign: 'center', marginBottom: '15px' }}>
            우리는 데이터를 기반으로 UX를 연구하는 디비디랩입니다.<br />
            디비디랩은 기업이 최적의 UX와 Usability를 찾을 수 있도록<br />
            사용성 테스트 플랫폼을 운영하고, UX Research를 수행합니다.
          </UnicornTextRegular>
          <UnicornTextBold style={{ fontSize: '14px', color: '#5e5e5e', lineHeight: '22px', textAlign: 'center', marginBottom: '54px' }}>
            사용자와 관련하여 고민이 생겼을 땐, <br />
            디비디랩을 기억해주세요 :)
          </UnicornTextBold>
          <UnicornLink href="dbdlab.io">디비디랩 홈페이지 바로가기</UnicornLink>
          <UnicornLink href="http://pf.kakao.com/_RxmxoWT">디비디랩이 운영하는 리얼답과 소통하기</UnicornLink>
          <UnicornTextRegular style={{ fontSize: '10px', color: '#7986cb', marginTop: '30px', marginBottom: '31px' }}>Copyright © 2019 dbdLab Corp.</UnicornTextRegular>

        </div>
      </div>
  )
}

export default withRouter(UnicornHome)
