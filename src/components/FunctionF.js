import React from 'react';
import { UserContext, ChannelContext } from '../App';

function FunctionF() {
  return (
    <div>

      <UserContext.Consumer>

        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return <div>User context value {user}, channel context value {channel} </div>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }

      </UserContext.Consumer>
      
    </div>
  )
}

export default FunctionF
