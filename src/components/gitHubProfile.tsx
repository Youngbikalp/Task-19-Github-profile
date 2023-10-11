import React, { useState, useEffect } from "react";
import { IProfile, IRepo } from "../types/interface";
import ProfileCard from "./profileCard";
import RepositoryList from "./repositoryList";
import "../styles/gitHubProfile.css";

const GitHubProfile: React.FC = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [input, setInput] = useState<string>("");
  const [repos, setRepos] = useState<IRepo[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  console.log(input);

  const handleData = () => {
    if (input.trim() !== "") {
      fetch(`https://api.github.com/users/${input}`)
        .then((response) => response.json())
        .then((data) => setProfile(data));
    }

    if (input.trim() !== "") {
      fetch(`https://api.github.com/users/${input}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data));
    }
  };
  return (
    <div className="parentBox">
      <div className="header">Git Hub Profile</div>
      <div className="mainContentBox">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            onChange={handleInput}
          />
          <button onClick={handleData}>Search</button>
        </div>
        <div className="profileDataContainer">
          <div className="profileInfo">
            {profile !== null ? <ProfileCard profile={profile} /> : null}
          </div>
          <div className="repoDetails">
            {repos !== null ? <RepositoryList repos={repos} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GitHubProfile;
