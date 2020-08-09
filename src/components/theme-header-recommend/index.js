import React, { memo } from 'react'
import { HeaderWrapper } from './style';
import PropTypes from 'prop-types';
 const ThemeHeaderRecommend = memo(function (props) {
  const {title, keywords} = props;
  
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <a className="title" href="/#">{title}</a>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="/#">{item}</a>
                <span className="line">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a href="/#">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRecommend.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
ThemeHeaderRecommend.defaultProps = {
  keywords: []
}

export default ThemeHeaderRecommend;

