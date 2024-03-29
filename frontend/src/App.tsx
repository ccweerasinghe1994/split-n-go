import { useEffect, useState } from 'react';
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
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);
  const [showSplitBill, setShowSplitBill] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const buttonText = showAddFriend ? "Close" : "Add Friend";

  useEffect(() => {
    // default page size
    fetch(`http://localhost:8080/api/v1/friends?page=${page}&size=${size}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setFriends(data);
      }).catch((error) => {
        console.log(error);
      });

  }, [page, size]);


  const handleAddFriend = (friendName: string, imageURL: string) => {
    const id = Math.floor(Math.random() * 1000000);
    const newFriend: IFriend = {
      id,
      name: friendName,
      image: `${imageURL}?=${id}`,
      balance: 0
    }
    setFriends([...friends, newFriend]);
    setShowAddFriend(false);
  };

  const handleSelectFriend = (friend: IFriend) => {
    if (selectedFriend?.id === friend.id) {
      setSelectedFriend(null);
      setShowSplitBill(false);
      return;
    }
    setSelectedFriend(friend);
    setShowSplitBill(true);
    setShowAddFriend(false)
  };

  const handleBillUpdate = (friendId: number, yourExpense: number) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === friendId) {
        return {
          ...friend,
          balance: yourExpense
        }
      }
      return friend;
    });
    setFriends([...updatedFriends]);
    setShowSplitBill(false);
  }
  const handlePagination = (type: string) => {
    if (type === "previous") {
      if (page === 0) {
        return;
      }
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  }
  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList onPagination={handlePagination} onClick={handleSelectFriend} selectedFriend={selectedFriend} friendList={friends} />
        {
          showAddFriend && <FormAddFriend onClick={handleAddFriend} />
        }
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>{buttonText}</Button>
      </div>
      {showSplitBill && <FormSplitBill handleBillUpdate={handleBillUpdate} friend={selectedFriend} />}
    </div>
  )
}

export default App
