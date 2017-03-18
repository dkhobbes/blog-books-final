if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class AuthorComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
          <ul>
            <li><ReactRouter.Link to={'/About'}>About</ReactRouter.Link></li>
            <li>My books</li>
            <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
          </ul>
        </div>
        <div id="main-nav">
          <div className="logo"></div>
          <ul>
          <li>New releases</li>
          <li><ReactRouter.Link to={'/PopularMain'}>Popular</ReactRouter.Link></li>
          <li>Categories</li>
          <li>Recent Posts</li>
          <li><ReactRouter.Link to={'/Author'}>Author interviews</ReactRouter.Link></li>

          </ul>
          </div>
        </header>
        <div id="archive-title">Author interviews ...</div>

        <div id="spacing"></div>

        <footer className="tenLinks">
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.AuthorComponent = AuthorComponent;
})();
