import React,{useState} from 'react'
import { Tabs, Radio, Space } from 'antd';

function HomeTabs() {
    const tabPosition = 'left';
    const { TabPane } = Tabs;
  return (
    <div className="ml-16 mt-10">

        <Tabs tabPosition={tabPosition}>
          <TabPane tab={<img src='https://picsum.photos/200' className='rounded-full w-10'></img>} key="1">
            Content of Tab 123
          </TabPane>
          <TabPane tab={<img src='https://picsum.photos/200' className='rounded-full w-10'></img>} key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab={<img src='https://picsum.photos/200' className='rounded-full w-10'></img>} key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
  )
}

export default HomeTabs