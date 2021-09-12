import styled from "styled-components";

export const Wrapper = styled.div`
.lds-dual-ring {
  justify-content: center;
    /* display: inline-block; */
    /* width: 80px; */
    height: 80px;
    /* margin: 0 auto; */
    right: 50%;
    display: flex;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;