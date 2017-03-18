if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class RecentPostsComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
          <ul>
            <li><ReactRouter.Link to={'/About'}>About</ReactRouter.Link></li>
            <li><ReactRouter.Link to={'/MyBooks'}>My books</ReactRouter.Link></li>
            <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
          </ul>
        </div>
        <div id="main-nav">
          <div className="logo"></div>
          <ul>
          <li><ReactRouter.Link to={'/NewReleases'}>New Releases</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/PopularMain'}>Popular</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Categories'}>Categories</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/RecentPosts'}>Recent Posts</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Author'}>Author interviews</ReactRouter.Link></li>
          </ul>
          </div>
        </header>
        <div id="archive-title">Recent Posts ...</div>

        <div id="spacing"></div>

        <footer className="tenLinks">
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.RecentPostsComponent = RecentPostsComponent;
})();
