import React from "react";
import { IReposArrayProps } from "../types/interface";
import "../styles/repositoryList.css";
const RepositoryList: React.FC<IReposArrayProps> = ({ repos = [] }) => {
  return (
    <div className="repositoryContainer">
      <div className="repoTitle">Repositories</div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
