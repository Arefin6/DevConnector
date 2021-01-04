import React from 'react';

const Header = () => {
    return (
    <header>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <a class="navbar-brand" href="landing.html">DevConnector</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="profiles.html"> Developers
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="feed.html">
              Post Feed
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="dashboard.html">
              Dashboard
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
</header>
    );
};

export default Header;