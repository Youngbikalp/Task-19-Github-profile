import React, { useState, useEffect } from "react";
import { IProfileCard } from "../types/interface";
import "../styles/profileCard.css";
import moment from "moment";
const ProfileCard: React.FC<IProfileCard> = ({ profile }) => {
  if (!profile) return null;
  const formatDate = moment(profile.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <div className="profileContainer">
      <div className="image">
        <img src={profile.avatar_url} alt="Avatar" />
      </div>
      <div className="viewProfile">
        <button>
          <a href={profile.html_url}>View Profile</a>
        </button>
      </div>
      <h3>Full Name: {profile.name ? profile.name : "N/A"}</h3>
      <h3>Public Repositories: {profile.public_repos}</h3>
      <h3>Joined Since: {formatDate}</h3>
    </div>
  );
};

export default ProfileCard;
