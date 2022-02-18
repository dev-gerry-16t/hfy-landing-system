import React from "react";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import styled from "styled-components";

const RatingUser = styled.div`
  .star {
    position: relative;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.9em;
    margin-right: 0.9em;
    margin-bottom: 1.2em;
    border-right: 0.3em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 0.3em solid transparent;
    font-size: 8px;
    &:before,
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top: 0.6em;
      left: -1em;
      border-right: 1em solid transparent;
      border-bottom: 0.7em solid #fc0;
      border-left: 1em solid transparent;
      transform: rotate(-35deg);
    }
    &:after {
      transform: rotate(35deg);
    }
  }
`;

const CommentUsers = styled.div`
  max-height: 105px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WidgetCardComment = ({ name, lastName, userType, src, text, rating }) => {
  const getStarsRating = (rate) => {
    let component = <></>;
    if (rate >= 1 && rate < 2) {
      component = (
        <>
          <i className="star"></i>
        </>
      );
    }
    if (rate >= 2 && rate < 3) {
      component = (
        <>
          <i className="star"></i>
          <i className="star"></i>
        </>
      );
    }
    if (rate >= 3 && rate < 4) {
      component = (
        <>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
        </>
      );
    }
    if (rate >= 4 && rate < 5) {
      component = (
        <>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
        </>
      );
    }
    if (rate >= 5) {
      component = (
        <>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
        </>
      );
    }

    return component;
  };
  return (
    <div title="usuarios">
      <section title="info-usuario-homify">
        <img src={src} width={80} height={80} alt="usuario" />
        <div>
          <p style={{ margin: 0 }}>
            {name}
            <RatingUser>{getStarsRating(rating)}</RatingUser>
          </p>
          <label title="tipo-de-usuario" lang="es">
            {userType}
          </label>
        </div>
      </section>
      <CommentUsers>
        <label title="comentario" lang="es">
          {text}
        </label>
      </CommentUsers>
    </div>
  );
};

export default WidgetCardComment;
