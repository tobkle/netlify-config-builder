import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './styles.scss';

let cx = classNames.bind(styles);

export default class {{pascalCase name}} extends React.Component {
   static propTypes = {

   }
   constructor(props) {
      super(props);
      this.state = {
         value: null,
      };
   }

   componentDidMount() {
   }

   componentWillUnmount() {
   }

   render() {
      return (
         <div>

         </div>
      );
   }
}
