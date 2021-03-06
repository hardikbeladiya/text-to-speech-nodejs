import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
const DESCRIPTION = 'The Text to Speech service understands text and natural language to generate synthesized audio output complete with appropriate cadence and intonation. It is available in 27 voices (13 neural and 14 standard) across 7 languages. Select voices now offer Expressive Synthesis and Voice Transformation features.';
function Layout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <title>
          Text to Speech Demo
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Text to Speech Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/ibm/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/ibm/css/style.css" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="ibm/js/bundle.js" />
        {/*<script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />*/}
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default Layout;
