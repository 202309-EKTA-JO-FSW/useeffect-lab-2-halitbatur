import { useEffect, useRef, useState } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [fetchedUser, setFetchedUser] = useState(null);

  const userInputTimer = useRef(null);

  useEffect(() => {
    if (userInputTimer.current) {
      clearTimeout(userInputTimer.current);
    }

    userInputTimer.current = setTimeout(() => {
      fetch(`https://api.github.com/users/${userInput}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setFetchedUser(data);
        });
    }, 1000);

    return () => {
      clearTimeout(userInputTimer.current);
    };
  }, [userInput]);

  // Whenever a user changes the input
  // Make an api call to fetch the github user using the API we have

  return (
    <div className="card">
      <Form userInput={userInput} setUserInput={setUserInput} />
      {fetchedUser && <UserCard data={fetchedUser} />}
    </div>
  );
}
