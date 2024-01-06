import React, { useEffect, useId, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Function to get the token from localStorage
    const getTokenFromLocalStorage = () => {
      return localStorage.getItem("token");
    };
    const fetchUserData = async (token) => {
      // console.log(token);
      try {
        const response = await fetch("/profile", {
          method: "GET",
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "x-token": `${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.log("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Get the token from localStorage and fetch user data
    const token = getTokenFromLocalStorage();
    // console.log(token);
    if (token) {
      fetchUserData(token);
    }
  }, []);
  // useEffect(() => {
  //   // Fetch user profile data from the server
  //   fetch('/profile', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-auth-token': localStorage.getItem('token'), // Assuming you store the token in localStorage
  //     },
  //   })
  //     // .then((response) => response.json())
  //     .then((data) => setUserData(data.data))
  //     .catch((error) => console.error('Error fetching user data:', error));
  // }, []);



  return (
    <div className='profile-layout'>
        <div className='profile-container'>
            <p>Name:{userData.name} </p>
            <p>Email:{userData.email}</p>
            <div className='profile-page-club-content'>
                <p>Club Name:</p>
                <p>Role: </p>
            </div>
        </div>
    </div>
  )
}

export default Profile