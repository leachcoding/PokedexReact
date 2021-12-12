import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import BackpackItems from './Items/Items.js';
import BackpackBerries from './Berries/Berries.js';

function Backpack() {
  return (
    <>
      <div>
        <div className='itembackpack'>
        Items: <BackpackItems />
        </div>
        <div className='berrybackpack'>
        Berries: <BackpackBerries />
        </div>
        <div className='machinebackpack'>
        Machines: {/*<BackpackMachines />*/}
        </div>
      </div>
    </>
  )
}

export default withRouter(Backpack);
