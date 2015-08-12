import React from 'react';
import _ from 'lodash';

const Video = React.createClass({
  renderSources(variants) {
    const bestMp4 =
      _.chain(variants)
        .filter({content_type: 'video\/mp4'})
        .max((variant) => variant.bitrate)
        .value();

    const bestWebm =
      _.chain(variants)
        .filter({content_type: 'video\/webm'})
        .max((variant) => variant.bitrate)
        .value();

    return [
      <source src={bestMp4.url} type="video/mp4" key="video/mp4" />,
      <source src={bestWebm.url} type="video/web" key="video/web" />
    ];
  },

  render() {
    const media = this.props.media;

    return (
      <video controls>
        {this.renderSources(media.video_info.variants)}
      </video>
    );
  }
});

export default Video;
