import { useState } from 'react';
import Button from './components/Button/Button';
import FormAddFriend from './components/FormAddFriend/FormAddFriend';
import FormSplitBill from './components/FormSplitBill/FormSplittBill';
import FriendList from './components/FriendList/FriendList';
import { IFriend } from './components/FriendList/types';

const initialFriends: IFriend[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const buttonText = showAddFriend ? "Close" : "Add Friend";

  const handleAddFriend = (friendName:string,imageURL:string) => {
    const newFriend:IFriend = {
      id: Math.floor(Math.random() * 1000000),
      name: friendName,
      image: imageURL,
      balance: 0
    }
    initialFriends.push(newFriend);
    setShowAddFriend(false);
   };

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList friendList={initialFriends} />
        {
          showAddFriend && <FormAddFriend onClick={handleAddFriend} />
        }
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>{buttonText}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App