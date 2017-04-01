if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostTwoComponent extends React.Component {
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
          <ReactRouter.Link to={'/'}><div className="logo"></div></ReactRouter.Link>
          <ul>
          <li><ReactRouter.Link to={'/NewReleases'}>New Releases</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/PopularMain'}>Popular</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Categories'}>Categories</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/RecentPosts'}>Recent Posts</ReactRouter.Link></li>
          <li><ReactRouter.Link to={'/Author'}>Author interviews</ReactRouter.Link></li>
          </ul>
          </div>
        </header>

          <div className="other-pics tabs-img-2">
            <div id="home-pic-title">Book Blog</div>
          </div>
          <div className="blog-post">
            <h1>Blog Post Two</h1>
            <h1>Web Form Design</h1>
            <p className="blog-post-end">Forms make or break the most crucial online interactions: checkout, registration, and any task requiring information entry. In Web Form Design, Luke Wroblewski draws on original research, his considerable experience at Yahoo! and eBay, and the perspectives of many of the fields leading designers to show you everything you need to know about designing effective and engaging web forms.</p>
            </div>

          <footer>
            <p>© copyright 2017 BOOK BLOG</p>
          </footer>
        </div>
    }
  }

  BlogTest.BlogPostTwoComponent = BlogPostTwoComponent;
})();
