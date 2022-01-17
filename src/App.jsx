import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeAction, dislikeAction, reportAction, subscribeAction } from './index';
import { Card } from 'react-bootstrap';

const App = () => {
  const comedies = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <center>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="data:image/png;base64,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" />
          <Card.Body>
            <h1>Subscription: {comedies.isSubscribed ? 'true' : 'false'}</h1>
            <img src={comedies.img} /> <br /><br />
            <button disabled={!comedies.isSubscribed} onClick={() => dispatch(likeAction())}>👍 Like</button> &nbsp;
            <button disabled={!comedies.isSubscribed} onClick={() => dispatch(dislikeAction())}>👎 Dislike</button> &nbsp;
            <button disabled={!comedies.isSubscribed} onClick={() => dispatch(reportAction())}>Report</button> <br /><br />
            <button onClick={() => dispatch(subscribeAction())}>{!comedies.isSubscribed ? 'Login' : 'Log out'}</button>

          </Card.Body>
        </Card>

      </center>
    </div>
  );
}

export default App;
