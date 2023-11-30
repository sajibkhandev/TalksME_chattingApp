import React from 'react'
import Flex from '../components/Flex'
import ChatComponent from '../components/ChatComponent'
import PeopleComponent from '../components/PeopleComponent'
import GroupComponent from '../components/GroupComponent'
import FriendRequestComponent from '../components/FriendRequestComponent'
import FriendsComponent from '../components/FriendsComponent'
import BlockListComponent from '../components/BlockListComponent'

const Home = () => {
  return (
    <div className='h-h95 w-full pr-8 '>
     <Flex className='justify-between'>
     <div>
      <ChatComponent/>
      <PeopleComponent/>
      </div>
      <div>
      <GroupComponent/>
      <FriendRequestComponent/>
      </div>
      <div>
      <FriendsComponent/>
      <BlockListComponent/>
      </div>
     </Flex>
      
    </div>
  )
}

export default Home