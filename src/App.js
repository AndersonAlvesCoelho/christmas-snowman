import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import './global.css';

function App() {


  return (
    <snowman>
      <div class="snow-man">
        <div class="head"></div>
        <div class="hat"></div>
        <div class="scarf"></div>
        <div class="buttons"></div>
        <div class="hands">
          <div class="right-hand"></div>
          <div class="left-hand"></div>
        </div>
        <div class="shadow"></div>
      </div>



      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
      </div>
    </snowman>
  );
}

export default App;
